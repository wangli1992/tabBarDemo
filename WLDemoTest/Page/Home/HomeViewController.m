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
#import <WebKit/WebKit.h>
#import "MRDLNA.h"
#import "HomeTableCell.h"
#import "HomeCellModel.h"
#import "Person.h"
@interface HomeViewController ()<DLNADelegate,UITableViewDelegate,UITableViewDataSource,DZNEmptyDataSetSource, DZNEmptyDataSetDelegate>

typedef void (^myBlock1)(void);//定义一个无参数无返回值的block
typedef void (^myBlock2)(int a);//定义一个有参数无返回值的block
typedef int (^myBlock3)(int a);//定义一个有参数有返回值的block

@property(nonatomic,strong)NSMutableArray *userArr;
@property(nonatomic,copy)myBlock1 block1;
@property(nonatomic,copy)myBlock2 block2;
@property(nonatomic,copy)myBlock2 block3;
@property (nonatomic, strong) WKWebView *webView;
@property(nonatomic,strong)UITableView *myTableView;

@property(nonatomic,strong)MRDLNA *dlnaManager;
@property(nonatomic,strong)NSArray *deviceArr;

@property (weak, nonatomic) IBOutlet UIButton *searchBtn;
@property (weak, nonatomic) IBOutlet UIButton *throwBtn;
@property(nonatomic,retain)NSMutableArray *numArr;

@property(nonatomic,copy) NSString *username;

@property(nonatomic,retain)NSArray *infoArr;

@property(nonatomic,strong)NSMutableArray *receiveInfoArr;

@end

@implementation HomeViewController
@synthesize userArr;
//重写set方法
-(void)setUsername:(NSString *)username{
    
    _username = username;
    NSLog(@"重写了set name 方法：%@",username);
    NSLog(@"重写了set name 方法：%@",_username);
    
}
-(NSMutableArray *)receiveInfoArr{
    if(!_receiveInfoArr){
        _receiveInfoArr = [[NSMutableArray alloc]init];
        for(NSDictionary *dic in self.infoArr){
            HomeCellModel *model = [HomeCellModel mj_objectWithKeyValues:dic];
            NSLog(@"model:%@",model.title);
            
            CGFloat cellHeight = [Util getTextHeightWithText:model.content andFont:[UIFont systemFontOfSize:16] width:screen_width-150].height + 85;
            model.rowHeight = cellHeight>130?cellHeight:130;
            [_receiveInfoArr addObject:model];
            
        }
    }
    return _receiveInfoArr;
}

-(NSArray *)infoArr{
    if(!_infoArr){
       // _infoArr = [[NSArray alloc]init];
        _infoArr = @[@{@"title":@"这个是一个简单的demo1",@"content":@"爱德华发电恢复好的啊哈东风浩荡啊打发逢阿道夫 奥科吉代付款",@"imgUrl":@""},@{@"title":@"这个是一个简单的demo2",@"content":@"爱德华发电恢复好的啊哈东风浩荡啊打发逢阿道夫 奥科吉代付款爱很简单发货京东方嗷嗷的发活动经费 打发付款啊电费卡就安静的看法发动机可",@"imgUrl":@""},@{@"title":@"这个是一个简单的demo3",@"content":@"爱德华发电恢复好的啊哈东风浩荡啊打发逢阿道夫 奥科吉代付款大家发酵安静的发挥安静的合法的风景 ad回复就花打飞机安徽的风景发就",@"imgUrl":@""},@{@"title":@"这个是一个简单的demo4",@"content":@"dahdhdhhhj暗示法干家的房卡的附近ad附近咖啡 爱德华发电恢复好的啊哈东风浩荡啊打发逢阿道夫 奥科吉代付款",@"imgUrl":@""}];
    }
    return _infoArr;
}

