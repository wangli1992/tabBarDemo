//
//  SecondeCell.m
//  WLDemoTest
//
//  Created by wangli on 2018/3/18.
//  Copyright © 2018年 wangli. All rights reserved.
//

#import "SecondeCell.h"

@implementation SecondeCell

- (void)awakeFromNib {
    [super awakeFromNib];
    // Initialization code
}
+ (instancetype)cellWithTableView:(UITableView *)tableView {
    
    SecondeCell *cell = [tableView dequeueReusableCellWithIdentifier:@"secondeCell"];
    
    if (cell == nil) {
        cell = [[[NSBundle mainBundle] loadNibNamed:@"SecondeCell" owner:nil options:nil] firstObject];
    }
    return cell;
}
- (void)setFrame:(CGRect)frame{
    frame.origin.x += 10;
    frame.origin.y += 10;
    frame.size.height -= 20;
    frame.size.width -= 20;
    [super setFrame:frame];
}



- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end
