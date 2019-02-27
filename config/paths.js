const resolve = require('path').resolve;

module.exports = {
  /* project root directory */
  root: resolve(__dirname, '../'),
  /* project publicPath */
  publicPath: '/',
  /* compiled build output path (/build) */
  outputPath: resolve(__dirname, '../', 'build'),
  /* path to public folder (./public) */
  publicFolder: resolve(__dirname, 'public'),
  /* entry point to the application index (./src/index.js) */
  entryPath: resolve(__dirname, '../', 'src/view-layer/_root/index.js'),
  /* path to index.html (build/index.html) */
  templatePath: resolve(__dirname, '../', 'public/index.html'),
  /* path to favicon.ico (build/favicon.ico) */
  faviconPath: resolve(__dirname, '../', 'public/favicon.ico'),
  /* path to local styles (/src) */
  localCSS: resolve(__dirname, '../', 'src'),
  /* path to the globals.scss file (src/styles/globals/globals.scss) */
  globalCSS: resolve(__dirname, '../', 'src/view-layer/global-styles/style'),
  /* compiled images build path (build/media) */
  imagesFolder: 'media',
  /* compiled fonts build path (build/assets) */
  fontsFolder: 'assets',
  /* compiled CSS build path (build/css) */
  cssFolder: 'css',
  /* compiled JS build path (build/js) */
  jsFolder: 'js',
};
