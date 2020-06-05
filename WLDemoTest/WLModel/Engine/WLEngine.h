//
//  WLEngine.h
//  WLTest
//
//  Created by wangli on 2017/11/25.
//  Copyright © 2017年 wangli. All rights reserved.
//
/////  http request

#import <Foundation/Foundation.h>

@interface WLEngine : NSObject

//创建成功和失败的block代码块的类型
typedef void (^SucceedBlock)(id dataString);
typedef void (^FalitureBlock)(NSError *error);

//成功时返回
@property(nonatomic,copy)SucceedBlock succeedBlock;
@property(nonatomic,copy)FalitureBlock failtureBlock;
@property(nonatomic,assign)int netWorkType;
//创建get请求
-(void)getRequestUrlStr:(NSString *)urlStr withSucceed:(SucceedBlock)succeedBlock
           withFailture:(FalitureBlock)failBlock;
//创建post请求
-(void)postRequestUrlStr:(NSString *)urlStr postDic:(NSMutableDictionary *)paramDic withSucceed:(SucceedBlock)succeedBlock withFailture:(FalitureBlock)failBlock;

-(void)doLogin:(NSString *)username password:(NSString *)password;

+ (UIViewController *)getCurrentVC;
@end
