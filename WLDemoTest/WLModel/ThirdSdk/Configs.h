//
//  Configs.h
//  WLTest
//
//  Created by wangli on 2017/11/25.
//  Copyright © 2017年 wangli. All rights reserved.
//
//////////********该类用于存放一些全局常用的量

#define screen_width [UIScreen mainScreen].bounds.size.width

#define WLColor(r,g,b) [UIColor colorWithRed:r/255.0 green:g/255.0 blue:b/255.0 alpha:1]
#define UD  [NSUserDefaults standardUserDefaults]
#define OBSERVE [NSNotificationCenter defaultCenter]
//file path
#define FilePath  [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) lastObject]
#import <Foundation/Foundation.h>

@interface Configs : NSObject

@end
