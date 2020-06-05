//
//  User.m
//  WLTest
//
//  Created by wangli on 2017/11/29.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "User.h"

@implementation User

+ (NSDictionary *)mj_replacedKeyFromPropertyName{
    return @{@"Id" : @"id",
             };
}

/* 数组中存储模型数据，需要说明数组中存储的模型数据类型 */
+(NSDictionary *)mj_objectClassInArray{
    return  @{@"classes":@"Classes"};
}
@end
