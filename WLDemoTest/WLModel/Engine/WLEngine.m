//
//  WLEngine.m
//  WLTest
//
//  Created by wangli on 2017/11/25.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "WLEngine.h"
#import <AFNetworking.h>
@implementation WLEngine

//实现单例类请求对象
+(AFHTTPSessionManager *)shareManager{
    static AFHTTPSessionManager *manager;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken,^{
        manager = [AFHTTPSessionManager manager];
        manager.responseSerializer.acceptableContentTypes=[NSSet setWithObjects:@"application/json",@"text/json",@"text/javascript",@"text/html",@"text/plain",nil];
        [manager.requestSerializer willChangeValueForKey:@"timeoutInterval"];
        manager.requestSerializer.timeoutInterval = 15.f;
        [manager.requestSerializer didChangeValueForKey:@"timeoutInterval"];
        
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
+(void)getRequestUrlStr:(NSString *)urlStr withSucceed:(SucceedBlock)succeedBlock withFailture:(FalitureBlock)failBlock{
    //字符串处理
    NSString * string =[urlStr stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet characterSetWithCharactersInString:urlStr]];
    [[WLEngine shareManager] GET:string parameters:nil progress:^(NSProgress * _Nonnull downloadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        if(succeedBlock){
            NSError *error =  nil;
            if(error){
                NSLog(@"get解析失败");
                return ;
            }
            succeedBlock(responseObject);
        }
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        if(failBlock){
           failBlock(error);
        }
       
    }];
}
+(void)postRequestUrlStr:(NSString *)urlStr postDic:(NSMutableDictionary *)paramDic withSucceed:(SucceedBlock)succeedBlock withFailture:(FalitureBlock)failBlock{
    NSString * string =[urlStr stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet characterSetWithCharactersInString:urlStr]];
    [[WLEngine shareManager] POST:string parameters:paramDic progress:^(NSProgress *_Nonnull uploadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task,id _Nullable responseObject) {
       // [SVProgressHUD dismiss];
        if (succeedBlock) {
            // --- > 字典类型 --- > json数据 --- >解析数据并传值
            NSError * error =nil;
            if (error !=nil) {
                
                return ;
            }
            succeedBlock(responseObject);
        }
        
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError *_Nonnull error) {
        
//        [SVProgressHUD showErrorWithStatus:@"请求数据失败,请检查网络后重试!"];
        if (failBlock) {
            failBlock(error);
        }
    }];
}
@end
