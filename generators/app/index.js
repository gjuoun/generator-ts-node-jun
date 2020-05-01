"use strict";
const Generator = require("yeoman-generator");
const path = require("path");
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }
  start() {
    this.log("You are using ts-node-jun, the minimized Typescript with Node template");
    this.fs.copyTpl(__dirname, ".");
    this.fs.copyTpl(path.join(__dirname, ".*"), ".");
    this.fs.delete("index.js");
  }
};
