const spawn = require('../spawn');
const path = require('path');
const { prompt } = require('enquirer');
const { YARN, ROUTER, ADD } = require('../constants');

module.exports = app => {
  app.task('react-router', async () => {
    const answers = prompt({
      type: 'select',
      name: 'reactrouter',
      message:
        'Would you like to add any of the following dependencies for Routing?',
      choices: ['React Router', 'No']
    });
    const { reactrouter } = await answers;
    if (reactrouter !== 'No' && reactrouter === 'React Router') {
      await spawn(YARN, [ADD, ROUTER]);
    }
  });

  app.task('default', ['react-router']);
};
