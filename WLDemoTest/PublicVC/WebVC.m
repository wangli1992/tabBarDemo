//
//  WebVC.m
//  WLDemoTest
//
//  Created by wangli on 2020/5/22.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "WebVC.h"
#import <WebKit/WebKit.h>
@interface WebVC ()
@property (nonatomic, strong) WKWebView *wkWebView;
@property (strong, nonatomic) UIWebView *webView; //用来显示文件
@end

@implementation WebVC


-(WKWebView *)webView{
    if(!_wkWebView){
         //初始化wkwebview
            _wkWebView = [[WKWebView alloc] initWithFrame:CGRectMake(0, 0,screen_width, screen_height)];
            //添加到view中
         
            //获取bundlePath 路径
            NSString *bundlePath = [[NSBundle mainBundle] bundlePath];
            //获取本地html目录 basePath
           // NSString *basePath = [NSString stringWithFormat: @"%@/www", bundlePath];
            //获取本地html目录 baseUrl
            NSURL *baseUrl = [NSURL fileURLWithPath: self.url isDirectory: YES];
           // NSLog(@"%@", baseUrl);
            //html 路径
          //  NSString *indexPath = [NSString stringWithFormat: @"%@/main.html", basePath];
            //html 文件中内容
            NSString *indexContent = [NSString stringWithContentsOfFile:
            self.url encoding: NSUTF8StringEncoding error:nil];
        NSLog(@"web --- url :%@",self.url);
            //显示内容
            [_wkWebView loadHTMLString: indexContent baseURL: baseUrl];
    
      
    }
    return _wkWebView;
}
- (void)viewDidLoad {
    [super viewDidLoad];
    //[self.view addSubview:self.webView];
    self.view.backgroundColor = [UIColor whiteColor];
    NSLog(@"web view");
    [self handleDocumentOpenURL:self.url];
    // Do any additional setup after loading the view.
}
- (void)handleDocumentOpenURL:(NSURL *)url {
//    _webView = [[UIWebView alloc]initWithFrame:self.view.bounds];
//   // _webView.delegate = self;
//    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
//    [_webView setUserInteractionEnabled:YES];
//    [_webView loadRequest:requestObj];
//    [_webView setScalesPageToFit:YES];
//    [self.view addSubview:_webView];
    
     _wkWebView = [[WKWebView alloc] initWithFrame:CGRectMake(0, 0,screen_width, screen_height)];
     NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    //[_wkWebView set]
    _wkWebView.allowsBackForwardNavigationGestures = YES;
     [_wkWebView goBack];
    [_wkWebView loadRequest:requestObj];
    
    [self.view addSubview:_wkWebView];
    
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
