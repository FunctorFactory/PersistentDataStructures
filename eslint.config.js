import getConfig from "@functorfactory/eslint-config";

const config = getConfig({
  parserOptions: {
    project: "./tsconfig.test.json",
  },
});

export default config;
