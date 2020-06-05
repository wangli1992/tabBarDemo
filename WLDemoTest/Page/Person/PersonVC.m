//
//  PersonVC.m
//  WLTest
//
//  Created by wangli on 2017/11/23.
//  Copyright © 2017年 wangli. All rights reserved.
//

#import "PersonVC.h"
#import "SafeManageVC.h"
#import "LoginVC.h"

@interface PersonVC ()
{
    
}

@end

@implementation PersonVC

- (void)viewDidLoad {
    [super viewDidLoad];
    NSLog(@"hello world ");
    //self.title = @"个人中心";
    //[self openSerial];//串行队列
    // [self openAsyncSerial];//并行队列
    [self GCD];
}
- (IBAction)nextPage:(id)sender {
    SafeManageVC *safeVc = [[SafeManageVC alloc]init];
    safeVc.title  =  @"账户安全";
    [self.navigationController pushViewController:safeVc animated:YES];
}
- (IBAction)logout:(id)sender {
    
    NetworkRequest *req = [NetworkRequest new];
    [req logoutWithCtrl:self withCallBack:^(id dataString) {
        NSLog(@"datastring:%@",dataString);
        NSInteger result = [dataString[@"result"] integerValue];
        NSLog(@"succeed:%@",dataString[@"result"]);
        [UD setObject:@"logout" forKey:@"isLogin"];
        [UD synchronize];
        LoginVC *login = [[LoginVC alloc]init];
        [self clearLocationUser];
        login.modalPresentationStyle = UIModalPresentationFullScreen;
        [self presentViewController:login animated:YES completion:nil];
        
    }];
    
}
#pragma mark 串行队列
-(void)openSerial{
    //队列 串行队列
    //第一个参数：是队列的标示符，一般是域名倒写+队列名
    //第二个参数是：队列的类型
    dispatch_queue_t serialQueue = dispatch_queue_create("com.xgenban.serialQueue", DISPATCH_QUEUE_SERIAL);
    dispatch_queue_t serialQueue2 = dispatch_queue_create("com.xgenban.serialQueue2", DISPATCH_QUEUE_SERIAL);
    //第一个参数:队列对象 第二个参数是队列执行的任务
    //同步执行
    //    dispatch_sync(serialQueue, ^{
    //         NSLog(@"111开始执行的操作");
    //          [NSThread sleepForTimeInterval:3];
    //        NSLog(@"111当前线程是:%@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
    //        NSLog(@"111执行结束");
    //    });
    //    dispatch_sync(serialQueue2, ^{
    //
    //        NSLog(@"112这就是队列执行的操作");
    //        [NSThread sleepForTimeInterval:3];
    //
    //        NSLog(@"112当前线程是 %@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
    //
    //        NSLog(@"112执行结束");
    //    });
    
    //异步执行
    dispatch_async(serialQueue, ^{
        
        NSLog(@"221开始执行的操作");
        [NSThread sleepForTimeInterval:3];
        NSLog(@"221当前线程是:%@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
        NSLog(@"221执行结束");
    });
    
    dispatch_async(serialQueue, ^{
        
        NSLog(@"222开始执行的操作");
        //[NSThread sleepForTimeInterval:3];
        
        NSLog(@"222当前线程是:%@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
        NSLog(@"222执行结束");
    });
    //异步执行
    dispatch_async(serialQueue2, ^{
        NSLog(@"333即将执行的操作");
        NSLog(@"333开始执行的操作");
        NSLog(@"333当前线程是:%@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
        NSLog(@"333执行结束");
    });
    
    
    
    //总结
    //串行队列:异步执行时 ,对于同一个队列,只有当上个任务执行完成时,才能执行下一个任务,对于不同队列之间 是同时执行的;同步执行时 :不管是同一个队列,还是不同的队列,都是等上一个队列执行完毕才执行下一个任务,
    //同步执行 不具备开启分线程的能力
    
    //不能开启大量的串行队列
}

//并行队列
-(void)openAsyncSerial
{
    
    dispatch_queue_t concurrentQueue = dispatch_queue_create("com.517lng.concurrentQueue", DISPATCH_QUEUE_CONCURRENT);
    dispatch_queue_t concurrentQueue2 = dispatch_queue_create("com.517lng.concurrentQueue", DISPATCH_QUEUE_CONCURRENT);
    //同步执行
    //    dispatch_sync(concurrentQueue, ^{
    //        NSLog(@"同步执行并行队列任务1·");
    //         [NSThread sleepForTimeInterval:3];
    //           NSLog(@"任务1当前是 %@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
    //        NSLog(@"同步执行异步队列完成");
    //    });
    //    dispatch_sync(concurrentQueue, ^{
    //         NSLog(@"同步执行并行队列任务2");
    //            NSLog(@"任务2当前是 %@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
    //         NSLog(@"同步执行异步队列完成");
    //     });
    
    //并行队列 同步执行没有意义
    //异步执行
    dispatch_async(concurrentQueue, ^{
        NSLog(@"111异步执行并行队列");
        
        [NSThread sleepForTimeInterval:3];
        NSLog(@"111当前是 %@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
        
        NSLog(@"111 执行结束");
    });
    dispatch_async(concurrentQueue, ^{
        NSLog(@"112异步执行并行队列");
        
        
        NSLog(@"112当前是 %@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
        
        NSLog(@"112 执行结束");
    });
    
    //    dispatch_async(concurrentQueue2, ^{
    //        NSLog(@"222同步执行并行队列");
    //
    //
    //        NSLog(@"222当前是 %@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
    //
    //        NSLog(@"222 执行结束");
    //    });
    //
    //    dispatch_async(concurrentQueue2, ^{
    //        NSLog(@"223同步执行并行队列");
    //
    //
    //        NSLog(@"223当前是 %@",[[NSThread currentThread] isMainThread]?@"主线程":@"分线程");
    //
    //        NSLog(@"223 执行结束");
    //    });
    
    /*
     总结：
     对于并行队列（concurrentQueue）：
     1，使用同步执行dispatch_sync，没有意义，都是同步执行的,都在主线程中操作。
     
     2，使用异步执行dispatch_async，不管是同一个队列还是多个队列之间都是并行的关系，也就是同时执行。
     */
    
}
//其他队列
-(void)GCD{
    //全局队列
    //    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    //
    //        NSLog(@"做一些费时操作");
    //        NSLog(@"全局队列，当前线程h是:%@",[[NSThread currentThread]isMainThread] ?@"主线程":@"分线程");
    //        [NSThread sleepForTimeInterval:3];
    //        for(int i=0;i<5;i++){
    //            NSLog(@"i====%d",i);
    //        }
    //        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    //            NSLog(@"全局队列里在开一个全局的队列");
    //        });
    //
    //        //异步操作回到主线程
    //        dispatch_async(dispatch_get_main_queue(), ^{
    //            NSLog(@"回到主线程 刷新UI");
    //        });
    //
    //    });
    
    //队列组 比如我们要task1 task2 task3 都运行完成后才能异步运行task4 task5 task6我们该怎么做呢？这里我们可以引入group的概念
    //1.创建一个全局队列
    dispatch_queue_t globalQ = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
    dispatch_group_t group = dispatch_group_create();//创建队列组
    // 2. 串行队列
    dispatch_queue_t concurrencyQueue = dispatch_queue_create("myqueue",DISPATCH_QUEUE_SERIAL);
    
    dispatch_group_async(group, concurrencyQueue, ^{
        NSLog(@"task 1 \n");
    });
    [NSThread sleepForTimeInterval:3];
    dispatch_group_async(group, concurrencyQueue, ^{
        
        NSLog(@"task 2 \n");
        
        NSLog(@"队列zu，当前线程h是:%@",[[NSThread currentThread]isMainThread]?@"主线程":@"分线程");
    });
    [NSThread sleepForTimeInterval:3];
    dispatch_group_async(group, concurrencyQueue, ^{
        NSLog(@"task 3 \n");
    });
    
    //4. 都完成后会自动通知
    
    dispatch_group_notify(group, dispatch_get_main_queue(), ^{
        
        //主线程刷新数据
        
        NSLog(@"完成 - %@", [NSThread currentThread]);
        
    });
    
    //    NSLog(@"waite 1 2 3");
    //  dispatch_group_wait(group, DISPATCH_TIME_FOREVER);//等待
    //
    //    dispatch_group_async(group, globalQ, ^{
    //        NSLog(@"task 4 \n");
    //
    //        NSLog(@"4444444");
    //                for(int i=0;i<5;i++){
    //                    NSLog(@"i====%d",i);
    //                }
    //    });
    //
    //    dispatch_group_async(group, globalQ, ^{
    //        NSLog(@"task 5 \n");
    //    });
    //
    //    dispatch_group_async(group, globalQ, ^{
    //        NSLog(@"task 6 \n");
    //    });
    //    dispatch_group_wait(group, DISPATCH_TIME_FOREVER);
    //    NSLog(@"task 4 5 6 finished \n");
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

@end
