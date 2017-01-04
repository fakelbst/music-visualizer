import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  external: [ 'whatwg-fetch' ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup']
    })
  ],
  format: 'umd',
  dest: 'dist/bundle.js',
  moduleName: 'MusicVisualizer'
};
