"use strict";

const spawn = require("child_process").spawn;

const defaults = {
  stdio: "inherit",
  cwd: process.cwd()
};

// simple wrapper around cli commands
module.exports = async (cmd, args, options) => {
  return new Promise((resolve, reject) => {
    const cp = spawn(cmd, args, { ...defaults, ...options });
    cp.on("error", reject);
    cp.on("close", code => {
      if (code > 0) {
        return reject(code);
      }
      resolve(code);
    });
  });
};
