//
//  PersonVC.m
//  WLTest
//
//  Created by wangli on 2017/11/23.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "PersonVC.h"
#import "SafeManageVC.h"
#import "LoginVC.h"
@interface PersonVC ()
{
    
}
    
@end

@implementation PersonVC

- (void)viewDidLoad {
    [super viewDidLoad];
    //self.title = @"个人中心";
}
- (IBAction)nextPage:(id)sender {
    SafeManageVC *safeVc = [[SafeManageVC alloc]init];
    safeVc.title  =  @"账户安全";
    [self.navigationController pushViewController:safeVc animated:YES];
}
- (IBAction)logout:(id)sender {
    LoginVC *login = [[LoginVC alloc]init];
    [self clearLocationUser];
    [self presentViewController:login animated:YES completion:nil];
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