-(UITableView *)myTableView{
    if(_myTableView==nil){
        _myTableView = [[UITableView alloc]initWithFrame:CGRectZero style:UITableViewStylePlain];
        _myTableView.tableFooterView = [[UIView alloc]initWithFrame:CGRectZero];
      //  _myTableView.rowHeight = 200;
        _myTableView.delegate = self;
        _myTableView.dataSource = self;
       // UIEdgeInsets inSet = UIEdgeInsetsMake(0, 0, 0, 0);
        _myTableView.contentInsetAdjustmentBehavior =  UIScrollViewContentInsetAdjustmentNever;
        _myTableView.emptyDataSetSource = self;
        _myTableView.emptyDataSetDelegate = self;
        [_myTableView registerClass:[HomeTableCell class] forCellReuseIdentifier:@"homeCell"];
    }
    return _myTableView;
}
-(void)viewWillAppear:(BOOL)animated{
  
}
-(void)viewWillDisappear:(BOOL)animated{
  
}
#pragma mark  搜索设备
- (IBAction)searchDevice:(UIButton *)sender {
    self.username = @"张三";
   [self.dlnaManager startSearch];
    
}
//投屏
- (IBAction)throwScreen:(UIButton *)sender {
    self.dlnaManager = [MRDLNA sharedMRDLNAManager];
    [self.dlnaManager startDLNA];
}

//发现设备后在代理中可以拿到
- (void)searchDLNAResult:(NSArray *)devicesArray{
    NSLog(@"发现设备");
    NSLog(@"device Array:%@",devicesArray);
    self.deviceArr = devicesArray;
    [_myTableView reloadData];
   // [self.dlnaTable reloadData];
}


- (void)viewDidLoad {
    [super viewDidLoad];
    self.dlnaManager = [MRDLNA sharedMRDLNAManager];
    self.dlnaManager.delegate = self;
   
    [self.view addSubview:self.myTableView];
    [self.myTableView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.right.bottom.equalTo(self.view);
        make.top.equalTo(self.searchBtn.mas_bottom).offset(10);
    }];
    
/*******ViewController.m*******/

    //创建Person对象
    Person *person = [Person new];
    person.name = @"jack";
    person.age = 17;
    //归档保存数据
    [Person savePerson:person];
    //解档拿到数据
    Person *resultPerson = [Person getPerson];
    //打印出结果，证明归档解档成功
    NSLog(@"name = %@, age = %ld",resultPerson.name,resultPerson.age);

    
    
    
   
   
   // self.title = @"首页";
    
//   static int a = 20;
//    a= 30;
//    self.block1 = ^{
//       __block a = 40;
//        NSLog(@"a-----%d",a);
//    };
//    a= 25;
//    self.block1();
    
//    NSString *str = @"123456";
//    str.md5String;
  //  d.md5String;
   // str.md5String;
  

//    User *member = [[User allObjects] objectAtIndex:0];
//    //NSString  *name = [UD objectForKey:FilePath];
//    NSString *userInfo = member.phoneNumber;
//    NSLog(@"用户信息:%@--%@",userInfo,member);
    
    
   
 
    
}
- (IBAction)gotoNextPage:(UIButton *)sender {
    SecondVC *svc = [[SecondVC alloc]init];
    svc.title = @"第二页";
   //  [self.view addSubview: self.webView];
    [self.navigationController pushViewController:svc animated:YES];
   
}

#pragma mark tableviewDatasource
-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    NSLog(@"count :%ld",self.receiveInfoArr.count);
    return  0;//self.receiveInfoArr.count;
}
-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    static NSString *indentifier = @"homeCell";
   HomeTableCell *cell = [tableView dequeueReusableCellWithIdentifier:indentifier];

   cell.model = self.receiveInfoArr[indexPath.row];
    
    return cell;
}
-(CGFloat) tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
    HomeCellModel *model = self.receiveInfoArr[indexPath.row];
    return model.rowHeight;
}

- (UIImage *)imageForEmptyDataSet:(UIScrollView *)scrollView {
    return [UIImage imageNamed:@"no_message"];
}
//空白页显示标题
- (NSAttributedString *)titleForEmptyDataSet:(UIScrollView *)scrollView {
    NSString *title = @"暂无数据";
    NSDictionary *attributes = @{
                                 NSFontAttributeName:[UIFont boldSystemFontOfSize:18.0f],
                                 NSForegroundColorAttributeName:[UIColor darkGrayColor]
                                 };
    return [[NSAttributedString alloc] initWithString:title attributes:attributes];
}
//设置空白部分背景色
- (UIColor *)backgroundColorForEmptyDataSet:(UIScrollView *)scrollView {
    UIColor *appleGreenColor =   [UIColor colorWithHexString:@"#f3f4f6"];//[UIColor colorWithRed:199/255.0 green:237/255.0 blue:204/255.0 alpha:1.0];
    return appleGreenColor;
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
