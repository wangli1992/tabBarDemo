//
//  WebVC.h
//  WLDemoTest
//
//  Created by wangli on 2020/5/22.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "WLPublicVC.h"

NS_ASSUME_NONNULL_BEGIN

@interface WebVC : WLPublicVC
@property(nonatomic,copy)NSURL *url;

//- (void)handleDocumentOpenURL:(NSURL *)url ;
@end

NS_ASSUME_NONNULL_END
