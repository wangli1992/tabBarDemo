//
//  CustomTabbar.h
//  WLTest
//
//  Created by wangli on 2017/11/23.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CustomTabbar : UITabBarController
@property(nonatomic,strong)UIView *bigView;
@property(nonatomic,assign)BOOL hidesBottomBarWhenPushed;
@end
