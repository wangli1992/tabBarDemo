//
//  Person.m
//  WLDemoTest
//
//  Created by wangli on 2020/5/28.
//  Copyright © 2020 wangli. All rights reserved.
//

#import "Person.h"

@implementation Person


//归档，Key建议使用宏代替，这里就不使用了
- (void)encodeWithCoder:(NSCoder *)aCoder {
    [aCoder encodeObject:self.name forKey:@"name"];
    [aCoder encodeInteger:self.age forKey:@"age"];
   
}

//解档
-(instancetype)initWithCoder:(NSCoder *)aDecoder {
    if (self=[super init]) {
        self.name = [aDecoder decodeObjectForKey:@"name"];
        self.age = [aDecoder decodeIntegerForKey:@"age"];
    }
    return self;
}

//类方法，运用NSKeyedArchiver归档数据
+(void)savePerson:(Person *)person {
    NSString *docPath = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES).lastObject;
    NSString *path=[docPath stringByAppendingPathComponent:@"Person.plist"];
    [NSKeyedArchiver archiveRootObject:person toFile:path];
}

//类方法，使用NSKeyedUnarchiver解档数据
+(Person *)getPerson {
    NSString *docPath = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES).lastObject;
    NSString *path=[docPath stringByAppendingPathComponent:@"Person.plist"];
    Person *person = [NSKeyedUnarchiver unarchiveObjectWithFile:path];
    return person;
}

@end
