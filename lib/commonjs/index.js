"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-seon' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const Seon = _reactNative.NativeModules.Seon ? _reactNative.NativeModules.Seon : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});

// for documentation please check to official iOS/Android SDK methods in readme
var _default = exports.default = Seon;
//# sourceMappingURL=index.js.map