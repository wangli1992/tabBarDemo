//
//  WLPageVC.m
//  WLDemoTest
//
//  Created by wangli on 2020/6/1.
//  Copyright © 2020 wangli. All rights reserved.
//
#define kDotW 16  //圆点的宽度
#define kMagrin 20 //圆点之间的间隔

#import "WLPageVC.h"

@implementation WLPageVC

//- (void) setCurrentPage:(NSInteger)page {
//
//    [super setCurrentPage:page];
//
//    for (NSUInteger subviewIndex = 0; subviewIndex < [self.subviews count]; subviewIndex++) {
//
//        UIImageView* subview = [self.subviews objectAtIndex:subviewIndex];
//
//        CGSize size;
//
//        size.height = 16;
//
//        size.width = 16;
//
//        [subview setFrame:CGRectMake(subview.frame.origin.x, subview.frame.origin.y,
//
//                                     size.width,size.height)];
//
//
//
//    }
//
//}
- (void)layoutSubviews
{
    [super layoutSubviews];
    
    //计算圆点尺寸和间距的长度
    CGFloat marginX = kDotW + kMagrin;

    //计算整个pageControll的宽度
    CGFloat newW = self.frame.size.width;//(self.subviews.count - 1 ) * magrin + self.subviews.count *dotW;

    //计算左边距
    CGFloat leftRight = (newW - ((self.subviews.count - 1 ) * kMagrin + self.subviews.count * kDotW)) / 2;

    //设置新frame
    self.frame = CGRectMake(self.frame.origin.x, self.frame.origin.y , newW, self.frame.size.height);
//    self.layer.cornerRadius = 9;
//    self.clipsToBounds = YES;



    //遍历subview,设置圆点frame
    for (int i=0; i<[self.subviews count]; i++) {
        UIImageView* dot = [self.subviews objectAtIndex:i];
        
        [dot setFrame:CGRectMake(i * marginX + leftRight, dot.frame.origin.y, kDotW, kDotW)];
        dot.clipsToBounds = YES;
        dot.layer.cornerRadius = kDotW/2;
    }
    
//    unsigned int count = 0;
//        // 获取成员变量数组
//        Ivar *ivarList = class_copyIvarList([UIPageControl class], &count);
//        for (NSInteger i = 0; i<count; i++) {
//
//            // 获取成员变量
//            Ivar ivar = ivarList[i];
//
//            // 获取成员变量名字
//            NSString *ivarName = [NSString stringWithUTF8String:ivar_getName(ivar)];
//
//            // 获取成员变量类型
//            NSString *ivarType = [NSString stringWithUTF8String:ivar_getTypeEncoding(ivar)];
//            NSLog(@"-----%@--%@",ivarName,ivarType);
//        }
    
     //系统的方法
//        Method origin = class_getInstanceMethod([UIPageControl class], sel_registerName("_indicatorSpacing"));
//        Method custom = class_getInstanceMethod([self class], sel_registerName("hyr_indicatorSpacing"));
//        //但是调用了私有的API方法，据说上传appstroe会被拒的
//        method_exchangeImplementations(origin, custom);
    

}
#pragma mark - 自定义方法来实现 圆点之间的距离  利用runtime交换方法
-(CGFloat)hyr_indicatorSpacing{
    return 30.0;
}




/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
