//
//  School.h
//  WLDemoTest
//
//  Created by wangli on 2020/5/21.
//  Copyright © 2020 wangli. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface School : NSObject

@property(nonatomic,assign)int Id;
@property(nonatomic,assign)int New;
@property(nonatomic,assign)int fUniversityStatus;
@property(nonatomic,copy)NSString *smallImageUrl;
@property(nonatomic,copy)NSString *schoolName;
@property(nonatomic,copy)NSString *aPrimaryStatus;
@property(nonatomic,copy)NSString *bJuniorHighStatus;
@property(nonatomic,retain)NSArray *stage;
@property(nonatomic,copy)NSString *bigImageUrl;
@property(nonatomic,copy)NSDictionary *area;
@property(nonatomic,copy)NSString *logo;
@property(nonatomic,copy)NSString *principalName ;
@property(nonatomic,copy)NSString *phoneNumber ;
@property(nonatomic,copy)NSString *areaTips ;
@property(nonatomic,copy)NSString *stageStr;
@property(nonatomic,copy)NSString *userName;





@end

NS_ASSUME_NONNULL_END
