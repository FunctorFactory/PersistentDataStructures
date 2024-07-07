// @type {import('jest').Config}
const config = {
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
  },
  testMatch: ["<rootDir>/test/**/*.ts"],
};

export default config;
