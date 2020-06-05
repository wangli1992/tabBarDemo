//
//  Classes.h
//  WLDemoTest
//
//  Created by wangli on 2020/5/21.
//  Copyright © 2020 wangli. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "School.h"
NS_ASSUME_NONNULL_BEGIN

@interface Classes : NSObject


@property(nonatomic,assign)int isCourse;
@property(nonatomic,copy)NSString *motto;
@property(nonatomic,assign)int Id;
@property(nonatomic,assign)int ischargeteacher;
@property(nonatomic,assign)int stuNum;
@property(nonatomic,copy)NSString *classname;
@property(nonatomic,assign)int majorId;
@property(nonatomic,assign)int New;
@property(nonatomic,retain)NSArray *terminalList;
@property(nonatomic,copy)NSString *stage;
//@property(nonatomic,retain)NSMutableArray *school;
@property(nonatomic,copy)NSString *grade;
@property(nonatomic,retain)School *school;

@end

NS_ASSUME_NONNULL_END
