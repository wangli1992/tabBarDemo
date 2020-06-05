//
//  AppDelegate.m
//  WLDemoTest
//
//  Created by wangli on 2018/3/18.
//  Copyright © 2018年 wangli. All rights reserved.
//

#import "AppDelegate.h"
#import  "LoginVC.h"
#import "CustomTabbar.h"
#import "WebVC.h"
#import "WelComeVC.h"
#import "WLEngine.h"
//调试工具，上架时注掉
#import "FLEXManager.h"
@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
#if DEBUG
    [[FLEXManager sharedManager] showExplorer];
#endif
    // 1.创建窗口
    self.window = [[UIWindow alloc] init];
    self.window.frame = [UIScreen mainScreen].bounds;
    BOOL isLogin = [[UD objectForKey:@"isLogin"] isEqualToString:@"login"];
    NSLog(@"is login :%@",[UD objectForKey:@"isLogin"]);
    LoginVC *logVC = [[LoginVC alloc]init];
    CustomTabbar *tabbar = [[CustomTabbar alloc]init];
    NSString *lastVersion = [UD objectForKey:@"Version"];
    NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];//获取app版本信息
    NSString *currentVersion = [infoDictionary objectForKey:@"CFBundleShortVersionString"];
    if([lastVersion isEqualToString:currentVersion]){
        if(isLogin){
            self.window.rootViewController = tabbar;
            NSString *userName = [NSString stringWithFormat:@"t%@",[UD objectForKey:@"username"]];
            NSString *password = [UD objectForKey:@"password"];
            WLEngine *req = [[WLEngine alloc]init];
            [req doLogin:userName password:password];
        }else{
            self.window.rootViewController = logVC;
        }
    }else{
        //获取当前版本号
        [UD setObject:currentVersion forKey:@"Version"];
        [UD synchronize];
        WelComeVC *welCome = [[WelComeVC alloc]init];
        self.window.rootViewController = welCome;
        
    }
    
    // 3.显示窗口
    [self.window makeKeyAndVisible];
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    // Saves changes in the application's managed object context before the application terminates.
    [self saveContext];
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
    /*外部文件访问本应用,会传递参数过来*/
    NSLog(@"application = %@",application);
    NSLog(@"url = %@",url);
    //来源的 Bundle identifier
    NSLog(@"sourceApplication = %@",sourceApplication);
    NSLog(@"annotation = %@",annotation);
    if(url!=nil){
        NSString *path = [url absoluteString];
        NSMutableString *string = [[NSMutableString alloc] initWithString:path];
        if ([path hasPrefix:@"file://"]) {
            [string replaceOccurrencesOfString:@"file://" withString:@"" options:NSCaseInsensitiveSearch  range:NSMakeRange(0, path.length)];
            NSLog(@"string url ====%@",string);
            WebVC *web = [[WebVC alloc]init];
            web.url = url;
            //  [self.window.rootViewController presentViewController:web animated:YES completion:nil];
            self.window.rootViewController = web;
            
            // WebVC *web = (WebVC *)self.window.rootViewController;
            // [web  handleDocumentOpenURL:url];
            
        }
        
        //  [self.viewController openPng:string];
    }
    return YES;
}


#pragma mark - Core Data stack

@synthesize persistentContainer = _persistentContainer;

- (NSPersistentContainer *)persistentContainer {
    // The persistent container for the application. This implementation creates and returns a container, having loaded the store for the application to it.
    @synchronized (self) {
        if (_persistentContainer == nil) {
            _persistentContainer = [[NSPersistentContainer alloc] initWithName:@"WLDemoTest"];
            [_persistentContainer loadPersistentStoresWithCompletionHandler:^(NSPersistentStoreDescription *storeDescription, NSError *error) {
                if (error != nil) {
                    // Replace this implementation with code to handle the error appropriately.
                    // abort() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
                    
                    /*
                     Typical reasons for an error here include:
                     * The parent directory does not exist, cannot be created, or disallows writing.
                     * The persistent store is not accessible, due to permissions or data protection when the device is locked.
                     * The device is out of space.
                     * The store could not be migrated to the current model version.
                     Check the error message to determine what the actual problem was.
                     */
                    NSLog(@"Unresolved error %@, %@", error, error.userInfo);
                    abort();
                }
            }];
        }
    }
    
    return _persistentContainer;
}

#pragma mark - Core Data Saving support

- (void)saveContext {
    NSManagedObjectContext *context = self.persistentContainer.viewContext;
    NSError *error = nil;
    if ([context hasChanges] && ![context save:&error]) {
        // Replace this implementation with code to handle the error appropriately.
        // abort() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
        NSLog(@"Unresolved error %@, %@", error, error.userInfo);
        abort();
    }
}

@end
