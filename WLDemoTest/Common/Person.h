//
//  Person.h
//  WLDemoTest
//
//  Created by wangli on 2020/5/28.
//  Copyright © 2020 wangli. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface Person : NSObject

@property(nonatomic,assign)NSInteger age;
@property(nonatomic,copy)NSString *name;

+(void)savePerson:(Person *)person;
+(Person *)getPerson;
@end

NS_ASSUME_NONNULL_END
