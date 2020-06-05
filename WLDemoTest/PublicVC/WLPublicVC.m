//
//  WLPublicVC.m
//  WLTest
//
//  Created by wangli on 2017/11/21.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "WLPublicVC.h"
#import "User.h"
@interface WLPublicVC ()

@end

@implementation WLPublicVC

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    [self getCustomNavbar];
   
    
}
//删除本地用户
-(void)clearLocationUser{
//    for(User *user in [User allObjects]){
//        [user deleteObject];
//    }
}
-(void)viewWillAppear:(BOOL)animated{
//    for(int i=0;i<self.navigationController.viewControllers.count;i++){
//        if(i==0){
//            UIWindow *window = [[[UIApplication sharedApplication] delegate]window];
//            CustomTabbar *tabbar = (CustomTabbar *)window.rootViewController;
//            [tabbar.tabBar setHidden:NO];
//            tabbar.bigView.hidden = NO;
//        }
//    }
    
   
    
}
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return UIInterfaceOrientationIsPortrait(interfaceOrientation);
}
-(void)viewWillDisappear:(BOOL)animated{
   
}

#pragma mark custom navbar style
-(void)getCustomNavbar{
    UIBarButtonItem *item = [[UIBarButtonItem alloc]init];
    item.title = @"返回";
    // set item title color
    self.navigationController.navigationBar.tintColor = [UIColor whiteColor];
    //set navbar back button
    self.navigationItem.backBarButtonItem = item;
    self.navigationController.navigationBar.titleTextAttributes = @{NSForegroundColorAttributeName:[UIColor whiteColor]};
    [self.navigationController.navigationBar setBarTintColor:WLColor(0, 206, 209)];
    if([[[UIDevice currentDevice] systemVersion] doubleValue]>=8.0){
        self.navigationController.navigationBar.translucent = NO;
    }
}
//通过颜色值获取颜色
-(UIColor *)colorWithHexString:(NSString*)stringToConvert{
    if([stringToConvert hasPrefix:@"#"])
    {
        stringToConvert = [stringToConvert substringFromIndex:1];
    }
    NSScanner*scanner = [NSScanner scannerWithString:stringToConvert];
    unsigned hexNum;
    if(![scanner scanHexInt:&hexNum])
    {
        return nil;
    }
    return[self colorWithRGBHex:hexNum];
}
-(UIColor *)colorWithRGBHex:(UInt32)hex{
    int r = (hex >>16) &0xFF;
    int g = (hex >>8) &0xFF;
    int b = (hex) &0xFF;
    return [UIColor colorWithRed:r /255.0f green:g /255.0f blue:b /255.0f alpha:1.0f];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
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
