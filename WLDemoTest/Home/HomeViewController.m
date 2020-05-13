//
//  HomeViewController.m
//  WLTest
//
//  Created by wangli on 2017/11/25.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "HomeViewController.h"
#import "SecondVC.h"
#import "CustomTabbar.h"
#import "User.h"
@interface HomeViewController ()

@property(nonatomic,strong)NSMutableArray *userArr;
@end

@implementation HomeViewController
@synthesize userArr;
-(void)viewWillAppear:(BOOL)animated{
  
}
-(void)viewWillDisappear:(BOOL)animated{
  
}
- (void)viewDidLoad {
    [super viewDidLoad];
   // self.title = @"首页";

//    User *member = [[User allObjects] objectAtIndex:0];
//    //NSString  *name = [UD objectForKey:FilePath];
//    NSString *userInfo = member.phoneNumber;
//    NSLog(@"用户信息:%@--%@",userInfo,member);
    
}
- (IBAction)gotoNextPage:(UIButton *)sender {
    SecondVC *svc = [[SecondVC alloc]init];
    svc.title = @"第二页";
    [self.navigationController pushViewController:svc animated:YES];
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
