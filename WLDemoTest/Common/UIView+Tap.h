//
//  UIView+Tap.h
//  WLDemoTest
//
//  Created by wangli on 2020/6/4.
//  Copyright © 2020 wangli. All rights reserved.
//

//#import <AppKit/AppKit.h>


#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIView (Tap)

- (void)addTapBlock:(void(^)(id obj))tapAction;
//@property (nonatomic, copy) void(^tapAction)(id);
@end

NS_ASSUME_NONNULL_END
