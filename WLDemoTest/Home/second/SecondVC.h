//
//  SecondVC.h
//  WLTest
//
//  Created by wangli on 2017/11/25.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "WLPublicVC.h"

@interface SecondVC : WLPublicVC<UITableViewDelegate,UITableViewDataSource>
@property (weak, nonatomic) IBOutlet UILabel *receiveLab;
@property (weak, nonatomic) IBOutlet UILabel *blockLab;
@property (weak, nonatomic) IBOutlet UITableView *myTableView;

@end
