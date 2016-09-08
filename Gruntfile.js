module.exports=function(grunt){

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    //文件合并, 只合并通用js
    concat:{
      options:{
        seperator:';'
      },
      commons:{
        src:['js/*.js'],
        dest:'public/js/commons.js'
      }
    },
    //文件压缩
    uglify:{
      options:{
        banner:''
      },
      commons:{
        src:'<%= concat.commons.dest %>',
        dest:'public/js/commons.min.js'
      },
      pages:{
        files:[{
          expand: true,     // Enable dynamic expansion.
          cwd: 'js/page/',      // Src matches are relative to this path.
          src: ['**/*.js'], // Actual pattern(s) to match.
          dest: 'public/js/page/',   // Destination path prefix.
          ext: '.min.js',   // Dest filepaths will have this extension.
          extDot: 'first'
        }],
      }
    },
    //js校验
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    //qunit测试
    qunit: {
      files: ['test/**/*.html']
    },
    //less编译
    less:{
      compileCore:{
        src:'less/<%= pkg.name %>.less',
        dest:'public/css/<%= pkg.name %>.css'
      },
      compilePage:{
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'less/page/',      // Src matches are relative to this path.
            src: ['**/*.less'], // Actual pattern(s) to match.
            dest: 'public/css/page/',   // Destination path prefix.
            ext: '.css',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          }
        ]
      }
    },
    //自动合成雪碧图
    sprite:{
      all: {
       src: 'public/img/icon/*.png',
       dest: 'public/img/icons.png',
       destCss: 'public/css/sprites.css'
      }
    },
    //css压缩
    cssmin:{
      target:{
        src: '<%= less.compileCore.dest %>',
        dest: 'public/css/<%= pkg.name %>.min.css'
      }
    },
    watch:{
      files:['Gruntfile.js','js_common/**/*.js','less/**/*.less'],
      tasks:['less','concat']
    },
    clean: {
      js: ['<%= concat.dist.dest %>','<%= uglify.build.dest %>'],//"!path/to/dir/*.min.js"
      css:['<%= less.compileCore.dest %>','<%= cssmin.target.dest %>','<%= sprite.all.destCss %>'],
      icon:['<%= sprite.all.dest %>']
    }
  });

  //加载任务
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  //定义逻辑任务
  grunt.registerTask('js',['jshint','concat','uglify','qunit']);
  grunt.registerTask('css',['less','sprite','cssmin']);
  grunt.registerTask('dev',['less','concat']);
  grunt.registerTask('dist',['cssmin','uglify']);

  grunt.registerTask('default',['less','cssmin','concat','uglify']);

};
