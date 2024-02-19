package com.seon;

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
        seon = new SeonBuilder()
          .withContext(reactContext.getApplicationContext())
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
    public void getFingerprintBase64(final Promise promise) {
        try {
            seon.getFingerprintBase64(fp -> {
                promise.resolve(fp);
            });
        } catch (Exception e) {
            promise.reject(e);
        }
    }
}
