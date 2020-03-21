const workboxBuild = require('workbox-build');


// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.injectManifest({
    swSrc: 'projects/wirvsvirus-staatlichekommunikation/src/sw.js',
    swDest: 'dist/wirvsvirus-staatlichekommunikation/sw.js',
    globDirectory: 'dist/',
  globPatterns: [
    '**/*.{txt,png,jpg,gif,svg,ico,html,js,json,css,otf,ttf,woff,woff2}'
  ],
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}

buildSW();
