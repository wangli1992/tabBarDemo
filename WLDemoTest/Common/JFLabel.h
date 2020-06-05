//
//  JFLabel.h
//  WLDemoTest
//
//  Created by wangli on 2020/6/3.
//  Copyright © 2020 wangli. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef enum
{
    VerticalAlignmentTop = 0, // default
    VerticalAlignmentMiddle,
    VerticalAlignmentBottom,
} VerticalAlignment;
@interface JFLabel : UILabel
{
      
@private VerticalAlignment _verticalAlignment;
}  
@property (nonatomic) VerticalAlignment verticalAlignment;
@end

NS_ASSUME_NONNULL_END
