//
//  NetworkRequest.m
//  WLTest
//
//  Created by wangli on 2017/11/26.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "NetworkRequest.h"

@implementation NetworkRequest


//login
-(void)loginRequestUserName:(NSString *)userName psaaword:(NSString *)password withCtrl:(UIViewController *)ctrl{
    NSMutableDictionary *loginDic = [[NSMutableDictionary alloc]init];
    [loginDic setValue:userName forKey:@"userId"];
    [loginDic setValue:password forKey:@"password"];
    [loginDic setValue:@(84) forKey:@"schoolId"];
    NSString *urlStr = @"http://58.53.128.217:802/api/v1/user/login";
   [ctrl showHUD];
    [WLEngine postRequestUrlStr:urlStr postDic:loginDic withSucceed:^(id dataString) {
        NSLog(@"login succeed:%@",dataString);
        User *user = [[User alloc]init];
        user.avatar = dataString[@"avatar"];
        user.birthday = dataString[@"birthday"];
        user.name = dataString[@"name"];
        user.username = dataString[@"username"];
        user.userId = [dataString[@"id"] intValue];
        user.type = [dataString[@"type"] intValue];
        user.phoneNumber = [NSString stringWithFormat:@"%@",dataString[@"phone"]];
        user.gender = [NSString stringWithFormat:@"%@",dataString[@"gender"]];
        [ctrl hideHUD];
        self.sendUser(user);
        
    } withFailture:^(NSError *error) {
        [ctrl hideHUD];
        NSLog(@"login failure :%@",error);
         //self.sendStr(error);
    }];
    
}
@end
