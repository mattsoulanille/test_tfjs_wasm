import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  plugins: [
    nodeResolve({
      browser:true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    sourcemaps(),
  ],
}
