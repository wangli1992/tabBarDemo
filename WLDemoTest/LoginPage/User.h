//
//  User.h
//  WLTest
//
//  Created by wangli on 2017/11/29.
//  Copyright © 2017年 wangli. All rights reserved.
//////////******用户类

#import <Foundation/Foundation.h>
//#import "SaveUser.h"
@interface User : NSObject

@property(nonatomic,copy)NSString *name;//用户姓名
@property(nonatomic,copy)NSString *username;//用户名
@property(nonatomic,assign) int userId;//用户ID；
@property(nonatomic,copy)NSString *email;//电子邮件
@property(nonatomic,copy)NSString *phoneNumber;//联系方式
@property(nonatomic,copy)NSString *gender;//性别
@property(nonatomic,copy)NSString *birthday;//出生年月
@property(nonatomic,copy)NSString *comeSchoolDate;//入学时间
@property(nonatomic,copy)NSString *avatar;//用户头像
@property(nonatomic,assign) int type;//用户类型；

@end
