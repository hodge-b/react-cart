const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("../typescript-config/base.json");

module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
