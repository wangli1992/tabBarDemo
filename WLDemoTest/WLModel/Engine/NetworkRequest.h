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

typedef void (^Callback)(id dataString);

@property(nonatomic,copy)void(^sendUser)(User *user);
@property(nonatomic,strong)WLEngine *requester;
-(void)loginRequestUserName:(NSString *)userName psaaword:(NSString *)password withCtrl:(UIViewController *)ctrl;//登录接口
-(void)logoutWithCtrl:(UIViewController *)ctrl withCallBack:(Callback)callback;
@end
