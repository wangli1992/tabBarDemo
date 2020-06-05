//
//  LoginVC.m
//  WLTest
//
//  Created by wangli on 2017/11/26.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "LoginVC.h"
#import "CustomTabbar.h"
#import "NetworkRequest.h"
#import "User.h"


@interface LoginVC ()

@end

@implementation LoginVC

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    if([UD objectForKey:@"username"])
        self.userNameTF.text = [UD objectForKey:@"username"];
    
    NSString *path = FilePath;
    NSLog(@"file path:%@",path);
}

- (IBAction)click:(UIButton *)sender {
    NSLog(@"username:%@",self.userNameTF.text);
    //    CustomTabbar *tabbar = [[CustomTabbar alloc]init];
    //    UIWindow *window  = [UIApplication sharedApplication].keyWindow;
    //    window.rootViewController = tabbar;
    //    return;
    if([self.userNameTF.text isEqualToString:@""]){
        UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"温馨提示" message:@"账号和密码不能为空" preferredStyle:UIAlertControllerStyleAlert];
        [alert addAction:[UIAlertAction actionWithTitle:@"知道了" style: UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            
        }]];
        [self presentViewController:alert animated:YES completion:nil];
        return ;
    }
    
    NetworkRequest *request = [[NetworkRequest alloc]init];
    request.sendUser = ^(User *user){
        //  NSLog(@"userId:%d",user.userId);
        if(user.Id){
            NSLog(@"infomation is:%@",user.school.schoolName);
            [UD setObject:self.userNameTF.text forKey:@"username"];
            [UD setObject:self.passwordTF.text.md5String forKey:@"password"];
            [UD setObject:@"login" forKey:@"isLogin"];
            [UD synchronize];
            NSDictionary *userDic = user.mj_keyValues;
            NSLog(@"mjdic--%@",userDic);
            // [user save];
            CustomTabbar *tabbar = [[CustomTabbar alloc]init];
            UIWindow *window  = [UIApplication sharedApplication].keyWindow;
            window.rootViewController = tabbar;
        }
    };
    [request loginRequestUserName:[NSString stringWithFormat:@"t%@",self.userNameTF.text]  psaaword:self.passwordTF.text withCtrl:self];
    
    //    CustomTabbar *tabbar = [[CustomTabbar alloc]init];
    //               UIWindow *window  = [UIApplication sharedApplication].keyWindow;
    //               window.rootViewController = tabbar;
    //
    
    
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
