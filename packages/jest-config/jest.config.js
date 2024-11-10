const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("../typescript-config/base.json");

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/../../packages/(?!@repo/shared-utils)",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
