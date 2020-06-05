//
//  HomeTableCell.h
//  WLDemoTest
//
//  Created by wangli on 2020/5/23.
//  Copyright © 2020 wangli. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "HomeCellModel.h"

NS_ASSUME_NONNULL_BEGIN

@interface HomeTableCell : UITableViewCell

@property(nonatomic,strong)UILabel *titleLab;
@property(nonatomic,retain)UIImageView *headImg;
@property(nonatomic,retain)UILabel *contentLab;
@property(nonatomic,retain)UIButton *favBtn;
@property(nonatomic,strong)HomeCellModel *model;
@end

NS_ASSUME_NONNULL_END
