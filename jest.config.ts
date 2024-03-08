import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  automock: true,
  clearMocks: true,

  collectCoverage: false,

  coverageProvider: "v8",
  maxWorkers: 2,

  moduleFileExtensions: [
    "tsx",
    "ts",
    "js",
    "jsx"
  ],


  testEnvironment: "jsdom",
  testMatch: [
    "**/?(*.)+(test).[tj]s?(x)"
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        isolatedModules: true,
        tsconfig: "<rootDir>/tsconfig.json"
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default config;
