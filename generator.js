'use strict';

var path = require('path');
var isValid = require('is-valid-app');

module.exports = app => {
  // return if the generator is already registered
  if (!isValid(app, 'generate-react')) return;

  app.use(require('generate-project'));
  app.register('create-react-app', require('./lib/generators/create-react-app'));
  app.register('custom-styles', require('./lib/generators/custom-styles'));

  /**
   * Generate a `index.js` file to the current working directory. Learn how to [customize
   * behavior(#customization) or override built-in templates.
   *
   * ```sh
   * $ gen react:react
   * ```
   * @name react:react
   * @api public
   */

  /**
   * Alias for running the [react](#react) task with the following command:
   *
   * ```sh
   * $ gen react
   * ```
   * @name react
   * @api public
   */

  app.task('default', ['project']);
};

/**
 * Create a task with the given `name` and glob `pattern`
 */

function task(app, name, pattern, dest = '') {
  app.task(name, () => {
    return app
      .src(pattern, { cwd: __dirname })
      .pipe(app.renderFile('*'))
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(path.join(app.cwd, dest)));
  });
}
