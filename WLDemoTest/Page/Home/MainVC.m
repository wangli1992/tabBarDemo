//
//  MainVC.m
//  WLDemoTest
//
//  Created by wangli on 2020/6/1.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "MainVC.h"
//#import "WLDemoTest-Bridging-Header.h"
//#import "WLDemoTest-Swift.h"
#import "WLFreshHeader.h"
#import "MainCell.h"
@interface MainVC ()<FSPagerViewDataSource,FSPagerViewDelegate,UITableViewDelegate,UITableViewDataSource,MainCellDelegate>
{
    NSArray *imgArr ;
    NSArray *headArr;
    NSMutableArray *section1Arr;
    NSMutableArray *section2Arr;
}

@property(nonatomic,strong)UIScrollView *scrollView;
@property(nonatomic,retain)UITableView *myTableView;
@property(nonatomic,strong)UIView  *headView;
//@property (nonatomic, strong) JJCardSliderView *card;

@end

@implementation MainVC
-(UITableView *)myTableView{
    if(_myTableView==nil){
        _myTableView = [[UITableView alloc]initWithFrame:CGRectZero style:UITableViewStyleGrouped];
        _myTableView.delegate = self;
        _myTableView.dataSource = self;
        _myTableView.separatorStyle = UITableViewCellSeparatorStyleNone;
        _myTableView.tableHeaderView = self.headView;
        //_myTableView.tableFooterView = [[UIView alloc]initWithFrame:CGRectZero];
        // _myTableView.rowHeight = 400;
        [_myTableView registerClass:[MainCell class] forCellReuseIdentifier:@"mainCell"];
        // [_myTableView registerClass:[MainCell class] forCellReuseIdentifier:@"mainCell1"];
        //下拉刷新
        //       _myTableView.mj_header = [WLFreshHeader headerWithRefreshingTarget:self refreshingAction:@selector(loadNewTopic)];
        //[MJRefreshNormalHeader headerWithRefreshingTarget:self refreshingAction:@selector(loadNewTopic)];
        //自动更改透明度
        _myTableView.mj_header.automaticallyChangeAlpha = YES;
        
        MJRefreshNormalHeader *header = [MJRefreshNormalHeader headerWithRefreshingTarget:self refreshingAction:@selector(loadNewTopic)];
        _myTableView.mj_header = header;
        header.lastUpdatedTimeLabel .hidden = YES;
        
        [header setTitle:@"正在努力刷新" forState:MJRefreshStateIdle];
        [header setTitle:@"正在拼命加载" forState:MJRefreshStatePulling];
        [header setTitle:@"加载中 ..." forState:MJRefreshStateRefreshing];
        
        // Set font
        header.stateLabel.font = [UIFont systemFontOfSize:15];
        header.lastUpdatedTimeLabel.font = [UIFont systemFontOfSize:14];
        
        // Set textColor
        header.stateLabel.textColor = [UIColor redColor];
        header.lastUpdatedTimeLabel.textColor = [UIColor blueColor];
        
        //进入刷新状态@
        [_myTableView.mj_header beginRefreshing];
        
        //上拉加载
        //           _myTableView.mj_footer = [MJRefreshBackNormalFooter footerWithRefreshingTarget:self refreshingAction:@selector(loadMoreTopic)];
        
    }
    return _myTableView;
}
//下拉刷新
-(void)loadNewTopic{
    NSLog(@"下拉i刷新");
    //结束头部刷新
    [self.myTableView.mj_header endRefreshing];
}
//上拉加载
-(void)loadMoreTopic{
    NSLog(@"上拉加载");
    //结束尾部刷新
    [self.myTableView.mj_footer endRefreshing];
}
-(UIView *)headView{
    if(_headView==nil){
        _headView = [[UIView alloc]initWithFrame:CGRectMake(0, 0, screen_width, 180)];
        _headView.backgroundColor = [UIColor whiteColor];
        FSPagerView *pageView = [[FSPagerView alloc]init];
        pageView.frame = CGRectMake(0, 0, screen_width, 180);
        pageView.dataSource = self;
        pageView.delegate = self;
        [pageView registerClass:[FSPagerViewCell class]forCellWithReuseIdentifier:@"cell"];
        pageView.automaticSlidingInterval = 3.0;
        pageView.isInfinite  =  true;
        [_headView addSubview:pageView];
        
        FSPageControl *pageControl = [[FSPageControl alloc]init];
        pageControl.frame = CGRectMake(80, 140, screen_width-160, 30);
        pageControl.backgroundColor = [UIColor clearColor];
        pageControl.numberOfPages = 3;
        pageControl.currentPage = 0;
        
        [_headView addSubview:pageControl];
        
        imgArr = @[@"banner.jpg",@"banner_main.jpg",@"banner.jpg"];
        section1Arr = [NSMutableArray arrayWithObjects:@{@"image":@"main_campus_notification",@"title":@"学校通知",@"tag":@100},@{@"image":@"class_announcement",@"title":@"班级公告",@"tag":@101},@{@"image":@"class_notification",@"title":@"作业通知",@"tag":@102},@{@"image":@"main_test_results",@"title":@"成绩公告",@"tag":@103},@{@"image":@"main_school_performance",@"title":@"在校表现",@"tag":@104},@{@"image":@"meeting-notice",@"title":@"会议通知",@"tag":@105}, nil];
        
        section2Arr = [[NSMutableArray alloc]initWithObjects:@{@"image":@"main-kscj.png",@"title":@"考试成绩",@"tag":@1000},
                       @{@"image":@"class_schedule.png",@"title":@"课程表",@"tag":@1001},
                       @{@"image":@"class_duty.png",@"title":@"值日表",@"tag":@1002},
                       @{@"image":@"main_attendance.png",@"title":@"班级考勤",@"tag":@1003},
                       @{@"image":@"main_course.png",@"title":@"我的走班课",@"tag":@1004},
                       @{@"image":@"class_banxun.png",@"title":@"班训设置",@"tag":@1005},
                       @{@"image":@"main_xsqj.png",@"title":@"学生请假",@"tag":@1006},
                       @{@"image":@"main_kqtj.png",@"title":@"考勤统计",@"tag":@1007},
                       @{@"image":@"main_jrkq.png",@"title":@"今日考勤",@"tag":@1008},
                       @{@"image":@"icon_cash.png",@"title":@"学生卡押金",@"tag":@1009},
                       @{@"image":@"main_repair.png",@"title":@"设备报修",@"tag":@1010},
                       @{@"image":@"assets_apply.png",@"title":@"资产申领",@"tag":@1011},
                       @{@"image":@"meeting-reservation.png",@"title":@"会议室预约",@"tag":@1012},
                       @{@"image":@"approval_admin",@"title":@"审批管理",@"tag":@1013},
                       @{@"image":@"main_class_star.png",@"title":@"班级之星",@"tag":@1014},
                       @{@"image":@"main_portrait.png",@"title":@"人像采集",@"tag":@1015},
                       @{@"image":@"main_date_arrange.png",@"title":@"日程安排",@"tag":@1016},
                       @{@"image":@"main_teacher_evaluate.png",@"title":@"学生评价",@"tag":@1017},
                       @{@"image":@"main_charge.png",@"title":@"收费管理",@"tag":@1018},
                       @{@"image":@"main_adjust_class.png",@"title":@"调课",@"tag":@1019},
                       @{@"image":@"main_group.png",@"title":@"分组信息",@"tag":@1020},
                       @{@"image":@"main_hiden_report.png",@"title":@"隐患上报",@"tag":@1021},
                       @{@"image":@"main_reservation",@"title":@"拜访预约",@"tag":@1022},
                       @{@"image":@"main_classroom_monit",@"title":@"宝宝视频",@"tag":@1023},
                       @{@"image":@"icon-health",@"title":@"疫情防控",@"tag":@1024},
                       nil];
    }
    return _headView;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    [self.view addSubview:self.myTableView];
    [self.myTableView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.top.right.bottom.equalTo(self.view);
    }];
    
    headArr = @[@"通知公告",@"我的应用"];
    
    
    
}
-(NSInteger)numberOfItemsInPagerView:(FSPagerView *)pagerView{
    return  imgArr.count;
}
-(FSPagerViewCell *)pagerView:(FSPagerView *)pagerView cellForItemAtIndex:(NSInteger)index{
    FSPagerViewCell *cell = [pagerView dequeueReusableCellWithReuseIdentifier:@"cell" atIndex:index];
    cell.textLabel.text = @"11111";
    cell.imageView.image = [UIImage imageNamed:imgArr[index]];
    return cell;
}
#pragma mark tableview datasource
-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    return 1;
}
-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    static NSString *identify = @"mainCell"; //[NSString stringWithFormat:@"mainCell%ld",indexPath.section] ;
    MainCell *cell = [tableView dequeueReusableCellWithIdentifier:identify];
    cell.selectionStyle = UITableViewCellSelectionStyleNone;
    cell.cellArr = indexPath.section==0 ?section1Arr:section2Arr;
    cell.delegate = self;
    return cell;
}
-(CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
    unsigned long a ;//= section1Arr.count/5 ;
    int b = screen_width/4;
    int c ;
    
    //NSLog(@"hhh===%f",screen_width/4 * section1Arr.count/5 +screen_width/4);
    if(indexPath.section==0){
        a=section1Arr.count/4;
        c = section1Arr.count%4 == 0? 0:b;
        
    }else{
        a = section2Arr.count/4;
        c = section2Arr.count%4 == 0? 0:b;
        //return a*b+b*2;
    }
    
    return a*b+c+20;
    
}
-(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView{
    return 2;
}
-(CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section{
    return 48;
}
-(UIView *)tableView:(UITableView *)tableView viewForHeaderInSection:(NSInteger)section{
    UIView *headV = [[UIView alloc]init];
    
    UIView *tip = [[UIView alloc]initWithFrame:CGRectMake(15, 12, 3, 24)];
    tip.backgroundColor = [UIColor colorWithHexString:@"#2bcab2"];
    [headV addSubview:tip];
    
    JFLabel *lab = [[JFLabel alloc]initWithFrame:CGRectMake(24, 12, 200, 24)];
    lab.font = [UIFont boldSystemFontOfSize:WLScale(16)];
    lab.text = headArr[section];
    lab.textColor = [UIColor colorWithHexString:@"#222222"];
    [headV addSubview:lab];
    return headV;
}
-(UIView *)tableView:(UITableView *)tableView viewForFooterInSection:(NSInteger)section{
    UIView *footView = [[UIView alloc]init];
    return footView;
}
-(CGFloat)tableView:(UITableView *)tableView heightForFooterInSection:(NSInteger)section {
    return 0.001f;
}
#pragma mark mainCellDegate
-(void)clickMenu:(NSInteger)tag{
    NSLog(@"点击的菜单tag===%ld",tag);
    switch (tag) {
        case 100:
            NSLog(@"学校通知");
            break;
        case 101:
            NSLog(@"班级公告");
            break;
        case 102:
            NSLog(@"作业通知");
            break;
        case 1001:
            NSLog(@"考试成绩");
            break;
        case 1024:
            NSLog(@"疫情防控");
            break;
        default:
            NSLog(@"其他");
            break;
    }
}
//public func numberOfItems(in pagerView: FSPagerView) -> Int {
//    return numberOfItems
//}
//
//public func pagerView(_ pagerView: FSPagerView, cellForItemAt index: Int) -> FSPagerViewCell {
//    let cell = pagerView.dequeueReusableCell(withReuseIdentifier: "cell", at: index)
//    cell.imageView?.image = ...
//    cell.textLabel?.text = ...
//    return cell
//}

/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

@end
