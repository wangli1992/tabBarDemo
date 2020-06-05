//
//  Util.m
//  WLDemoTest
//
//  Created by wangli on 2020/5/27.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "Util.h"

@implementation Util

//根据不同的文本来获取label的高度
+(CGSize)getTextHeightWithText:(NSString *)text andFont:(UIFont *)font width:(CGFloat)width{
    
    CGSize Size = [text boundingRectWithSize:CGSizeMake(width, MAXFLOAT)
                                     options:NSStringDrawingTruncatesLastVisibleLine  | NSStringDrawingUsesLineFragmentOrigin | NSStringDrawingUsesFontLeading
                                  attributes:@{ NSFontAttributeName:font}
                                     context:nil].size;
    return Size;
    
}
//获取颜色渐变的图片
+(UIImage *)getColorChangeImageWithSize:(CGSize)size withView:(UIView *)smalView WithColors:(NSArray <UIColor *> *)colors withBeginPoint:(CGPoint)startPoint withEndPoint:(CGPoint)endPoint {
    UIView *bigView = [[UIView alloc]init];
    bigView.bounds  = CGRectMake(0, 0,size.width , size.height);
    
    CAGradientLayer *bottomMaskLayer = [CAGradientLayer layer];
    bottomMaskLayer.frame =  bigView.bounds;
    bottomMaskLayer.colors =  colors;//[NSArray arrayWithObjects:(id)[[UIColor colorWithHexString:@"#2bcab2"]CGColor],(id)[[UIColor colorWithHexString:@"#2078F5"]CGColor], nil];
    bottomMaskLayer.startPoint = startPoint;//CGPointMake(0, 0.5);
    bottomMaskLayer.endPoint = endPoint;//CGP
    
    [bigView.layer addSublayer:bottomMaskLayer];
    
    //是否在big view上套一层 看实际情况
    if(smalView){
        
        [ bigView addSubview:smalView];
    }
      
    
    //生成图片 yykit
    UIImage *img = [bigView snapshotImage];
    
    return img;
    
    
}




@end
