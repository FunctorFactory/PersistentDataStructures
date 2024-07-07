import { Config as SwcConfig } from '@swc/types';
import type { Config } from 'jest';

const swcConfig: SwcConfig = {
  jsc: {
    parser: {
      syntax: 'typescript',
    },
    baseUrl: './',
    paths: {
      '@/LinkedList.js': ['src/LinkedList.ts'],
    },
    target: 'esnext',
  },
  module: {
    type: 'es6',
    importInterop: 'node',
  },
};

const config: Config = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': ['@swc/jest', swcConfig as Record<string, unknown>],
  },
  testMatch: ['<rootDir>/test/**/*.ts'],
};

export default config;
