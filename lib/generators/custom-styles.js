const spawn = require('../spawn');
const path = require('path');
const { prompt } = require('enquirer');
const { YARN, LESS, SCSS, STYLED_COMPONENTS, ADD } = require('../constants');

module.exports = app => {
  app.task('custom-styles', async () => {
    const questions = prompt({
      type: 'select',
      name: 'customstyles',
      message:
        'Would you like to add any of the following dependencies for Store Management?',
      choices: ['Less', 'Scss', 'Styled-Components', 'No']
    });
    const { customstyles } = await questions;
    if (customstyles !== 'No' && customstyles === 'Less') {
      await spawn(YARN, [ADD, LESS]);
    } else if (customstyles !== 'No' && customstyles === 'Scss') {
      await spawn(YARN, [ADD, SCSS]);
    } else if (customstyles !== 'No' && customstyles === 'Styled-Components') {
      await spawn(YARN, [ADD, STYLED_COMPONENTS]);
    }
  });

  app.task('default', ['custom-styles']);
};
