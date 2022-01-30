var version = "1.0.0";

var main = () => {
	//动态加载文件的话，rollup会自动将foo.js单独打包，进行code splitting
	import('./foo-00b95320.js').then(({ default: foo }) => console.log(foo));
	// console.log(foo);
	console.log('version ' + version);
};

export { main as default };
