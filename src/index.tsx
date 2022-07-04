import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-seon' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Seon = NativeModules.Seon
  ? NativeModules.Seon
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

// for documentation please check to official iOS/Android SDK methods in readme
interface SeonInterface {
  setSessionId(sessionId: string): Promise<boolean>;
  setLoggingEnabled(enabled: boolean): Promise<boolean>;
  getFingerprintBase64(): Promise<string>;
}

export default Seon as SeonInterface;
