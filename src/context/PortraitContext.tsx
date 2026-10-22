import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ASSETS } from '../data/assets';

interface PortraitContextType {
  portraitUrl: string;
  isCustomPhoto: boolean;
  uploadCustomPhoto: (file: File) => Promise<boolean>;
  resetToDefault: () => void;
  triggerUploadDialog: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  notification: string | null;
  clearNotification: () => void;
}

const PortraitContext = createContext<PortraitContextType | undefined>(undefined);

const DB_NAME = 'FelixPortfolioDB';
const STORE_NAME = 'assets';
const PORTRAIT_KEY = 'custom_portrait';

// IndexedDB helper for storing high-res uncompressed images beyond localStorage 5MB quota
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const saveImageToDB = async (dataUrl: string): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, PORTRAIT_KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // Fallback to localStorage if IndexedDB fails
    try {
      localStorage.setItem(PORTRAIT_KEY, dataUrl);
    } catch (e) {
      console.warn('Storage quota exceeded, photo kept in session state:', e);
    }
  }
};

const loadImageFromDB = async (): Promise<string | null> => {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(PORTRAIT_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return localStorage.getItem(PORTRAIT_KEY);
  }
};

const deleteImageFromDB = async (): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(PORTRAIT_KEY);
  } catch {
    localStorage.removeItem(PORTRAIT_KEY);
  }
};

export const PortraitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portraitUrl, setPortraitUrl] = useState<string>(ASSETS.felixPortrait);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Load stored custom photo on mount
    loadImageFromDB().then((saved) => {
      if (saved) {
        setPortraitUrl(saved);
        setIsCustomPhoto(true);
      }
    });
  }, []);

  const clearNotification = () => setNotification(null);

  const uploadCustomPhoto = async (file: File): Promise<boolean> => {
    if (!file.type.startsWith('image/')) {
      setNotification('Please select a valid image file (PNG, JPG, or WEBP).');
      return false;
    }

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const result = e.target?.result as string;
        if (result) {
          setPortraitUrl(result);
          setIsCustomPhoto(true);
          await saveImageToDB(result);
          setNotification('Your authentic photo was uploaded successfully and is now active across your website!');
          setTimeout(() => setNotification(null), 5000);
          resolve(true);
        } else {
          resolve(false);
        }
      };
      reader.onerror = () => {
        setNotification('Failed to read image file. Please try another image.');
        resolve(false);
      };
      reader.readAsDataURL(file);
    });
  };

  const resetToDefault = async () => {
    await deleteImageFromDB();
    setPortraitUrl(ASSETS.felixPortrait);
    setIsCustomPhoto(false);
    setNotification('Portrait reset to the default studio photo.');
    setTimeout(() => setNotification(null), 4000);
  };

  const triggerUploadDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  return (
    <PortraitContext.Provider
      value={{
        portraitUrl,
        isCustomPhoto,
        uploadCustomPhoto,
        resetToDefault,
        triggerUploadDialog,
        fileInputRef,
        notification,
        clearNotification,
      }}
    >
      {/* Hidden global native file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            uploadCustomPhoto(file);
          }
        }}
        accept="image/png, image/jpeg, image/jpg, image/webp"
        className="hidden"
        aria-label="Upload custom portrait photo"
      />
      {children}
    </PortraitContext.Provider>
  );
};

export const usePortrait = () => {
  const context = useContext(PortraitContext);
  if (!context) {
    throw new Error('usePortrait must be used within a PortraitProvider');
  }
  return context;
};
