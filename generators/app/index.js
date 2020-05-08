"use strict";
const Generator = require("yeoman-generator");
const path = require("path");
const chalk = require("chalk");
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }
  async start() {
    // copy all files to target
    this.fs.copyTpl(__dirname, ".");
    // copy all *.env files to target
    this.fs.copyTpl(path.join(__dirname, ".*"), ".");
    this.fs.delete("index.js");
    await this.npmInstall(["winston", "chalk", "dotenv"]);
    await this.npmInstall(
      [
        "@types/winston",
        "@types/chalk",
        "@types/dotenv",
        "@types/express",
        "typescript",
        "ts-node-dev",
      ],
      { "save-dev": true }
    );
    this.log(
      "You are using ts-node-jun, the minimized Typescript with Node template"
    );
    this.log(chalk.green("npm run dev") + " - run dev server with /src/app.ts");
    this.log(
      chalk.green("npm run build") + " - build project, our dir = /dist"
    );
    this.log(
      chalk.green("npm run buildRun") + " - build and run with /dist/app.js"
    );
    this.log(chalk.green("npm run start") + " - run /dist/app.js");
  }
};
