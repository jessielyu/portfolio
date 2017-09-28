module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            {
              width: 1600,
            },
            {
              width: 800,
            }
          ]
        },
        files: [
          {
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'images_src/',
            dest: 'images/'
          },
          {
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'images_src/portfolio/photography',
            dest: 'images/portfolio/photography'
          },
          {
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'images_src/portfolio/poster',
            dest: 'images/portfolio/poster'
          }
        ]
      }
    },

    clean: {
      dev: {
        src: ['images'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'responsive_images']);
}
