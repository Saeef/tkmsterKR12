// Gulp.js config
// references gulp module,sets devBuild variable to true when running in dev mode and defines
// source and build locations 
var
	// modules
	gulp = require('gulp'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	htmlclean = require('gulp-htmlclean'),
	concat = require('gulp-concat'),
	deporder = require('gulp-deporder'),
	stripdebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	assets = require('postcss-assets'),
	autoprefixer = require('autoprefixer'),
	mqpacker = require('css-mqpacker'),
	cssnano = require('cssnano'),


	//development mode?
	devBuild = (process.env.NODE_ENV !== 'production'),

	// folders
	folders =  {
		src: 'src/',
		build: 'build/'
	}
;


//tasks

//01-image processing
//creates new task named images
//out location for build files
//src folder ensures subfolder are processed
//pipes all files to newer module
//newer files than those in dest are passed, everything else removed
//remaining new pipe through gulp-imagemin and set optlevel to 5
//compressed images are output to gulp dest folder by out

gulp.task('images', function() {
	var out = folders.build + 'images/';
	return 	gulp.src(folders.src + 'images/**/*')
				.pipe(newer(out))
				.pipe(imagemin({ optimizationLevel: 5 }))
				.pipe(gulp.dest(out));

});
//run task > gulp images


//02-html-processing - clean & copies files from the src folder
// minify html to remove unnecessary whitespace and attributes
//reuses gulp-newer
//images must run before processing html(html is going to ref imgs)
// dependant task listed will run before

//only pipe html through gulp-htmlclean if NODE_ENV is set to production

gulp.task('html', ['images'], function() {
	var 
		out = folders.build + 'html/',
		page = gulp.src(folders.src + 'html/**/*')
			.pipe(newer(out));

		//minify production code
		if(!devBuild) {
			page = page.pipe(htmlclean());
		}
		return page.pipe(gulp.dest(out));
});

//gulp html will run both



//03 javascript task - building a basic module bundler
// ensure dependencies are loaded first/and order
// concatenate all scripts files into a single main.js
// remove all console and debugging statements
// minimize code
gulp.task('js', function() {

	var jsbuild = gulp.src(folders.src + 'js/**/*')
		 .pipe(deporder())
		 .pipe(concat('main.js'));

		 if(!devBuild) {
		 	jsbuild = jsbuild
		 		.pipe(stripdebug())
		 		.pipe(uglify());
		 } 			
		 return jsbuild.pipe(gulp.dest(folders.build + 'js/'));

});

//gulp js



//04 css-processing task 
//compiles Sass/.scss to css
//does not need ruby - unlike grunt
//postcss-assets to manage assets and use properties like:
//background: resolve('image.png')
//autoprefixer to automatically add vendor prefixes
//css-mqpacker to pack multiple references to the same css media query
//cssnano to minify css code when ready for production
gulp.task('css', ['images'], function() {
	var postCssOpts = [
		assets({ loadPaths: ['images/']}),
		autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
		mqpacker

	];

	if(!devBuild) {
		postCssOpts.push(cssnano);
	}

	return gulp.src(folders.src + 'scss/main.scss')
		.pipe(sass({
			outputStyle: 'nested',
			imagePath: 'images/',
			precision: 3,
			errLogToConsule: true
	
		}))
		.pipe(postcss(postCssOpts))
		.pipe(gulp.dest(folders.build + 'css/'));
});

//gulp css

//runalltasks
gulp.task('run', ['html','css', 'js']);
//images omitted cause set as dependency for html and css tasks
//gulp run

//watch for changes task
gulp.task('watch', function() {

	//images changes
	gulp.watch(folders.src + 'images/**/*', ['images']);

	//html changes
	gulp.watch(folders.src + 'html/**/*', ['html']);

	//javascript changes
	gulp.watch(folders.src + 'js/**/*', ['js']);

	//css changes
	gulp.watch(folders.src + 'scss/**/*', ['css']);


});//watch

//default task
gulp.task('default', ['run','watch']);
//enter gulp



















