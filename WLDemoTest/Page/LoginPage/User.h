//
//  User.h
//  WLTest
//
//  Created by wangli on 2017/11/29.
//  Copyright © 2017年 wangli. All rights reserved.
//////////******用户类

#import <Foundation/Foundation.h>
//#import "Classes.h"
#import "School.h"

//#import "SaveUser.h"
@interface User : NSObject

@property(nonatomic,assign)int WALKING_COURSE_OPENSE;//走班考勤权限
@property(nonatomic,assign)int AUTH_SCHLFAMILY_ITERACTION;//家校互动
@property(nonatomic,assign)int AUTH_TERMINAL_MANAGE ;//教务管理权限
@property(nonatomic,assign)int  AUTH_KINDERGARTEN_STATUS;//宝宝视频
@property(nonatomic,assign)int AUTH_WALKCOURSE;//走班课
@property(nonatomic,assign)int Student_Clock;
@property(nonatomic,assign)int Teacher_Clock;
@property(nonatomic,assign)int isClassGroupingManage;
@property(nonatomic,assign)int Teacher_Attend;

@property(nonatomic,copy)NSString *instruction;
@property(nonatomic,assign)int  rolename; //角色 3老师 4家长 2学生 1管理员
@property(nonatomic,copy)NSString *sex;
@property(nonatomic,copy)NSString *classname;
@property(nonatomic,assign) int Face_Card ;
@property(nonatomic,assign) int PhotoSet_Card;
@property(nonatomic,copy)NSString *name;
@property(nonatomic,assign)int Id;
@property(nonatomic,retain)NSMutableArray *classes; //model 中包含模型数组 需要声明模型这个类
@property(nonatomic,retain)School *school;//mj model中包含model


@property(nonatomic,copy)NSString *userName;//用户名
@property(nonatomic,assign) int userId;//用户ID；
@property(nonatomic,copy)NSString *email;//电子邮件
@property(nonatomic,copy)NSString *phoneNumber;//联系方式
@property(nonatomic,copy)NSString *gender;//性别
@property(nonatomic,copy)NSString *birthday;//出生年月
@property(nonatomic,copy)NSString *comeSchoolDate;//入学时间
@property(nonatomic,copy)NSString *avatar;//用户头像
@property(nonatomic,assign) int type;//用户类型；
@property(nonatomic,copy)NSString *usersig;
@property(nonatomic,copy)NSString *logo;
@end
