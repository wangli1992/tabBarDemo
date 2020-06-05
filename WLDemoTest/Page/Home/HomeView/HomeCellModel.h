//
//  HomeCellModel.h
//  WLDemoTest
//
//  Created by wangli on 2020/5/27.
//  Copyright © 2020 wangli. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface HomeCellModel : NSObject

@property(nonatomic,copy)NSString *title;
@property(nonatomic,copy) NSString *content;
@property(nonatomic,copy)NSString *imgUrl;
@property(nonatomic,assign)NSInteger rowHeight;
@end

NS_ASSUME_NONNULL_END
