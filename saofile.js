const superb = require('superb')

module.exports = {
  prompts () {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project?',
        default: this.outFolder.replace(/^sao-/, ''),
        filter: val => val.toLowerCase(),
      },
      {
        name: 'description',
        message: 'How would you descripe the new project?',
        default: `My ${superb.random()} MINA project`,
      },
      {
        name: 'username',
        message: 'What is your GitHub username?',
        default: this.gitUser.username || this.gitUser.name,
        filter: val => val.toLowerCase(),
        store: true,
      },
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
      },
    },
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  },
}
