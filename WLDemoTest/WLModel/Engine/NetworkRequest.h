//
//  NetworkRequest.h
//  WLTest
//
//  Created by wangli on 2017/11/26.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "WLEngine.h"
#import "User.h"
@interface NetworkRequest : NSObject

@property(nonatomic,copy)void(^sendUser)(User *user);
-(void)loginRequestUserName:(NSString *)userName psaaword:(NSString *)password withCtrl:(UIViewController *)ctrl;
@end
