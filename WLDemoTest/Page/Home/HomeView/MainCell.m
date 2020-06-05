//
//  MainCell.m
//  WLDemoTest
//
//  Created by wangli on 2020/6/3.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "MainCell.h"

@implementation MainCell

- (void)awakeFromNib {
    [super awakeFromNib];
    // Initialization code
}
-(instancetype)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier{
  self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
    if(self){

//       [self.contentView addSubview:self.menuImg];
//        
//         [self.contentView addSubview:self.menuTitleLab];
//
//        // [self.contentView addSubview:self.contentLab];
//        
//        // [self updateUI] ;
        
        
    }
    return self;
}
-(void)setCellArr:(NSMutableArray *)cellArr{
    _cellArr = cellArr;
   NSLog(@"cell count %ld",_cellArr.count);
    [self.contentView removeAllSubviews];

    for(int i=0;i<_cellArr.count;i++){
        float x = (i%4)*screen_width/4.0;
        float y = (i/4)*screen_width/4.0 ;
        UIView *bgView = [[UIView alloc]init];
        bgView.tag = [_cellArr[i][@"tag"] intValue];
//         UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(tap)];
      //   __weak typeof(self) weakSelf = self;
        [bgView addTapBlock:^(UIView *obj) {
           // NSLog(@"----%ld，self==%@",obj.tag,weakSelf);
           //  [weakSelf.delegate clickMenu:obj.tag];//协议传值
            if([_delegate respondsToSelector:@selector(clickMenu:)]){
                [_delegate clickMenu:obj.tag];//协议传值
            }
            
        }];
        bgView.frame =CGRectMake(x, y, screen_width/4.0, screen_width/4.0);
      //  bgView.backgroundColor = [UIColor redColor];
       
        
        UIImageView *imgV = [[UIImageView alloc]init];
       imgV.image = [UIImage imageNamed:_cellArr[i][@"image"]];
        imgV.frame = CGRectMake( (bgView.bounds.size.width-WLScale(35))/2.0, 20, WLScale(35), WLScale(35));
        [bgView addSubview:imgV];
        

        UILabel *lab = [[UILabel alloc]init];
        lab.frame = CGRectMake(10, WLScale(60), bgView.bounds.size.width-20, 20);
        lab.text = _cellArr[i][@"title"];
        lab.textAlignment = NSTextAlignmentCenter;
        lab.font = [UIFont systemFontOfSize:WLScale(13)];
        lab.textColor = [UIColor colorWithHexString:@"#333333"];
        [bgView addSubview:lab];
        
         [self.contentView addSubview:bgView];
        
        
    }
}


- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end
