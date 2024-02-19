# React Native Expo Bare Template with Typescript, Jest, Testing Library and Detox
Project creted with Expo template Bare and configured for unit testing and e2e

## Run project

expo project:
```bash
yarn start
```

android:
```bash
yarn android
```

ios:
```bash
yarn ios
```

## Unit Test
```bash
yarn test:final
```

## E2E Test

### first, build test file

android:
```bash
yarn detox:android:build
```

ios:
```bash
yarn detox:ios:build
```

### after, run tests
note: please, adjust name of you device in ./.detoxrc.js:50

android:
```bash
yarn detox:android
```

ios:
```bash
yarn detox:ios
```