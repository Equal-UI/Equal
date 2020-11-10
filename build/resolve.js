import nodeResolve from '@rollup/plugin-node-resolve';

export default () => nodeResolve({ extensions: ['.js', '.jsx', '.tsx', '.ts', '.vue'] });