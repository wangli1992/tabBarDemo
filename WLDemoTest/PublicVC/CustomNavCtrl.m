//
//  CustomNavCtrl.m
//  WLTest
//
//  Created by wangli on 2017/11/26.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "CustomNavCtrl.h"

@interface CustomNavCtrl ()

@end

@implementation CustomNavCtrl

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}
+ (void)initialize {
    UINavigationBar *bar = [UINavigationBar appearance];
    // 需求要求导航时图片
    //UIImage *bg = [UIImage imageNamed:@"navigationbarBackgroundWhite"];
    //[bar setBackgroundImage:bg forBarMetrics:UIBarMetricsDefault];
    // 设置导航文字颜色和大小
    [bar setTitleTextAttributes:@{NSFontAttributeName : [UIFont systemFontOfSize:17], NSForegroundColorAttributeName:[UIColor whiteColor]}];
}
-(void)pushViewController:(UIViewController *)viewController animated:(BOOL)animated{
    if (self.childViewControllers.count){
        viewController.hidesBottomBarWhenPushed = YES;
    }
    
    [super pushViewController:viewController animated:animated];
    
}
- (void)back {
    [self popViewControllerAnimated:YES];
}


/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
