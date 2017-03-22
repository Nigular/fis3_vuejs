
//对 js、css、png 进行压缩
fis.match('*.js', {
   optimizer: fis.plugin('uglify-js')
});

fis.match('*.{css,less}', {
   useSprite: true,
   optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
   optimizer: fis.plugin('png-compressor')
});

 // .less文件预编译
fis.match('*.less', {
  // -g fis-parser-less (先安装这两个插件)
  // -g fis3-postpackager-loader
  parser: fis.plugin('less'),
  rExt: '.css'
})


// 资源定位，指定静态文件输出目录
fis.match('*.{png,js,css,less}', {
	release: '/static/$0'
});

//对 js、css、png 图片引用 URL 添加 md5 戳
//fis.match('*.{js,css,png}', {
//useHash: true
//});