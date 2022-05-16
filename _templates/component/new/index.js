module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'type',
        message: 'Select type of component.',
        choices: ['display', 'entry', 'lands', 'layout'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name of the new component?',
      },
      {
        type: 'confirm',
        name: 'styled',
        message: 'Include a styling component?',
      },
    ];

    return inquirer
      .prompt(questions)
      .then((answers) => {
        const queries = [];

        return inquirer.prompt(queries).then((nextAnswers) => ({ ...answers, ...nextAnswers }));
      });
  },
};
