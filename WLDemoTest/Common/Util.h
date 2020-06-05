//
//  Util.h
//  WLDemoTest
//
//  Created by wangli on 2020/5/27.
//  Copyright © 2020 wangli. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface Util : NSObject


+(CGSize)getTextHeightWithText:(NSString *)text andFont:(UIFont *)font width:(CGFloat)width;


//绘制图片
+(UIImage *)getColorChangeImageWithSize:(CGSize)size withView:(UIView *)smalView WithColors:(NSArray <UIColor *> *)colors withBeginPoint:(CGPoint)startPoint withEndPoint:(CGPoint)endPoint;
@end

NS_ASSUME_NONNULL_END
