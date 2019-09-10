# A fine React Native Starter Package

At [amillionmonkeys](https://amillionmonkeys.co.uk) we're building lots of apps with React Native. This package is mostly an internal boilerplate for these projects, but I'm happy to share with the wider community. The app offers persistance state management, navigation, http request handling, environment variables and offline detection.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements

- [Node](https://nodejs.org) `6.x` or newer
– [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/) for build and deployment
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation
- [Android Marshmallow](https://www.android.com/versions/marshmallow-6-0/) or newer on your Android device to test properly
See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

### Stack

- [React JS](https://reactjs.org/) 
- [React Native](https://facebook.github.io/react-native/) 
- [Redux](https://redux.js.org) `4.0.0` a predictable state container for Javascript apps
- [Navigation for React Native](https://reactnavigation.org/) a router based on new React Native Navigation API

### Library
- [axios]() for HTTP request handling
- [prop-types]() for prop validation
- [react-native-dotenv]() for importing environment variables from a .env file
- [react-native-offline]() for checking connectivity
- [react-navigation](https://reactnavigation.org/) a router based on new React Native Navigation API for 
- [redux-persist]() to persist and rehydrate a redux store
- [redux-thunk]() allowing action creators that return a function instead of an action
- [sentry-expo]() for bugtracking

### Installing

To get cracking run the following commands: 
```
git clone git@github.com:philyboysmith/react-native-redux-starter.git
cd react-native-redux-starter
yarn install
```

Update app.json then run `expo start` and you're away. To open the app in your browser your `expo start --web`.

## Built With

The app uses the [ducks methodology](https://github.com/erikras/ducks-modular-redux) of bundling reducers, action types and actions. 
 

## Authors

* **Phil Smith** - *Initial work* - [Philyboysmith](https://github.com/Philyboysmith)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

