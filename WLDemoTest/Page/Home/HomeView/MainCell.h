//
//  MainCell.h
//  WLDemoTest
//
//  Created by wangli on 2020/6/3.
//  Copyright © 2020 wangli. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol MainCellDelegate <NSObject>

@optional
-(void)clickMenu:(NSInteger)tag;

@end

@interface MainCell : UITableViewCell
@property(nonatomic,strong)UIImageView *menuImg;
@property(nonatomic,strong)UILabel *menuTitleLab;
@property(nonatomic,retain)NSMutableArray *cellArr;
@property(nonatomic,weak)id<MainCellDelegate> delegate;

@end

NS_ASSUME_NONNULL_END
