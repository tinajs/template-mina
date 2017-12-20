module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:',
    },
    description: {
      message: 'How would you descripe the new project?',
      default: '',
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true,
    },
  },
  move: {
    'gitignore': '.gitignore',
  },
  gitInit: true,
  installDependencies: true,
  post({ log, isNewFolder, folderName, chalk }) {
    console.log()
    log.success(`Successfully generated into ${chalk.cyan(folderName)}`)
    console.log()
    console.log(chalk.bold('To get started:\n'))
    if (isNewFolder) {
      console.log(`  cd ${folderName}`)
    }
    console.log('  npm start')
    console.log()
  },
}
