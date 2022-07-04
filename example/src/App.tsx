import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import RNSeon from 'react-native-seon';

export default function App() {
  const [fingerprint, setFingerprint] = useState<string | undefined>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.separator}>
          <Button
            title="setSessionId('CUSTOM_SESSION_ID')"
            onPress={() => RNSeon.setSessionId('CUSTOM_SESSION_ID')}
          />
        </View>
        <View style={styles.separator}>
          <Button
            title="setLoggingEnabled(true)"
            onPress={() => RNSeon.setLoggingEnabled(true)}
          />
        </View>
        <View style={styles.separator}>
          <Button
            title="setLoggingEnabled(false)"
            onPress={() => RNSeon.setLoggingEnabled(false)}
          />
        </View>
        <View style={styles.separator}>
          <Button
            title="getFingerprintBase64()"
            onPress={() => {
              RNSeon.getFingerprintBase64().then((fp) => {
                setFingerprint(fp);
              });
            }}
          />
        </View>
        <View style={styles.separator}>
          <Text selectable>{fingerprint ?? '<fingerprint not generated>'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 10,
  },
});
