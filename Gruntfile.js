// Grunt tasks

module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: { // Task
			dist: { // Target
				options: { // Target options
					style: 'compressed',
					sourcemap: 'none',
					includePaths: require('node-neat').includePaths
				},
				files: { // Dictionary of files
					'./css/main.css': './css/main.scss' // 'destination': 'source'
				}
			}
		},
		bowercopy:{
			options:{
				srcPrefix: 'bower_components'
			},
			scripts:{
				options:{
					destPrefix: 'app/vendor'
				},
				files:{
					'backbone-min.js': 			'backbone/backbone-min.js',
					'underscore-min.js': 		'underscore/underscore-min.js',
					'jquery.min.js': 			'jquery/dist/jquery.min.js',
					'three.min.js': 			'three.js/three.min.js'
				}
			}
		},
		watch:{
			options: {
				livereload: true,
				spawn:false
			},
			html:{
				files: 'index.html',
				tasks: [],
				options: {
					interrupt: true,
				}
			},
			css:{
				files: 'css/**/*.scss',
				tasks: ['css'],
				options: {
					interrupt: true,
				}
			},
			js:{
				files: ['js/**/*.js', '!js/vendor/**/*.js'],
				// tasks: ['jsdev'],
				tasks: [],
				options:{
					interrupt: true,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Run everything and end with a watch task
	grunt.registerTask('default', ['bowercopy', 'sass', 'watch']);

	grunt.registerTask('css', ['sass']);

};
