const spawn = require('../spawn');
const path = require('path');
const { prompt } = require('enquirer');
const { YARN, REDUX, REACT_REDUX, MOBX, ADD } = require('../constants');

module.exports = app => {
  app.task('global-store', async () => {
    const questions = prompt({
      type: 'select',
      name: 'globalstore',
      message:
        'Would you like to add any of the following dependencies for Store Management?',
      choices: ['Redux', 'MobX', 'No']
    });
    const { globalstore } = await questions;
    if (globalstore !== 'No' && globalstore === 'Redux') {
      await spawn(YARN, [ADD, REDUX, REACT_REDUX]);
    } else if (globalstore !== 'No' && globalstore === 'MobX') {
      await spawn(YARN, [ADD, MOBX]);
    }
  });

  app.task('default', ['global-store']);
};
