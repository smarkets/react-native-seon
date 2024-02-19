
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSeonSpec.h"

@interface Seon : NSObject <NativeSeonSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Seon : NSObject <RCTBridgeModule>
#endif

@end
