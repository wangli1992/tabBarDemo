//
//  School.m
//  WLDemoTest
//
//  Created by wangli on 2020/5/21.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "School.h"

@implementation School
+ (NSDictionary *)mj_replacedKeyFromPropertyName{
    return @{@"Id" : @"id",
             @"New":@"new",
             };
}
@end