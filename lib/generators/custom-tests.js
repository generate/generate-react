const spawn = require('../spawn');
const path = require('path');
const { prompt } = require('enquirer');
const { YARN, ENZYME, JEST, ADD } = require('../constants');

module.exports = app => {
  app.task('custom-test', async () => {
    const answers = prompt({
      type: 'select',
      name: 'test',
      message:
        'React provides a built-in testing suite. Would you like to add any of the following testing frameworks?',
      choices: ['Enzyme', 'Jest', 'No']
    });
    const { test } = await answers;
    if (test !== 'No' && test === 'Enzyme') {
      await spawn(YARN, [ADD, ENZYME]);
    } else if (test !== 'No' && test === 'Jest') {
      await spawn(YARN, [ADD, JEST]);
    }
  });

  app.task('default', ['custom-test']);
};
