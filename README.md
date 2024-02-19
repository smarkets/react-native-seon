# react-native-seon

SeonSDK bridge for react native

Based on the publicly available native SDKs from [SEON Fraud API](https://docs.seon.io/api-reference#fraud-api):

- [Android](https://github.com/seontechnologies/seon-android-sdk-public)
- [iOS](https://github.com/seontechnologies/seon-ios-sdk-public)

## Installation

```sh
yarn add smarkets/react-native-seon#v0.2.1
```

## Usage

 ```js
import RNSeon from "react-native-seon";

// Optional configuration
await RNSeon.setLoggingEnabled(true /* or false */);

// Compute device fingerprint
await RNSeon.setSessionId("CUSTOM_SESSION_ID");
const fingerprint = await RNSeon.getFingerprintBase64();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
