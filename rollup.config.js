import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  external: [
    '@tensorflow/tfjs-core',
    '@tensorflow/tfjs-backend-wasm'
  ],
  plugins: [
    sourcemaps(),
  ],
}
