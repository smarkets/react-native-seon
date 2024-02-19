#import "Seon.h"

@implementation Seon
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(setSessionId:(NSString *)sessionId
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [[SEONFingerprint sharedManager] setSessionId:sessionId];
    resolve(@YES);
}

RCT_EXPORT_METHOD(setLoggingEnabled:(BOOL)enabled
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    [[SEONFingerprint sharedManager] setLoggingEnabled:enabled];
    resolve(@YES);
}

RCT_EXPORT_METHOD(getFingerprintBase64:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    // Compute fingerprint asynchronously
    [[SEONFingerprint sharedManager]
       getFingerprintBase64:^(NSString *seonFingerprint, NSError *error) {
          if (error == nil){
              resolve(seonFingerprint);
          } else{
              reject(@"error", error.localizedDescription, error);
          }
      }];
}

@end
