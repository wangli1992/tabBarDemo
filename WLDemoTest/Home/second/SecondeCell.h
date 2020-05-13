//
//  SecondeCell.h
//  WLDemoTest
//
//  Created by wangli on 2018/3/18.
//  Copyright © 2018年 wangli. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface SecondeCell : UITableViewCell
@property (weak, nonatomic) IBOutlet UIButton *downBtn;
@property (weak, nonatomic) IBOutlet UILabel *titleLab;

+ (instancetype)cellWithTableView:(UITableView *)tableView;

@end
