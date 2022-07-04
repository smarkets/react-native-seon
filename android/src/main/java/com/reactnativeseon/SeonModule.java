package com.reactnativeseon;

import android.content.Context;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.util.UUID;

import io.seon.androidsdk.service.Seon;
import io.seon.androidsdk.service.SeonBuilder;

@ReactModule(name = SeonModule.NAME)
public class SeonModule extends ReactContextBaseJavaModule {
    public static final String NAME = "Seon";
    private static Seon seon;

    public SeonModule(ReactApplicationContext reactContext) {
        super(reactContext);
        // iOS SDK provide singleton with existing value for sessionId
        // try to replicate same behaviour by generating random UUID as suggested in JS api docs
        String uuid = UUID.randomUUID().toString();
        seon = new SeonBuilder()
          .withContext(reactContext.getApplicationContext())
          .withSessionId(uuid)
          .build();
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void setSessionId(String sessionId, Promise promise) {
        seon.setSessionId(sessionId);
        promise.resolve(true);
    }

    @ReactMethod
    public void setLoggingEnabled(boolean enabled, Promise promise) {
        seon.setLoggingEnabled(enabled);
        promise.resolve(true);
    }

    @ReactMethod
    public void getFingerprintBase64(Promise promise) {
      try {
        String fingerprint = seon.getFingerprintBase64();
        promise.resolve(fingerprint);
      } catch (Exception e) {
        promise.reject(e);
      }
    }
}
