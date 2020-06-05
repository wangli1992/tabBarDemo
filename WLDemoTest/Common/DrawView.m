//
//  DrawView.m
//  WLDemoTest
//
//  Created by wangli on 2020/5/29.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "DrawView.h"

@implementation DrawView


// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
    NSLog(@"draw rect");
   // [self.layer addSublayer:self.bottomMaskLayer];
}

- (CAGradientLayer *)bottomMaskLayer {
    if (!_bottomMaskLayer) {
        _bottomMaskLayer = [CAGradientLayer layer];
        _bottomMaskLayer.frame =  CGRectMake(3*screen_width+screen_width/2-75, screen_height-260, 150, 50);//self.bounds;
        _bottomMaskLayer.colors = [NSArray arrayWithObjects:(id)[[UIColor colorWithHexString:@"#2bcab2"]CGColor],(id)[[UIColor colorWithHexString:@"#2078F5"]CGColor], nil];
        _bottomMaskLayer.startPoint = CGPointMake(0, .5);
        _bottomMaskLayer.endPoint = CGPointMake(1, .5);
       // _bottomMaskLayer.borderWidth  = 1.0;
    }
    return _bottomMaskLayer;
}


@end
