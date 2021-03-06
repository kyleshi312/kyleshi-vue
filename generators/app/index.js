const Generator = require('yeoman-generator')
module.exports  = class extends Generator{
    prompting () {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ])
        .then( answers => {
            this.answers = answers
        })
    }
    writing () {
        const templates = [
            'package.json',
            'src/assets/aa.jpg',
            'src/utils/index.js'
        ]
        templates.forEach( item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}