import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
};

export default createJestConfig(config);
