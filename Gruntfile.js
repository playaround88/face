module.exports=function(grunt){

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    //文件合并
    concat:{
      options:{
        seperator:';'
      },
      dist:{
        src:['js_common/**/*.js'],
        dest:'public/js/<%=pkg.name%>.js'
      }
    },
    //文件压缩
    uglify:{
      options:{
        banner:''
      },
      build:{
        src:'<%= concat.dist.dest %>',
        dest:'public/js/<%= pkg.name %>.min.js'
      }
    },
    //js校验
    jshint: {
      // define the files to lint
      files: ['gruntfile.js', 'js_common/**/*.js', 'test/**/*.js'],
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
