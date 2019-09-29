// jest.config.js

module.exports = {
    // Load setup-tests.js before test execution
    preset: 'react-native',
    setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],

};
