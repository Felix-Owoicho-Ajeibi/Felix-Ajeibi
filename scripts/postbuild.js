import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const distDir = path.join(rootDir, 'dist');
const buildDir = path.join(rootDir, 'build');

try {
  if (fs.existsSync(distDir)) {
    // Copy dist/ to build/ so Vercel finds index.html even if Output Directory is set to "build"
    fs.cpSync(distDir, buildDir, { recursive: true });
    console.log('✓ Successfully synchronized build artifacts to build/ and dist/');
  }
} catch (err) {
  console.warn('Postbuild synchronization notice:', err.message);
}
