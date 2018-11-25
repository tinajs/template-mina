module.exports = {
  prompts () {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project?',
        default: ':folderName:',
      },
      {
        name: 'description',
        message: 'How would you descripe the new project?',
        default: '',
      },
      {
        name: 'username',
        message: 'What is your GitHub username?',
        default: ':gitUser:',
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
