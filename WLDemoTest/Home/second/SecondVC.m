//
//  SecondVC.m
//  WLTest
//
//  Created by wangli on 2017/11/25.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "SecondVC.h"
#import "ThirdVC.h"
#import "SecondeCell.h"
@interface SecondVC ()<ThirdPageDelegate>
{
    NSMutableArray *boolArr;
    NSMutableArray *bigArr;
    BOOL flag[3];
}

@end

@implementation SecondVC
- (IBAction)nextPage:(id)sender {
    ThirdVC  *tvc = [[ThirdVC alloc]init];
    tvc.title  = @"第三页";
     tvc.delegate = self;
    tvc.block1 = ^(NSMutableArray *receiveArr){
        self.blockLab.text = [receiveArr lastObject];
    };
    [self.navigationController pushViewController:tvc animated:YES];
}
-(void)changeFrontPage:(NSString *)commnStr{
    self.receiveLab.text = commnStr;
}
- (void)viewDidLoad {
    [super viewDidLoad];
    self.myTableView.tableFooterView =  [[UIView alloc]initWithFrame:CGRectZero];
    self.myTableView.backgroundColor = [self colorWithHexString:@"#f3f4f6"];
  [self.myTableView registerNib:[UINib nibWithNibName:@"SecondeCell" bundle:nil] forCellReuseIdentifier:@"secondCell"];
    self.myTableView.rowHeight = 50;
    NSMutableArray *sectionArr1 = [[NSMutableArray alloc]initWithObjects:@"一区一行",@"一区二行",@"一区三行", nil];
     NSMutableArray *sectionArr2 = [[NSMutableArray alloc]initWithObjects:@"二区一行",@"二区二行",@"二区三行",@"二区三行", nil];
     NSMutableArray *sectionArr3 = [[NSMutableArray alloc]initWithObjects:@"三区一行",@"三区二行",@"三区三行", nil];
    bigArr = [NSMutableArray arrayWithObjects:sectionArr1 ,sectionArr2,sectionArr3, nil];
    boolArr = [NSMutableArray array];
    for(int i=0;i<bigArr.count;i++){
       
        [boolArr addObject:@"0"];
    }
}
-(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView{
    return 3;
}
-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    //BOOL isOpen = [boolArr[section] boolValue];
    if([boolArr[section] isEqualToString:@"1"]){
         return [bigArr[section] count];
    }else{
        return 0;
    }
   
}
-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
   SecondeCell *cell = [tableView dequeueReusableCellWithIdentifier:@"secondCell" forIndexPath:indexPath];
   //SecondeCell *cell = [SecondeCell cellWithTableView:tableView];
    
    cell.downBtn.tag = indexPath.row;
    [cell.downBtn addTarget:self action:@selector(extensionCellClick:) forControlEvents:UIControlEventTouchUpInside];
    return cell;
}
-(UIView *)tableView:(UITableView *)tableView viewForHeaderInSection:(NSInteger)section{
    UIView *headView = [[UIView alloc]init];
    headView.backgroundColor = [self colorWithHexString:@"#ffffff"];
    
    UIButton *butt = [UIButton buttonWithType:UIButtonTypeCustom];
    [butt setTitle:@"点击展开" forState:UIControlStateNormal];
    [butt setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
    butt.frame = CGRectMake(15, 7, 150, 30);
    butt.tag = section;
    butt.titleLabel.font = [UIFont systemFontOfSize:16];
    [butt addTarget:self action:@selector(cellExternClick:) forControlEvents:UIControlEventTouchUpInside];
    [headView addSubview:butt];
    return headView;
}
-(CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section{
    return 44;
}
//section click
-(void)cellExternClick:(UIButton *)btn{
    NSMutableArray *indexArray = [[NSMutableArray alloc]init];
    NSArray *arr = bigArr[btn.tag];
    for (int i = 0; i < arr.count; i ++) {
        NSIndexPath *path = [NSIndexPath indexPathForRow:i inSection:btn.tag];
        [indexArray addObject:path];
    }
    if([boolArr[btn.tag] isEqualToString:@"0"]){
        boolArr[btn.tag] = @"1";
        
      //[self.myTableView reloadRowsAtIndexPaths:indexArray withRowAnimation:UITableViewRowAnimationBottom];
    }else{
         boolArr[btn.tag] = @"0";
       //  [self.myTableView reloadRowsAtIndexPaths:indexArray withRowAnimation:UITableViewRowAnimationTop]; //使用下面注释的方法就 注释掉这一句
    }
   
    flag[btn.tag]= !flag[btn.tag];
     NSLog(@"tag zhi :%ld",btn.tag);
    [self.myTableView reloadData];
    //[boolArr[btn.tag] boolValue] = ![boolArr[btn.tag] boolValue];
}
-(void)extensionCellClick:(UIButton *)butt{
    
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
