module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            with_overrides: {
                files: {
                    src: [
                        'google.fastbutton.js',
                        'jquery.google.fastbutton.js',
                        'xui.google.fastbutton.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('travis', 'jshint');
};
