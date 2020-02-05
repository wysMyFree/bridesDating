/**
 * Created by Oleksandr on 23.12.2015.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'css/from-sass.css': 'css/scss/style.scss'       // 'destination': 'source'
                }
            }
        },
        cssmin: {

            target:{
                files: {
                    'css/style-min.css': ['css/reset.css', 'css/normalize.css','css/fonts.css','css/main.css','css/media.css','css/from-sass.css']
                }
            }
        },
        watch: {
            styles:{
                files:['css/scss/*.scss','css/scss/modules/*.scss','css/*.css'],
                tasks: ['sass','cssmin'],
                options: {
                    spawn: false,
                    event:'all'

                },
                options: {
                    livereload: true
                }
            },

        }
    });

   /* grunt.loadNpmTasks('grunt-contrib-uglify');//������ javascript
    grunt.loadNpmTasks('grunt-contrib-concat');//obyednuye js files
    grunt.loadNpmTasks('grunt-contrib-watch');//����� �� ������ � �������� ������, ���� ��� � ����������� �����
    grunt.loadNpmTasks('grunt-contrib-jshint');//������� �� ���������� ������� javascript
    grunt.loadNpmTasks('grunt-contrib-cssmin');//����� � ����� css
    grunt.loadNpmTasks('grunt-contrib-imagemin');//������� ����������
    grunt.loadNpmTasks('grunt-autoprefixer');//�������������
    grunt.loadNpmTasks('grunt-csscomb');// ������������ ���*/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');//SASS
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass','cssmin','watch']);

};
