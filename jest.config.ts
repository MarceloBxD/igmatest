// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  moduleNameMapper: {
    "@/libs/prisma": "<rootDir>/path/to/your/libs/prisma",
    // ... outros mapeamentos conforme necessário
  },
};
