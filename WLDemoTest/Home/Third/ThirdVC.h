//
//  ThirdVC.h
//  WLDemoTest
//
//  Created by wangli on 2018/3/18.
//  Copyright © 2018年 wangli. All rights reserved.
//

#import "WLPublicVC.h"

@protocol ThirdPageDelegate<NSObject>
-(void)changeFrontPage:(NSString *)commnStr;
@end

typedef void(^SendBlock)(NSMutableArray *sendArr);
@interface ThirdVC : WLPublicVC

@property(nonatomic,weak)id<ThirdPageDelegate> delegate;
@property(nonatomic,copy)SendBlock block1;
@end


