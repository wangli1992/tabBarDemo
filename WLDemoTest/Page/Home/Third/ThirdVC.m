//
//  ThirdVC.m
//  WLDemoTest
//
//  Created by wangli on 2018/3/18.
//  Copyright © 2018年 wangli. All rights reserved.
//

#import "ThirdVC.h"

@interface ThirdVC ()

@end

@implementation ThirdVC

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    UIButton *butt = [UIButton buttonWithType:UIButtonTypeCustom];
    [butt setTitle:@"代理传值" forState:UIControlStateNormal];
    butt.frame = CGRectMake(100, 100, 150, 40);
    butt.titleLabel.font = [UIFont systemFontOfSize:16];
    [butt setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [butt addTarget:self action:@selector(click) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:butt];
}
-(void)click{
    
    NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"111",@"222", nil];
    self.block1(arr);
    if([_delegate  respondsToSelector:@selector(changeFrontPage:)]){
        [_delegate  changeFrontPage:@"实现代理传值"];
    }
    [self.navigationController popViewControllerAnimated:YES];
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
