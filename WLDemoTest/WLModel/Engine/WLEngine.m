//
//  WLEngine.m
//  WLTest
//
//  Created by wangli on 2017/11/25.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "WLEngine.h"
#import <AFNetworking.h>
//#import "reach"

@implementation WLEngine


//检测网络
-( int)getCurrentNetWork{
    //__block int netWokType;
    
    AFNetworkReachabilityManager *manager = [AFNetworkReachabilityManager sharedManager];
    
    [manager setReachabilityStatusChangeBlock:^(AFNetworkReachabilityStatus status) {
        switch (status) {
            case AFNetworkReachabilityStatusUnknown:
            {
                // 位置网络
                NSLog(@"位置网络");
                self.netWorkType = 10000;
            }
                break;
            case AFNetworkReachabilityStatusNotReachable:
            {
                // 无法联网
                NSLog(@"无法联网");
                self.netWorkType  = 10001;;
            }
                break;
            case AFNetworkReachabilityStatusReachableViaWiFi:
            {
                
                
                self.netWorkType= 10002;
                NSLog(@"当前在WIFI网络下");
                
            }
                break;
            case AFNetworkReachabilityStatusReachableViaWWAN:
            {
                // 手机自带网络
                NSLog(@"当前使用的是2G/3G/4G网络");
                self.netWorkType = 10003;
            }
        }
    }];
    [manager startMonitoring];
    
    return self.netWorkType;
}
//实现单例类请求对象
+(AFHTTPSessionManager *)shareManager{
    static AFHTTPSessionManager *manager;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken,^{
        
          
        
        //NSLog(@"network status :%d", [WLEngine getCurrentNetWork]);
        
        manager = [AFHTTPSessionManager manager];
        manager.requestSerializer = [AFJSONRequestSerializer serializer];
        manager.requestSerializer.timeoutInterval = 20;
        manager.responseSerializer = [AFJSONResponseSerializer serializer];
        
        // manager setvalue
        manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json",@"text/html",@"text/json",@"text/javascript",@"text/plain",@"test/html", nil];
        //NSString *cookie = [UD objectForKey:@"Cookie"];
        NSData *cookiesdata = [UD objectForKey:@"Cookie"];
        if([cookiesdata length]) {
            NSArray *cookies = [NSKeyedUnarchiver unarchiveObjectWithData:cookiesdata];
            NSHTTPCookie *cookie;
            for (cookie in cookies) {
                [[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
            }
        }
        
    });
    return manager;
}
+(AFHTTPSessionManager *)manager{
    AFHTTPSessionManager * manager =[AFHTTPSessionManager manager];
    manager.securityPolicy.allowInvalidCertificates =YES;
    manager.requestSerializer = [AFJSONRequestSerializer serializer];
    manager.responseSerializer  = [AFJSONResponseSerializer serializer];
    [manager.requestSerializer setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
    return manager;
}
-(void)getRequestUrlStr:(NSString *)urlStr withSucceed:(SucceedBlock)succeedBlock withFailture:(FalitureBlock)failBlock{
    //获取网络状态
    [self getCurrentNetWork];
    //字符串处理
    NSString *bundlePath = [[NSBundle mainBundle] pathForResource:@"Info" ofType:@"plist"];
    NSMutableDictionary *infoDict = [NSMutableDictionary dictionaryWithContentsOfFile:bundlePath];
    NSString *baseUrl = [infoDict objectForKey:@"Base_Serve_URL"];
    NSString *URL = [baseUrl stringByAppendingString:urlStr];
    //NSString * string =[URL stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet characterSetWithCharactersInString:urlStr]];
    NSString * string =[URL stringByAddingPercentEscapesUsingEncoding:(NSUTF8StringEncoding)];
    [[WLEngine shareManager] GET:string parameters:nil progress:^(NSProgress * _Nonnull downloadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        if(succeedBlock){
            NSDictionary *dic = [NSDictionary dictionaryWithDictionary:responseObject];
            NSError *error =  nil;
            if(error){
                NSLog(@"get解析失败");
                return ;
            }
            NSLog(@"网络状态：%d",self.netWorkType);
            NSInteger  code = [[dic objectForKey:@"code"] integerValue];
            if(code==0){
                succeedBlock(responseObject);
            }else if(code==-100){
                NSLog(@"未登录");
                NSString *userName = [NSString stringWithFormat:@"t%@",[UD objectForKey:@"username"]];
                NSString *password = [UD objectForKey:@"password"];
                [self doLogin:userName password:password];
            }else{
                
                UIViewController *ctrl = [WLEngine getCurrentVC];
                UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"小跟班" message:@"服务器请求错误" preferredStyle:UIAlertControllerStyleAlert];
                UIAlertAction *action = [UIAlertAction actionWithTitle:@"知道了" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
                    NSLog(@"qu xiao");
                }];
                [alert addAction:action];
                [ctrl presentViewController:alert animated:YES completion:nil];
                
            }
            
        }
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        
        if (error.code  == -1001) {
            NSLog(@"请求超时");
        }
        if(failBlock){
            failBlock(error);
        }
        
    }];
}
-(void)postRequestUrlStr:(NSString *)urlStr postDic:(NSMutableDictionary *)paramDic withSucceed:(SucceedBlock)succeedBlock withFailture:(FalitureBlock)failBlock{
    //获取网络状态
    [self getCurrentNetWork];
    
    NSString *bundlePath = [[NSBundle mainBundle] pathForResource:@"Info" ofType:@"plist"];
    NSMutableDictionary *infoDict = [NSMutableDictionary dictionaryWithContentsOfFile:bundlePath];
    NSString *baseUrl = [infoDict objectForKey:@"Base_Serve_URL"];
    NSString *URL = [baseUrl stringByAppendingString:urlStr];
    
    [[WLEngine shareManager] POST:URL parameters:paramDic progress:^(NSProgress *_Nonnull uploadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task,id _Nullable responseObject) {
        // [SVProgressHUD dismiss];
        NSLog(@"网络状态：%d",self.netWorkType);
        if (succeedBlock) {
            // --- > 字典类型 --- > json数据 --- >解析数据并传值
            NSDictionary *dic = [NSDictionary dictionaryWithDictionary:responseObject];
            NSError *error =  nil;
            if(error){
                NSLog(@"get解析失败");
                return ;
            }
            NSInteger  code = [[dic objectForKey:@"code"] integerValue];
            if(code==0){
                succeedBlock(responseObject);
            }else if(code==-100){
                if([urlStr isEqualToString:@"login"]) return;
                NSLog(@"未登录");
                NSString *userName = [NSString stringWithFormat:@"t%@",[UD objectForKey:@"username"]];
                NSString *password = [UD objectForKey:@"password"];
                [self doLogin:userName password:password];
            }else{
                UIViewController *ctrl = [WLEngine getCurrentVC];
                UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"小跟班" message:@"服务器请求错误" preferredStyle:UIAlertControllerStyleAlert];
                UIAlertAction *action = [UIAlertAction actionWithTitle:@"知道了" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
                    NSLog(@"qu xiao");
                }];
                [alert addAction:action];
                [ctrl presentViewController:alert animated:YES completion:nil];
                
            }
            
        }
        
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError *_Nonnull error) {
        
        //        [SVProgressHUD showErrorWithStatus:@"请求数据失败,请检查网络后重试!"];
        NSLog(@"error:%@",error);
        if (failBlock) {
            failBlock(error);
        }
        UIViewController *viewController = [WLEngine getCurrentVC];
        [viewController hideHUD];
        //2、隐藏加载框
        if(error.code == -1009){
            NSLog(@"当前网络连接失败");
            
        }else if (error.code  == -1001) {
            NSLog(@"请求超时");
            //1、获取当前viewController
            
            [MBProgressHUD hideHUDForView:viewController.view animated:YES];
            //3、弹出提示：请求超时
            //SHOWALERT(@"请求超时,请刷新后再试！", viewController);
        }
        
        
    }];
}
-(void)doLogin:(NSString *)username password:(NSString *)password{
    NSMutableDictionary *loginDic = [[NSMutableDictionary alloc]init];
    [loginDic setValue:username forKey:@"loginname"];
    [loginDic setValue:password forKey:@"password"];
    [self postRequestUrlStr:@"login" postDic:loginDic withSucceed:^(id dataString) {
        NSLog(@"默认登录");
       // NSLog(@"===%@",dataString);
    } withFailture:^(NSError *error) {
        NSLog(@"默认登录失败");
    }];
}
+ (UIViewController *)getCurrentVC {
    
    UIWindow *window = [[UIApplication sharedApplication].windows firstObject];
    if (!window) {
        return nil;
    }
    UIView *tempView;
    for (UIView *subview in window.subviews) {
        if ([[subview.classForCoder description] isEqualToString:@"UILayoutContainerView"]) {
            tempView = subview;
            break;
        }
    }
    if (!tempView) {
        tempView = [window.subviews lastObject];
    }
    
    id nextResponder = [tempView nextResponder];
    while (![nextResponder isKindOfClass:[UIViewController class]] || [nextResponder isKindOfClass:[UINavigationController class]] || [nextResponder isKindOfClass:[UITabBarController class]]) {
        tempView =  [tempView.subviews firstObject];
        
        if (!tempView) {
            return nil;
        }
        nextResponder = [tempView nextResponder];
    }
    return  (UIViewController *)nextResponder;
}

//判断当期是否有网络
//+(BOOL)currentTimeHaveNet{
//    // 1.检测wifi状态
//    Reachability *wifi = [Reachability reachabilityForLocalWiFi];
//    // 2.检测手机是否能上网络(WIFI\3G\2.5G)
//    Reachability *conn = [Reachability reachabilityForInternetConnection];
//
//    // 3.判断网络状态
//    if ([wifi currentReachabilityStatus] != NotReachable) {
//        // 有wifi
//        NSLog(@"有wifi");
//        return YES;
//    } else if ([conn currentReachabilityStatus] != NotReachable) {
//        // 没有使用wifi, 使用手机自带网络进行上网
//        NSLog(@"使用手机自带网络进行上网");
//        return YES;
//    } else {
//        // 没有网络
//        NSLog(@"没有网络");
//        return NO;
//    }
//
//}
@end
