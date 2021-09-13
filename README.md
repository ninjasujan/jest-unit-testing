# jest-unit-testing

**Unit testing with jest framework**

### Steps to setup unit test for typescript project

1.  Initiate node typescript ptoject - Keep your all test script under src directory
2.  Install dependecies `npm i jest @types/jest ts-jest typescript -D`
3.  Configure jest - add `jest.config.ts` file

    ````javascript
        module.exports = {
            "roots": [
                "<rootDir>/src"
            ],
            "testMatch": [
                "**/__tests__/**/*.+(ts|tsx|js)",
                "**/?(*.)+(spec|test).+(ts|tsx|js)"
            ],
            "transform": {
                "^.+\\.(ts|tsx)$": "ts-jest"
            }
        }
        ```

    ````

4.  Change npm test script

```
{
  "test": "jest"
}
```

5. To build js artifact use the command `"build": "tsc ./src/**/*.ts --outDir ./dist"`
