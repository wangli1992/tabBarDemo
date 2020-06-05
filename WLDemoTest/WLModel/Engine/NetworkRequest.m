//
//  NetworkRequest.m
//  WLTest
//
//  Created by wangli on 2017/11/26.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "NetworkRequest.h"

@implementation NetworkRequest

-(WLEngine *)requester{
    if(_requester==nil){
        _requester = [[WLEngine alloc]init];
    }
    return _requester;
}
//login
-(void)loginRequestUserName:(NSString *)userName psaaword:(NSString *)password withCtrl:(UIViewController *)ctrl{
    NSMutableDictionary *loginDic = [[NSMutableDictionary alloc]init];
    [loginDic setValue:userName forKey:@"loginname"];
    [loginDic setValue:password.md5String forKey:@"password"];
    //    [loginDic setValue:@(84) forKey:@"schoolId"];
    //
    NSString *urlStr = @"login";
    
    [ctrl showHUD];
    [self.requester postRequestUrlStr:urlStr postDic:loginDic withSucceed:^(id dataString) {
        //NSLog(@"login succeed:%@",dataString);
        [ctrl hideHUD];
        NSInteger result = [dataString[@"result"] integerValue];
        if(result==1){
            NSDictionary * dic = dataString[@"data"];
            User *user = [User mj_objectWithKeyValues:dic];
            self.sendUser(user);
            
            //登录成功 将cookies缓存到本地
            NSData *cookiesData = [NSKeyedArchiver archivedDataWithRootObject: [[NSHTTPCookieStorage sharedHTTPCookieStorage] cookies]];
                 [UD setObject: cookiesData forKey:@"Cookie"];
                  [UD synchronize];
            
            //            NSHTTPCookieStorage *cookieJar = [NSHTTPCookieStorage sharedHTTPCookieStorage];
            //               NSArray *cookieArr = [cookieJar cookies];
            //            [UD setObject:cookieArr.lastObject forKey:@"Cookie"];
            //            [UD synchronize];
            
            
        }else{
            NSLog(@"login failure1 :%@",dataString[@"message"]);
        }
        
        
    } withFailture:^(NSError *error) {
        [ctrl hideHUD];
        NSLog(@"login failure :%@",error);
        //self.sendStr(error);
    }];
    
}

//退出登录
-(void)logoutWithCtrl:(UIViewController *)ctrl withCallBack:(Callback)callback{
    [ctrl showHUD];
    [self.requester getRequestUrlStr:@"logout" withSucceed:^(id dataString) {
        [ctrl hideHUD];
        NSLog(@"data:%@",dataString);
        callback(dataString);
    } withFailture:^(NSError *error) {
        [ctrl hideHUD];
        NSLog(@"logout failure1 :%@",error);
    }];
    
}
-(void)getClassList:(void(^)(id))callback{
    
}
@end
