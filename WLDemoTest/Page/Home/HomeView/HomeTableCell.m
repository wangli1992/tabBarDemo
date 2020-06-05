//
//  HomeTableCell.m
//  WLDemoTest
//
//  Created by wangli on 2020/5/23.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "HomeTableCell.h"

@implementation HomeTableCell

- (void)awakeFromNib {
    [super awakeFromNib];
    // Initialization code
}
-(instancetype)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier{
  self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
    if(self){

       [self.contentView addSubview:self.headImg];
        
         [self.contentView addSubview:self.titleLab];

         [self.contentView addSubview:self.contentLab];
        
         [self updateUI] ;
        
    }
    return self;
}
-(void)updateUI{
    //head image
    [self.headImg mas_makeConstraints:^(MASConstraintMaker *make) {
        make.size.mas_equalTo(CGSizeMake(100, 100));
        //make.center.equalTo(self.contentView);
        make.left.equalTo(self.contentView).with.offset(15);
       make.centerY.equalTo(self.contentView.mas_centerY);
    }];
    
    //title label
    [self.titleLab mas_makeConstraints:^(MASConstraintMaker *make) {

        make.top.equalTo(self.contentView).with.offset(20);
        make.right.equalTo(self.contentView).with.offset(-15);
        make.left.equalTo(self.headImg.mas_right).offset(15);
        make.height.mas_equalTo(25);
    }];
    
    //content label
    [self.contentLab mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(self.titleLab.mas_bottom).offset(10);
        make.left.equalTo(self.headImg.mas_right).offset(15);
        make.right.equalTo(self.contentView).with.offset(-15);
       // make.bottom.equalTo(self.contentView).with.offset(-20);

    }];

}
-(UIImageView *)headImg{
    if(_headImg==nil){
        _headImg = [[UIImageView alloc]initWithFrame:CGRectZero];
        _headImg.image = [UIImage imageNamed:@"timg.jpeg"];
    }
    return _headImg;
    
}
-(UILabel *)titleLab{
    if(_titleLab==nil){
        _titleLab = [[UILabel alloc]initWithFrame:CGRectZero];
        _titleLab.font = [UIFont systemFontOfSize:17];
        _titleLab.textColor = [UIColor colorWithHexString:@"#111111"];
        _titleLab.text = self.model.title;
    }
    return _titleLab;
}

-(UILabel *)contentLab{
    if(_contentLab ==nil){
                
        _contentLab = [[UILabel alloc]initWithFrame:CGRectZero];
        _contentLab.textColor = [UIColor colorWithHexString:@"#666666"];
        _titleLab.font = [UIFont systemFontOfSize:16];
        _contentLab.numberOfLines = 0;
    }
    return _contentLab;
}

-(void)setModel:(HomeCellModel *)model{
    _model = model;
    self.titleLab.text = model.title;
    self.contentLab.text = model.content;
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end
