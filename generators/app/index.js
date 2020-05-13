"use strict";
const Generator = require("yeoman-generator");
const path = require("path");
const chalk = require("chalk");
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }

  writing() {
    // copy all files to target
    this.fs.copyTpl(__dirname, ".");
    // copy all *.env files to target
    this.fs.copyTpl(path.join(__dirname, ".*"), ".");
    this.fs.copyTpl(path.join(__dirname, "./.vscode"), "./.vscode");
    this.fs.delete("index.js");
  }

  install() {
    this.npmInstall(["winston", "chalk", "dotenv"]);
    this.npmInstall(
      [
        "@types/winston",
        "@types/chalk",
        "@types/dotenv",
        "@types/express",
        "typescript",
        "ts-node",
        "ts-node-dev",
      ],
      { "save-dev": true }
    );
  }

  end() {
    this.log(
      "----------------------------------------------------------------------"
    );
    this.log(
      "You are using ts-node-jun, the minimized Typescript with Node template"
    );
    this.log("");
    this.log(chalk.green("npm run dev") + " - run dev server with /src/app.ts");
    this.log(
      chalk.green("npm run build") + " - build project, our dir = /dist"
    );
    this.log(
      chalk.green("npm run buildRun") + " - build and run with /dist/app.js"
    );
    this.log(chalk.green("npm run start") + " - run /dist/app.js");
    this.log("");
    this.log("Available logger methods: ");
    this.log(chalk.white("logger.silly()"));
    this.log(chalk.cyan("logger.debug()"));
    this.log(chalk.magenta("logger.verbose()"));
    this.log(chalk.blue("logger.info()"));
    this.log(chalk.yellow("logger.warn()"));
    this.log(chalk.red("logger.error()"));
    this.log("");
    this.log(chalk.inverse("Enjoy! Leave any comments please go to:"));
    this.log("https://github.com/gjuoun/generator-ts-node-jun/issues");
    this.log(
      "----------------------------------------------------------------------"
    );

  }
};
