import { version } from '../package.json';

export default () => {
	//动态加载文件的话，rollup会自动将foo.js单独打包，进行code splitting
	import('./foo.js').then(({ default: foo }) => console.log(foo));
	// console.log(foo);
	console.log('version ' + version);
};
