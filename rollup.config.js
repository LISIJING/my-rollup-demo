import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
	//多入口打包，多入口引用同一个foo.js文件，只会打包一份
	input: {
		main: 'src/main.js',
		main2: 'src/main2.js'
	},
	output: [
		{
			// file: 'dist/bundle.js',
			dir: 'dist',
			format: 'esm'
		}
		// {
		// 	file: 'dist/bundle.min.js',
		// 	format: 'iife',
		// 	name: 'version',
		// 	plugins: [terser()]
		// }
	],
	plugins: [json()]
};
