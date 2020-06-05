//
//  CustomTabbar.m
//  WLTest
//
//  Created by wangli on 2017/11/23.
//  Copyright © 2017年 wangli. All rights reserved.
//
#define DEVICE_IS_IPHONE_X ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(1125, 2436), [[UIScreen mainScreen] currentMode].size) : NO)

#import "CustomTabbar.h"
#import "ViewController.h"
#import "MessageVC.h"
#import "PersonVC.h"
#import "CustomNavCtrl.h"
#import "HomeViewController.h"
#import "MainVC.h"

@interface CustomTabbar ()
{
    NSMutableArray *btntitlearr;
    NSMutableArray *btnSelectImgArr;
    NSMutableArray *btnUnselectImgArr;
    
}
@property(nonatomic,retain)UIButton *recordBtn;
@end

@implementation CustomTabbar
@synthesize bigView;
@synthesize recordBtn;
    
- (void)viewDidLoad {
    [super viewDidLoad];

    self.tabBar.translucent = NO;
    //self.view.backgroundColor = [UIColor colorWithHexString:@"#f3f4f6"];
    [[UITabBar appearance] setBarTintColor:[UIColor colorWithHexString:@"#f3f4f6"]];
    btntitlearr = [[NSMutableArray alloc]initWithObjects:@"首页",@"消息",@"个人中心", nil];
    btnSelectImgArr = [NSMutableArray arrayWithObjects:@"home-selected",@"message-selected",@"person-selected", nil];
    btnUnselectImgArr = [NSMutableArray arrayWithObjects:@"home-unselected",@"message-unselected",@"person-unselected", nil];
    [self customTabbar];
    //self.tabBarController.hide
//    [self.navigationBar setBackgroundImage:[UIImage new] forBarMetrics:UIBarMetricsDefault];
//        [self.navigationBar setShadowImage:[self.navigationBar lineImageWithColor:[UIColor colorWithHexString:@"#fb9966"]]];
//
//
    
}
- (UIImage *)lineImageWithColor:(UIColor *)lineColor {

    CGRect rect = CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, 0.5);
    UIGraphicsBeginImageContext(rect.size);
    CGContextRef ctx = UIGraphicsGetCurrentContext();

    CGContextSetFillColorWithColor(ctx, lineColor.CGColor);
    CGContextFillRect(ctx, rect);
    
    UIImage *lineImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return lineImage;

}
-(void)customTabbar{
    // UIWindow *window = [UIApplication sharedApplication].keyWindow;
    float width = [UIScreen mainScreen].bounds.size.width;
    float height = [UIScreen mainScreen].bounds.size.height;
    bigView = [[UIView alloc]initWithFrame:CGRectMake(0, height-50, width, 50)];
    //bigView.backgroundColor = [UIColor whiteColor];
   // [self.view addSubview:bigView];
    for(int i=0;i<3;i++){
        UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom ];
       
        btn.frame = CGRectMake(i*width/3, 0, width/3, 50);
       
         [btn setTitleColor:[UIColor grayColor] forState:UIControlStateNormal];
       [btn setTitleColor:WLColor(0, 206, 209) forState:UIControlStateSelected];
      
        
        btn.titleLabel.font = [UIFont systemFontOfSize:12];
        btn.titleLabel.textAlignment = NSTextAlignmentCenter;
        btn.tag= i;
        if(i==0){
            btn.selected = YES;
            recordBtn = btn;
        }
        [btn addTarget:self action:@selector(tabbarClick:) forControlEvents:UIControlEventTouchUpInside];
        [bigView addSubview:btn];
       // [self changeTabbarColor];
   }
  

    //方式2
//    HomeViewController *homeVC = [[HomeViewController alloc]init];
    MainVC *homeVC= [[MainVC alloc]init];
    [self addChildVc:homeVC title:@"首页" image:@"home-unselected" selectedImage:@"home-selected"];

    MessageVC *messageVC = [[MessageVC alloc]init];
    [self addChildVc:messageVC title:@"消息" image:@"message-unselected" selectedImage:@"message-selected"];

    PersonVC *personVC = [[PersonVC alloc]init];
    [self addChildVc:personVC title:@"个人中心" image:@"person-unselected" selectedImage:@"person-selected"];
    
}
- (void)addChildVc:(UIViewController *)childVc title:(NSString *)title image:(NSString *)image selectedImage:(NSString *)selectedImage{
    // 设置子控制器的文字(可以设置tabBar和navigationBar的文字)
    childVc.title = title;
    
    // 设置子控制器的tabBarItem图片
    childVc.tabBarItem.image = [UIImage imageNamed:image];
    // 禁用图片渲染
    childVc.tabBarItem.selectedImage = [[UIImage imageNamed:selectedImage] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    
    // 设置文字的样式
    [childVc.tabBarItem setTitleTextAttributes:@{NSForegroundColorAttributeName :[UIColor grayColor]} forState:UIControlStateNormal];
    [childVc.tabBarItem setTitleTextAttributes:@{NSForegroundColorAttributeName : WLColor(0, 206, 209)} forState:UIControlStateSelected];
    //    childVc.view.backgroundColor = RandomColor; // 这句代码会自动加载主页，消息，发现，我四个控制器的view，但是view要在我们用的时候去提前加载
    
    // 为子控制器包装导航控制器
   
    CustomNavCtrl *navigationVc = [[CustomNavCtrl alloc]initWithRootViewController:childVc];
    // 添加子控制器
    [self addChildViewController:navigationVc];
   
    

}
- (void)changeTabbarColor {
    CGRect frame;
    UIView *tabBarView = [[UIView alloc] init];
    tabBarView.backgroundColor = [UIColor colorWithHexString:@"#f3f4f6"];
    if (DEVICE_IS_IPHONE_X) {
    frame = CGRectMake(0, 0, screen_width, 83);
    }else {
        frame = self.tabBar.bounds;
    }
    tabBarView.frame = frame;
    [[UITabBar appearance] insertSubview:tabBarView atIndex:0];
    
}



-(void)tabbarClick:(UIButton *)btn{
    btn.selected  =  YES;
    recordBtn.selected = NO;
    recordBtn = btn;
    self.selectedIndex = btn.tag;
    
}
//重写他的set方法
//-(void)setHidesBottomBarWhenPushed:(BOOL)hidesBottomBarWhenPushed{
//    self.tabBar.hidden = hidesBottomBarWhenPushed;
//    self.bigView.hidden = hidesBottomBarWhenPushed;
//}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}



@end
