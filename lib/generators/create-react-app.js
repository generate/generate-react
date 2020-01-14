const spawn = require("../spawn");
const path = require("path");
const { prompt } = require("enquirer");
const { NPX, CREATE_REACT_APP } = require("../constants.js");

module.exports = app => {
  app.task("create-react-app", async () => {
    let dest = app.options.name;
    if (!dest) {
      const answers = await prompt({
        type: "text",
        name: "appName",
        message: "What would you like the app name to be?"
      });
      dest = answers.appName;
    }
    await spawn(NPX, [CREATE_REACT_APP, dest]);
  });

  app.task("create-react-app-templates", async () => {
    const dest = path.join(app.cwd, app.options.name);
    const answers = await prompt([
      {
        type: "text",
        name: "description",
        message: "What description would you like to use for your website?"
      },
      {
        type: "text",
        name: "title",
        message: "What title would you like to use for your website?"
      }
    ]);

    return app
      .src("create-react-app/public/*.*", {
        cwd: path.join(__dirname, "../../templates")
      })
      .pipe(app.renderFile("*", answers).on("error", console.error))
      .pipe(app.conflicts(dest))
      .pipe(app.dest(dest));
  });

  app.task("default", ["create-react-app", "create-react-app-templates"]);
};
