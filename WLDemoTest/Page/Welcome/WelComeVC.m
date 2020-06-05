//
//  WelComeVC.m
//  WLDemoTest
//
//  Created by wangli on 2020/5/28.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "WelComeVC.h"
#import "LoginVC.h"
#import "DrawView.h"
#import "WLPageVC.h"
@interface WelComeVC ()<UIScrollViewDelegate>
{
    NSArray *titleArr;
    NSArray *descArr;
    NSArray *titleColorArr;
}

@property (nonatomic,weak) WLPageVC *pageControl;
@property (nonatomic,weak) UIScrollView *scrollView;
@property(nonatomic,strong)CAGradientLayer *bottomMaskLayer;
@end

@implementation WelComeVC





- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    titleArr = @[@"通知公告",@"校园风采",@"家校沟通"];
    descArr = @[@"活动、赛事、评比展现学校最美风采",@"活动、赛事、评比展现学校最美风采",@"家校互通的桥梁 随时随地的沟通"];
    titleColorArr = @[@"#58C07E",@"#3A7AED",@"#3A7AED"];
    [self setUpScrollView];
    
}
-(void)setUpScrollView{
    UIScrollView *scrollView = [[UIScrollView alloc]init];
    scrollView.frame = [UIScreen mainScreen].bounds;
    
    
    scrollView.bounces = NO;//不能越界
    scrollView.pagingEnabled = YES;
    scrollView.showsVerticalScrollIndicator = NO;
    scrollView.showsHorizontalScrollIndicator = NO;
    scrollView.contentSize = CGSizeMake(4*screen_width, 0);
    scrollView.delegate = self;
    [self.view addSubview:scrollView];
    //控制滚动视图遇到垂直方向是否反弹
    scrollView.alwaysBounceVertical = YES;// 默认为NO
    //如果该属性和bounces同时为YES，那么即使contentSize的height小于frame的height，竖直方向的拖拽也是允许的。
    
    //控制滚动视图遇到水平方向是否反弹
    scrollView.alwaysBounceHorizontal = YES;//默认为NO
    
    CGFloat distance = screen_height/14 +1.4*(screen_width-120)+30;
    for(NSInteger i=0;i<4;i++){
        //        UIView *bigView = [[UIView alloc]init];
        //        bigView.frame = [UIScreen mainScreen].bounds;
        //        [scrollView addSubview:bigView];
        
        UIImageView *imageView = [[UIImageView alloc]init];
        imageView.image = [UIImage imageNamed:[NSString stringWithFormat:@"guide%ld",i+1]];
        imageView.frame = CGRectMake(60+i*screen_width, screen_height/14, screen_width-120, 1.4*(screen_width-120));
        [scrollView addSubview:imageView];
        
        //        [imageView mas_makeConstraints:^(MASConstraintMaker *make) {
        //            make.width.mas_equalTo(screen_width-30);
        //            make.top.equalTo(scrollView).with.offset(50);
        //            make.left.equalTo(scrollView).with.offset(15);
        //             make.left.equalTo(scrollView).with.offset(-15);
        //             make.height.mas_equalTo(imageView.mas_width).multipliedBy(1.4);//高宽比
        //        }];
        if(i<3){
            UILabel *titleLab = [[UILabel alloc]initWithFrame:CGRectMake(screen_width/2-100+i*screen_width,  distance, 200, 30)];
            titleLab.text = titleArr[i];
            titleLab.textAlignment = NSTextAlignmentCenter;
            titleLab.font = [UIFont boldSystemFontOfSize:27];
            titleLab.textColor = [UIColor colorWithHexString:titleColorArr[i]] ;
            [scrollView addSubview:titleLab];
            
            UILabel *descLab= [[UILabel alloc]initWithFrame:CGRectMake(screen_width/2-150+i*screen_width,  distance+40, 300, 20)];
            descLab.text = descArr[i];
            descLab.textAlignment = NSTextAlignmentCenter;
            descLab.font = [UIFont systemFontOfSize:17];
            descLab.textColor = [UIColor colorWithHexString:@"#666666"] ;
            [scrollView addSubview:descLab];
            
        }else{
            
            
            CGSize size = CGSizeMake(150,50);
            
            UIView *smallView = [self getBtnViewWithSize:size];
            
            UIImage *image =   [Util getColorChangeImageWithSize:size withView:smallView WithColors:[NSArray arrayWithObjects:(id)[[UIColor colorWithHexString:@"#2bcab2"]CGColor],(id)[[UIColor colorWithHexString:@"#2078F5"]CGColor], nil] withBeginPoint:CGPointMake(0,0.5) withEndPoint:CGPointMake(1, 0.5)];
            
            
            UIButton *enterBtn = [UIButton buttonWithType:UIButtonTypeCustom];
            enterBtn.frame = CGRectMake(3*screen_width+screen_width/2-75, screen_height-190, 150, 50);
            [enterBtn setImage:image forState:UIControlStateNormal];
            enterBtn.titleLabel.font = [UIFont systemFontOfSize:WLScale(19)];
            enterBtn.clipsToBounds = YES;
            enterBtn.layer.cornerRadius = 25;
            [enterBtn addTarget:self action:@selector(enterClick) forControlEvents:UIControlEventTouchUpInside];
            [scrollView addSubview:enterBtn];
            
            
            
        }
        
    }
    
    // 4.添加pageControl：分页，展示目前看的是第几页
    WLPageVC *pageControl = [[WLPageVC alloc] init];
    pageControl.numberOfPages = 4;
    pageControl.currentPage = 0;
    pageControl.backgroundColor = [UIColor whiteColor];//WLColor(209, 238,232);;
    pageControl.currentPageIndicatorTintColor = [UIColor colorWithHexString:@"#2bcab2"];
    pageControl.pageIndicatorTintColor = WLColor(209, 238,232);
    //添加点击事件
    [pageControl addTarget:self action:@selector(pageClick:) forControlEvents:UIControlEventValueChanged];

    pageControl.frame = CGRectMake(60, screen_height-60, screen_width-120, 34);
    [self.view addSubview:pageControl];
    self.pageControl = pageControl;
    self.scrollView = scrollView;
    
}
-(void)pageClick:(UIPageControl *)pageCtrl{
    NSLog(@"current page :%ld",pageCtrl.currentPage);
    NSInteger currentPage = pageCtrl.currentPage;
    self.scrollView.contentOffset = CGPointMake(screen_width*currentPage, 0);
    
}
//减速结束
-(void)scrollViewDidEndDecelerating:(UIScrollView *)scrollView{
    //获取偏移量
    NSInteger currentPage = scrollView.contentOffset.x/screen_width;
    //改变pageControl的显示
    self.pageControl.currentPage = currentPage;
}
-(void)enterClick{
    LoginVC *login = [[LoginVC alloc]init];
    
    [UIApplication sharedApplication].keyWindow.rootViewController = login;
}
-(UIView *)getBtnViewWithSize:(CGSize)size{
    UIView *smallView = [[UIView alloc]init];
    smallView.frame = CGRectMake(2, 2, size.width-4, size.height-4);
    smallView.layer.masksToBounds = YES;
    smallView.layer.cornerRadius = 23;
    smallView.backgroundColor = [UIColor whiteColor];
    
    
    UILabel *titleLab = [[UILabel alloc]init];
    titleLab.text = @"立刻进入";
    titleLab.textColor = [UIColor colorWithHexString:@"#2bcab2"];
    titleLab.textAlignment = NSTextAlignmentCenter;
    titleLab.font = [UIFont systemFontOfSize:WLScale(20)];
    titleLab.frame = CGRectMake(10, 10, smallView.bounds.size.width-20, smallView.bounds.size.height-20);
    [smallView addSubview:titleLab];
    return smallView;
    
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
