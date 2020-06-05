//
//  UIView+Tap.m
//  WLDemoTest
//
//  Created by wangli on 2020/6/4.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "UIView+Tap.h"

//#import <AppKit/AppKit.h>
static const void* tagValue = &tagValue;

@interface UIView ()
@property (nonatomic, copy) void(^tapAction)(id);
@end

@implementation UIView (Tap)

 -(void)tap{
    if (self.tapAction) {
        self.tapAction(self);
    }
}
- (void)addTapBlock:(void(^)(id obj))tapAction{
    self.tapAction = tapAction;
    if (![self gestureRecognizers]) {
        self.userInteractionEnabled = YES;
        UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(tap)];
        [self addGestureRecognizer:tap];
    }
}

-(void)setTapAction:(void (^)(id))tapAction {
    objc_setAssociatedObject(self, tagValue, tapAction, OBJC_ASSOCIATION_COPY_NONATOMIC);
}
-(void (^)(id))tapAction {
    return objc_getAssociatedObject(self, tagValue);
}

@end
