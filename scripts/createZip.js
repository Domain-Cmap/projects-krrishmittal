import { createWriteStream } from 'fs';
import archiver from 'archiver';
import { join } from 'path';

const output = createWriteStream('project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log('ZIP file created successfully');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add all project files except node_modules, dist, and .bolt
archive.glob('**/*', {
  ignore: ['node_modules/**', 'dist/**', '.bolt/**', 'package-lock.json', 'project.zip']
});

archive.finalize();