/**
 * Created by hewz on 2016-07-19.
 */
angular.module('app.constants', [])
    .constant('Constant', {
        'debugMode': false,
        'versionCode': 10,
        'version': '1.0.0',
        //'ServerUrl': 'https://test17.xgenban.com/sctserver/mob',
        'ServerUrl': 'http://sbjg.y.jwjy.net:9090/sctserver/mob',
        //'IMAppID': 1400026815, //dev
        'IMAppID': 1400026570, //pro
        'serverTimeout': 30000,
        'heavyServerTimeout': 100000,
        'reqLimit': 10,
        'SMS_REQ_INTERVAL': 60,
        'CAPTURE_IMAGE_RANGE': 1080,
        'IM_USER_AVATAR': 'img/icon/person.png',
        'IM_GROUP_AVATAR': 'img/icon/group.png',
        'IMAccountType': 10559,
        'NEWS_STATUS': {
            'TEACHER_REVIEW': {
                'key': '3',
                'text': '教师审核中'
            },
            'TEACHER_REVIEW_PASS': {
                'key': '4',
                'text': '审核通过'
            },
            'ADMIN_REVIEW_PASS': {
                'key': '5',
                'text': '审核通过'
            },
            'TEACHER_IGNORE': {
                'key': '6',
                'text': '已拒绝'
            },
            'ADMIN_REVIEW': {
                'key': '7',
                'text': '管理员审核中'
            }
        },
        'USER_ROLES': {
            'STUDENT': '2',
            'TEACHER': '3',
            'PARENT': '4',
            'SCHOOL': '1'
        }
    })
    .constant('MESSAGES', {
        'CONNECT_ERROR': '请求失败',
        'DOWNLOAD_ERROR': '下载失败',
        'FEEDBACK_SUCCESS': '反馈成功',
        'SAVE_SUCCESS': '修改成功',
        'PUSH_ON_FAIL': '推送开启失败',
        'PUSH_ON_FAIL_REASON': '检测到系统设置中已禁止应用推送，请先在系统设置中勾选小跟班通知权限',
        'FEEDBACK_SUCCESS_MSG': '感谢您的建议和支持',
        'CONNECT_ERROR_MSG': '连接服务器失败,请检查网络连接',
        'CONNECT_TIMEOUT_MSG': '服务器连接超时，请重试',
        'SERVER_ERROR': '服务器异常,请稍后再试',
        'CONTACT_FETCH_FAIL': '通讯录获取失败',
        'NOT_FOUND': '未找到请求资源',
        'SESSION_TIMEOUT': '登录超时',
        'NEW_NOTICE': '发布成功',
        'NEW_NEWS': '发布成功, 待审核后可见',
        'NEW_NEWS_ADMIN': '发布成功',
        'INFO_UPDATED': '个人资料更新成功',
        'PWD_UPDATED': '密码修改成功。',
        'NO_THUMB': '请选择缩略图',
        'REMIND': '温馨提示',
        'NO_NAME': '请输入姓名',
        'NO_IMAGE_TO_CROP': '此文章未含图片',
        'NO_NEWS_TYPE': '请选择一项风采类型',
        'NO_TARGET_CLASS': '请选择可见班级',
        'NO_OLD_PASSWORD': '请输入当前密码',
        'NO_NEW_PASSWORD': '请输入新密码',
        'NO_CONFIRM_PASSWORD': '请再次输入密码',
        'PASSWORD_CONFIRM_ERROR': '两次输入的密码不一致',
        'LOGIN_ERROR': '登录失败',
        'OPERATE_ERROR': '操作失败',
        'REQUEST_ERROR': '请求失败',
        'BANXUN_UPDATE_OK': '班训设置成功',
        'BANXUN_UPDATE_FAIL': '班训设置失败',
        'AT_LEAST_IMAGE': '请至少上传一张正文图片',
        'NO_SN_NUM': '无法获取绑定设备号',
        'LOGIN_NO_USERNAME': '请输入登录手机号',
        'LOGIN_NO_PASSWORD': '请输入您的登录密码',
        'LOGIN_USERNAME_PATTERN': '您输入正确的手机号',
        'LOGIN_PASSWORD_PATTERN': '您输入的密码不符合规则，必须包含6位及以上字母和数字',
        'DEFAULT_BANXUN': '好好学习，天天向上。'
    })
    .constant('BroadCast', {
        'BADGE_UPDATE': 'BADGE_UPDATE',
        'NEW_PUSH_REV': 'NEW_PUSH_REV',
        'IMAGE_SELECTED': 'IMAGE_SELECTED',
        'IMAGE_CROP': 'IMAGE_CROP',
        'FEEDBACK': 'FEEDBACK',
        'EDIT_INFO': 'EDIT_INFO',
        'PASSWORD_CHANGE': 'PASSWORD_CHANGE',
        'CHILD_INFO_REV': 'CHILD_INFO_REV',
        'DIC_REV': 'DIC_REV',
        'CONNECT_ERROR': 'CONNECT_ERROR',
        'LOGIN_RESULT_RECEIVED': 'LOGIN_RESULT_RECEIVED',
        'NEW_NOTICE': 'NEW_NOTICE',
        'NEW_NEWS': 'NEW_NEWS',
        'NOTICE_LIST_REV': 'NOTICE_LIST_REV',
        'NEWS_LIST_REV': 'NEWS_LIST_REV',
        'NEWS_STATE_CHANGED': 'NEWS_STATE_CHANGED',
        'SEND_TO_ADMIN_RST': 'SEND_TO_ADMIN_RST',
        'ALLOW_PUBLISH_RST_REV': 'ALLOW_PUBLISH_RST_REV',
        'IGNORE_RST_REV': 'IGNORE_RST_REV',
        'BANNER_LIST_REV': 'BANNER_LIST_REV',
        'DELETE_NEWS_REV': 'DELETE_NEWS_REV',
        'CANCEL_PUBLISH_REV': 'CANCEL_PUBLISH_REV',
        'DELETE_NOTICE_REV': 'DELETE_NOTICE_REV',
        'TODAY_CLASS_LIST_REV': 'TODAY_CLASS_LIST_REV',
        'NEWS_TYPE_REV': 'NEWS_TYPE_REV',
        'CLASS_BANXUN_REV': 'CLASS_BANXUN_REV',
        'CLASS_BANXUN_UPDATE': 'CLASS_BANXUN_UPDATE',
        'CLASS_SCHEDULE_REV': 'CLASS_SCHEDULE_REV',
        'CLASS_MEMBER_REV': 'CLASS_MEMBER_REV',
        'CLASS_DUTY_MODIFIED': 'CLASS_DUTY_MODIFIED',
        'CLASS_DUTY_REV': 'CLASS_DUTY_REV',
        'ACCOUNT_REGISTER_COMPLETE': 'ACCOUNT_REGISTER_COMPLETE',
        'PASSWORD_RESET': 'PASSWORD_RESET',
        'SMS_SENT': 'IM_SMS_SENT',
        'IM_MSG_SENDING': 'IM_MSG_SENDING',
        'IM_MSG_SENT': 'IM_MSG_SENT',
        'IM_MSG_SEND_FAIL': 'IM_MSG_SEND_FAIL',
        'IM_IMAGE_SEND_FAIL': 'IM_IMAGE_SEND_FAIL',
        'IM_REV_CONTACTS': 'IM_REV_CONTACTS',
        'IM_RECENT_CONTACTS': 'IM_RECENT_CONTACTS',
        'IM_C2C_HISTORY_MESSAGE': 'IM_C2C_HISTORY_MESSAGE',
        'IM_GROUP_HISTORY_MESSAGE': 'IM_GROUP_HISTORY_MESSAGE',
        'IM_NEW_MESSAGE': 'IM_NEW_MESSAGE'
    });

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app.controllers', []);
angular.module('app', ['ionic', 'ngCordova', 'app.constants', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'app.requester',
    'jrCrop', 'monospaced.elastic', 'angular-intro', 'ionicImgCache', 'toaster', 'ionic-timepicker', 'ionic-datepicker', 'angular-timeline', 'pdfjsViewer', 'ionic-image-view','ion-gallery','templates'])
    .config(['ionGalleryConfigProvider', function(ionGalleryConfigProvider) {
        ionGalleryConfigProvider.setGalleryConfig({
                                action_label: 'Done',
                                toggle: false,
                                row_size: 3,
                                fixed_row_size: true
        });
      }])
    .run(['$ionicPlatform', 'PushService', '$ionicPopup', '$state', '$ionicHistory', 'SettingService', '$rootScope', function ($ionicPlatform, PushService, $ionicPopup, $state, $ionicHistory, SettingService, $rootScope) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                window.addEventListener('native.keyboardshow', function (keyboardParameters) {
                    document.body.classList.add('keyboard-open');
                    console.log(keyboardParameters);
                    $rootScope.keyboardHeight = keyboardParameters.keyboardHeight;
                });
            }
            if(window.cordova){
                window.MobileAccessibility.usePreferredTextZoom(false);
            }
            document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
                WeixinJSBridge.call('hideToolbar');
                WeixinJSBridge.call('hideOptionMenu');
            });

           
                              
            setTimeout(function () {
                if (navigator.splashscreen)
                    navigator.splashscreen.hide();
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleLightContent();
                }
                if (window.cordova) {
                    if (ionic.Platform.isIOS()) {
                       // MobclickAgent.init('57eb2f31e0f55ab9bd001a53', 'SCT-Official');
                    }else {
                        MobclickAgent.init('57eb2ec467e58eb35e00025f', 'SCT-Official');
                    }
                    PushService.init();
                }
            }, 500);


            

            if(!isWeixin()) {
                SettingService.checkUpdate(true);
            }
             // Disable BACK button on home
             $ionicPlatform.registerBackButtonAction(function (event) {
                if ($state.current.name.indexOf('tabsController') === 0 || $state.current.name === "login") {
                    var confirmPopup = $ionicPopup.confirm({
                        title: '温馨提示',
                        template: '确认退出应用吗？',
                        cancelText: '取消',
                        okText: '确认',
                        okType: 'button-balanced'
                    });
                    confirmPopup.then(function (res) {
                        if (res) {
                            navigator.app.exitApp();
                        }
                    });
                }
                else {
                    $ionicHistory.goBack();
                }
            }, 100);
        });
    }])
    .config(['$ionicConfigProvider', '$httpProvider', 'msdElasticConfig', 'ionicTimePickerProvider', 'ionicImgCacheProvider', 'ionicDatePickerProvider', '$compileProvider', function ($ionicConfigProvider, $httpProvider, msdElasticConfig, ionicTimePickerProvider, ionicImgCacheProvider, ionicDatePickerProvider, $compileProvider) {
        if (!ionic.Platform.isIOS()) {
            $ionicConfigProvider.scrolling.jsScrolling(false);
        }
        $ionicConfigProvider.views.swipeBackEnabled(false);
        $ionicConfigProvider.views.maxCache(15);
        $httpProvider.defaults.withCredentials = true;
        //enable cors
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
        $httpProvider.interceptors.push('httpInterceptor');
        $httpProvider.useApplyAsync(true);

        // note that you can also chain configs
        //$ionicConfigProvider.backButton.text('返回').icon('ion-chevron-left');
        $ionicConfigProvider.tabs.position("bottom");
        $ionicConfigProvider.navBar.alignTitle("center");

        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|chrome-extension|ms-appx-web|ms-appx|cdvphotolibrary):|data:image\//);

        msdElasticConfig.append = '\n';

        var timePickerObj = {
            inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
            format: 24,
            step: 1,
            setLabel: '确定',
            closeLabel: '取消'
        };
        ionicTimePickerProvider.configTimePicker(timePickerObj);
        var datePickerObj = {
            inputDate: new Date(),
            titleLabel: '请选择日期',
            setLabel: '确定',
            closeLabel: '关闭',
            mondayFirst: true,
            weeksList: ["日", "一", "二", "三", "四", "五", "六"],
            monthsList: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            templateType: 'popup',
            showTodayButton: false,
            dateFormat: 'yyyy-MM-dd',
            closeOnSelect: false,
            disableWeekdays: []
        };
        ionicDatePickerProvider.configDatePicker(datePickerObj);

        ionicImgCacheProvider.debug(false);
        ionicImgCacheProvider.quota(200);
        ionicImgCacheProvider.folder('Xgenban');
        ionicImgCacheProvider.cacheClearSize(200);
    }])
    .filter('nl2br', ['$filter',
        function ($filter) {
            return function (data) {
                if (!data) return data;
                return data.replace(/\n\r?/g, '<br />');
            };
        }
    ])
    .filter('orderContactBy', function () {
        return function (items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function (item) {
                filtered.push(item);
            });
            filtered.sort(function (a, b) {
                return (a[field].localeCompare(b[field]));
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    })
    .filter('parseUrl', function() {
        var urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
        //var emails = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim

        return function(text) {
            if(text.match(urls)) {
                text = text.replace(urls, "<a href=\"$1\" target=\"_system\">$1</a>");
            }
            // if(text.match(emails)) {
            //     text = text.replace(emails, "<a href=\"mailto:$1\">$1</a>");
            // }
            return text;
        };
    })
    .filter('filterweekday', [function () {
        return function (list, day) {
            var i;
            var tempList = [];
            var temp;

            if (angular.isDefined(list) &&
                list.length > 0) {
                for (temp = list[i = 0]; i < list.length; temp = list[++i]) {
                    if (temp.weekNum % 7 == day)
                        tempList.push(temp);
                }
            }
            return tempList;
        };
    }]);

angular.module('app.routes', [])
    .config(['$stateProvider', '$urlRouterProvider', 'Constant', function ($stateProvider, $urlRouterProvider, Constant) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the module can be in.
        // Each state's controller can be found in controllers.js
        var UIPath = '';
        if (Constant.debugMode) UIPath = 'module/';

        $stateProvider
            // .state('tabsController.mainPage', {
            //     url: '/mainPage',
            //     views: {
            //         'mainTab': {
            //             templateUrl: UIPath + 'equipmentRepair/schoolRepairList.html',
            //             controller: 'schoolRepairListCtrl'
            //         }
            //     }
            // })
            .state('schoolRepairList', {
                url: '/schoolRepairList',
                templateUrl: UIPath + 'equipmentRepair/schoolRepairList.html',
                controller: 'schoolRepairListCtrl',
            })
            .state('repairRecordList', {
                url: '/repairRecordList',
                templateUrl: UIPath + 'equipmentRepair/repairRecordList.html',
                controller: 'repairRecordListCtrl',
                params: {
                    schoolId: null
                }
            })
            .state('repairDetail', {
                url: '/repairDetail',
                templateUrl: UIPath + 'equipmentRepair/repairDetail.html',
                controller: 'repairDetailCtrl',
                params: {
                    repairRecordId: null,
                    readStatus: null
                }
            })
            .state('repairProgress', {
                url: '/repairProgress',
                templateUrl: UIPath + 'equipmentRepair/repairProgress.html',
                controller: 'repairProgressCtrl',
                params: {
                    repairRecordId: null
                }
            })
            .state('editProfile', {
                url: '/editProfile',
                templateUrl: UIPath + 'setting/editProfile.html',
                controller: 'editProfileCtrl',
                params: {
                    content: null
                }
            })
            .state('tabsController', {
                url: '/tab',
                templateUrl: UIPath + 'tabs/tabsController.html',
                controller: 'tabsCtrl',
                abstract: true
            })
            .state('pdfView', {
                url: '/pdfView',
                templateUrl: UIPath + 'common/pdfView.html',
                controller: 'pdfViewCtrl',
                params: {
                    url: null
                }
            })
            .state('resetPwd', {
                url: '/resetPwd',
                templateUrl: UIPath + 'open/resetPassword.html',
                controller: 'resetPwdCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: UIPath + 'open/login.html',
                controller: 'loginCtrl'
            });
            // .state('register', {
            //     url: '/register',
            //     templateUrl: UIPath + 'open/register.html',
            //     controller: 'registerCtrl',
            //     params: {
            //         status: null
            //     }
            // })
            // .state('tabsController.schoolPage', {
            //     url: '/schoolPage',
            //     views: {
            //         'schoolTab': {
            //             templateUrl: UIPath + 'campus/schoolPage.html',
            //             controller: 'schoolPageCtrl'
            //         }
            //     }
            // })
            // .state('tabsController.communicatePage', {
            //     url: '/communicatePage',
            //     views: {
            //         'communicateTab': {
            //             templateUrl: UIPath + 'im/communicatePage.html',
            //             controller: 'communicatePageCtrl'
            //         }
            //     }
            // })
            // .state('tabsController.settingPage', {
            //     url: '/settingPage',
            //     views: {
            //         'settingTab': {
            //             templateUrl: UIPath + 'setting/settingPage.html',
            //             controller: 'settingPageCtrl'
            //         }
            //     }
            // })       
            // .state('postDetail', {
            //     url: '/postDetail',
            //     templateUrl: UIPath + 'campus/postDetail.html',
            //     controller: 'postDetailCtrl',
            //     params: {
            //         post: null,
            //         comment: null,
            //         index: null
            //     }
            // })
            // .state('unreadMsg', {
            //     url: '/unreadMsg',
            //     templateUrl: UIPath + 'campus/unreadMessages.html',
            //     controller: 'unreadMsgCtrl',
            //     params: {
            //         list: []
            //     }
            // })
            // .state('noticePage', {
            //     url: '/noticePage',
            //     templateUrl: UIPath + 'notice/noticePage.html',
            //     controller: 'noticePageCtrl',
            //     params: {
            //         type: null
            //     }
            // })
            // .state('noticeDetail', {
            //     url: '/noticeDetail',
            //     templateUrl: UIPath + 'notice/noticeDetail.html',
            //     controller: 'noticeDetailCtrl',
            //     params: {
            //         notice: {}
            //     }
            // })
            // .state('communicateDetail', {
            //     url: '/communicateDetail',
            //     templateUrl: UIPath + 'im/communicateDetail.html',
            //     controller: 'communicateDetailCtrl',
            //     params: {
            //         obj: null
            //     }
            // })
            // .state('contactProfile', {
            //     url: '/contactProfile',
            //     templateUrl: UIPath + 'im/contactProfile.html',
            //     controller: 'contactProfileCtrl',
            //     params: {
            //         obj: null,
            //         self: false
            //     }
            // })
            // .state('introduce', {
            //     url: '/introduce',
            //     templateUrl: UIPath + 'setting/introduce.html',
            //     controller: 'introduceCtrl'
            // })

            // .state('useProfile', {
            //     url: '/useProfile',
            //     templateUrl: UIPath + 'setting/useProfile.html',
            //     controller: 'userProfileCtrl'
            // })
           
            // .state('about', {
            //     url: '/about',
            //     templateUrl: UIPath + 'setting/about.html',
            //     controller: 'aboutCtrl'
            // })
            // .state('suggest', {
            //     url: '/suggest',
            //     templateUrl: UIPath + 'setting/suggest.html',
            //     controller: 'suggestCtrl'
            // })
            // .state('notification', {
            //     url: '/notification',
            //     templateUrl: UIPath + 'setting/notification.html',
            //     controller: 'notificationCtrl'
            // })
            // .state('today', {
            //     url: '/today',
            //     templateUrl: UIPath + 'class/today.html',
            //     controller: 'todayCtrl'
            // })
            // .state('cardFeeStatus', {
            //     url: '/cardFeeStatus',
            //     templateUrl: UIPath + 'class/cardFeeStatus.html',
            //     controller: 'cardFeeStatusCtrl'
            // })
            // .state('classMotto', {
            //     url: '/classMotto',
            //     templateUrl: UIPath + 'class/classMotto.html',
            //     controller: 'classMottoCtrl'
            // })
            // .state('myClassSchedule', {
            //     url: '/myClassSchedule',
            //     templateUrl: UIPath + 'class/myClassSchedule.html',
            //     controller: 'myClassScheduleCtrl'
            // })
            // .state('classSchedule', {
            //     url: '/classSchedule',
            //     templateUrl: UIPath + 'class/classSchedule.html',
            //     controller: 'classScheduleCtrl',
            //     params: {
            //         type: null
            //     }
            // })
            // .state('leaveRequest', {
            //     url: '/leaveRequest',
            //     templateUrl: UIPath + 'class/leaveRequest.html',
            //     controller: 'leaveRequestCtrl'
            // })
            // .state('myDynamicCourse', {
            //     url: '/myDynamicCourse',
            //     templateUrl: UIPath + 'electiveCourse/myDynamicCourse.html',
            //     controller: 'myDynamicCourseCtrl'
            // })
            // .state('chooseDynamicCourse', {
            //     url: '/chooseDynamicCourse',
            //     templateUrl: UIPath + 'electiveCourse/chooseDynamicCourse.html',
            //     controller: 'chooseDynamicCourseCtrl',
            //     params: {
            //         disableID: null
            //     }
            // })
            // .state('checkInNotice', {
            //     url: '/checkInNotice',
            //     templateUrl: UIPath + 'attendanceClass/checkInNotice.html',
            //     controller: 'checkInNoticeCtrl'
            // })
            // .state('checkInNoticeBaby', {
            //     url: '/checkInNoticeBaby',
            //     templateUrl: UIPath + 'attendanceKid/checkInNoticeKid.html',
            //     controller: 'checkInNoticeBabyCtrl'
            // })
            // .state('checkInHistory', {
            //     url: '/checkInHistory',
            //     templateUrl: UIPath + 'attendanceClass/checkInHistory.html',
            //     controller: 'checkInHistoryCtrl',
            //     params: {
            //         type: null,
            //         course: null,
            //         isWalkCourse: null
            //     }
            // })
            // .state('checkInMonthlyClassReport', {
            //     url: '/checkInMonthlyClassReport',
            //     templateUrl: UIPath + 'attendanceClass/checkInMonthlyClassReport.html',
            //     controller: 'checkInMonthlyClassReportCtrl'
            // })

            // .state('attendanceRecords', {
            //     url: '/attendanceRecords',
            //     templateUrl: UIPath + 'attendanceClass/attendanceRecords.html',
            //     controller: 'attendanceRecordsCtrl',
            //     params: {
            //         day: null
            //     }
            // })
            // .state('attendanceToday', {
            //     url: '/attendanceToday',
            //     templateUrl: UIPath + 'attendanceClass/attendanceToday.html',
            //     controller: 'attendanceTodayCtrl'
            // })
            // .state('safeSchool', {
            //     url: '/safeSchool',
            //     templateUrl: UIPath + 'safeSchool/safeSchool.html',
            //     controller: 'safeSchoolCtrl'
            // })
            // .state('order', {
            //     url: '/order',
            //     templateUrl: UIPath + 'order/order.html',
            //     controller: 'orderCtrl'
            // })
            // .state('orderPayView', {
            //     url: '/orderPayView',
            //     templateUrl: UIPath + 'orderPayView.html',
            //     controller: 'orderPayViewCtrl',
            //     params: {
            //         goods: null
            //     }
            // })
           
            // .state('parScores', {
            //     url: '/parScores',
            //     templateUrl: UIPath + 'scores/parScores.html',
            //     controller: 'parScoresCtrl'

            // })

            // .state('teaScores', {
            //     url: '/teaScores',
            //     templateUrl: UIPath + 'scores/teaScores.html',
            //     controller: 'teaScoresCtrl'

            // })
            // .state('examDetail', {
            //     url: '/examDetail',
            //     templateUrl: UIPath + 'scores/examDetail.html',
            //     controller: 'examDetailCtrl',
            //     params: {
            //         classId: null,
            //         examId: null
            //     }
            // })
            // .state('bannerArticle', {
            //     url: '/bannerArticle',
            //     templateUrl: UIPath + 'main/bannerArticle.html',
            //     controller: 'bannerArticleCtrl',
            //     params: {
            //         code: null,
            //         Id: null
            //     }
            // })
            // .state('bannerArticleList', {
            //     url: '/bannerArticleList',
            //     templateUrl: UIPath + 'main/bannerArticleList.html',
            //     controller: 'bannerArticleListCtrl',
            //     params: {

            //     }
            // })
            // .state('versionIntroduce', {
            //     url: '/versionIntroduce',
            //     templateUrl: UIPath + 'setting/versionIntroduce.html',
            //     controller: 'versionIntroduceCtrl'
            // })
            // .state('leaveMessage', {
            //     url: '/leaveMessage',
            //     templateUrl: UIPath + 'main/leaveMessage.html',
            //     controller: 'leaveMessageCtrl'
            // })
            // .state('market', {
            //     url: '/market',
            //     templateUrl: UIPath + 'main/market.html',
            //     controller: 'marketCtrl'
            // })

          
            // .state('portraitList', {
            //     url: '/portraitList',
            //     templateUrl: UIPath + 'setting/portraitList.html',
            //     controller: 'portraitListCtrl'
            // })
            // .state('myPortrait', {
            //     url: '/myPortrait',
            //     templateUrl: UIPath + 'setting/myPortrait.html',
            //     controller: 'myPortraitCtrl'
            // })
            // .state('assetsList', {
            //     url: '/assetsList',
            //     templateUrl: UIPath + 'assetsApply/assetsList.html',
            //     controller: 'assetsListCtrl'

            // })
            // .state('assetsApplyCommit', {
            //     url: '/assetsApplyCommit',
            //     templateUrl: UIPath + 'assetsApply/assetsApplyCommit.html',
            //     controller: 'assetsApplyCommitCtrl'

            // })
            // .state('assetsDetail', {
            //     url: '/assetsDetail',
            //     templateUrl: UIPath + 'assetsApply/assetsDetail.html',
            //     controller: 'assetsDetailCtrl',
            //     params: {
            //         assetsId: null
            //     }
            // })
            // .state('meetingNoticeList', {
            //     url: '/meetingNoticeList',
            //     templateUrl: UIPath + 'meetingNotice/meetingNoticeList.html',
            //     controller: 'meetingNoticeListCtrl'
            // })
            // .state('meetingRoomReservationList', {
            //     url: '/meetingRoomReservationList',
            //     templateUrl: UIPath + 'meetingNotice/meetingRoomReservationList.html',
            //     controller: 'meetingRoomReservationListCtrl'
            // })
            // .state('walkCourseAlert', {
            //     url: '/walkCourseAlert',
            //     templateUrl: UIPath + 'class/walkCourseAlert.html',
            //     controller: 'walkCourseAlertCtrl',
            //     params: {
            //         classId: null,
            //         weekNum: null,
            //         sectionNum: null
            //     }
            // })
            // .state('approvalList', {
            //     url: '/approvalList',
            //     templateUrl: UIPath + 'approvalAdmin/approvalList.html',
            //     controller: 'approvalListCtrl'
            // })
            // .state('approvalDetail', {
            //     url: '/approvalDetail',
            //     templateUrl: UIPath + 'approvalAdmin/approvalDetail.html',
            //     controller: 'approvalDetailCtrl',
            //     params: {
            //         archiveId: null,
            //         selectIndex: null
            //     }
            // })
            // .state('addApproval', {
            //     url: '/addApproval',
            //     templateUrl: UIPath + 'approvalAdmin/addApproval.html',
            //     controller: 'addApprovalCtrl',
            //     params: {
            //         templateId: null
            //     }
            // })
            // .state('dateArrange', {
            //     url: '/dateArrange',
            //     templateUrl: UIPath + 'others/dateArrange/dateArrange.html',
            //     controller: 'dateArrangeCtrl',
            // })
            // .state('classStar', {
            //     url: '/classStar',
            //     templateUrl: UIPath + 'others/evaluate/classStar.html',
            //     controller: 'classStarCtrl'
            // })
            // .state('editComments', {
            //     url: '/editComments',
            //     templateUrl: UIPath + 'others/evaluate/editComments.html',
            //     controller: 'editCommentsCtrl'
            // })
            // .state('evaluateStatistical', {
            //     url: '/evaluateStatistical',
            //     templateUrl: UIPath + 'others/evaluate/evaluateStatistical.html',
            //     controller: 'evaluateStatisticalCtrl',
            //     params: {
            //         classId: null,
            //         taskId: null,
            //         assessTitle: null
            //     }
            // })
            // .state('evaluateStudent', {
            //     url: '/evaluateStudent',
            //     templateUrl: UIPath + 'others/evaluate/evaluateStudent.html',
            //     controller: 'evaluateStudentCtrl',

            // })
            // .state('parEvaluationList', {
            //     url: '/parEvaluationList',
            //     templateUrl: UIPath + 'others/evaluate/parEvaluationList.html',
            //     controller: 'parEvaluationListCtrl'
            // })
            // .state('evaluateOptions', {
            //     url: '/evaluateOptions',
            //     templateUrl: UIPath + 'others/evaluate/evaluateOptions.html',
            //     controller: 'evaluateOptionsCtrl',
            //     params: {
            //         classId: null,
            //         taskId: null,
            //         assessTitle: null
            //     }
            // })
            // .state('evaluateStudentDetail', {
            //     url: '/evaluateStudentDetail',
            //     templateUrl: UIPath + 'others/evaluate/evaluateStudentDetail.html',
            //     controller: 'evaluateStudentDetailCtrl',
            //     params: {
            //         studentId: null,
            //         taskId: null,
            //         totalScore: null,
            //         userName: null,
            //         userLogo: null,
            //         userPhonenumber: null
            //     }

            // })
            // .state('classroomMonitList', {
            //     url: '/classroomMonitList',
            //     templateUrl: UIPath + 'others/tourClass/classroomMonitList.html',
            //     controller: 'classroomMonitListCtrl'
            // })
            // .state('chargeList', {
            //     url: '/chargeList',
            //     templateUrl: UIPath + 'others/chargeManage/chargeList.html',
            //     controller: 'chargeListCtrl'
            // })
            // .state('chargeDetail', {
            //     url: '/chargeDetail',
            //     templateUrl: UIPath + 'others/chargeManage/chargeDetail.html',
            //     controller: 'chargeDetailCtrl',
            //     params: {
            //         type: null
            //     }
            // })
            // .state('adjustClassList', {
            //     url: '/adjustClassList',
            //     templateUrl: UIPath + 'others/adjustClass/adjustClassList.html',
            //     controller: 'adjustClassListCtrl',

            // });

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state");
            // console.log('----login:');
            $state.go('login');
        });

    }])
    .run(['$rootScope', '$state', 'UserPreference', 'Constant', '$location', '$ionicHistory', function ($rootScope, $state, UserPreference, Constant, $location, $ionicHistory) {
        $rootScope.$on('$stateChangeStart', function (event, next, current) {
            // console.log('next:');
            // console.log(next);
            // console.log('current');
            // console.log($state.current);

            // if ($state.current.url!='/schoolRepairList'&& next.url === '/login') {
            //     if (Constant.debugMode) console.log("same page, go nowhere..");
            //     event.preventDefault();
            //     $state.go('schoolRepairList');
            // }
            // if (!isWeixin() && next.url === '/login' && !UserPreference.getBoolean(Constant.version)) {
            //     if (Constant.debugMode) console.log("show guide pages..");
            //     event.preventDefault();
            //   // $state.go('introduce');
            // }

          

        });

        $rootScope.$on('$locationChangeSuccess', function () {
            $rootScope.actualLocation = $location.path();
        });
        $rootScope.$watch(function () {
            return $location.path();
        }, function (newLocation, oldLocation) {
            if ($rootScope.actualLocation === newLocation) {

                //  alert('请使用顶部导航栏返回上一页');
                // $ionicHistory.goBack();

            }
        });
    }]);

angular.module('app.services', [])
    .factory('UserPreference', ['$window', function ($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            getArray: function (key) {
                return JSON.parse($window.localStorage[key] || '[]');
            },
            getBoolean: function (key) {
                return $window.localStorage[key] === true || $window.localStorage[key] === 'true';
            },
            clear: function () {
                $window.localStorage.clear();
            }
        };
    }])
    .service('scrollDelegateFix', ['$ionicScrollDelegate', function ($ionicScrollDelegate) {
        //fix a $ionicScrollDelegate bug in ionic v1,which exists in modals
        return {
            $getByHandle: function (name) {
                var instances = $ionicScrollDelegate.$getByHandle(name)._instances;
                return instances.filter(function (element) {
                    //return (element['$$delegateHandle'] === name);
                    return element.$$delegateHandle === name;
                })[0];
            }
        };
    }])
    .factory('CameraHelper', ['$q', '$ionicPopup', '$ionicActionSheet', '$rootScope', 'BroadCast', '$cordovaCamera', '$jrCrop', 'Constant', function ($q, $ionicPopup, $ionicActionSheet, $rootScope, BroadCast, $cordovaCamera, $jrCrop, Constant) {
        var helper = {};
        helper.cropImage = function (imageURI, width, height, cropTitle) {
            $jrCrop.crop({
                url: imageURI,
                width: width,
                height: height,
                title: cropTitle,
                cancelText: '取消',
                chooseText: '确定'
            }).then(function (canvas) {
                // success!
                $rootScope.$broadcast(BroadCast.IMAGE_CROP, canvas.toDataURL());
            }, function () {
                // User canceled or couldn't load image.
                $rootScope.$broadcast(BroadCast.IMAGE_CROP, undefined);
            });
        };
        helper.selectImage = function (which, imgOpt) {
            if (!navigator.camera) {
                alert("Camera API not supported");
                return;
            }
            $ionicActionSheet.show({
                buttons: [{
                        text: '<i class="icon ion-camera"></i>相机'
                    },
                    {
                        text: '<i class="icon ion-ios-photos"></i>相册'
                    }
                ],
                titleText: '请选择图片来源(单张图片大小不得超过10M)',
                cancelText: '取消',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
                    if (index === 0) {
                        srcType = Camera.PictureSourceType.CAMERA;
                    }
                    var destinationType = Camera.DestinationType.DATA_URL;
                    if ((imgOpt && imgOpt.allowEdit) || which == 'chat') {
                        destinationType = Camera.DestinationType.FILE_URI;
                    }
                    if (index === 0 || index === 1) {
                        var defaultHeight = 300;
                        var defaultWidth = 300;
                        var cropTitle = '截取高亮区域';
                        var options = {
                            quality: which==='portrait'?95:85,
                            destinationType: destinationType,
                            sourceType: srcType,
                            allowEdit: false,
                            encodingType: Camera.EncodingType.JPEG,
                            targetWidth: Constant.CAPTURE_IMAGE_RANGE,
                            targetHeight: Constant.CAPTURE_IMAGE_RANGE,
                            correctOrientation: true,
                            popoverOptions: CameraPopoverOptions,
                            saveToPhotoAlbum: false
                        };
                        if (imgOpt) {
                            if (imgOpt.width && imgOpt.height) {
                                defaultHeight = imgOpt.height;
                                defaultWidth = imgOpt.width;
                            } else {
                                options.targetWidth = defaultWidth * 2;
                                options.targetHeight = defaultHeight * 2;
                            }
                            if (imgOpt.title)
                                cropTitle = imgOpt.title;
                        }
                        console.log(imgOpt);
                        if (window.cordova) {
                            $cordovaCamera.getPicture(options).then(function (imageURI) {
                                if (imgOpt && imgOpt.allowEdit) {
                                    $jrCrop.crop({
                                        url: imageURI,
                                        width: defaultWidth,
                                        height: defaultHeight,
                                        title: cropTitle,
                                        cancelText: '取消',
                                        chooseText: '确定'
                                    }).then(function (canvas) {
                                        // success!
                                        var data = {
                                            which: which,
                                            source: canvas.toDataURL()
                                        };
                                        $rootScope.$broadcast(BroadCast.IMAGE_SELECTED, data);
                                    }, function () {
                                        // User canceled or couldn't load image.
                                        $rootScope.$broadcast(BroadCast.IMAGE_SELECTED, undefined);
                                    });
                                } else {
                                    if (which == 'chat') {
                                        window.resolveLocalFileSystemURL(imageURI, function (fileEntry) {
                                            fileEntry.file(function (fileObj) {
                                                var data = {
                                                    which: which,
                                                    source: fileObj
                                                };
                                                $rootScope.$broadcast(BroadCast.IMAGE_SELECTED, data);
                                            });
                                        });
                                    } else {
                                        var data = {
                                            which: which,
                                            source: "data:image/jpeg;base64," + imageURI
                                        };
                                        $rootScope.$broadcast(BroadCast.IMAGE_SELECTED, data);
                                    }
                                }

                            }, function (err) {
                                $rootScope.$broadcast(BroadCast.IMAGE_SELECTED, undefined);
                                //alert("Read Photo Error: " + err);
                            });
                        }

                    }
                    return true;
                }
            });
        };
        helper.selectMultiImage = function (callback, limit) {
            $ionicActionSheet.show({
                buttons: [{
                        text: '<i class="icon ion-camera"></i>相机'
                    },
                    {
                        text: '<i class="icon ion-ios-photos"></i>相册'
                    }
                ],
                titleText: '请选择图片来源(单张图片大小不得超过10M)',
                cancelText: '取消',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    if (index === 0) {
                        var options = {
                            quality: 85,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: Camera.PictureSourceType.CAMERA,
                            allowEdit: false,
                            encodingType: Camera.EncodingType.JPEG,
                            targetWidth: Constant.CAPTURE_IMAGE_RANGE,
                            targetHeight: Constant.CAPTURE_IMAGE_RANGE,
                            correctOrientation: true,
                            saveToPhotoAlbum: false
                        };
                        $cordovaCamera.getPicture(options).then(function (imageURI) {
                            callback(imageURI);
                        }, function (err) {
                            console.log(err);
                        });
                    } else if (index === 1) {
                        window.imagePicker.getPictures(
                            function (results) {
                                callback(results);
                            },
                            function (error) {
                                console.log('Error: ' + error);
                            }, {
                                maximumImagesCount: limit,
                                width: Constant.CAPTURE_IMAGE_RANGE
                            }
                        );

                    }
                    return true;
                }
            });
        };

        helper.selectSinglePicture = function (callback, index) {
            if (!navigator.camera) {
                alert("Camera API not supported");
                return;
            }
            //1 相册 0拍照
            if (window.cordova) {
                var srcType = Camera.PictureSourceType.PHOTOLIBRARY;
                if (index === 0) {
                    srcType = Camera.PictureSourceType.CAMERA;
                }
                var imgOpt = {
                    allowEdit: false
                };
                var destinationType = Camera.DestinationType.DATA_URL;
                if ((imgOpt && imgOpt.allowEdit)) {
                    destinationType = Camera.DestinationType.FILE_URI;
                }
                if (index === 0 || index === 1) {
                    var defaultHeight = 300;
                    var defaultWidth = 300;
                    var options = {
                        quality: 80,
                        destinationType: destinationType,
                        sourceType: srcType,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: Constant.CAPTURE_IMAGE_RANGE,
                        targetHeight: Constant.CAPTURE_IMAGE_RANGE,
                        correctOrientation: true,
                        popoverOptions: CameraPopoverOptions,
                        saveToPhotoAlbum: false
                    };
                    if (imgOpt) {
                        if (imgOpt.width && imgOpt.height) {
                            defaultHeight = imgOpt.height;
                            defaultWidth = imgOpt.width;
                        } else {
                            options.targetWidth = defaultWidth * 2;
                            options.targetHeight = defaultHeight * 2;
                        }
                        if (imgOpt.title)
                            cropTitle = imgOpt.title;
                    }
                    $cordovaCamera.getPicture(options).then(function (imageURI) {
                        var base64Str = 'data:image/jpeg;base64,' + imageURI;
                        callback(base64Str);
                    }, function (err) {
                        alert("picture get failure");
                    });
                }
            }
        };

        return helper;
    }])
    .factory('httpInterceptor', ['$q', '$injector', function ($q, $injector) {
        var regex = new RegExp('\.(html|js|css)$', 'i');
        var isAsset = function (url) {
            return regex.test(url);
        };
        var currentUrl = window.location.href;
        // console.log('current url :'+currentUrl);
        var doLogin = function () {
            var state = $injector.get('$state');
            var user = $injector.get('UserPreference');
            var auth = $injector.get('AuthorizeService');
            if (!auth.logining && state.current.url !== '/manufacturers/wechatLogin') {
                var loginModel = {
                    remember: true,
                   // openId : $rootScope.m_openId,
                    username: user.get('m_account', ''),
                    password: user.get('m_password', '')
                };
                if (loginModel.username !== '' && loginModel.password !== '') {
                    console.error('timeout, try auto login.');
                    auth.login(loginModel).then(function (res) {
                        if (res && res.result)
                            // state.go('tabsController.mainPage');
                            state.go('schoolRepairList');
                    });
                } else {
                    console.error('username or password not found');
                    state.go('login');
                }
            }
        };
        return {
            // optional method
            'request': function (config) {
                // do something on success
                //if(!isAsset(config.url)){            //if the call is not for an asset file
                //	config.url+= "?ts=" +  Date.now();     //append the timestamp
                //}
                if (!isAsset(config.url)) {
                    var Constant = $injector.get('Constant');
                    if (config.url.indexOf('login') > 0 || config.url.indexOf('logout') > 0)
                        config.timeout = Constant.serverTimeout;
                    else
                        config.timeout = Constant.heavyServerTimeout;
                }
                return config;
            },
            // optional method
            'requestError': function (rejection) {
                // do something on error
                return $q.reject(rejection);
            },
            // optional method
            'response': function (response) {
                // do something on success
                if (!isAsset(response.config.url)) {
                    if (response.data.code === -100) {
                        doLogin();
                    }
                }
                return response;
            },
            // optional method
            'responseError': function (rejection) {
                console.log('rejection');
                console.log(rejection);
                
                if (!isAsset(rejection.config.url)) {
                    var toaster = $injector.get('toaster');
                    var MESSAGES = $injector.get('MESSAGES');
                    var rootScope = $injector.get('$rootScope');
                    var BroadCast = $injector.get('BroadCast');
                    rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    switch (rejection.status) {
                        case -1:
                        case 408:
                            console.log('error code:' + rejection.status);
                            toaster.warning({
                                title: MESSAGES.REQUEST_ERROR,
                                body: MESSAGES.CONNECT_TIMEOUT_MSG
                            });
                            break;
                        case 401:
                            doLogin();
                            break;
                        case 404:
                            toaster.error({
                                title: MESSAGES.CONNECT_ERROR,
                                body: rejection.data.message
                            });
                            break;
                        case 500:
                            toaster.error({
                                title: MESSAGES.CONNECT_ERROR,
                                body: MESSAGES.SERVER_ERROR
                            });
                            // state.go('login');
                            break;
                        case 503:
                            toaster.error({
                                title: rejection.data.message,
                                body: ''
                            });
                            break;
                        default:
                            
                            toaster.error({
                                title: MESSAGES.CONNECT_ERROR,
                                body: MESSAGES.CONNECT_ERROR_MSG
                            });
                            break;
                    }
                }
                return $q.reject(rejection);
            }
        };
    }])
    .service('closePopupService', [
        function () {
            var currentPopup;
            var htmlEl = angular.element(document.querySelector('html'));
            htmlEl.on('click', function (event) {
                if (event.target.nodeName === 'HTML') {
                    if (currentPopup) {
                        currentPopup.close();
                    }
                }
            });

            this.register = function (popup) {
                currentPopup = popup;
            };
        }
    ])
    .factory('PushService', ['$http', '$window', 'Constant', '$state', '$ionicPopup', '$rootScope', 'BroadCast', 'Requester', '$cordovaInAppBrowser', 'UserPreference', function ($http, $window, Constant, $state, $ionicPopup, $rootScope, BroadCast, Requester, $cordovaInAppBrowser, UserPreference) {
        var push = {};
        //启动极光推送
        push.init = function (config) {
            var setTagsWithAliasCallback = function (event) {
                console.log(event);
                console.log("Broadcast Rev: Jpush tag and alias settled");
            };
            var receiveNotificationCallback = function (event) {
                console.log(event);
                $rootScope.$broadcast(BroadCast.NEW_PUSH_REV, undefined);
            };
            var openNotificationCallback = function (event) {
                var notice;
                if (device.platform === "Android") {
                    notice = event.extras;
                } else {
                    notice = event;
                    push.setBadgeNumber();
                }
                push.clearAllNotification();
                switch (String(notice.messageType)) {
                    case '1':
                        /**
                         * todo
                         */
                    case '2':
                        notice.imageUrls = notice.imageUrls.split(',');
                        $state.go('noticeDetail', {
                            notice: notice
                        });
                        break;
                    case '99999':
                    case '99991':
                        $state.go('checkInNotice');
                        break;
                    case '99998':
                        $state.go('leaveRequest');
                        break;
                    case '99997':
                    case '99996':
                    case '99994':
                        $state.go('safeSchool');
                        break;
                    case '99995':
                        $state.go('checkInNoticeBaby');
                        break;
                    case '10000':
                        $state.go('tabsController.communicatePage');
                        break;
                    case '100100':
                        var userid = '?userId=' + UserPreference.getObject('user').id;
                        if (userid) {
                            var options = {
                                location: 'no',
                                clearcache: 'yes',
                                toolbar: 'no',
                                hidden: 'yes',
                                zoom: 'no'
                            };
                            $cordovaInAppBrowser.open(notice.url + userid, '_blank', options)
                                .then(function (event) {
                                    // success
                                    $cordovaInAppBrowser.show();
                                })
                                .catch(function (event) {
                                    // error
                                    console.log(event);
                                    $cordovaInAppBrowser.close();
                                });
                        }
                        break;
                    case '100101':
                        //用户反馈
                        $state.go('suggest');
                        break;

                    case '100102':
                        //接收考试的 通知
                        $state.go('parScores');
                        break;
                    case '100103':
                        //接收小孩留言
                        $state.go('leaveMessage');
                        break;
                    case '100106':
                        //报修记录关闭 发送给报修人(老师用户)
                        $state.go('repairDetail', {
                            repairRecordId: notice.orderId
                        });
                        break;

                    case '100108':
                        //审批通过 通知
                        $state.go('assetsDetail', {
                            assetsId: notice.orderId
                        });
                        break;

                    case '100109':
                        // 会议通知
                        $state.go('meetingNoticeList');
                        break;

                    case '100110':
                        //取消 会议通知
                        $state.go('meetingNoticeList');
                        break;
                    case '100111':
                        $state.go('approvalDetail', {
                            archiveId: notice.archiveId
                        });
                        break;
                }
            };

            $window.plugins.jPushPlugin.init();
            push.clearAllNotification();
            //设置tag和Alias触发事件处理
            document.addEventListener('jpush.setTagsWithAlias', setTagsWithAliasCallback, false);
            //打开推送消息事件处理
            document.addEventListener("jpush.openNotification", openNotificationCallback, false);
            document.addEventListener("jpush.receiveNotification", receiveNotificationCallback, false);
            if (ionic.Platform.isIOS()) {
                document.addEventListener("jpush.backgroundNotification", receiveNotificationCallback, false);
                push.setBadgeNumber();
            } else {
                $window.plugins.jPushPlugin.setLatestNotificationNum(2);
            }
            document.addEventListener("pause", function () {
                console.log('module pause');
                push.appBackground = true;
                push.clearAllNotification();
            }, false);
            document.addEventListener("resume", function () {
                console.log('module resume');
                push.appBackground = false;
                push.clearAllNotification();
            }, false);
            $window.plugins.jPushPlugin.setDebugMode(Constant.debugMode);
            $window.plugins.jPushPlugin.setSilenceTime(22, 0, 7, 0);
            push.getRegID();
        };

        //获取状态
        push.isPushStopped = function (fun) {
            $window.plugins.jPushPlugin.isPushStopped(fun);
        };
        //停止极光推送
        push.stopPush = function () {
            $window.plugins.jPushPlugin.stopPush();
        };

        //清除通知
        push.clearAllNotification = function () {
            if (ionic.Platform.isIOS())
                $window.plugins.jPushPlugin.clearAllLocalNotifications();
            else
                $window.plugins.jPushPlugin.clearAllNotification();
        };

        push.getRegID = function () {
            setTimeout(function () {
                $window.plugins.jPushPlugin.getRegistrationID(function (data) {
                    console.log("JPushPlugin:registrationID is " + data);
                    if (data) {
                        push.regID = data;
                    } else {
                        push.getRegID();
                    }
                });
            }, 2000);
        };

        //重启极光推送
        push.resumePush = function () {
            $window.plugins.jPushPlugin.resumePush();
        };

        //设置标签和别名
        push.setTagsWithAlias = function (tags, alias) {
            console.log("Jpush xxxx tag alias ");
            $window.plugins.jPushPlugin.setTagsWithAlias(tags, alias, function () {
                console.log("Jpush Tag and Alias settled:" + alias + '--tags:' + tags);


            }, function (msg) {
                console.log("Jpush Tag and Alias set failed " + msg);
                setTimeout(function () {
                    push.setTagsWithAlias(tags, alias);
                }, 5000);
            });
        };

        //设置标签
        push.setTags = function (tags) {
            $window.plugins.jPushPlugin.setTags(tags);
        };

        //设置别名
        push.setAlias = function (alias) {
            $window.plugins.jPushPlugin.setAlias(alias);
        };

        push.setAndroidPushTime = function (days, startHour, endHour) {
            $window.plugins.jPushPlugin.setPushTime(days, startHour, endHour);
        };

        push.setAndroidSilenceTime = function (startHour, startMinute, endHour, endMinute) {
            $window.plugins.jPushPlugin.setSilenceTime(startHour, startMinute, endHour, endMinute);
        };

        push.getUserNotificationSettings = function (fun) {
            $window.plugins.jPushPlugin.getUserNotificationSettings(fun);
        };

        push.setBasicNotification = function (type) {
            $window.plugins.jPushPlugin.setBasicPushNotificationBuilder(type);
        };

        push.setBadgeNumber = function () {
            $window.plugins.jPushPlugin.getApplicationIconBadgeNumber(function (data) {
                if (data > 0)
                    $window.plugins.jPushPlugin.setApplicationIconBadgeNumber(0);
            });
        };

        return push;
    }])

    //结构待优化


    .factory('AuthorizeService', ['$http', 'Constant', '$rootScope', 'BroadCast', 'UserPreference', 'PushService', '$ionicPopup', '$state', '$q', function ($http, Constant, $rootScope, BroadCast, UserPreference, PushService, $ionicPopup, $state, $q) {
        var auth = {};

        auth.login = function (user) {
            if (auth.logining) {
                console.log('request is processing.');
                return;
            }
            auth.logining = true;

            var reqUrl = Constant.ServerUrl + "/manufacturers/wechatLogin";
            var params = {
                loginname: user.username.trim(),
                password: md5(user.password).toUpperCase(),
                openId : $rootScope.m_openId
            };
            if ($rootScope.m_openId) {
                reqUrl = Constant.ServerUrl + "/manufacturers/wechatLogin";
                params.openId = $rootScope.m_openId;
            }
            return $http.post(reqUrl, params).then(function (response) {
                //cache user
                var data = response.data;
                console.log(data.data);
                if (data.result) {
                    if (String(data.data.rolename) === Constant.USER_ROLES.SCHOOL) {
                        $ionicPopup.confirm({
                            title: '温馨提示',
                            template: '学校管理员请下载小跟班管理端APP再进行登录',
                            cancelText: '取消',
                            okText: '下载',
                            okType: 'button-balanced'
                        }).then(function (res) {
                            if (res) {
                                auth.logout();
                                window.open('http://xgenban.com/download.html', '_system');
                            }
                        });
                        $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                        return;
                    }
                    var tags = [];
                    if (data.data.sex && data.data.sex !== '')
                        tags.push(data.data.sex);
                    tags.push("JS" + data.data.rolename);
                    if (data.data.school) {
                        tags.push("XX" + data.data.school.id);
                        if (data.data.school.area) {
                            var area = data.data.school.area.id;
                            tags.push("SF" + area.substr(0, 2) + "0000");
                            tags.push("CS" + area.substr(0, 4) + "00");
                            tags.push("DQ" + area.substr(0, 6));
                        }
                        UserPreference.set('DefaultSchoolName', data.data.school.schoolName);
                    }
                    if (data.data.class) {
                        tags.push("BJ" + data.data.class.id);
                        tags.push("NJ" + data.data.class.grade);
                        if (data.data.class.stage && data.data.class.stage.length > 0)
                            tags.push("XD" + data.data.class.stage[0]);
                        UserPreference.set('DefaultClassID', data.data.class.id);
                        UserPreference.set('DefaultClassName', data.data.class.className);
                    }

                    if (data.data.rolename === 3) {
                        //t
                        UserPreference.set('DefaultSchoolID', data.data.school.id);
                    } else if (data.data.rolename === 4) {
                        //p
                        UserPreference.set('DefaultSchoolID', data.data.schauthmap[0].schoolid);
                    } else if (data.data.rolename === 2) {
                        //s
                        UserPreference.set('DefaultSchoolID', data.data.school.id);
                    }

                    console.log(data.data);

                    var students = data.data.student;
                    if (students) {
                        var cid = UserPreference.get('DefaultChildID');
                        var index = 0;
                        for (var i = 0; i < students.length; i++) {
                            if (students[i].school) {
                                tags.push("XX" + students[i].school.id);
                            }
                            if (students[i].area_code) {
                                var area2 = students[i].area_code;
                                tags.push("SF" + area2.substr(0, 2) + "0000");
                                tags.push("CS" + area2.substr(0, 4) + "00");
                                tags.push("DQ" + area2.substr(0, 6));
                            }
                            if (students[i].classno) {
                                tags.push("BJ" + students[i].classno.id);
                                tags.push("NJ" + students[i].classno.grade);
                                if (students[i].classno.stage && students[i].classno.stage.length > 0)
                                    tags.push("XD" + students[i].classno.stage[0]);
                            }
                            if (students[i].id == cid)
                                index = i;
                        }
                        if (students[index]) {
                            UserPreference.set('DefaultChildID', students[index].id);
                            UserPreference.set('DefaultChildName', students[index].student_name);
                            UserPreference.set('DefaultChildLogo', students[index].logo);
                            UserPreference.set('DefaultSchoolID', students[index].school.id);
                            UserPreference.set('DefaultSchoolName', students[index].school.schoolName);
                            UserPreference.setObject('DefaultChild', students[index]);
                            if (students[index].classno) {
                                UserPreference.set('DefaultClassID', students[index].classno.id);
                                UserPreference.set('DefaultClassName', students[index].classno.className);
                            }
                        }
                    }
                    var headClassIds = [];
                    if (data.data.classes && data.data.classes.length > 0) {
                        UserPreference.set('isHeadTeacher', true);
                        data.data.classes.forEach(function (item) {
                            headClassIds.push(item.id);
                        });
                        UserPreference.setObject('HeadTeacherClassId', headClassIds);
                        UserPreference.setObject('HeadTeacherClasses', data.data.classes);
                    } else
                        UserPreference.set('isHeadTeacher', false);
                    UserPreference.setObject("user", data.data);
                    $rootScope.$broadcast(BroadCast.LOGIN_RESULT_RECEIVED, undefined);
                    auth.isLogin = true;
                    // console.log('user is:');
                    // console.log(user);
                    setTimeout(function () {
                        if (window.cordova) {
                            MobclickAgent.onEvent('app_login');
                            PushService.setTagsWithAlias(tags, user.username.toLowerCase());
                        }
                        if (Constant.debugMode) console.log(tags);
                    }, 5000);
                } else {
                    UserPreference.set("m_password", '');
                    if ($state.current.url !== '/login'&&$state.current.url!=='repairDetail'&&$state.current.url!=='repairRecordList')
                        $state.go('login');
                }
                return data;
            }, function (error) {
                return $q.reject(error);
            }).finally(function () {
                setTimeout(function () {
                    auth.logining = false;
                }, 5000);
            });
        };

        auth.logout = function () {
            auth.isLogin = false;
            if (window.cordova) {
                PushService.setTagsWithAlias([], "");
                MobclickAgent.onEvent('app_logout');
            }
            var params = {};
            if ($rootScope.m_openId) {
                params.openId = $rootScope.m_openId;
            }
            // return $http.get(Constant.ServerUrl + "/manufacturers/wechatLogout", {
            //     params: params
            // });
            return  $http.post(Constant.ServerUrl + "/manufacturers/wechatLogout", params )
            .success(function (data, header, config, status) {
                //console.log('logout succeed');
                $rootScope.$broadcast(BroadCast.WechatLogout, data);
            })
            .error(function (data, header, config, status) {
                $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
            });
        };

        return auth;
    }])
    .factory('AccountService', ['$http', 'Constant', '$rootScope', 'BroadCast', function ($http, Constant, $rootScope, BroadCast) {
        var account = {};

        account.getSmsCode = function (phone, type, usertype, username) {
            $http.get(Constant.ServerUrl + "/pass/sendmsg", {
                    params: {
                        phone: phone,
                        smstype: type,
                        retype: usertype,
                        name: username
                    }
                })
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.SMS_SENT, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.SMS_SENT, undefined);
                });
        };

        account.resetPwd = function (opt) {
            opt.newpassword = md5(opt.newpassword).toUpperCase();
            $http.post(Constant.ServerUrl + "/pass/resetpassword", opt)
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.PASSWORD_RESET, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        account.register = function (opt) {
            opt.password = md5(opt.password).toUpperCase();
            $http.post(Constant.ServerUrl + "/registerNew", opt)
                .success(function (data, header, config, status) {
                    if (window.cordova) MobclickAgent.onEvent('app_register');
                    $rootScope.$broadcast(BroadCast.ACCOUNT_REGISTER_COMPLETE, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        account.checkCode = function (opt) {
            return $http.get(Constant.ServerUrl + "/pass/checkcode", {
                params: opt
            });
        };

        return account;
    }])
    .factory('SchoolService', ['$http', 'Constant', '$rootScope', 'BroadCast', 'UserPreference', function ($http, Constant, $rootScope, BroadCast, UserPreference) {
        var school = {};
        school.newNews = function (reqData) {
            var role = String(UserPreference.getObject('user').rolename);
            if (role === Constant.USER_ROLES.PARENT)
                reqData.stuId = UserPreference.get('DefaultChildID');
            $http.post(Constant.ServerUrl + "/campusview/issue", reqData)
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.NEW_NEWS, data);
                    if (data.result)
                        school.getNewsList(1);
                    if (role === Constant.USER_ROLES.PARENT || role === Constant.USER_ROLES.STUDENT) {
                        if (window.cordova) MobclickAgent.onEvent('app_new_news');
                    } else {
                        if (window.cordova) MobclickAgent.onEvent('app_new_news_teacher');
                    }
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        school.allowPublish = function (reqData) {
            if (reqData && reqData.id) {
                $http.post(Constant.ServerUrl + "/campusview/pass", reqData)
                    .success(function (data, header, config, status) {
                        data.request = {
                            type: BroadCast.ALLOW_PUBLISH_RST_REV,
                            id: reqData.id
                        };
                        $rootScope.$broadcast(BroadCast.NEWS_STATE_CHANGED, data);
                    })
                    .error(function (data, header, config, status) {
                        $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    });
            }
        };

        school.ignorePublish = function (id) {
            $http.put(Constant.ServerUrl + "/campusview/ignore/" + id)
                .success(function (data, header, config, status) {
                    data.request = {
                        type: BroadCast.IGNORE_RST_REV,
                        id: id
                    };
                    $rootScope.$broadcast(BroadCast.NEWS_STATE_CHANGED, data);

                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        school.deleteNews = function (id) {
            var stuid = '';
            if (UserPreference.getObject('user').rolename == Constant.USER_ROLES.PARENT)
                stuid = '&stuId=' + UserPreference.get('DefaultChildID');
            $http.delete(Constant.ServerUrl + "/campusview/delete?id=" + id + stuid)
                .success(function (data, header, config, status) {
                    data.request = {
                        type: BroadCast.DELETE_NEWS_REV,
                        id: id
                    };
                    $rootScope.$broadcast(BroadCast.NEWS_STATE_CHANGED, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        school.cancelPublish = function (id) {
            $http.get(Constant.ServerUrl + "/campusview/cancelIssue/" + id)
                .success(function (data, header, config, status) {
                    data.request = {
                        type: BroadCast.CANCEL_PUBLISH_REV,
                        id: id
                    };
                    $rootScope.$broadcast(BroadCast.NEWS_STATE_CHANGED, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        school.send2Admin = function (id) {
            $http.put(Constant.ServerUrl + "/campusview/recommend/" + id)
                .success(function (data, header, config, status) {
                    data.request = {
                        type: BroadCast.SEND_TO_ADMIN_RST,
                        id: id
                    };
                    $rootScope.$broadcast(BroadCast.NEWS_STATE_CHANGED, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        school.getNewsList = function (page, key, reqId) {

            var req = {
                page: page,
                rows: Constant.reqLimit
            };
            if (String(UserPreference.getObject('user').rolename) === Constant.USER_ROLES.PARENT)
                req.stuId = UserPreference.get('DefaultChildID');
            angular.extend(req, key);
            $http.get(Constant.ServerUrl + "/campusview/list", {
                    params: req
                })
                .success(function (data, header, config, status) {
                    if (data.result) {
                        var arr = data.data;
                        var myId = UserPreference.getObject('user').id;
                        for (var i = 0; i < arr.length; i++) {
                            arr[i].isMine = myId === arr[i].authorId;
                            arr[i].isPublish = String(arr[i].state) !== Constant.NEWS_STATUS.TEACHER_REVIEW.key;
                        }
                        if (page && page > 1)
                            Array.prototype.push.apply(school.list, arr);
                        else {
                            school.list = [];
                            school.list = arr;

                            school.list.forEach(function (item) {
                                item.picUrls = [];
                                item.imageUrls.forEach(function (url) {
                                    var urlItem = {
                                        thumb: '',
                                        src: ''
                                    };
                                    urlItem.thumb = url;
                                    urlItem.src = url;
                                    item.picUrls.push(urlItem);
                                });
                            });
                            if (!key) {
                                UserPreference.setObject("news_list_cache", school.list);
                            }

                        }
                        school.listHasMore = arr.length >= Constant.reqLimit;
                        if (Constant.debugMode) {
                            console.log('news data rev, page:' + page);
                            console.log(arr);
                        }
                        data.reqId = reqId;
                    }
                    $rootScope.$broadcast(BroadCast.NEWS_LIST_REV, data);
                })
                .error(function (data, header, config, status) {
                    school.listHasMore = false;
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    //toaster.error({title: MESSAGES.CONNECT_ERROR, body: MESSAGES.CONNECT_ERROR_MSG});
                });
        };

        school.getBannerList = function () {
            var req = {};
            if (String(UserPreference.getObject('user').rolename) === Constant.USER_ROLES.PARENT)
                req.stuId = UserPreference.get('DefaultChildID');
            $http.get(Constant.ServerUrl + "/campusview/focuslist", {
                    params: req
                })
                .success(function (data, header, config, status) {
                    if (data.result) {

                        school.bannerList = data.data;
                        if (Constant.debugMode) {
                            console.log('banner data rev');
                            console.log(school.bannerList);
                        }
                        UserPreference.setObject("news_banner_cache", school.bannerList);
                    }
                    $rootScope.$broadcast(BroadCast.BANNER_LIST_REV, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    //toaster.error({title: MESSAGES.CONNECT_ERROR, body: MESSAGES.CONNECT_ERROR_MSG});
                });
        };

        school.getNewsType = function () {
            $http.get(Constant.ServerUrl + "/getdic/show-type/new")
                .success(function (data, header, config, status) {
                    if (data.result) {
                        var list = data.data;

                        var selectList = [];
                        for (var i = 0; i < list.length; i++) {
                            if (list[i].parentKey === 3) {
                                selectList.push(list[i]);
                            }
                        }
                        UserPreference.setObject("news_type", selectList);
                        $rootScope.$broadcast(BroadCast.NEWS_TYPE_REV, data);
                    }
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };


        return school;
    }])
    .factory('SettingService', ['$http', 'Constant', '$rootScope', 'BroadCast', 'UserPreference', 'toaster', 'MESSAGES', '$ionicLoading', '$ionicPopup', '$cordovaFileTransfer', '$cordovaFileOpener2', '$timeout', 'ChatService', function ($http, Constant, $rootScope, BroadCast, UserPreference, toaster, MESSAGES, $ionicLoading, $ionicPopup, $cordovaFileTransfer, $cordovaFileOpener2, $timeout, ChatService) {
        var setting = {};

        setting.sendFeedback = function (text) {
            $http.post(Constant.ServerUrl + "/opnionup", text)
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.FEEDBACK, data);
                    if (window.cordova) MobclickAgent.onEvent('app_suggest');
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    //toaster.error({title: MESSAGES.CONNECT_ERROR, body:MESSAGES.CONNECT_ERROR_MSG});
                });
        };

        setting.changePwd = function (oldPass, newPass) {
            $http.post(Constant.ServerUrl + "/manufacturers/changepassword", {
                    curpassword: md5(oldPass).toUpperCase(),
                    newpassword: md5(newPass).toUpperCase()
                })
                .success(function (data, header, config, status) {

                    $rootScope.$broadcast(BroadCast.PASSWORD_CHANGE, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    //toaster.error({title: MESSAGES.CONNECT_ERROR, body:MESSAGES.CONNECT_ERROR_MSG});
                });
        };

        setting.getChildInfo = function () {
            $http.get(Constant.ServerUrl + "/getchildinfo")
                .success(function (data, header, config, status) {
                    if (data.result) {
                        var user = UserPreference.getObject('user');
                        user.child = data.data;
                        UserPreference.setObject('user', user);
                        if (Constant.debugMode) console.log(user.child);
                    }
                    $rootScope.$broadcast(BroadCast.CHILD_INFO_REV, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    //toaster.error({title: MESSAGES.CONNECT_ERROR, body:MESSAGES.CONNECT_ERROR_MSG});
                });
        };

        setting.editInfo = function (key, value) {
            var param = {};
            if (!key || !value)
                return;
            param.key = key;
            param.value = value;

            $http.post(Constant.ServerUrl + "/infoedit", param)
                .success(function (data, header, config, status) {
                    if (data.result) {
                        var user = UserPreference.getObject('user');
                        if (key === 'name') {
                            user.name = value;
                            if (window.cordova) MobclickAgent.onEvent('app_set_nick');
                        } else if (key === 'logo') {
                            user.logo = 'data:image/jpeg;base64,' + value;
                            if (ChatService.loginInfo)
                                ChatService.loginInfo.image = user.logo;
                            if (window.cordova) MobclickAgent.onEvent('app_set_avata');
                        } else if (key === 'sex') {
                            user.sex = value;
                            if (window.cordova) MobclickAgent.onEvent('app_set_sex');
                        } else if (key === 'instruction') {
                            user.instruction = value;
                            if (window.cordova) MobclickAgent.onEvent('app_set_instruction');
                        }
                        UserPreference.setObject('user', user);
                    }

                    $rootScope.$broadcast(BroadCast.EDIT_INFO, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    //toaster.error({title: MESSAGES.CONNECT_ERROR, body:MESSAGES.CONNECT_ERROR_MSG});
                });
        };

        setting.checkUpdate = function (silent) {

            var os = ionic.Platform.isIOS() ? 'ios' : 'android';

            function hasNewVersion(v) {
                var vr = v.split('.');
                var vl = Constant.version.split('.');
                if (vr && vr.length === vl.length) {
                    for (var i = 0; i < vr.length; i++) {
                        if (Number(vr[i]) > Number(vl[i]))
                            return true;
                        else if (Number(vr[i]) < Number(vl[i]))
                            return false;
                    }
                }
                return false;
            }

            function showProcessDialog(url) {
                $ionicLoading.show({
                    template: "请稍候，正在下载更新包：0%"
                });
                var targetPath = "file:///sdcard/Xgenban/update.apk"; //APP下载存放的路径，可以使用cordova file插件进行相关配置
                var trustHosts = true;
                var options = {};
                $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function (result) {
                    // 打开下载下来的APP
                    $cordovaFileOpener2.open(targetPath, 'application/vnd.android.package-archive').then(function () {
                        // 成功
                    }, function (err) {
                        // 错误
                        console.log(err);
                    });
                    $ionicLoading.hide();
                }, function (err) {
                    toaster.error({
                        title: MESSAGES.DOWNLOAD_ERROR,
                        body: err.exception
                    });
                    $ionicLoading.hide();
                }, function (progress) {
                    $timeout(function () {
                        var downloadProgress = (progress.loaded / progress.total) * 100;
                        $ionicLoading.show({
                            template: "请稍候，正在下载更新包：" + Math.floor(downloadProgress) + "%"
                        });
                        if (downloadProgress > 99) {
                            $ionicLoading.hide();
                        }
                    });
                });
            }

            $http.get(Constant.ServerUrl + "/checkversion", {
                    params: {
                        ostype: os,
                        version: Constant.version
                    }
                })
                .success(function (data, header, config, status) {
                    if (data.data && data.data.version) {
                        console.log('当前服务器版本：' + data.data.version);
                        if (!hasNewVersion(data.data.version)) {
                            if (!silent) $ionicLoading.show({
                                template: '已是最新版应用',
                                noBackdrop: true,
                                duration: 1000
                            });
                        } else {
                            if (Constant.debugMode) console.log(data.data);
                            var confirmPopup = $ionicPopup.confirm({
                                title: '更新提示',
                                template: data.data.content,
                                cancelText: '取消',
                                okText: '升级',
                                okType: 'button-balanced'
                            });
                            if (ionic.Platform.isIOS()) {
                                confirmPopup.then(function (res) {
                                    if (res) {
                                        window.open(data.data.url, '_system');
                                    }
                                });
                            } else if (ionic.Platform.isAndroid()) {

                                confirmPopup.then(function (res) {
                                    if (res) {
                                        window.open('market://details?id=com.sct.xgenban', '_system');
                                        // var permissions = cordova.plugins.permissions;
                                        // permissions.hasPermission(permissions.READ_EXTERNAL_STORAGE, function (status) {
                                        //     if (!status.hasPermission) {
                                        //         var errorCallback = function () {
                                        //             toaster.error({
                                        //                 title: MESSAGES.DOWNLOAD_ERROR,
                                        //                 body: '无储存空间写入权限。请重试或在设置、应用中对小跟班放开权限。'
                                        //             });
                                        //         };
                                        //         permissions.requestPermission(
                                        //             permissions.READ_EXTERNAL_STORAGE,
                                        //             function (status) {
                                        //                 if (!status.hasPermission) {
                                        //                     errorCallback();
                                        //                 } else {
                                        //                     showProcessDialog(data.data.url);
                                        //                 }
                                        //             }, errorCallback);
                                        //     }
                                        //     else
                                        //         showProcessDialog(data.data.url);
                                        // }, null);
                                    }
                                });
                            }
                        }

                    } else if (!silent) $ionicLoading.show({
                        template: '已是最新版应用',
                        noBackdrop: true,
                        duration: 1000
                    });
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        return setting;
    }])
    .factory('NoticeService', ['$http', 'Constant', '$rootScope', 'BroadCast', 'UserPreference', function ($http, Constant, $rootScope, BroadCast, UserPreference) {
        var notice = {};

        notice.newNotice = function (reqData) {
            $http.post(Constant.ServerUrl + "/notice/issue", reqData)
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.NEW_NOTICE, data);
                    if (window.cordova) MobclickAgent.onEvent('app_new_notice');
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        notice.deleteNotice = function (id) {
            $http.delete(Constant.ServerUrl + "/notice/delete/" + id)
                .success(function (data, header, config, status) {
                    data.request = {
                        type: BroadCast.DELETE_NOTICE_REV,
                        id: id
                    };
                    $rootScope.$broadcast(BroadCast.DELETE_NOTICE_REV, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        notice.getDic = function (dictype) {
            if ($rootScope.dicReqCount > 5) {
                return;
            }
            $http.get(Constant.ServerUrl + "/getdic", {
                    params: {
                        dictype: dictype
                    }
                })
                .success(function (data, header, config, status) {
                    if (data.result) {
                        UserPreference.setObject(dictype, data.data);
                        $rootScope.dicReqCount++;
                        $rootScope.$broadcast(BroadCast.DIC_REV, dictype);
                    }
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        notice.getNoticeList = function (page, type) {
            var req = {
                page: page,
                rows: Constant.reqLimit
            };
            if (String(UserPreference.getObject('user').rolename) === Constant.USER_ROLES.PARENT)
                req.stuId = UserPreference.get('DefaultChildID');
            if (type)
                req.noticeKey = type;
            $http.get(Constant.ServerUrl + "/notice/list", {
                    params: req
                })
                .success(function (data, header, config, status) {
                    if (data.result) {
                        var arr = data.data;
                        for (var j = 0; j < arr.length; j++) {
                            arr[j].time = getWeekday(arr[j].createTime);
                        }

                        if (page && page > 1)
                            Array.prototype.push.apply(notice.list, arr);
                        else {
                            notice.list = arr;
                            UserPreference.setObject("notice_list_cache" + type, notice.list);
                        }
                        if (arr.length < Constant.reqLimit)
                            notice.listHasMore = false;
                        else
                            notice.listHasMore = true;
                        if (Constant.debugMode) {
                            console.log('notice data rev, page:' + page);
                            console.log(arr);
                        }
                    }
                    $rootScope.$broadcast(BroadCast.NOTICE_LIST_REV, data);
                })
                .error(function (data, header, config, status) {
                    notice.listHasMore = false;
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                    //toaster.error({title: MESSAGES.CONNECT_ERROR, body:MESSAGES.CONNECT_ERROR_MSG});
                });
        };

        notice.getTodayClass = function (page, startTime, endTime, deviceID) {
            var opt = {
                page: page,
                rows: Constant.reqLimit
            };
            if (String(UserPreference.getObject('user').rolename) === Constant.USER_ROLES.PARENT)
                opt.stuId = UserPreference.get('DefaultChildID');
            else if (String(UserPreference.getObject('user').rolename) === Constant.USER_ROLES.STUDENT)
                opt.stuId = UserPreference.getObject('user').id;
            if (startTime)
                opt.timestart = startTime;
            else
                opt.timestart = '00:00:00';
            if (endTime)
                opt.timeend = endTime;
            else
                opt.timeend = '23:59:59';
            if (deviceID && deviceID !== '')
                opt.tid = deviceID;
            if (Constant.debugMode) console.log(opt);
            $http.get(Constant.ServerUrl + "/todayclass", {
                    params: opt
                })
                .success(function (data, header, config, status) {
                    if (data.data) {
                        if (page && page > 1)
                            Array.prototype.push.apply(notice.todayClassList, data.data.content);
                        else
                            notice.todayClassList = data.data.content;
                        if (notice.todayClassList.length < data.data.totalElements)
                            notice.todayListHasMore = true;
                        else
                            notice.todayListHasMore = false;
                        notice.deviceList = data.data.terminals;
                        notice.currentDeviceID = data.data.current;
                        if (Constant.debugMode) {
                            console.log('today class data rev, page:' + page);
                            console.log('today has more: ' + notice.todayListHasMore);
                        }
                        notice.todayClassCount = data.data.totalElements;
                        UserPreference.set("today_class_count", notice.todayClassCount);
                        UserPreference.setObject("today_class_list_cache", notice.todayClassList);
                        if (window.cordova) MobclickAgent.onEvent('app_today_class');
                    } else {
                        notice.todayClassList = [];
                        notice.todayListHasMore = false;
                        notice.todayClassCount = 0;
                        UserPreference.set("today_class_count", 0);
                        UserPreference.setObject("today_class_list_cache", notice.todayClassList);
                    }

                    $rootScope.$broadcast(BroadCast.TODAY_CLASS_LIST_REV, data);
                })
                .error(function (data, header, config, status) {
                    notice.todayListHasMore = false;
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        notice.getClassSchedule = function (classID) {
            $http.get(Constant.ServerUrl + "/course?classId=" + classID)
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CLASS_SCHEDULE_REV, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        notice.getClassDuty = function (classID) {
            $http.get(Constant.ServerUrl + "/duty/students/" + classID)
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CLASS_DUTY_REV, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        notice.getClassMembers = function (classID) {
            $http.get(Constant.ServerUrl + "/class/members/" + classID)
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CLASS_MEMBER_REV, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        notice.updateClassMembers = function (reqData) {
            console.log(CustomParam(reqData));
            $http({
                method: "post",
                url: Constant.ServerUrl + "/duty/students",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam(reqData)
            }).success(function (data, header, config, status) {
                $rootScope.$broadcast(BroadCast.CLASS_DUTY_MODIFIED, data);
                if (window.cordova) MobclickAgent.onEvent('app_set_duty');
            }).error(function (data, header, config, status) {
                $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
            });
        };

        notice.getClassBanxun = function (classID) {
            $http.get(Constant.ServerUrl + "/class/banxun/" + classID)
                .success(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CLASS_BANXUN_REV, data);
                })
                .error(function (data, header, config, status) {
                    $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
                });
        };

        notice.updateClassBanxun = function (reqData) {
            $http({
                method: "post",
                url: Constant.ServerUrl + "/class/banxun",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam(reqData)
            }).success(function (data, header, config, status) {
                if (window.cordova) MobclickAgent.onEvent('app_class_motto');
                $rootScope.$broadcast(BroadCast.CLASS_BANXUN_UPDATE, data);
            }).error(function (data, header, config, status) {
                $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
            });
        };

        notice.getMainBannerList = function () {
            $http.get(Constant.ServerUrl + "/article/top", {
                params: {
                    userId: UserPreference.getObject('user').id
                }
            }).success(function (data, header, config, status) {
                if (data.result) {
                    UserPreference.setObject('MainBanners', data.data);
                }
                $rootScope.$broadcast(BroadCast.Main_BANNER_LIST_REV, data);

            }).error(function (data, header, config, status) {
                $rootScope.$broadcast(BroadCast.CONNECT_ERROR, undefined);
            });
        };

        return notice;
    }])
    .factory('ChatService', ['Constant', 'UserPreference', '$rootScope', 'BroadCast', '$http', '$q', '$ionicPopup', '$window', '$state', function (Constant, UserPreference, $rootScope, BroadCast, $http, $q, $ionicPopup, $window, $state) {
        var chat = {};
        /**
         * 联系人缓存
         */
        chat.infoMap = UserPreference.getObject('ChatUserInfoMap');
        /**
         * 通讯录缓存
         */
        chat.friendsMap = UserPreference.getObject('ChatContactListMap');
        chat.retryCount = 0;
        chat.getTabUnreadCount = function () {
            var count = 0;
            for (var i = 0; i < chat.conversations.length; i++) {
                count += chat.conversations[i].UnreadMsgCount;
            }
            $rootScope.$broadcast(BroadCast.BADGE_UPDATE, {
                type: 'im',
                count: count
            });
        };

        chat.sendPush = function (to, title, message) {
            return $http.post(Constant.ServerUrl + "/im/push", {
                    to: to,
                    title: title,
                    message: message
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        chat.init = function () {
            var user = UserPreference.getObject("user");
            if (chat.loginInfo || !user.usersig) {
                return;
            }
            var loginInfo = {
                sdkAppID: Constant.IMAppID,
                accountType: Constant.IMAccountType,
                identifier: user.id + '',
                userSig: user.usersig,
                image: user.logo
            };

            var onKickedEventCall = function () {
                var confirmPopup = $ionicPopup.confirm({
                    title: '温馨提示',
                    template: '账号在其它地方登录，您已下线。',
                    cancelText: '取消',
                    okText: '重新登录',
                    okType: 'button-balanced'
                });
                confirmPopup.then(function (res) {
                    if (res) {
                        $state.go('tabsController.mainPage');
                        chat.logout();
                    }
                });
            };

            var onGroupSystemNotifys = function () {
                chat.getContacts();
            };

            var listeners = {
                "onConnNotify": function (resp) {
                    var info;
                    switch (resp.ErrorCode) {
                        case webim.CONNECTION_STATUS.ON:
                            webim.Log.warn('建立连接成功: ' + resp.ErrorInfo);
                            break;
                        case webim.CONNECTION_STATUS.OFF:
                            info = '连接已断开，无法收到新消息，请检查下你的网络是否正常: ' + resp.ErrorInfo;
                            webim.Log.warn(info);
                            break;
                        case webim.CONNECTION_STATUS.RECONNECT:
                            info = '连接状态恢复正常: ' + resp.ErrorInfo;
                            webim.Log.warn(info);
                            break;
                        default:
                            webim.Log.error('未知连接状态: =' + resp.ErrorInfo);
                            break;
                    }
                }, //监听连接状态回调变化事件,必填
                "onMsgNotify": function onMsgNotify(newMsgList) {
                    console.warn(newMsgList);
                    for (var j in newMsgList) { //遍历新消息
                        var newMsg = newMsgList[j];
                        if (newMsg.fromAccount === '@TIM#SYSTEM') {
                            chat.getContacts();
                            continue;
                        }
                        var selSess = newMsg.getSession();
                        var selSessID = selSess.id();
                        var selType = selSess.type();
                        var headUrl = Constant.IM_GROUP_AVATAR,
                            nickName = selSess.name();
                        if (selType == webim.SESSION_TYPE.C2C) {
                            var c2cInfo = chat.getMemberInfoFromMap(selType, selSessID);
                            if (c2cInfo && c2cInfo.name) {
                                nickName = c2cInfo.name;
                            } else {
                                nickName = selSessID;
                            }
                            if (c2cInfo && c2cInfo.image) {
                                headUrl = c2cInfo.image;
                            } else {
                                headUrl = Constant.IM_USER_AVATAR;
                            }
                        }
                        var con = {
                            SessionId: selSessID,
                            SessionImage: headUrl,
                            SessionType: selType,
                            SessionNick: nickName,
                            SessionTime: selSess.time(),
                            MsgTimeStamp: getChatTimeLabel(selSess.time()),
                            UnreadMsgCount: selSess.unread(),
                            MsgShow: delHtmlTag(convertMsgtoPushStr(newMsg))
                        };
                        var k = 0;
                        for (; chat.conversations && k < chat.conversations.length; k++) {
                            if (chat.conversations[k].SessionId == selSess.id()) {
                                chat.conversations[k] = con;
                                break;
                            }
                        }
                        if (!chat.conversations)
                            chat.conversations = [];
                        if (k === chat.conversations.length) {
                            chat.conversations.push(con);
                        }
                    }
                    chat.getTabUnreadCount();
                    $rootScope.$broadcast(BroadCast.IM_NEW_MESSAGE, newMsgList);
                }, //监听新消息(私聊，普通群(非直播聊天室)消息，全员推送消息)事件，必填
                "onGroupSystemNotifys": onGroupSystemNotifys,
                "onKickedEventCall": onKickedEventCall
            };
            var opts = {
                isLogOn: false
            };

            function showLoginError() {
                var confirmPopup = $ionicPopup.confirm({
                    template: '通讯服务器连接失败，请重试！',
                    cancelText: '取消',
                    okText: '重试',
                    okType: 'button-balanced'
                });
                confirmPopup.then(function (res) {
                    if (res) {
                        chat.init();
                    }
                });
            }

            webim.login(loginInfo, listeners, opts,
                function (resp) {
                    chat.loginInfo = loginInfo;
                    chat.retryCount = 0;
                    chat.getRecentContacts();
                    chat.getContacts();
                },
                function (err) {
                    if (chat.retryCount > 2) {
                        chat.retryCount = 0;
                        showLoginError();
                    } else {
                        setTimeout(function () {
                            chat.retryCount++;
                            chat.init();
                        }, 1000);
                    }
                });
        };

        chat.getRecentContacts = function (classid) {
            if (!chat.loginInfo) {
                chat.init();
                console.log("try login firstly..");
                return;
            }
            webim.getRecentContactList({
                'Count': 100
            }, function (resp) {
                //console.log(resp);
                var data = [];
                var tempSess, tempSessMap = {}; //临时会话变量
                if (resp.SessionItem && resp.SessionItem.length > 0) {
                    for (var i in resp.SessionItem) {
                        var item = resp.SessionItem[i];
                        var type = item.Type; //接口返回的会话类型
                        var sessType, typeZh, sessionId, sessionNick = '',
                            sessionImage = '',
                            senderId = '',
                            senderNick = '';
                        if (type == webim.RECENT_CONTACT_TYPE.C2C) { //私聊
                            typeZh = '私聊';
                            sessType = webim.SESSION_TYPE.C2C; //设置会话类型
                            sessionId = item.To_Account; //会话id，私聊时为好友ID或者系统账号（值为@TIM#SYSTEM，业务可以自己决定是否需要展示），注意：从To_Account获取,

                            if (sessionId === '@TIM#SYSTEM') { //先过滤系统消息，，
                                webim.Log.warn('过滤好友系统消息,sessionId=' + sessionId);
                                continue;
                            }
                            var c2cInfo = chat.getMemberInfoFromMap(sessType, sessionId, classid);
                            if (c2cInfo && c2cInfo.name) { //从infoMap获取c2c昵称
                                sessionNick = c2cInfo.name; //会话昵称，私聊时为好友昵称，接口暂不支持返回，需要业务自己获取（前提是用户设置过自己的昵称，通过拉取好友资料接口（支持批量拉取）得到）
                            } else { //没有找到或者没有设置过
                                sessionNick = sessionId; //会话昵称，如果昵称为空，默认将其设成会话id
                            }
                            if (c2cInfo && c2cInfo.image) { //从infoMap获取c2c头像
                                sessionImage = c2cInfo.image; //会话头像，私聊时为好友头像，接口暂不支持返回，需要业务自己获取（前提是用户设置过自己的昵称，通过拉取好友资料接口（支持批量拉取）得到）
                            } else { //没有找到或者没有设置过
                                sessionImage = Constant.IM_USER_AVATAR; //会话头像，默认
                            }
                            senderId = senderNick = ''; //私聊时，这些字段用不到，直接设置为空

                        } else if (type == webim.RECENT_CONTACT_TYPE.GROUP) { //群聊
                            typeZh = '群聊';
                            sessType = webim.SESSION_TYPE.GROUP; //设置会话类型
                            sessionId = item.ToAccount; //会话id，群聊时为群ID，注意：从ToAccount获取
                            sessionNick = item.GroupNick; //会话昵称，群聊时，为群名称，接口一定会返回

                            if (item.GroupImage) {
                                sessionImage = item.GroupImage;
                            } else
                                sessionImage = Constant.IM_GROUP_AVATAR;
                            senderId = item.MsgGroupFrom_Account; //群消息的发送者id

                            if (!senderId) { //发送者id为空
                                webim.Log.warn('群消息发送者id为空,senderId=' + senderId + ",groupid=" + sessionId);
                                continue;
                            }
                            // if (senderId == '@TIM#SYSTEM') {//先过滤群系统消息，因为接口暂时区分不了是进群还是退群等提示消息，
                            // 	webim.Log.warn('过滤群系统消息,senderId=' + senderId + ",groupid=" + sessionId);
                            // 	continue;
                            // }
                        } else {
                            typeZh = '未知类型';
                            sessionId = item.ToAccount;
                        }

                        if (!sessionId) { //会话id为空
                            webim.Log.warn('会话id为空,sessionId=' + sessionId);
                            continue;
                        }

                        if (sessionId === '@TLS#NOT_FOUND') { //会话id不存在，可能是已经被删除了
                            webim.Log.warn('会话id不存在,sessionId=' + sessionId);
                            continue;
                        }

                        if (sessionNick.length > 10) { //帐号或昵称过长，截取一部分
                            sessionNick = sessionNick.substr(0, 10) + "...";
                        }

                        tempSess = tempSessMap[sessType + "_" + sessionId];
                        if (!tempSess) { //先判断是否存在（用于去重），不存在增加一个
                            tempSessMap[sessType + "_" + sessionId] = true;
                            data.push({
                                SessionType: sessType, //会话类型
                                SessionTypeZh: typeZh, //会话类型中文
                                SessionId: webim.Tool.formatText2Html(sessionId), //会话id
                                SessionNick: webim.Tool.formatText2Html(sessionNick), //会话昵称
                                SessionImage: sessionImage, //会话头像
                                C2cAccount: webim.Tool.formatText2Html(senderId), //发送者id
                                C2cNick: webim.Tool.formatText2Html(senderNick), //发送者昵称
                                UnreadMsgCount: item.UnreadMsgCount, //未读消息数
                                MsgSeq: item.MsgSeq, //消息seq
                                MsgRandom: item.MsgRandom, //消息随机数
                                MsgTimeStamp: getChatTimeLabel(item.MsgTimeStamp), //消息时间戳
                                MsgShow: item.MsgShow //消息内容
                            });
                        }
                    }
                }
                chat.conversations = data;

                function initUnreadMsgCount() {
                    var sess;
                    var sessMap = webim.MsgStore.sessMap();
                    for (var i in sessMap) {
                        sess = sessMap[i];
                        for (var j = 0; j < data.length; j++) {
                            if (sess.id() == data[j].SessionId) {
                                data[j].UnreadMsgCount = sess.unread();
                                break;
                            }
                        }
                    }
                    chat.getTabUnreadCount();
                }

                webim.syncMsgs(initUnreadMsgCount);
                $rootScope.$broadcast(BroadCast.IM_RECENT_CONTACTS, data);
            }, function (error) {
                $rootScope.$broadcast(BroadCast.IM_RECENT_CONTACTS, undefined);
                console.log('im error');
                console.error(error);
            });
        };

        chat.getContacts = function () {
            var options = {
                'Member_Account': chat.loginInfo.identifier,
                'Offset': 0,
                'GroupBaseInfoFilter': [
                    'Type',
                    'Name',
                    'Introduction',
                    'Notification',
                    'FaceUrl',
                    'CreateTime',
                    'Owner_Account',
                    'LastInfoTime',
                    'LastMsgTime',
                    'NextMsgSeq',
                    'MemberNum',
                    'MaxMemberNum',
                    'ApplyJoinOption'
                ],
                'SelfInfoFilter': [
                    'Role',
                    'JoinTime',
                    'MsgFlag',
                    'UnreadMsgNum'
                ]
            };
            webim.getJoinedGroupListHigh(
                options,
                function (resp) {
                    chat.retryCount = 0;
                    if (!resp.GroupIdList || resp.GroupIdList.length === 0) {
                        console.log('你目前还没有加入任何群组');
                        return;
                    }
                    var data = [];
                    // console.log('group Id list');
                    // console.log(resp);
                    for (var i = 0; i < resp.GroupIdList.length; i++) {
                        var item = {
                            'SortField': webim.Tool.groupTypeEn2Ch(resp.GroupIdList[i].Type),
                            'GroupId': resp.GroupIdList[i].GroupId,
                            'Name': webim.Tool.formatText2Html(resp.GroupIdList[i].Name),
                            'TypeEn': resp.GroupIdList[i].Type,
                            'Type': webim.Tool.groupTypeEn2Ch(resp.GroupIdList[i].Type),
                            'RoleEn': resp.GroupIdList[i].SelfInfo.Role,
                            'Role': webim.Tool.groupRoleEn2Ch(resp.GroupIdList[i].SelfInfo.Role),
                            'MsgFlagEn': webim.Tool.groupMsgFlagEn2Ch(resp.GroupIdList[i].SelfInfo.MsgFlag),
                            'MsgFlag': webim.Tool.groupMsgFlagEn2Ch(resp.GroupIdList[i].SelfInfo.MsgFlag),
                            'MemberNum': resp.GroupIdList[i].MemberNum,
                            'Notification': webim.Tool.formatText2Html(resp.GroupIdList[i].Notification),
                            'Introduction': webim.Tool.formatText2Html(resp.GroupIdList[i].Introduction),
                            'JoinTime': webim.Tool.formatTimeStamp(resp.GroupIdList[i].SelfInfo.JoinTime),
                            'NextMsgSeq': resp.GroupIdList[i].NextMsgSeq,
                            'FaceUrl': resp.GroupIdList[i].FaceUrl
                        };

                        var classid, needCache = false;
                        var arr = item.GroupId.split('_');
                        if (arr && arr.length > 1) {
                            classid = item.ClassID = arr[arr.length - 1];
                            if (item.TypeEn === 'Public' && (arr[0] === 'all' || arr[0] === 'school')) {
                                needCache = true;
                                if (arr[0] === 'school') {
                                    classid = item.ClassID = 'schoolTeacher';
                                    data.push(item);
                                }
                            } else
                                data.push(item);
                            chat.getGroupMemberInfo(item, needCache, classid);
                        }
                    }
                    chat.groups = data;
                },
                function (err) {
                    console.log(err.ErrorInfo);
                    if (chat.retryCount > 2) {
                        chat.retryCount = 0;
                        $rootScope.$broadcast(BroadCast.IM_REV_CONTACTS, undefined);
                    } else {
                        setTimeout(function () {
                            chat.retryCount++;
                            chat.getContacts();
                        }, 5000);
                    }
                }
            );
        };

        chat.getMemberInfoFromMap = function (sessType, sessionId, classid) {
            var key = sessType + "_" + sessionId;
            if (sessType == webim.SESSION_TYPE.C2C) {
                var ckey = sessType + "_" + sessionId + "_" + classid;
                if (chat.infoMap[ckey])
                    return chat.infoMap[ckey];
                else
                    return chat.infoMap[key];
            }
            return chat.infoMap[key];
        };

        chat.getGroupMemberInfo = function (group, needCache, classid) {
            var options = {
                'GroupId': group.GroupId,
                'Offset': 0,
                'MemberInfoFilter': [
                    'Account',
                    'Role',
                    'NameCard',
                    'JoinTime',
                    'LastSendMsgTime',
                    'ShutUpUntil',
                    'AppMemberDefinedData'
                ]
            };
            webim.getGroupMemberInfo(
                options,
                function (resp) {
                    chat.retryCount = 0;
                    if (resp.MemberNum <= 0) {
                        console.log(group.Name + '目前没有成员');
                        return;
                    }
                    // console.log('resp--');
                    // console.log(resp.MemberList);
                    var data = [];
                    for (var i in resp.MemberList) {
                        var account = resp.MemberList[i].Member_Account;
                        var role = webim.Tool.groupRoleEn2Ch(resp.MemberList[i].Role);
                        var join_time = webim.Tool.formatTimeStamp(
                            resp.MemberList[i].JoinTime);
                        var shut_up_until = webim.Tool.formatTimeStamp(
                            resp.MemberList[i].ShutUpUntil);
                        if (shut_up_until === 0) {
                            shut_up_until = '-';
                        }
                        var nick, icon, category;
                        var extra = resp.MemberList[i].AppMemberDefinedData;
                        for (var j = 0; j < extra.length; j++) {
                            if (extra[j].Key === 'Category')
                                category = extra[j].Value;
                            else if (extra[j].Key === 'Nick')
                                nick = extra[j].Value;
                            else if (extra[j].Key === 'Icon')
                                icon = extra[j].Value;
                        }

                        var key = webim.SESSION_TYPE.C2C + "_" + account;
                        var pre = chat.infoMap[key];
                        if (!pre || (pre && nick !== ""))
                            chat.infoMap[key] = {
                                name: nick,
                                image: icon,
                                type:category
                            };
                        if (needCache) {
                            chat.infoMap[key + "_" + classid] = chat.infoMap[key];
                            data.push({
                                SortField: nick,
                                GroupId: group.GroupId,
                                Member_Account: account,
                                Role: role,
                                JoinTime: join_time,
                                ShutUpUntil: shut_up_until,
                                Icon: icon,
                                Name: nick,
                                Category: category,
                                ClassID: classid
                            });
                        }
                    }
                    if (needCache) {
                        // console.log('friends data :');
                        // console.log(data);
                        chat.friendsMap[classid] = data;
                        UserPreference.setObject('ChatUserInfoMap', chat.infoMap);
                        UserPreference.setObject('ChatContactListMap', chat.friendsMap);
                        $rootScope.$broadcast(BroadCast.IM_REV_CONTACTS, data);
                    }
                },
                function (err) {
                    if (needCache) {
                        $rootScope.$broadcast(BroadCast.IM_REV_CONTACTS, undefined);
                        if (chat.retryCount > 2) {
                            chat.retryCount = 0;
                        } else {
                            setTimeout(function () {
                                chat.retryCount++;
                                chat.getContacts();
                            }, 5000);
                        }
                    }
                    console.log(err.ErrorInfo);
                }
            );
        };

        chat.getC2CHistoryMsgs = function (id, lastMsgTime, msgKey) {
            var options = {
                'Peer_Account': id, //好友帐号
                'MaxCnt': 10, //拉取消息条数
                'LastMsgTime': lastMsgTime, //最近的消息时间，即从这个时间点向前拉取历史消息
                'MsgKey': msgKey
            };
            webim.getC2CHistoryMsgs(
                options,
                function (resp) {
                    $rootScope.$broadcast(BroadCast.IM_C2C_HISTORY_MESSAGE, resp);
                },
                function (error) {
                    $rootScope.$broadcast(BroadCast.IM_C2C_HISTORY_MESSAGE, error);
                }
            );
        };

        chat.getGroupHistoryMsgs = function (id, ReqMsgSeq) {
            if (ReqMsgSeq === 0)
                ReqMsgSeq = undefined;
            var options = {
                'GroupId': id,
                'ReqMsgNumber': 10,
                'ReqMsgSeq': ReqMsgSeq
            };
            webim.syncGroupMsgs(
                options,
                function (resp) {
                    $rootScope.$broadcast(BroadCast.IM_GROUP_HISTORY_MESSAGE, resp);
                },
                function (error) {
                    $rootScope.$broadcast(BroadCast.IM_GROUP_HISTORY_MESSAGE, error);
                }
            );
        };

        chat.quitGroup = function (group_id) {
            var defer = $q.defer();
            var options = null;
            if (group_id) {
                options = {
                    'GroupId': group_id
                };
            }
            webim.quitGroup(
                options,
                function (resp) {
                    defer.resolve(resp);
                },
                function (err) {
                    defer.reject(err);
                }
            );
            return defer.promise;
        };

        //解散群 destroyGroup
        chat.destroyGroup = function (group_id) {
            var defer = $q.defer();
            var options = null;
            if (group_id) {
                options = {
                    'GroupId': group_id
                };
            }
            webim.destroyGroup(
                options,
                function (resp) {
                    defer.resolve(resp);
                },
                function (err) {
                    defer.reject(err);
                }
            );
            return defer.promise;
        };

        chat.getGroupInfo = function (id) {
            var defer = $q.defer();
            var options = {
                'GroupIdList': [
                    id
                ],
                'GroupBaseInfoFilter': [
                    'Type',
                    'Name',
                    'Introduction',
                    'Notification',
                    'FaceUrl',
                    'CreateTime',
                    'Owner_Account',
                    'LastInfoTime',
                    'LastMsgTime',
                    'NextMsgSeq',
                    'MemberNum',
                    'MaxMemberNum',
                    'ApplyJoinOption'
                ],
                'MemberInfoFilter': [
                    'Account',
                    'Role',
                    'NameCard',
                    'JoinTime',
                    'LastSendMsgTime',
                    'ShutUpUntil',
                    'AppMemberDefinedData',
                    'Category'
                ]
            };
            webim.getGroupInfo(
                options,
                function (resp) {
                    defer.resolve(resp);
                },
                function (err) {
                    defer.reject(err);
                }
            );
            return defer.promise;
        };

        chat.modifyGroupInfo = function (gid, name) {
            var defer = $q.defer();
            var options = {
                'GroupId': gid,
                'Name': name
            };
            webim.modifyGroupBaseInfo(
                options,
                function (resp) {
                    defer.resolve(resp);
                },
                function (err) {
                    defer.reject(err);
                }
            );
            return defer.promise;
        };

        chat.modifyGroupMember = function (gid, members, deleteMode) {
            if (deleteMode) {
                var defer = $q.defer();
                var options = {
                    'GroupId': gid,
                    'MemberToDel_Account': members
                };
                webim.deleteGroupMember(
                    options,
                    function (resp) {
                        defer.resolve(resp);
                    },
                    function (err) {
                        defer.reject(err);
                    }
                );
                return defer.promise;
            } else {
                return $http({
                    method: "post",
                    url: Constant.ServerUrl + "/im/add-members",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: CustomParam({
                        'groupId': gid,
                        'members': members
                    })
                });
            }
        };

        chat.createCustomGroup = function (name, sclass, members) {
            var uid = chat.loginInfo.identifier;
            var gid = new Date().getTime() + uid;
            var options = {
                'groupId': gid + "_" + sclass.key,
                'owner': chat.loginInfo.identifier,
                'groupName': name,
                'intro': sclass.value,
                'members': members
            };

            return $http({
                method: "post",
                url: Constant.ServerUrl + "/im/create-group",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam(options)
            });
        };

        chat.uploadImageAndSend = function (selSess, img, onProgressCallBack) {
            var selType = selSess.type();
            var businessType; //业务类型，1-发群图片，2-向好友发图片
            if (selType == webim.SESSION_TYPE.C2C) { //向好友发图片
                businessType = webim.UPLOAD_PIC_BUSSINESS_TYPE.C2C_MSG;
            } else if (selType == webim.SESSION_TYPE.GROUP) { //发群图片
                businessType = webim.UPLOAD_PIC_BUSSINESS_TYPE.GROUP_MSG;
            }
            var opt = {
                'file': img, //图片对象
                'onProgressCallBack': onProgressCallBack, //上传图片进度条回调函数
                //'abortButton': document.getElementById('upd_abort'), //停止上传图片按钮
                'To_Account': selSess.id(), //接收者
                'businessType': businessType //业务类型
            };
            var msg = new webim.Msg(selSess, true, -1, -1, -1, chat.loginInfo.identifier, 0, chat.loginInfo.identifierNick);
            var rsp = {
                msg: msg,
                type: 'image'
            };
            $rootScope.$broadcast(BroadCast.IM_MSG_SENDING, rsp);
            //上传图片
            webim.uploadPic(opt,
                function (images) {
                    var images_obj = new webim.Msg.Elem.Images(images.File_UUID);
                    for (var i in images.URL_INFO) {
                        var img = images.URL_INFO[i];
                        var newImg;
                        var type;
                        switch (img.PIC_TYPE) {
                            case 1: //原图
                                type = 1; //原图
                                break;
                            case 2: //小图（缩略图）
                                type = 3; //小图
                                break;
                            case 4: //大图
                                type = 2; //大图
                                break;
                        }
                        newImg = new webim.Msg.Elem.Images.Image(type, img.PIC_Size, img.PIC_Width, img.PIC_Height, img.DownUrl);
                        images_obj.addImage(newImg);
                    }
                    msg.addImage(images_obj);
                    rsp = {
                        msg: msg,
                        type: 'image'
                    };
                    webim.sendMsg(msg, function (resp) {
                        if (selType == webim.SESSION_TYPE.C2C) { //私聊时，在聊天窗口手动添加一条发的消息，群聊时，长轮询接口会返回自己发的消息
                            $rootScope.$broadcast(BroadCast.IM_MSG_SENT, rsp);
                        }
                    }, function (err) {
                        console.error(err.ErrorInfo);
                        $rootScope.$broadcast(BroadCast.IM_MSG_SEND_FAIL, rsp);
                    });
                },
                function (err) {
                    console.error(err.ErrorInfo);
                    $rootScope.$broadcast(BroadCast.IM_IMAGE_SEND_FAIL, rsp);
                }
            );
        };

        chat.sendMessage = function (session, msgtosend) {
            var msgLen = webim.Tool.getStrBytes(msgtosend);
            var selType = session.type();
            var maxLen, errInfo;
            if (selType == webim.SESSION_TYPE.C2C) {
                maxLen = webim.MSG_MAX_LENGTH.C2C;
                errInfo = "消息长度超出限制(最多" + Math.round(maxLen / 3) + "汉字)";
            } else {
                maxLen = webim.MSG_MAX_LENGTH.GROUP;
                errInfo = "消息长度超出限制(最多" + Math.round(maxLen / 3) + "汉字)";
            }
            if (msgLen > maxLen) {
                alert(errInfo);
                return;
            }
            if (!session) {
                alert("消息发送失败");
            }
            var isSend = true; //是否为自己发送
            var seq = -1; //消息序列，-1表示sdk自动生成，用于去重
            var random = Math.round(Math.random() * 4294967296); //消息随机数，用于去重
            var msgTime = Math.round(new Date().getTime() / 1000); //消息时间戳
            var subType; //消息子类型
            if (selType == webim.SESSION_TYPE.C2C) {
                subType = webim.C2C_MSG_SUB_TYPE.COMMON;
                if (window.cordova) MobclickAgent.onEvent('app_send_c2c_msg');
            } else {
                //webim.GROUP_MSG_SUB_TYPE.COMMON-普通消息,
                //webim.GROUP_MSG_SUB_TYPE.LOVEMSG-点赞消息，优先级最低
                //webim.GROUP_MSG_SUB_TYPE.TIP-提示消息(不支持发送，用于区分群消息子类型)，
                //webim.GROUP_MSG_SUB_TYPE.REDPACKET-红包消息，优先级最高
                subType = webim.GROUP_MSG_SUB_TYPE.COMMON;
                if (window.cordova) MobclickAgent.onEvent('app_send_group_msg');
            }
            var msg = new webim.Msg(session, isSend, seq, random, msgTime, chat.loginInfo.identifier, subType, chat.loginInfo.identifierNick);

            var text_obj, face_obj, tmsg, emotionIndex, emotion, restMsgIndex;
            //解析文本和表情
            var expr = /\[[^[\]]{1,3}\]/mg;
            var emotions = msgtosend.match(expr);
            if (!emotions || emotions.length < 1) {
                text_obj = new webim.Msg.Elem.Text(msgtosend);
                msg.addText(text_obj);
            } else {

                for (var i = 0; i < emotions.length; i++) {
                    tmsg = msgtosend.substring(0, msgtosend.indexOf(emotions[i]));
                    if (tmsg) {
                        text_obj = new webim.Msg.Elem.Text(tmsg);
                        msg.addText(text_obj);
                    }
                    emotionIndex = webim.EmotionDataIndexs[emotions[i]];
                    emotion = webim.Emotions[emotionIndex];

                    if (emotion) {
                        face_obj = new webim.Msg.Elem.Face(emotionIndex, emotions[i]);
                        msg.addFace(face_obj);
                    } else {
                        text_obj = new webim.Msg.Elem.Text(emotions[i]);
                        msg.addText(text_obj);
                    }
                    restMsgIndex = msgtosend.indexOf(emotions[i]) + emotions[i].length;
                    msgtosend = msgtosend.substring(restMsgIndex);
                }
                if (msgtosend) {
                    text_obj = new webim.Msg.Elem.Text(msgtosend);
                    msg.addText(text_obj);
                }
            }
            var rsp = {
                msg: msg,
                type: 'text'
            };
            $rootScope.$broadcast(BroadCast.IM_MSG_SENDING, rsp);
            webim.sendMsg(msg, function (resp) {
                $rootScope.$broadcast(BroadCast.IM_MSG_SENT, rsp);
            }, function (err) {
                console.error(err.ErrorInfo);
                $rootScope.$broadcast(BroadCast.IM_MSG_SEND_FAIL, rsp);
            });
        };

        chat.logout = function () {
            if (chat.loginInfo) {
                webim.logout(
                    function (resp) {
                        chat.loginInfo = null;
                        $window.location.reload();
                    }
                );
            }
        };

        chat.getUserDetail = function (id) {
            return $http.get(Constant.ServerUrl + "/getinfo", {
                    params: {
                        id: id
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        return chat;
    }])
    .factory('SavePhotoTool', ['$ionicLoading', function ($ionicLoading) {
        var tool = {};
        tool.savePhoto = function (url) {
            var config = {
                allowSave: true,
                album: 'Xgenban'
            };
            tool.config = angular.extend({}, config, {
                allowSave: true
            });
            if (window.cordova) {
                cordova.plugins.photoLibrary.getAlbums(
                    function (result) {
                        tool.saveImgUrl(url);
                    },
                    function (err) {
                        if (err.startsWith('Permission')) {
                            cordova.plugins.photoLibrary.requestAuthorization(
                                function () {
                                    tool.saveImgUrl(url);
                                },
                                function (err) {
                                    // User denied the access
                                    console.log(err);
                                }, {
                                    read: true,
                                    write: true
                                }
                            );
                        }
                    }
                );

            }
        };

        tool.saveImgUrl = function (url) {
            if (window.cordova) {
                cordova.plugins.photoLibrary.saveImage(url + '?ext=.jpg', tool.config.album, function (libraryItem) {
                    $ionicLoading.show({
                        template: '保存成功',
                        duration: 1500
                    });
                }, function (err) {
                    console.log(err);
                });
            }

        };

        return tool;
    }])
    .factory('DownloadFile', ['$ionicLoading', '$timeout', '$cordovaFileTransfer', '$cordovaFileOpener2', 'toaster', 'MESSAGES', function ($ionicLoading, $timeout, $cordovaFileTransfer, $cordovaFileOpener2, toaster, MESSAGES) {
        var file = {};
        file.readFile = function (url) {
            $ionicLoading.show({
                template: "请稍候，正在读取：0%"
            });


            var fileType = url.slice(url.lastIndexOf('.') + 1);

            var mimeType = '';
            switch (fileType.toLowerCase()) {
                case 'txt':
                    mimeType = 'text/plain';
                    break;
                case 'docx':
                    mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                    break;
                case 'doc':
                    mimeType = 'application/msword';
                    break;
                case 'pptx':
                    mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                    break;
                case 'ppt':
                    mimeType = 'application/vnd.ms-powerpoint';
                    break;
                case 'xlsx':
                    mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                    break;
                case 'xls':
                    mimeType = 'application/vnd.ms-excel';
                    break;
                case 'zip':
                    mimeType = 'application/x-zip-compressed';
                    break;
                case 'rar':
                    mimeType = 'application/octet-stream';
                    break;
                case 'pdf':
                    mimeType = 'application/pdf';
                    break;
                case 'jpg':
                    mimeType = 'image/jpeg';
                    break;
                case 'png':
                    mimeType = 'image/png';
                    break;
                default:
                    mimeType = 'application/' + fileType;
                    break;
            }

            var targetPath;
            var isIos = ionic.Platform.isIOS();
            if (window.cordova) {
                if (isIos) {
                    targetPath = cordova.file.tempDirectory + fileType;
                } else {
                    targetPath = cordova.file.dataDirectory + fileType;
                }
            }

            //console.log('targetpath:'+targetPath);
            var trustHosts = true;
            var options = {};
            $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function (result) {
                //  alert('succeed');
                // 打开下载下来的文件
                if (window.cordova) {
                    // if(!isIos){
                    //     $cordovaFileOpener2.appIsInstalled('com.adobe.reader').then(function(res) {
                    //         if (res.status === 0) {
                    //           alert('未检测到相应的软件能打开此文档');
                    //         } else {
                    //             // Adobe Reader is installed.
                    //         }
                    //     });
                    // }
                    $cordovaFileOpener2.open(targetPath, mimeType).then(function () {
                        console.log('open succeed');
                        // alert('open succeed');
                        // 成功
                    }, function (err) {
                        console.log('open file failure');
                        // 错误
                        // alert('open error');
                        console.log(err);
                    });
                }

                $ionicLoading.hide();
            }, function (err) {
                toaster.error({
                    title: MESSAGES.DOWNLOAD_ERROR,
                    body: err.exception
                });
                $ionicLoading.hide();
            }, function (progress) {
                $timeout(function () {
                    var downloadProgress = (progress.loaded / progress.total) * 100;
                    $ionicLoading.show({
                        template: "请稍候，正在读取：" + Math.floor(downloadProgress) + "%"
                    });
                    if (downloadProgress > 99) {
                        $ionicLoading.hide();
                    }
                });
            });
        };
        return file;
    }]);

angular.module('app.directives', [])
    .directive('resizeFootBar', ['$ionicScrollDelegate', '$rootScope', function ($ionicScrollDelegate, $rootScope) {
        return {
            replace: false,
            link: function (scope, iElm, iAttrs, controller) {
                scope.$on("taResize", function (e, ta) {
                    if (!ta) return;
                    var scroller = document.body.querySelector('#userMessagesView .scroll-content');
                    var viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll');
                    var taHeight = ta[0].offsetHeight;
                    var newFooterHeight = taHeight + 10;
                    newFooterHeight = (newFooterHeight > 44) ? newFooterHeight : 44;
                    iElm[0].style.height = newFooterHeight + 'px';
                    scroller.style.bottom = newFooterHeight + 'px';
                    viewScroll.scrollBottom();
                });
            }
        };
    }])
    .directive('ngFocus', [function () {
        var FOCUS_CLASS = "ng-focused";
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                ctrl.$focused = false;
                element.bind('focus', function (evt) {
                    element.addClass(FOCUS_CLASS);
                    scope.$apply(function () {
                        ctrl.$focused = true;
                    });
                }).bind('blur', function (evt) {
                    element.removeClass(FOCUS_CLASS);
                    scope.$apply(function () {
                        ctrl.$focused = false;
                    });
                });
            }
        };
    }])
    .directive('compile', ['$compile', function ($compile) {
        return function (scope, element, attrs) {
            scope.$watch(function (scope) {
                    return scope.$eval(attrs.compile);
                },
                function (value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                }
            );
        };
    }])
    .directive('backImg', function () {
        return function (scope, element, attrs) {
            element.css({
                'background-image': 'url(' + attrs.backImg + ')',
                'background-size': 'cover'
            });
        };
    })
    .directive('pwCheck', [function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                var firstPassword = '#' + attrs.pwCheck;
                elem.add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                        var v = elem.val() === $(firstPassword).val();
                        ctrl.$setValidity('pwmatch', v);
                    });
                });
            }
        };
    }])
    .directive('passwordToggle', ['$compile', function($compile) {
        return {
            restrict: 'A',
            scope: {},
            link: function(scope, elem, attrs) {
                scope.tgl = function() {
                    elem.attr('type', (elem.attr('type') === 'text' ? 'password' : 'text'));
                };
                var lnk = angular.element('<a ng-click="tgl()"></a>');
                $compile(lnk)(scope);
                elem.wrap('<div class="password-toggle"/>').after(lnk);
            }
        };
    }])
    .directive('phoneCheck', function () {
        return {
            require: 'ngModel',
            scope: false,
            link: function (scope, elm, attrs, ctrl) {
                elm.bind('keyup', function () {
                    scope.getChildren();
                });
            }
        };
    })
    .directive('backBtn', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                nav: '@navTo'
            },
            template: [
                '<button class="button button-icon icon " ng-click="goBack()">' +
                '<img src="img/icon/icon-arrow_left.png" style="max-width: 25px;max-height:25px;padding-top: 7px;" alt=""/>' +
                '</button>'
            ].join(''),
            controller: ['$scope', '$ionicHistory', '$state', '$rootScope', function ($scope, $ionicHistory, $state ,$rootScope) {

                $scope.goBack = function() {
                    if ($scope.nav) {
                        $ionicHistory.nextViewOptions({
                            disableBack: true
                        });
                        $state.go($scope.nav);
                    } else {
                        if ($ionicHistory.backView())
                            // $ionicHistory.goBack();
                                $rootScope.$ionicGoBack();
                           
                        else {
                            console.log('back view is null, go mainPage');
                            $state.go('schoolRepairList');
                        }
                    }
                };
            }]
        };
    })
    .directive('imageonload', ['$ionicLoading', function ($ionicLoading) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, ctrl) {
                element.bind('load', function () {
                    $ionicLoading.hide();
                });
                element.bind('error', function () {
                    $ionicLoading.hide();
                });
            }
        };
    }])
    .directive('itemEnd',function () {
        //用于将某些地方将元素放在容器的右边
        return {
            restrict: 'A',
            link:function (scope,element,attrs,ctrl) {
                element.css({
                    'float': 'right'
                });

            }
        };
    })
    .directive('emotionPicker',function(){
        return {
            restrict :'EA',
            // replace:true,
            // transclude:true,
            scope:false,
            template:'<div style="height:195px;border-top: 1px solid #cfcece;width:100%;">'+
            '<div style="padding:10px; height:195px;width:100%;">'+
            '<ion-slides>'+
            '<ion-slide-page ng-repeat="item in items" style="height:195px;width:100%;">'+
            '<span ng-repeat="emotion in item"  ng-click="setValue(emotion)" style="display: block;float: left;width: 12.5%; height: 42px; font-size: 1.2em;line-height: 42px;text-align: center;margin-bottom: 10px;">'+
            '{{emotion}}'+
            '</span>'+
            '</ion-slide-page>'+
            '</ion-slides>'+
            '</div>'+
            '</div>',
            link: function (scope, element, attrs) {
                var EMOJIS =
                    "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 😉 😌 😭 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️" +
                    " 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿 👹 👺" +
                    " 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖" +
                    " 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 🕶 🌂 ☂️";
                var EmojiArr = EMOJIS.split(" ");
                var groupNum = Math.ceil(EmojiArr.length / 24);
                scope.items = [];

                for (var i = 0; i < groupNum; i++) {
                    scope.items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
                }
                //设置值
                // scope.setValue = function (emotion) {
                //     // console.log('点击了:' + emotion);
                //     scope.localValue += emotion;
                // };
            }
        };
    });





/**
 * Created by hewz on 2017/5/16.
 */
angular.module('app.requester', ['ionic'])
    .factory('Requester', ['$http', 'Constant', '$q', 'UserPreference', 'toaster', function ($http, Constant, $q, UserPreference, toaster) {
        var req = {};

        /**
         * 文件形式上传图片 单个
         */
        req.uploadPictureByFileType = function (file) {
            var fd = new FormData();
            fd.append('file', file);
            fd.append('filename', 'image.jpeg');
            var url = Constant.ServerUrl.substr(0, Constant.ServerUrl.length - 4) + '/admin/fw/common/upload';
            return $http({
                method: 'POST',
                url: url,
                data: fd,
                headers: {
                    'Content-Type': undefined, //' multipart/form-data',
                    // 'Content-Disposition' :"inline;filename=hello.jpg "
                },
                transformRequest: angular.identity
            }).then(function (response) {
                //上传成功的操作
                return response.data;
            }, function (error) {
                console.log('failure');
                return $q.reject(error);
            });
        };

        /**
         * 多图上传
         */
        req.uploadMorePictureFileType = function (files) {
            var fd = new FormData();
            files.forEach(function (file) {
                fd.append('files', file);
            });
            var url = Constant.ServerUrl.substr(0, Constant.ServerUrl.length - 4) + '/admin/fw/common/upload/batch';
            return $http({
                method: 'POST',
                url: url, //'https://test17.xgenban.com/sctserver/admin/fw/common/upload/batch',
                data: fd,
                headers: {
                    'Content-Type': undefined, //' multipart/form-data',
                    // 'Content-Disposition' :"inline;filename=hello.jpg "
                },
                transformRequest: angular.identity
            }).then(function (response) {
                //上传成功的操作
                // console.log("uplaod success");
                return response.data;
            }, function (error) {
                console.log('failure');
                return $q.reject(error);
            });
        };


        /***
         * 获取自己（已选）走班课
         * @param role
         * @returns {*}
         */
        req.getMyDynamicCourse = function (role) {
            switch (String(role)) {
                case Constant.USER_ROLES.STUDENT:
                    return $http.get(Constant.ServerUrl + "/walkcourse/getSelfClCource")
                        .then(function (response) {
                            return response.data;
                        }, function (error) {
                            return $q.reject(error);
                        });
                case Constant.USER_ROLES.PARENT:
                    return $http.get(Constant.ServerUrl + "/walkcourse/getChildClCource", {
                            params: {
                                stuid: UserPreference.get('DefaultChildID')
                            }
                        })
                        .then(function (response) {
                            return response.data;
                        }, function (error) {
                            return $q.reject(error);
                        });
                case Constant.USER_ROLES.TEACHER:
                    return $http.get(Constant.ServerUrl + "/walkcourse/getTeacherClCource")
                        .then(function (response) {
                            return response.data;
                        }, function (error) {
                            return $q.reject(error);
                        });
            }

        };

        /**
         * 获取可选走班课
         * @param sid
         * @returns {*}
         */
        req.getSelectableDynamicCourse = function (sid) {
            return $http.get(Constant.ServerUrl + "/walkcourse/getWalkByStudent", {
                    params: {
                        stuid: sid
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 获取可选走班课子课程
         * @param wkid
         * @returns {*}
         */
        req.getSubDynamicCourse = function (wkid) {
            return $http.get(Constant.ServerUrl + "/walkcourse/getWalkSubListByWalkCourseID", {
                    params: {
                        wkid: wkid
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 设置推送消息已读
         * @param noticeId
         * @returns {*}
         */
        req.setNoticeRead = function (noticeId) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/notice/readSign",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    noticeId: noticeId
                })
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 设置到校通知已读
         * @param arr
         * @returns {*}
         */
        req.setCheckInNoticeRead = function (arr) {
            return $http.post(Constant.ServerUrl + "/attend/readup", arr).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 选课
         * @param stuid
         * @param walksubid
         * @returns {*}
         */
        req.courseEnroll = function (stuid, walksubid) {
            return $http.post(Constant.ServerUrl + "/walkcourse/chooseWalkCource", {
                stuid: stuid,
                walksubid: walksubid
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取所有消息未读数
         * @param stuId
         * @returns {*}
         */
        req.getUnreadTotal = function (stuId) {
            if (!stuId)
                stuId = UserPreference.getObject('user').id;
            return $http.get(Constant.ServerUrl + "/notice/unreadTotal", {
                    params: {
                        stuId: stuId
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 获取到校通知 (幼儿园)
         * @param stuId
         * @returns {*}
         */
        req.getChildCheckInRecords = function (stuId) {
            return $http.get(Constant.ServerUrl + "/attend/getChildAttendanceInfo", {
                    params: {
                        stuid: stuId
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 获取到校通知（班级考勤） old
         * @param stuId
         * @returns {*}
         */
        req.getChildCheckInRecords2 = function (stuId) {
            return $http.get(Constant.ServerUrl + "/attend/getChildAdAttendanceInfo", {
                    params: {
                        studentId: stuId
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 获取到校通知（班级考勤） new
         */
        req.getChildCheckInRecords3 = function (stuId) {
            return $http.get(Constant.ServerUrl + "/attend/child/in-out", {
                    params: {
                        studentId: stuId
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 获取班级考勤月报
         * @param month
         * @param classid
         * @returns {*}
         */
        req.getClassMonthlyCheckInInfo = function (month, classid) {
            return $http.get(Constant.ServerUrl + "/attend/getClassAttendanceDetailMonthByCalendar", {
                params: {
                    classId: classid,
                    month: month
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取班级考勤信息(幼儿)
         * @param month
         * @param classid
         * @returns {*}
         */
        req.getKidClassCheckInInfo = function (month, classid) {
            return $http.get(Constant.ServerUrl + "/attend/getClassAttendanceInfoMonthByCalendar", {
                params: {
                    classId: classid,
                    month: month
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 获取班级考勤信息（班级考勤）
         * @param month
         * @param classid
         * @returns {*}
         */
        req.getClassCheckInInfo = function (month, classid) {
            return $http.get(Constant.ServerUrl + "/attend/getClassAdAttendInMonth", {
                params: {
                    classId: classid,
                    month: month,
                    page: 1,
                    rows: 31
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 班级考勤时段列表
         * @param classid
         * @returns {*}
         */
        req.getClassCheckInTimeList = function (classid) {
            return $http.get(Constant.ServerUrl + "/attend/getAdAttendTimeList", {
                params: {
                    classId: classid
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取考勤学生进出校记录
         * @param day
         * @param stuId
         * @param classId
         * @param type
         * @returns {*}
         */
        req.getStuInOutRecords = function (day, stuId, classId, type, attendTimeId) {
            var q;
            if (type === 'kid') {
                //幼儿园考勤
                q = $http.get(Constant.ServerUrl + "/kind/attend/attendRecord/" + stuId, {
                    params: {
                        date: day
                    }
                });
            } else if (type === 'normal') {
                q = $http.get(Constant.ServerUrl + "/attend/student-record/" + stuId, {
                    params: {
                        date: day,
                        attendTimeId: attendTimeId
                    }
                });
            } else {
                //平安校园
                q = $http.get(Constant.ServerUrl + "/schlAttendanceStatistics/getStudentAttendRecord/" + stuId, {
                    params: {
                        date: day,
                        classId: classId
                    }
                });
            }
            return q.then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取班级考勤已到（幼儿园）
         * @param day
         * @param classid
         * @returns {*}
         */
        req.getClassCheckedIn = function (day, classid) {
            return $http.get(Constant.ServerUrl + "/kind/attend/getattendinfo", {
                params: {
                    classid: classid,
                    day: day
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取班级考勤明细
         * @param day
         * @param classid
         * @param attendTimeId
         * @returns {*}
         */
        req.getNormalClassCheckedIn = function (day, classid, attendTimeId) {
            return $http.get(Constant.ServerUrl + "/attend/getClassAdAttendDetail", {
                params: {
                    classId: classid,
                    date: day,
                    attendTimeId: attendTimeId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取班级考勤缺勤信息（幼儿园）
         * @param day
         * @param classid
         * @returns {*}
         */
        req.getClassUncheckedIn = function (day, classid) {
            return $http.get(Constant.ServerUrl + "/kind/attend/getunattendinfo", {
                params: {
                    classid: classid,
                    day: day
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取班级考勤请假信息（幼儿园）
         * @param day
         * @param classid
         * @returns {*}
         */
        req.getClassLeave = function (day, classid) {
            return $http.get(Constant.ServerUrl + "/kind/attend/getaskleaveinfo", {
                params: {
                    classId: classid,
                    day: day
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取走班课考勤信息
         * @param month
         * @param walksubid
         * @returns {*}
         */
        req.getCourseCheckInInfo = function (month, walksubid) {
            return $http.get(Constant.ServerUrl + "/attend/getWalkAttendanceInfoMonth", {
                params: {
                    walksubid: walksubid,
                    month: month
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取走班课考勤已到信息
         * @param day
         * @param walksubid
         * @returns {*}
         */
        req.getCourseCheckedIn = function (day, walksubid) {
            return $http.get(Constant.ServerUrl + "/attend/getattendinfo", {
                params: {
                    walksubid: walksubid,
                    day: day
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取走班课考勤未到信息
         * @param day
         * @param walksubid
         * @returns {*}
         */
        req.getCourseUncheckedIn = function (day, walksubid) {
            return $http.get(Constant.ServerUrl + "/attend/getunattendinfo", {
                params: {
                    walksubid: walksubid,
                    day: day
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取请假类型
         * @param role
         * @returns {*}
         */
        req.getLeaveTypeList = function (role) {
            return $http.get(Constant.ServerUrl + "/askLeave/getAskTypeDefine")
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 获取请假列表
         * @param role
         * @param page
         * @returns {*}
         */
        req.getLeaveList = function (role, page) {
            switch (String(role)) {
                case Constant.USER_ROLES.PARENT:
                    return $http.get(Constant.ServerUrl + "/askLeave/getFamilyByStu", {
                            params: {
                                studentId: UserPreference.get('DefaultChildID'),
                                page: page,
                                rows: Constant.reqLimit
                            }
                        })
                        .then(function (response) {
                            return response.data;
                        }, function (error) {
                            return $q.reject(error);
                        });
                case Constant.USER_ROLES.TEACHER:
                    return $http.get(Constant.ServerUrl + "/askLeave/getTeaAskLeave", {
                            params: {
                                teacherId: UserPreference.getObject('user').id,
                                page: page,
                                rows: Constant.reqLimit
                            }
                        })
                        .then(function (response) {
                            return response.data;
                        }, function (error) {
                            return $q.reject(error);
                        });
            }

        };

        /**
         * 请假
         * @param reqData
         * @returns {*}
         */
        req.leaveRequest = function (reqData) {
            return $http.post(Constant.ServerUrl + "/askLeave/add-leave", reqData)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 老师更新请假状态
         * @param id
         * @returns {*}
         */
        req.updateLeaveRequest = function (id) {
            return $http.get(Constant.ServerUrl + "/askLeave/update-leaveStatus", {
                    params: {
                        id: id
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 老师获取今日考勤信息
         * @param cid
         * @returns {*}
         */
        req.getTodayAttendance = function (cid) {
            return $http.get(Constant.ServerUrl + "/pattend/today/detail", {
                params: {
                    classId: cid,
                    page: 1,
                    rows: 500
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 老师获取学生今日请假讯息
         * @param sid
         * @returns {*}
         */
        req.getStudentTodayLeaveInfo = function (sid) {
            return $http.get(Constant.ServerUrl + "/askLeave/getBaseByDate", {
                    params: {
                        studentId: sid
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 老师撤销学生请假记录
         * @param id
         * @returns {*}
         */
        req.removeLeaveReq = function (id) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/askLeave/cancelOne",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    id: id
                })
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 老师获取月度考勤信息
         * @param cid
         * @param month
         * @returns {*}
         */
        req.getMonthlyAttendance = function (cid, month) {
            return $http.get(Constant.ServerUrl + "/schlAttendanceStatistics/getMonthStatisticsofClass", {
                    params: {
                        classId: cid,
                        month: month,
                        page: 1,
                        rows: 31
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 老师获取指定日考勤信息
         * @param cid
         * @param day
         * @returns {*}
         */
        req.getDailyAttendance = function (cid, day) {
            return $http.get(Constant.ServerUrl + "/schlAttendanceStatistics/getStatisticsByAttendStatus", {
                    params: {
                        classId: cid,
                        date: day
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 家长获取到离校通知
         * @returns {*}
         */
        req.getChildArriveInfo = function () {
            return $http.get(Constant.ServerUrl + "/safeschool/attend/clocklist", {
                    params: {
                        stuid: UserPreference.get('DefaultChildID')
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };


        /**
         * 家长获取到安全预警
         * @returns {*}
         */
        req.getChildSaftyWarnings = function () {
            return $http.get(Constant.ServerUrl + "/safeschool/attend/warnlist", {
                    params: {
                        stuid: UserPreference.get('DefaultChildID')
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 家长获取安全预警设置(deprecated)
         * @param sid
         * @returns {*}
         */
        req.getChildSafetyWarnings = function (sid) {
            return $http.get(Constant.ServerUrl + "/safeschool/getparam", {
                params: {
                    parameterName: sid,
                    userid: UserPreference.get('DefaultChildID')
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 家长设置安全预警参数(deprecated)
         * @param parameterName
         * @param parameterValue
         * @returns {*}
         */
        req.setChildSafetySettings = function (parameterName, parameterValue) {
            return $http.post(Constant.ServerUrl + "/safeschool/setparam", {
                p_userid: UserPreference.get('DefaultChildID'),
                parameterName: parameterName,
                parameterValue: parameterValue
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 班主任获取安全预警设置
         * @param sid
         * @param classId
         * @returns {*}
         */
        req.getSafetyWarnings = function (sid, classId) {
            return $http.get(Constant.ServerUrl + "/safeschool/getclassparam", {
                params: {
                    parameterName: sid,
                    classid: classId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 班主任设置安全预警参数
         * @param classId
         * @param parameterName
         * @param parameterValue
         * @returns {*}
         */
        req.setSafetySettings = function (classId, parameterName, parameterValue) {
            return $http.post(Constant.ServerUrl + "/safeschool/setclassparam", {
                p_class_id: classId,
                parameterName: parameterName,
                parameterValue: parameterValue
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 设置安全预警已读
         * @param reqData
         * @returns {*}
         */
        req.setChildSafetyWarningsRead = function (reqData) {
            return $http.post(Constant.ServerUrl + "/safeschool/warn/readup", reqData)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 设置到校通知（平安校园下）已读
         * @param reqData
         * @returns {*}
         */
        req.setChildArriveInfoRead = function (reqData) {
            return $http.post(Constant.ServerUrl + "/safeschool/attend/readup", reqData)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 家长绑定学生卡号（幼儿）
         * @param cardNum
         * @returns {*}
         */
        req.bindStudentCard = function (cardNum) {
            return $http.post(Constant.ServerUrl + "/attend/bindcard", {
                    stuid: UserPreference.get('DefaultChildID'),
                    stucardid: cardNum
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 家长解绑学生卡号（幼儿）
         * @param cardNum
         * @param schoolId
         * @returns {*}
         */
        req.unbindStudentCard = function (cardNum, schoolId) {
            return $http.get(Constant.ServerUrl + "/attend/delete/bindcard", {
                params: {
                    stuid: UserPreference.get('DefaultChildID'),
                    stucardid: cardNum,
                    schoolId: schoolId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询学期信息
         * @param classId
         * @returns {*}
         */
        req.getSemesterInfo = function (classId) {
            var schoolId;
            var user = UserPreference.getObject('user');
            if (user.rolename === 4) {
                schoolId = UserPreference.get('DefaultSchoolID') ? UserPreference.get('DefaultSchoolID') : user.schauthmap[0].schoolid;
            } else {
                schoolId = UserPreference.get('DefaultSchoolID') ? UserPreference.get('DefaultSchoolID') : user.school.id;
            }
            return $http.get(Constant.ServerUrl + "/attend/calendar", {
                    params: {
                        classId: classId,
                        schoolId: schoolId
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 创建订单
         * @param attach
         * @param orderItems
         * @param receiveUserId
         * @param schoolId
         * @param model
         * @returns {*}
         */
        req.newOrder = function (attach, orderItems, receiveUserId, schoolId, model) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/pay/order/add",
                data: {
                    attach: attach,
                    schoolId: schoolId,
                    orderItems: orderItems,
                    receiveUserId: receiveUserId,
                    model: model
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 预下单
         * @param channel
         * @param orderSerial
         * @returns {*}
         */
        req.newOrderPayment = function (channel, orderSerial) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/pay/createPay",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    channel: channel,
                    orderSerial: orderSerial
                })
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询订单信息
         * @param orderSerial
         * @returns {*}
         */
        req.getOrderInfo = function (orderSerial) {
            return $http.get(Constant.ServerUrl + "/pay/order/queryOrderBySerial", {
                    params: {
                        orderSerial: orderSerial
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 查询所有订单
         * @param page
         * @returns {*}
         */
        req.getAllOrders = function (page) {
            return $http.get(Constant.ServerUrl + "/pay/order/queryOrdersByPayUser", {
                params: {
                    page: page,
                    rows: Constant.reqLimit
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询商品信息
         * @param goodId
         * @param categoryId
         * @param schoolId
         * @returns {*}
         */
        req.getGoodInfo = function (goodId, categoryId, schoolId) {
            return $http.get(Constant.ServerUrl + "/pay/good/get", {
                params: {
                    id: goodId,
                    categoryId: categoryId,
                    schoolId: schoolId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询是否购买
         * @param categoryId
         * @param receiveUserId
         * @returns {*}
         */
        req.isUserPurchased = function (categoryId, receiveUserId) {
            return $http.get(Constant.ServerUrl + "/pay/order/hasCategoryGoodByReceiver", {
                params: {
                    categoryId: categoryId,
                    receiveUserId: receiveUserId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询是否支付成功
         * @param orderID
         * @returns {*}
         */
        req.isPaymentSuccess = function (orderID) {
            return $http.get(Constant.ServerUrl + "/pay/queryTrade", {
                params: {
                    outTradeNo: orderID
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询学校卡押金价格
         * @param schoolId
         * @returns {*}
         */
        req.getSchoolCardPrice = function (schoolId) {
            return $http.get(Constant.ServerUrl + "/pay/order/querySchoolCardPrice", {
                params: {
                    schoolId: schoolId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 班主任查询班级内押金缴费情况
         * @param page
         * @param classId
         * @returns {*}
         * @constructor
         */
        req.getClassCardPayStatus = function (page, classId) {
            return $http.get(Constant.ServerUrl + "/pay/order/queryCardForegiftOrdersByClassId", {
                params: {
                    classId: classId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 老师查询所教课程
         * @returns {*}
         */
        req.getTeachingSchedule = function () {
            return $http.get(Constant.ServerUrl + "/course/byTeacher")
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 老师查询平安校园推送列表
         * @returns {*}
         */
        req.getSafeSchoolPushs = function (tid, page) {
            return $http.get(Constant.ServerUrl + "/attend/push/queryPushList", {
                    params: {
                        teacherId: tid,
                        page: page,
                        rows: Constant.reqLimit
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };

        /**
         * 获取首页推荐文章
         * @returns {*}
         */
        req.getTopSlides = function () {
            return $http.get(Constant.ServerUrl + "/article/top", {
                    params: {
                        userId: UserPreference.getObject('user').id
                    }
                })
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error);
                });
        };


        /**
         * 今日考勤老师补签
         * @param data
         * @returns {*}
         */
        req.reCheckIn = function (data) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/safeschool/addrecord",
                data: data
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 批量修改考勤信息
         * @param attendStatusStr
         * @param date
         * @param studentIds
         * @returns {*}
         */
        req.modifyCheckIn = function (attendStatusStr, date, studentIds) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/schlAttendanceStatistics/updateBatch",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    attendStatusStr: attendStatusStr,
                    date: date,
                    studentIds: studentIds
                })
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 家长修改学生信息
         * @param stuId
         * @param key
         * @param value
         * @returns {*}
         */
        req.modifyStuInfo = function (stuId, key, value) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/infoeditByFamily",
                data: {
                    stuid: stuId,
                    key: key,
                    value: value
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 通过手机号查询子女
         * @returns {*}
         */
        req.getChildren = function (phone) {
            return $http.get(Constant.ServerUrl + "/getchildinfo/noauth", {
                params: {
                    phnumber: phone
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 注册关联选择已有学生
         * @param stuId
         * @param phone
         * @param smscode
         * @param password
         * @returns {*}
         */
        req.selectExistedStudent2Register = function (stuId, phone, smscode, password) {
            return $http.post(Constant.ServerUrl + "/selectRegister", {
                stuId: stuId,
                phone: phone,
                smscode: smscode,
                password: md5(password).toUpperCase()
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询学生成绩列表
         * @param role
         * @param classId 老师必传
         * @param page
         * @param studentId 家长必传
         *role
         */
        req.selectTestScoresList = function (role, classId, page, studentId) {
            var param = {};
            if (role === Constant.USER_ROLES.PARENT || role === Constant.USER_ROLES.STUDENT) {
                param = {
                    page: page,
                    rows: 20,
                    studentId: studentId
                };
            } else if (role === Constant.USER_ROLES.TEACHER) {
                param = {
                    classId: classId,
                    page: page,
                    rows: 20
                };
            }

            return $http.get(Constant.ServerUrl + "/exam/score/list", {
                params: param

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });

        };

        /**
         * 学生成长分析
         * @param studentId 学生id 家长必传
         */
        req.getStudentGrowthAnalysis = function (studentId) {
            return $http.get(Constant.ServerUrl + "/exam/score/analysis/" + studentId, {
                params: {}

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });

        };

        /**
         * 老师查看学生考试成绩详情
         * @param classId 班级id
         * @param examId 考试Id
         */
        req.getClassStudentExamListDetail = function (classId, examId) {
            return $http.get(Constant.ServerUrl + "/exam/score/detail", {
                params: {
                    classId: classId,
                    examId: examId
                }

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 老师推送 考试成绩 给家长
         * @param examId 考试id
         * @param classId 班级id
         */
        req.sendExamNotice = function (examId, classId) {
            return $http.get(Constant.ServerUrl + "/exam/notice/" + examId + "/" + classId, {
                params: {

                }
            }).then(function (response) {
                return response.data;

            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取校园风采未读
         * @returns {*}
         */
        req.getCampusUnread = function () {
            var params = {};
            if (String(UserPreference.getObject('user').rolename) === Constant.USER_ROLES.PARENT) {
                params.stuId = UserPreference.get('DefaultChildID');
            }
            return $http.get(Constant.ServerUrl + "/campusview/unreadTotalByList", {
                params: params
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /** 修改 考试详情是否 已读状态
         *@param  studentId 学生id
         * @param examId 考试id
         * @param state 考试状态 true 为已读 false表示未读
         */
        req.fixExamReadState = function (examId, studentId, state) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/exam/score/modify/readed/" + examId + "/" + studentId,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    readed: state
                })

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });

        };

        /**
         * 批量设置校园风采动态已读
         * @param ids comment id array
         */
        req.setCampusReadStatus = function (ids) {
            return $http.post(Constant.ServerUrl + "/campusview/readSign", ids).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 校园风采添加评论
         * @param newsId
         * @param comment
         * @returns {*}
         */
        req.addCampusComment = function (newsId, comment) {
            return $http.post(Constant.ServerUrl + "/campus/add-comments", {
                newsId: newsId,
                comments: comment
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 校园风采删除评论
         * @param commentId
         * @returns {*}
         */
        req.deleteCampusComment = function (commentId) {
            return $http.get(Constant.ServerUrl + "/campus/deleteComments", {
                params: {
                    id: commentId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 校园风采点赞
         */
        req.favorCampus = function (newsId) {
            return $http.post(Constant.ServerUrl + "/campus/add-praise", {
                newsId: newsId
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 校园风采取消点赞
         */
        req.unfavorCampus = function (newsId) {
            return $http.get(Constant.ServerUrl + "/campus/deletePraise", {
                params: {
                    id: newsId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 校园风采获取点赞列表
         * @param newsId
         */
        req.getCampusNewsFavorList = function (newsId) {
            return $http.get(Constant.ServerUrl + "/campus/getPraiseList", {
                params: {
                    newsId: newsId
                }

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 校园风采获取评论列表
         * @param newsId
         * @param page
         * @param commentId 有commentId时，加载之后所有评论
         * @returns {*}
         */
        req.getCampusNewsCommentList = function (newsId, page, commentId) {
            var params = {
                newsId: newsId,
                page: page,
                rows: Constant.reqLimit
            };
            if (commentId) {
                params.commentsId = commentId;
                params.page = 1;
                params.rows = 9999;
            }
            return $http.get(Constant.ServerUrl + "/campus/getCommentsList", {
                params: params
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 通过风采ID获取风采内容
         * @param id
         */
        req.getCampusNewsById = function (id) {
            return $http.get(Constant.ServerUrl + "/campusview/listById", {
                params: {
                    id: id
                }

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * by wl
         * 发表用户反馈
         * content 发表的内容  若为图片类型 则为base 64字符串形式
         * contentType : 消息类型
         */
        req.publishUserFeedback = function (content, contentType) {
            var phoneSy = ionic.Platform.isIOS() ? 'iOS' : 'android';
            return $http.post(Constant.ServerUrl + "/suggestions/public", {
                appVersion: Constant.version,
                content: content,
                phoneOs: phoneSy,
                contentType: contentType
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 标记消息为已读 用户反馈
         * newsId 消息Id
         */
        req.fixNewsReadStatus = function (newsId) {
            return $http.post(Constant.ServerUrl + "/suggestions/signRead", {
                id: newsId
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取用户反馈消息列表
         */
        req.getFeedbackDetailList = function () {
            return $http.get(Constant.ServerUrl + "/suggestions/detail", {
                params: {
                    endDate: '',
                    startDate: ''
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取用户反馈 未读数
         */
        req.getNoreadNewsNumber = function () {
            return $http.get(Constant.ServerUrl + "/suggestions/getUnreadReplySize", {
                params: {}

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 运营文章列表
         * @param page 当前页数
         * @param userId 用户id
         */
        req.getArticleList = function (page) {
            return $http.get(Constant.ServerUrl + "/article/list", {
                params: {
                    page: page,
                    rows: 10,
                    userId: UserPreference.getObject('user').id
                }

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 新增接口 - 文章详情
         * 文章讯息
         * @param code 文章编码
         */
        req.getNewArticleDetail = function (code) {
            return $http.get(Constant.ServerUrl + "/article/detail", {
                params: {
                    code: code
                }

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 新增接口-运营文章操作数据
         */
        req.getArticleOperateData2 = function (code) {
            return $http.get(Constant.ServerUrl + "/article/operateData2", {
                params: {
                    code: code
                }

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 运营文章详情
         * @param code 文章编码
         * @param userId 用户id
         */
        req.getArticleDetail = function (code) {
            return $http.get(Constant.ServerUrl + "/article/operationData", {
                params: {
                    code: code,
                    userId: UserPreference.getObject('user').id
                }

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 文章点赞或取消点赞
         * @param code 文章编码
         * @param userId 用户Id
         */
        req.giveArticleLikeOrUnlike = function (code) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/article/praise/toggle",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    code: code,
                    userId: UserPreference.getObject('user').id
                })
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 文章评论-点赞/取消点赞
         * @param commentId 文章评论id
         */
        req.giveCommentsLikeOrUnlike = function (commentId) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/article/comment/praise/toggle",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    id: commentId,
                    userId: UserPreference.getObject('user').id
                })
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };
        /**
         * 给文章评论
         * @param articleId
         * @param content 
         * @param userId
         */
        req.giveArticleComment = function (code, content) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/article/comment/add",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    code: code,
                    content: content,
                    userId: UserPreference.getObject('user').id
                })
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 检查当前版本
         */
        req.getCurrentVersion = function () {
            var os = ionic.Platform.isIOS() ? 'ios' : 'android';
            return $http.get(Constant.ServerUrl + "/checkversion", {
                params: {
                    ostype: os,
                    version: Constant.version
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 版本说明
         * @param appType 版本类型 0用户app 1管理app
         * @param version 版本号
         */
        req.getCurrentVersionIntroduce = function () {
            var os = ionic.Platform.isIOS() ? 'ios' : 'android';
            return $http.get(Constant.ServerUrl + "/checkversion/describe", {
                params: {
                    appType: 0,
                    version: Constant.version,
                    osType: os
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 留言 
         * @param message 留言
         * @param childId 小孩id //接收用户
         * @param user 用户 留言用户
         */
        req.sendClassLeaveMessage = function (message, childId, user) {

            var userType = user.rolename === 2 ? 1 : 0; //学生是 1 家长为0，默认用0
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/ad/msg/send",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: [{
                    msg: message,
                    touserId: childId,
                    userId: user.id,
                    userType: userType
                }]
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 登记已读
         * @param touserId 接收用户id 指的是家长
         * @param userId 留言用户id 小孩
         */
        req.markLeaveMsgReaded = function (parentId, childId) {

            return $http({
                method: "post",
                url: Constant.ServerUrl + "/ad/msg/readup",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    touserId: parentId,
                    userId: childId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取来源于所有的学生的未读消息
         * @param parentId 家长id
         * @param studentId 学生id 
         */
        req.getUnreadLeaveMsgList = function (parentId, studentId) {
            return $http.get(Constant.ServerUrl + "/ad/msg/get", {
                params: {
                    famid: parentId,
                    stuid: studentId
                }
            }).
            then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取科目列表
         * @param classId 班级id
         */
        req.getProjectList = function (classId) {
            return $http.get(Constant.ServerUrl + "/course/get/stage-subject", {
                params: {
                    classId: classId
                }
            }).
            //    return $http({
            //         method:"post",
            //         url:Constant.ServerUrl +  "/course/get/stage-subject",
            //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            //         data:{classId:classId}
            //     }).
            then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 判断班级当前节次是否有走班选课
         * @param classId 班级ID
         * @param weekNum 周几
         * @param sectionNum 节次
         */
        req.checkExistWalkCourse = function (classId, weekNum, sectionNum) {
            return $http.get(Constant.ServerUrl + "/walkcourse/exist", {
                params: {
                    classId: classId,
                    weekNum: weekNum,
                    sectionNum: sectionNum
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 修改课程
         * @param projectArr 科目数组
         */
        req.fixScheduleProject = function (classId, projectArr) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/course/save/course",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    classId: classId,
                    courses: projectArr
                } //CustomParam(projectArr)
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

      
        /**
         * 二维码 地址打开
         */
        req.getAssetsIdByScan = function (url) {
            return $http({
                method: 'get',
                url: url,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 资产申领列表（教师）
         */

        req.assetsApplyList = function (page) {
            return $http.get(Constant.ServerUrl + "/assets", {
                params: {
                    row: Constant.reqLimit,
                    page: page
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 提交资产申领
         * @param applyAmount 申请数量
         * @param assetNameRefid  资产名称id
         * @param assetTypeRefid 资产类别id
         * @param  progressDescribe 申请理由
         */
        req.commitAssetsApply = function (params) {
            return $http({
                method: 'post',
                url: Constant.ServerUrl + "/asset/apply",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    applyAmount: params.count,
                    assetNameRefid: params.nameId,
                    assetTypeRefid: params.categoryId,
                    progressDescribe: params.content
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 资产分类
         */
        req.assetsCategory = function () {
            return $http.get(Constant.ServerUrl + "/assetTypes", {
                params: {

                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 根据资产分类查询资产名称
         * @param assetTypeId 资产分类id
         */
        req.queryAssetsName = function (assetTypeId) {
            return $http.get(Constant.ServerUrl + "/asset/getAssetNameByType", {
                params: {
                    assetTypeId: assetTypeId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 添加资产申领进度（管理端）
         * @param orderId 资产申领单id
         * @param orderProgress 进度
         * @param progressDescribe 原因
         */
        req.addAssetsApplyProgress = function (orderId, orderProgress, progressDescribe) {
            return $http({
                method: 'post',
                url: Constant.ServerUrl + "/asset/applyProgress",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    orderId: orderId,
                    orderProgress: orderProgress,
                    progressDescribe: progressDescribe
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 资产申领详情
         * @param id 资产id
         */
        req.assetsApplyDetail = function (id) {
            return $http.get(Constant.ServerUrl + "/assets/" + id, {
                params: {

                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询资产申领的id
         * @param assetsId 领单id
         */
        req.queryAssetsApplyIds = function (assetsId) {
            return $http.get(Constant.ServerUrl + "/asset/getApplyIssue", {
                params: {
                    id: assetsId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         *会议室已约会议列表
         * @param id 会议室id
         * @param page 页面
         */
        req.meetingRoomHaveReservationList = function (id, page) {
            return $http.get(Constant.ServerUrl + "/meetingSubscribles/getByMeetingRoom", {
                params: {
                    id: id,
                    page: page,
                    row: 100
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 会议通知
         */
        req.meetingNocticeList = function (page) {
            return $http.get(Constant.ServerUrl + "/meetings/joined", {
                params: {
                    page: page,
                    row: Constant.reqLimit
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 发起预约
         * @param beginTime 开始时间
         * @param endTime 结束时间
         * @param meetingRoomId 会议室
         */
        req.meetingAppointment = function (params) {
            var date1 = new Date(params.startDate.replace(/-/g, '/'));
            var date2 = new Date(params.endDate.replace(/-/g, '/'));
            var startStemp = date1.getTime();
            var endStemp = date2.getTime();

            return $http({
                method: 'post',
                url: Constant.ServerUrl + "/meetingSubscribles",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    beginTime: startStemp,
                    endTime: endStemp,
                    meetingContent: params.content,
                    meetingRoomId: params.meetingRoomId
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 选择会议室
         * 
         */
        req.getMeetingRooms = function () {
            return $http.get(Constant.ServerUrl + "/meetings/meetingRooms", {
                params: {

                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 我的会议预约列表
         */

        req.myMeetingReservationList = function (page) {
            return $http.get(Constant.ServerUrl + "/meetingSubscribles/getMine", {
                params: {
                    page: page,
                    row: Constant.reqLimit
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 标记会议为已读
         * @param id 会议id
         */
        req.markMeetingReadStatus = function (id) {
            return $http({
                method: 'post',
                url: Constant.ServerUrl + "/meetings/signRead",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    id: id
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 校验该学校是否具有新高考授权
         */
        req.checkSchoolHaveNceeAuth = function (schoolId) {
            return $http.get(Constant.ServerUrl + "/course/walking-ncee/has-ncee-auth", {
                params: {
                    schoolId: schoolId,
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取指定节次走班课
         * @param classId 
         * @param weekNum
         * @param sectionNum
         */
        req.getWalkCourseBySection = function (classId, weekNum, sectionNum) {
            // console.log('class id:'+classId+'-weekNum:' +weekNum +'--sectionNum:'+sectionNum);
            return $http.get(Constant.ServerUrl + "/course/walking-ncee/week-section", {
                params: {
                    classId: classId,
                    weekNum: weekNum,
                    sectionNum: sectionNum
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 获取审批管理列表-我的申请列表
         * @param  progress 状态: 1通过 2审批中 3不通过 为空表示全部
         * @param  schoolId 学校ID
         * @param submitterId 申请人ID
         */
        req.getApprovalApplyList = function (page, progress, schoolId, submitterId) {
            return $http.get(Constant.ServerUrl + "/archive/list", {
                params: {
                    page: page,
                    rows: Constant.reqLimit,
                    progress: progress,
                    schoolId: schoolId,
                    submitterId: submitterId,
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });

        };
        /**
         * 获取经我审批列表
         * @param userId 用户Id
         * @param  progress 状态: 1通过 2审批中 3不通过 为空表示全部
         */

        req.getApprovaledOfMineList = function (page, progress, userId) {
            return $http.get(Constant.ServerUrl + "/archive/list/approved", {
                params: {
                    page: page,
                    rows: Constant.reqLimit,
                    userId: userId,
                    progress: progress
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });

        };

        /**
         * 获取通知我的列表
         */
        req.getApprovelNotifyList = function (page, userId) {
            return $http.get(Constant.ServerUrl + "/archive/list/notify", {
                params: {
                    page: page,
                    rows: Constant.reqLimit,
                    userId: userId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取待我审批的列表
         */
        req.getWaitApprovalList = function (page, userId) {
            return $http.get(Constant.ServerUrl + "/archive/list/to-approve", {
                params: {
                    page: page,
                    rows: Constant.reqLimit,
                    userId: userId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取申请的详情页
         * @param archiveId 申请Id
         */
        req.getApprovalArchiveDeatil = function (archiveId) {
            return $http.get(Constant.ServerUrl + "/archive/detail", {
                params: {
                    archiveId: archiveId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        /**
         * 获取老师的审批模板列表
         * @param teacherId 教师Id
         */
        req.getTeacherApprovalTemplateList = function (teacherId) {
            return $http.get(Constant.ServerUrl + "/archive/templates", {
                params: {
                    teacherId: teacherId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取教师审批指定模板详情
         */
        req.getTeacherApprovalTemplateDetail = function (templateId) {
            return $http.get(Constant.ServerUrl + "/archive/template-detail", {
                params: {
                    templateId: templateId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询学校部门列表
         * @param schoolId 学校id
         */
        req.getSchoolDepartmentList = function (schoolId) {
            return $http.get(Constant.ServerUrl + "/archive/department-list", {
                params: {
                    schoolId: schoolId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 查询部门人员
         */
        req.getDepartmentPersons = function (schoolId, departmentId, teacherNameLike) {
            return $http.get(Constant.ServerUrl + "/archive/department-person", {
                params: {
                    departmentId: departmentId,
                    schoolId: schoolId,
                    teacherNameLike: teacherNameLike
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 提交审批-申请的审批操作
         * @param approverId 审批人ID
         * @param archiveId 申请ID 
         * @param result 审批结果: 1通过 3不通过 
         * @param suggest 审批意见
         */
        req.commitApproval = function (approverId, archiveId, select) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/archive/approve",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    approverId: approverId,
                    archiveId: archiveId,
                    result: select.result,
                    suggest: select.suggest
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取授权模块列表
         * @returns {*}
         */
        req.getToolkitList = function () {
            return $http.get(Constant.ServerUrl + "/toolkit/list").then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };


        req.requestToolkit = function (phone, appId) {
            return $http({
                method: 'post',
                url: Constant.ServerUrl + "/toolkit/apply",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: CustomParam({
                    phone: phone,
                    appId: appId
                })
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };
        /**
         * 新建审批提交
         * @param schoolId
         * @param  submitterId 申请人ID
         * @param templateId 模板id 
         * @param title 标题
         * @param currUserId 当前审批人id
         * @param attaches 附件 attachName-附件名称 attachUrl-附件地址
         * @param chains 审批链 level 审批链层级, 从1开始 nextUserId 后序审批人ID, 最后一个置null ,prevUserId 前序审批人ID, 第一个置null ,userId 当前审批人ID
         */
        req.addNewApproval = function (schoolId, submitterId, templateId, select) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/archive/add",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    schoolId: schoolId,
                    submitterId: submitterId,
                    templateId: templateId,
                    title: select.title,
                    comment: select.comment,
                    radios: select.radios,
                    notifierIds: select.notifierIds,
                    inputs: select.inputs,
                    fulltexts: select.fulltexts,
                    dates: select.dates,
                    dateRanges: select.dateRanges,
                    currUserId: select.currUserId,
                    checkboxes: select.checkboxes,
                    chains: select.chains,
                    attaches: select.attaches

                }

            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         *  查询班级之星列表
         * @param class_id 班级id
         * @param page 
         */
        req.findClassStarList = function (class_id, page) {
            return $http.get(Constant.ServerUrl + "/class/getClassStarList/" + class_id, {
                params: {
                    page: page,
                    rows: Constant.reqLimit
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 设置班级之星
         * @param class_id
         * @param startDate
         * @param endDate
         * @param studentids 
         */
        req.setClassStar = function (selected) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/class/setClassStar",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    classId: parseInt(selected.class_id),
                    startDate: selected.startDate,
                    endDate: selected.endDate,
                    studentids: selected.studentids
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 删除班级之星
         */
        req.deleteClassStar = function (class_id, itemId) {
            return $http.get(Constant.ServerUrl + "/class/delClassStar", {
                params: {
                    cid: class_id,
                    id: itemId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /** 学生评价 */
        /**
         * 老师获取学生评价列表
         * @param classId
         */
        req.getStudentAssessList = function (classId, page) {
            return $http.get(Constant.ServerUrl + "/student-assess/list/class", {
                params: {
                    page: page,
                    rows: Constant.reqLimit,
                    classId: classId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 老师获取某个学生评价详情
         * @param taskId 任务id
         * @param studentId 
         */
        req.getStudentAssessDetail = function (taskId, studentId) {
            return $http.get(Constant.ServerUrl + "/student-assess/detail/student", {
                params: {
                    taskId: taskId,
                    studentId: studentId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 家长获取学生评价列表
         * @param studentId
         */
        req.getMyChildAssessList = function (page, studentId) {
            return $http.get(Constant.ServerUrl + "/student-assess/list/student", {
                params: {
                    page: page,
                    rows: Constant.reqLimit,
                    studentId: studentId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取班级所有学生的评分列表--评价结果
         * @param classId
         * @param taskId 任务id
         */
        req.getClassStudentScoresList = function (classId, taskId) {
            return $http.get(Constant.ServerUrl + "/student-assess/score", {
                params: {
                    taskId: taskId,
                    classId: classId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 新增或修改学生评分
         * @param taskId 条目id
         * @param itemId 评分项id
         */
        req.commitStudentAssessScore = function (selected, taskId, itemId) {
            return $http({
                method: "post",
                url: Constant.ServerUrl + "/student-assess/score/add-modify",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    classId: parseInt(selected.class_id),
                    taskId: taskId,
                    itemId: itemId,
                    scores: selected.scores
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取评价任务指定评分项的评价列表
         * @param classId
         * @param taskId 条目id
         * @param itemId 评分项id
         */
        req.getOneAssessOptionClassScoreList = function (classId, taskId, itemId) {
            return $http.get(Constant.ServerUrl + "/student-assess/score/item", {
                params: {
                    taskId: taskId,
                    classId: classId,
                    itemId: itemId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };
        /**
         * 获取评价项列表
         */
        req.getAssessOptionList = function (classId, taskId) {
            return $http.get(Constant.ServerUrl + "/student-assess/task-items", {
                params: {
                    taskId: taskId,
                    classId: classId,
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /** 收费统计 */
        /** 
         * 某收费项 班级收费统计
         * */
        req.getClassFeeProject = function (classId) {
            return $http.get(Constant.ServerUrl + "/getClassFeeProject/" + classId, {

            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 班级学生缴费情况
         */
        req.getClassFeeStudent = function (classId, feeId) {
            return $http.get(Constant.ServerUrl + "/getClassFeeStudent/" + feeId + "/" + classId, {

            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         *缴费明细 家长
         */
        req.getStudentFeeDetail = function (studentId) {
            return $http.get(Constant.ServerUrl + "/getStudentFeeStudent/" + studentId, {

            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /** 巡课设置 */
        /**
         * 获取小孩教室实况
         */
        req.getChildrenClassroomLiveList = function (studentId) {
            return $http.get(Constant.ServerUrl + "/classroomLive/famliyByCameraInfo", {
                params: {
                    studentId: studentId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 获取班级同学人像列表
         * @param classId 班级id
         * @param name 学生姓名
         */
        req.getFaceRecognitionClassList = function (classId, name) {
            return $http.get(Constant.ServerUrl + "/faceRecognition/getOfClass", {
                params: {
                    classId: classId,
                    name: name
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };
        /**
         * 获取老师的个人人像
         * @param userId
         */
        req.getTeacherFaceRecognition = function (userId) {
            return $http.get(Constant.ServerUrl + "/faceRecognition/getOne", {
                params: {
                    userId: userId,
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 上传人像
         */
        req.uploadUserPortrait = function(userId,base64Str){
            return $http({
                method: 'post',
                url: Constant.ServerUrl + "/faceRecognition/uploadImg",
                headers: {
                    'Content-Type': 'application/json'
                },
                data:{
                    userId:userId,
                    imgData:base64Str
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 厂家 获取学校报修状态列表
         * @param 
         */
        req.getStatOfSchoolList = function(){
            return $http.get(Constant.ServerUrl + "/manufacturers/getStatOfSchl", {
               
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

          /**
         * 报修记录列表
         * @param condition 0,全部；1，待解决；2，已关闭
         * @param isManage true管理列表；false,我的列表
         * @param page 当前页面
         * @param schoolId 
         */

        req.getRepairRecordList = function (condition, page,schoolId) {
            return $http.get(Constant.ServerUrl + "/manufacturers/getMaintainOrder", {
                params: {
                    condition: condition,
                    isManage: false,
                    row: Constant.reqLimit,
                    page: page,
                    schoolId:schoolId
                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 报修记录详情
         * @param repairRecordId  报修记录id
         */
        req.getRepairRecordDetail = function (repairRecordId) {
            return $http.get(Constant.ServerUrl + "/manufacturers/getDetailOfMaintain/" + repairRecordId, {
                params: {

                }
            }).then(function (res) {
                return res.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 添加进度处理
         * @param repairRecordId 报修记录id
         * @param orderProgress 1:已提交;2:管理员已查看;4:正在处理;2^30:已关闭;maxinteger:已取消 8:通知厂家 16 售后回复
         * @param progressDescribe 进度描述
         */

        req.addRepairProgress = function (repairRecordId, orderProgress, progressDescribe) {
            return $http({
                method: 'post',
                url: Constant.ServerUrl + "/maintainOrders/" + repairRecordId + "/progress",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    orderProgress: orderProgress,
                    progressDescribe: progressDescribe
                }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        /**
         * 添加报修记录
         * @param maintainImgs 故障图片 array
         * @param orderDescribe 故障描述
         * @param terminalAddress	设备所在地址
         */
        req.addEquipmentRepairRecord = function (params) {
            return $http({
                method: 'post',
                url: Constant.ServerUrl + "/maintainOrders",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: params
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return $q.reject(error);
            });
        };

        return req;
    }]);

/**
 * Created by hewz on 16/8/9.
 */

Date.prototype.Format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};
//获取当前时间
function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes();
	return currentdate;
}

//将文本转化成html-suggest
function encodeHtml(str) {
	var html = '';
	html += webim.Tool.formatText2Html(str);

	var urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
	if (html.match(urls)) {
		html = html.replace(urls, "<a href=\"$1\" target=\"_system\">$1</a>");
	}
	return html;
}

function formatTimeWithoutSecends(timestamp, format) {
	if (!timestamp) {
		return 0;
	}
	var formatTime;
	format = format || 'yyyy-MM-dd hh:mm';
	var date = new Date(timestamp * 1000);
	var o = {
		"M+": date.getMonth() + 1, //月份
		"d+": date.getDate(), //日
		"h+": date.getHours(), //小时
		"m+": date.getMinutes(), //分
		"s+": date.getSeconds() //秒
	};
	if (/(y+)/.test(format)) {
		formatTime = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	} else {
		formatTime = format;
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(formatTime))
			formatTime = formatTime.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	}
	return formatTime;
}

function getWeekday(date) {
	if (date && date.length === 19) {
		var d = new Date(date.replace(/\s+/g, 'T').concat('.000+08:00'));
		return date.substr(0, 10) + " " + getWeekdayByIndex(d.getDay());
	}
	return date;
}

function getWeekdayByIndex(dayIndex) {
	switch (String(dayIndex)) {
		case '1':
			return '周一';
		case '2':
			return '周二';
		case '3':
			return '周三';
		case '4':
			return '周四';
		case '5':
			return '周五';
		case '6':
			return '周六';
		case '0':
			return '周日';
		default:
			return '';
	}
}

function delHtmlTag(str) {
	if (str) {
		str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
		str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
		str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
		str = str.replace(/&nbsp;/ig, ''); //去掉&nbsp;
	}
	return str;
}

function convertMsgtoPushStr(msg) {
	var html = "",
		elems, elem, type, content;
	elems = msg.getElems(); //获取消息包含的元素数组
	var count = elems.length;
	for (var i = 0; i < count; i++) {
		elem = elems[i];
		type = elem.getType(); //获取元素类型
		content = elem.getContent(); //获取元素对象
		var eleHtml;
		switch (type) {
			case webim.MSG_ELEMENT_TYPE.TEXT:
				eleHtml = convertTextMsgToHtml(content);
				//转义，防XSS
				html += webim.Tool.formatText2Html(eleHtml);
				break;
			case webim.MSG_ELEMENT_TYPE.FACE:
				html += getFaceIndexStr(content);
				break;
			case webim.MSG_ELEMENT_TYPE.IMAGE:
				html += '[图片]';
				break;
			default:
				html += '[未知消息类型]';
				webim.Log.error('未知消息元素类型');
				break;
		}
		if (html.length > 20)
			break;
	}
	return delHtmlTag(html);
}

function getFaceIndexStr(content) {
	var emotionDataIndexs = [
		"[惊讶]", "[撇嘴]", "[色]", "[发呆]", "[得意]", "[流泪]", "[害羞]", "[闭嘴]",
		"[睡]", "[大哭]", "[尴尬]", "[发怒]", "[调皮]", "[龇牙]", "[微笑]", "[难过]",
		"[酷]", "[冷汗]", "[抓狂]", "[吐]", "[偷笑]", "[可爱]", "[白眼]", "[傲慢]",
		"[饿]", "[困]", "[惊恐]", "[流汗]", "[憨笑]", "[大兵]", "[奋斗]", "[咒骂]",
		"[疑问]", "[嘘]", "[晕]"
	];
	var data = content.getData();
	var index = webim.EmotionDataIndexs[data];
	if (index >= 0 && index < emotionDataIndexs.length)
		return emotionDataIndexs[index];
	else
		return '';
}

function getSuggestEmotions() {
	var EMOJIS =
		"😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 😉 😌 😭 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️" +
		" 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿 👹 👺" +
		" 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖" +
		" 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 🕶 🌂 ☂️";
	var EmojiArr = EMOJIS.split(" ");
	var groupNum = Math.ceil(EmojiArr.length / 24);
	var items = [];

	for (var i = 0; i < groupNum; i++) {
		items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
	}
	return items;
}

//把消息转换成Html
function convertMsgtoHtml(msg) {
	var html = "",
		elems, elem, type, content;
	elems = msg.getElems(); //获取消息包含的元素数组
	var count = elems.length;
	for (var i = 0; i < count; i++) {
		elem = elems[i];
		type = elem.getType(); //获取元素类型
		content = elem.getContent(); //获取元素对象
		var eleHtml;
		switch (type) {
			case webim.MSG_ELEMENT_TYPE.TEXT:
				eleHtml = convertTextMsgToHtml(content);
				//转义，防XSS
				html += webim.Tool.formatText2Html(eleHtml);
				break;
			case webim.MSG_ELEMENT_TYPE.FACE:
				html += convertFaceMsgToHtml(content);
				break;
			case webim.MSG_ELEMENT_TYPE.IMAGE:
				if (i <= count - 2) {
					var customMsgElem = elems[i + 1]; //获取保存图片名称的自定义消息elem
					var imgName = customMsgElem.getContent().getData(); //业务可以自定义保存字段，demo中采用data字段保存图片文件名
					html += convertImageMsgToHtml(content, imgName);
					i++; //下标向后移一位
				} else {
					html += convertImageMsgToHtml(content);
				}
				break;
			case webim.MSG_ELEMENT_TYPE.SOUND:
				html += convertSoundMsgToHtml(content);
				break;
			case webim.MSG_ELEMENT_TYPE.FILE:
				html += convertFileMsgToHtml(content);
				break;
			case webim.MSG_ELEMENT_TYPE.LOCATION:
				html += convertLocationMsgToHtml(content);
				break;
			case webim.MSG_ELEMENT_TYPE.CUSTOM:
				eleHtml = convertCustomMsgToHtml(content);
				//转义，防XSS
				html += webim.Tool.formatText2Html(eleHtml);
				break;
			case webim.MSG_ELEMENT_TYPE.GROUP_TIP:
				eleHtml = convertGroupTipMsgToHtml(content);
				//转义，防XSS
				html += webim.Tool.formatText2Html(eleHtml);
				break;
			default:
				webim.Log.error('未知消息元素类型: elemType=' + type);
				break;
		}
	}
	if (type === webim.MSG_ELEMENT_TYPE.TEXT) {
		var urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
		if (html.match(urls)) {
			html = html.replace(urls, "<a href=\"$1\" target=\"_system\">$1</a>");
		}
	}
	return html;
}

//解析文本消息元素
function convertTextMsgToHtml(content) {
	return content.getText();
}
//解析表情消息元素
function convertFaceMsgToHtml(content) {
	var faceUrl = null;
	var data = content.getData();
	var index = webim.EmotionDataIndexs[data];

	var emotion = webim.Emotions[index];
	if (emotion && emotion[1]) {
		faceUrl = emotion[1];
	}
	if (faceUrl) {
		return "<img src='" + faceUrl + "'/>";
	} else {
		return data;
	}
}
//解析图片消息元素
function convertImageMsgToHtml(content, imageName) {
	var smallImage = content.getImage(webim.IMAGE_TYPE.SMALL); //小图
	var bigImage = content.getImage(webim.IMAGE_TYPE.LARGE); //大图
	var oriImage = content.getImage(webim.IMAGE_TYPE.ORIGIN); //原图
	if (!bigImage) {
		bigImage = smallImage;
	}
	if (!oriImage) {
		oriImage = smallImage;
	}
	var bigUrl = bigImage.getUrl();
	return '<img name="' + imageName + '" src="' + smallImage.getUrl() + '" id="' + content.getImageId() + '" ng-click=\'onImageClick("' + bigUrl + '")\' style="max-width: 100%" ion-img-cache />';
}
//解析语音消息元素
function convertSoundMsgToHtml(content) {
	var second = content.getSecond(); //获取语音时长
	var downUrl = content.getDownUrl();
	if (webim.BROWSER_INFO.type === 'ie' && parseInt(webim.BROWSER_INFO.ver) <= 8) {
		return '[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:' + downUrl;
	}
	return '<audio id="uuid_' + content.uuid + '" src="' + downUrl + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
}
//解析文件消息元素
function convertFileMsgToHtml(content) {
	var fileSize, unitStr;
	fileSize = content.getSize();
	unitStr = "Byte";
	if (fileSize >= 1024) {
		fileSize = Math.round(fileSize / 1024);
		unitStr = "KB";
	}
	// return '<a href="' + content.getDownUrl() + '" title="点击下载文件" ><i class="glyphicon glyphicon-file">&nbsp;' + content.getName() + '(' + fileSize + unitStr + ')</i></a>';
	return '<a href="javascript:;" onclick=\'webim.onDownFile("' + content.uuid + '")\' title="点击下载文件" ><i class="glyphicon glyphicon-file">&nbsp;' + content.name + '(' + fileSize + unitStr + ')</i></a>';
}
//解析位置消息元素
function convertLocationMsgToHtml(content) {
	return '经度=' + content.getLongitude() + ',纬度=' + content.getLatitude() + ',描述=' + content.getDesc();
}
//解析自定义消息元素
function convertCustomMsgToHtml(content) {
	var data = content.getData(); //自定义数据
	var desc = content.getDesc(); //描述信息
	var ext = content.getExt(); //扩展信息
	return "data=" + data + ", desc=" + desc + ", ext=" + ext;
}
//解析群提示消息元素
function convertGroupTipMsgToHtml(content) {
	var WEB_IM_GROUP_TIP_MAX_USER_COUNT = 5;
	var text = "";
	var maxIndex = WEB_IM_GROUP_TIP_MAX_USER_COUNT - 1;
	var opType, opUserId, userIdList;
	opType = content.getOpType(); //群提示消息类型（操作类型）
	opUserId = content.getOpUserId(); //操作人id
	var service = angular.element(document.querySelector('[ng-app]')).injector().get("ChatService");
	var info = service.getMemberInfoFromMap(webim.SESSION_TYPE.C2C, opUserId);
	var opUserName = info ? info.name : opUserId;
	if (opUserName === 'XgbAdmin')
		opUserName = '管理员';
	var tmp, username;
	switch (opType) {
		case webim.GROUP_TIP_TYPE.JOIN: //加入群
			userIdList = content.getUserIdList();
			for (var m in userIdList) {
				tmp = service.getMemberInfoFromMap(webim.SESSION_TYPE.C2C, userIdList[m]);
				username = tmp ? tmp.name : '';
				if (username !== '')
					text += (username + '、');
				if (userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && m === maxIndex) {
					break;
				}
			}
			if (text.length > 0) {
				text = text.substring(0, text.length - 1);
				if (userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT)
					text += "等共" + userIdList.length + "人";
				text += "加入该群";
			} else
				return '';
			break;
		case webim.GROUP_TIP_TYPE.QUIT: //退出群
			text += opUserName + "离开该群";
			break;
		case webim.GROUP_TIP_TYPE.KICK: //踢出群
			var tem = opUserName + "将";
			userIdList = content.getUserIdList();
			for (var mm in userIdList) {
				tmp = service.getMemberInfoFromMap(webim.SESSION_TYPE.C2C, userIdList[mm]);
				username = tmp ? tmp.name : '';
				if (username !== '')
					text += (username + '、');
				if (userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && mm === maxIndex) {
					break;
				}
			}
			if (text.length > 0) {
				text = text.substring(0, text.length - 1);
				if (userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT)
					text += "等共" + userIdList.length + "人";
				text = tem + text + "移出该群";
			} else
				return '';
			break;
		case webim.GROUP_TIP_TYPE.SET_ADMIN: //设置管理员
			text += opUserName + "将";
			userIdList = content.getUserIdList();
			for (var mmm in userIdList) {
				tmp = service.getMemberInfoFromMap(webim.SESSION_TYPE.C2C, userIdList[mmm]);
				username = tmp ? tmp.name : userIdList[mmm];
				text += (username + '、');
				if (userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && mmm === maxIndex) {
					text += "等共" + userIdList.length + "人";
					break;
				}
			}
			text += "设为管理员";
			break;
		case webim.GROUP_TIP_TYPE.CANCEL_ADMIN: //取消管理员
			text += opUserName + "取消";
			userIdList = content.getUserIdList();
			for (var m4 in userIdList) {
				tmp = service.getMemberInfoFromMap(webim.SESSION_TYPE.C2C, userIdList[m4]);
				username = tmp ? tmp.name : userIdList[m4];
				text += (username + '、');
				if (userIdList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && m4 === maxIndex) {
					text += "等共" + userIdList.length + "人";
					break;
				}
			}
			text += "的管理员资格";
			break;

		case webim.GROUP_TIP_TYPE.MODIFY_GROUP_INFO: //群资料变更
			text += opUserName + "修改";
			var groupInfoList = content.getGroupInfoList();
			var type, value;
			for (var m5 in groupInfoList) {
				type = groupInfoList[m5].getType();
				value = groupInfoList[m5].getValue();
				switch (type) {
					case webim.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.FACE_URL:
						text += "了群头像";
						break;
					case webim.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NAME:
						text += "群名称为" + value;
						break;
					case webim.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.OWNER:
						text += "群主为" + value;
						break;
					case webim.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.NOTIFICATION:
						text += "群公告为" + value;
						break;
					case webim.GROUP_TIP_MODIFY_GROUP_INFO_TYPE.INTRODUCTION:
						text += "群简介为" + value;
						break;
					default:
						text += "未知信息为:type=" + type + ",value=" + value;
						break;
				}
			}
			break;

		case webim.GROUP_TIP_TYPE.MODIFY_MEMBER_INFO: //群成员资料变更(禁言时间)
			text += opUserName + "修改了群成员资料:";
			var memberInfoList = content.getMemberInfoList();
			var userId, shutupTime;
			for (var m6 in memberInfoList) {
				userId = memberInfoList[m6].getUserId();
				shutupTime = memberInfoList[m6].getShutupTime();
				text += userId + ": ";
				if (shutupTime !== null && shutupTime !== undefined) {
					if (shutupTime === 0) {
						text += "取消禁言; ";
					} else {
						text += "禁言" + shutupTime + "秒; ";
					}
				} else {
					text += " shutupTime为空";
				}
				if (memberInfoList.length > WEB_IM_GROUP_TIP_MAX_USER_COUNT && m6 === maxIndex) {
					text += "等" + memberInfoList.length + "人";
					break;
				}
			}
			break;
		default:
			text += "未知群提示消息类型：type=" + opType;
			break;
	}
	return text;
}

function isEmptyObject(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop))
			return false;
	}
	return JSON.stringify(obj) === JSON.stringify({});
}

/**
 * 将对象参数序列化
 * @return {string}
 */
function CustomParam(obj) {
	if (!angular.isObject(obj)) {
		return ((obj === null) ? "" : obj.toString());
	}
	var query = '',
		name, value, fullSubName, subName, subValue, innerObj, i;
	for (name in obj) {
		value = obj[name];
		if (value instanceof Array) {
			for (i in value) {
				subValue = value[i];
				innerObj = {};
				innerObj[name] = subValue;
				query += CustomParam(innerObj) + '&';
			}
		} else if (value instanceof Object) {
			for (subName in value) {
				subValue = value[subName];
				fullSubName = name + '[' + subName + ']';
				innerObj = {};
				innerObj[fullSubName] = subValue;
				query += CustomParam(innerObj) + '&';
			}
		} else if (value !== undefined && value !== null)
			query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
	}
	return query.length ? query.substr(0, query.length - 1) : query;
}


function getChatTimeLabel(msgTime) {
	if (msgTime > 0) {
		var now = new Date();
		var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		var timestamp = startOfDay / 1000;
		var strTime = webim.Tool.formatTimeStamp(msgTime);
		return msgTime > timestamp ? strTime.substr(11, 5) : strTime.substr(5, 5);
	}
	return '';
}

function resetHMSM(currentDate) {
	currentDate.setHours(0);
	currentDate.setMinutes(0);
	currentDate.setSeconds(0);
	currentDate.setMilliseconds(0);
	return currentDate;
}

function getOrderStatusTxt(status) {
	switch (status) {
		case '0':
			return '未付款';
		case '1':
			return '付款成功';
		case '2':
			return '付款失败';
	}
}

function getOrderStatusIcon(status) {
	switch (status) {
		case '0':
			return 'img/icon/wait_03.png';
		case '1':
			return 'img/icon/success_03.png';
		case '2':
			return 'img/icon/fail_03.png';
	}
}

function getPayChannelName(status) {
	switch (String(status)) {
		case '0':
			return '支付宝';
		case '1':
			return '微信';
	}
}

function isPhoneNumber(phone) {
	//language=JSRegexp
	return /^1([3456789])\d{9}$/.test(phone);
}

function blob2Base64(blob, cb) {
	var reader = new FileReader();
	reader.onload = function () {
		var dataUrl = reader.result;
		var base64 = dataUrl.split(',')[1];
		cb(base64);
	};
	reader.readAsDataURL(blob);
}

/**
 * Resize Image
 * @param longSideMax
 * @param url
 * @return promise
 */
function resizeImage(longSideMax, url) {
	var $q = angular.injector(['ng']).get('$q');
	var defer = $q.defer();
	var tempImg = new Image();
	tempImg.src = url;
	tempImg.onload = function () {
		// Get image size and aspect ratio.
		var targetWidth = tempImg.width;
		var targetHeight = tempImg.height;
		var aspect = tempImg.width / tempImg.height;

		// Calculate shorter side length, keeping aspect ratio on image.
		// If source image size is less than given longSideMax, then it need to be
		// considered instead.
		if (tempImg.width > tempImg.height) {
			longSideMax = Math.min(tempImg.width, longSideMax);
			targetWidth = longSideMax;
			targetHeight = longSideMax / aspect;
		} else {
			longSideMax = Math.min(tempImg.height, longSideMax);
			targetHeight = longSideMax;
			targetWidth = longSideMax * aspect;
		}

		// Create canvas of required size.
		var canvas = document.createElement('canvas');
		canvas.width = targetWidth;
		canvas.height = targetHeight;

		var ctx = canvas.getContext("2d");
		// Take image from top left corner to bottom right corner and draw the image
		// on canvas to completely fill into.
		ctx.drawImage(this, 0, 0, tempImg.width, tempImg.height, 0, 0, targetWidth, targetHeight);
		defer.resolve(canvas.toDataURL("image/jpeg"));
	};
	return defer.promise;
}

//定位光标
function setCaretPosition(tObj, sPos) {
	if (tObj.setSelectionRange) {
		setTimeout(function () {
			tObj.setSelectionRange(sPos + 1, sPos + 1);
			tObj.focus();
		}, 10);
	} else if (tObj.createTextRange) {
		var rng = tObj.createTextRange();
		rng.move('character', sPos);
		rng.select();
	}
}

//判断是否有新版本
function hasNewVersio(serveV, localV) {
	var vr = serveV.split('.');
	var vl = localV.split('.');
	if (vr && vr.length === vl.length) {
		for (var i = 0; i < vr.length; i++) {
			if (Number(vr[i]) > Number(vl[i]))
				return true;
			else if (Number(vr[i]) < Number(vl[i]))
				return false;
		}
	}
	return false;
}

function isWeixin() {
	var ua = navigator.userAgent.toLowerCase();
	var hasOpenId = window.location.href.indexOf('openId=') > 0;
	return /micromessenger/i.test(ua) || hasOpenId;
}

function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}


function isEmojiCharacter(substring) {
	for (var i = 0; i < substring.length; i++) {
		var hs = substring.charCodeAt(i);
		if (0xd800 <= hs && hs <= 0xdbff) {
			if (substring.length > 1) {
				var ls = substring.charCodeAt(i + 1);
				var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
				if (0x1d000 <= uc && uc <= 0x1f77f) {
					return true;
				}
			}
		} else if (substring.length > 1) {
			var ls1 = substring.charCodeAt(i + 1);
			if (ls1 == 0x20e3) {
				return true;
			}
		} else {
			if (0x2100 <= hs && hs <= 0x27ff) {
				return true;
			} else if (0x2B05 <= hs && hs <= 0x2b07) {
				return true;
			} else if (0x2934 <= hs && hs <= 0x2935) {
				return true;
			} else if (0x3297 <= hs && hs <= 0x3299) {
				return true;
			} else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b || hs == 0x2b50) {
				return true;
			}
		}
	}
}

/**
 1. @param str 要计算的字符串
 2. @param fontSize 字符串的字体大小
 3. 根据需要，还可以添加字体控制，如微软雅黑与Times New Roma的字符宽度肯定不一致
 */
function textWidth(str, fontSize) {
	if (!textWidth.txt) {
		var txt = document.createElement('span');
		txt.style.position = 'absolute';
		//  避免遮挡其他元素
		txt.style.zIndex = -10;
		//  千万不可设置为display：none；
		txt.style.visibility = 'hidden';
		//  一定要加载到DOM中才能计算出字符宽度
		document.body.appendChild(txt);
		textWidth.txt = txt;
	}
	//  控制字符的字体大小
	textWidth.txt.style.fontSize = fontSize + 'px';
	//  设置字符内容
	textWidth.txt.textContent = str;
	//  返回计算结果
	return textWidth.txt.offsetWidth;
}

/**
 * 判断文本中是否由数字和字母组成
 */
function checkStringIsIncludeSpecialChar(str) {
	var re = /^[0-9a-zA-Z]*$/; //判断字符串是否为数字和字母组合     
	if (!re.test(str)) {
		return false;
	} else {
		return true;
	}
}

/**
 * 将base64字符串转换成file对象
 */
//将base64转换为文件对象
function dataURLtoFile(dataurl, filename) {
	var arr = dataurl.split(',');
	var mime = arr[0].match(/:(.*?);/)[1];
	//var mime = mime0.replace('/','.');
	
	var bstr = atob(arr[1]);
	var n = bstr.length; 
	var u8arr = new Uint8Array(n);
	while(n--){
		u8arr[n] = bstr.charCodeAt(n);
	}
	//转换成file对象
	//return new File([u8arr], filename, {type:mime});
	//转换成成blob对象
	var blob = new Blob([u8arr],{type:mime});
	//var file = new window.File([blob], filename, {type: mime});
     return blob;
  }

  function b64toBlob(b64Data, contentType) {
	contentType = contentType || '';
	sliceSize = 512;
  
	var byteCharacters = atob(b64Data.substring(b64Data.indexOf(',') + 1));
	var byteArrays = [];
  
	for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
	  var slice = byteCharacters.slice(offset, offset + sliceSize);
  
	  var byteNumbers = new Array(slice.length);
	  for (var i = 0; i < slice.length; i++) {
		byteNumbers[i] = slice.charCodeAt(i);
	  }
  
	  var byteArray = new Uint8Array(byteNumbers);
  
	  byteArrays.push(byteArray);
	}
	  
	var blob = new Blob(byteArrays, {type: contentType});
	return blob;
  }


/**
 * Created by hewz on 2018/4/2.
 */
angular.module('ionic-image-view', [])
    .provider('ionicImageView', function () {

        var config = {
            allowSave: true,
            album: 'Xgenban'
        };

        this.config = function (options) {
            angular.extend(config, options);
        };

        this.$get = ['$rootScope', '$ionicModal', '$ionicLoading', 'scrollDelegateFix', 'Constant', function ($rootScope, $ionicModal, $ionicLoading, scrollDelegateFix, Constant) {

            var provider = {};
            var $scope = $rootScope.$new();

            provider.showViewModal = function (options, urls, defaultIndex) {
                $scope.config = angular.extend({}, config, options);
                if (!urls && urls.length === 0) {
                    return;
                }
                if (!defaultIndex || defaultIndex >= urls.length || defaultIndex < 0)
                    $scope.index = 0;
                else
                    $scope.index = defaultIndex;
                $scope.image = urls[$scope.index];

                function applyImage() {
                    $scope.image = urls[$scope.index];
                }

                $scope.onSwipeLeft = function () {
                    if (!$scope.disableSwipe && $scope.index < urls.length - 1) {
                        $scope.index++;
                        applyImage();
                    }
                    else if ($scope.index === urls.length - 1)
                        $scope.closeImageModal();
                };

                $scope.onSwipeRight = function () {
                    if (!$scope.disableSwipe && $scope.index > 0) {
                        $scope.index--;
                        applyImage();
                    } else if ($scope.index === 0)
                        $scope.closeImageModal();
                };

                $scope.onRelease = function() {
                    var scrollDelegate = scrollDelegateFix.$getByHandle('Handle');
                    var zoom = scrollDelegate.getScrollPosition().zoom;
                    $scope.disableSwipe = zoom !== 1;
                };

                var UIPath = '';
                if (Constant.debugMode) UIPath = 'module/';
                $ionicModal.fromTemplateUrl(UIPath + 'common/ionic-image-view.html', {
                    scope: $scope,
                    animation: 'none'
                }).then(function (modal) {
                    $scope.modal = modal;
                    $scope.modal.show();
                });

                $scope.closeImageModal = function () {
                    $scope.modal.hide();
                    $scope.modal.remove();
                };

                function save(url) {
                    if(window.cordova){
                        cordova.plugins.photoLibrary.saveImage(url + '?ext=.jpg', $scope.config.album, function (libraryItem) {
                            $ionicLoading.show({template: '保存成功', duration: 1500});
                        }, function (err) {
                            console.log(err);
                        });
                    }
                   
                }
                $scope.saveImg2Gallery = function (url) {
                    if(window.cordova){  
                        cordova.plugins.photoLibrary.getAlbums(
                            function (result) {
                                save(url);
                            },
                            function (err) {
                                if (err.startsWith('Permission')) {
                                    cordova.plugins.photoLibrary.requestAuthorization(
                                        function () {
                                            save(url);
                                        }, function (err) {
                                            // User denied the access
                                            console.log(err);
                                        }, {
                                            read: true,
                                            write: true
                                        }
                                    );
                                }
                            }
                        );

                    }
                   
                };
            };
            

            return provider;

        }];

    });
/**
 * Created by hewz on 2018/4/2.
 */
angular.module('app.controllers')
    .controller('pdfViewCtrl', ['$scope', '$http', '$stateParams', '$ionicHistory', '$rootScope', function ($scope, $http, $stateParams, $ionicHistory,$rootScope) {

        $scope.$on("$ionicView.enter", function (event, data) {
            $scope.url = $stateParams.url?$stateParams.url: $rootScope.WXPdfUrl;
            if(isWeixin())
            $rootScope.WXPdfUrl = $scope.url;
            if ($scope.url) {
                $http.get($scope.url, {
                    responseType: 'arraybuffer'
                }).then(function (response) {
                    $scope.pdfdata = new Uint8Array(response.data);
                });
            } else
                $ionicHistory.goBack();
        });

    }]);
/**
 * Created by hewz on 2018/3/30.
 */
angular.module('app.controllers')
    .controller('tabsCtrl', ['$scope', 'BroadCast', function ($scope, BroadCast) {
        $scope.$on("$ionicView.beforeEnter", function (event, data){
            $scope.isPhone = isWeixin();
        });
        $scope.badge = 0;
        $scope.hasContactPage = true;
       

        $scope.$on(BroadCast.BADGE_UPDATE, function (event, data) {
            if (data.type === 'im') {
                $scope.badge = data.count;
                $scope.$digest();
            } else {
                $scope.campus = data.count;
            }
        });



    }]);
/**
 * Created by hewz on 2018/3/30.
 */
angular.module('app.controllers')
    .controller('loginCtrl', ['$scope', '$state', '$ionicLoading', 'AuthorizeService', 'BroadCast', 'UserPreference', 'toaster', 'MESSAGES', 'ngIntroService', 'Requester', '$ionicPopup', '$rootScope', function ($scope, $state, $ionicLoading, AuthorizeService, BroadCast, UserPreference, toaster, MESSAGES, ngIntroService, Requester, $ionicPopup, $rootScope) {

        $scope.$on("$ionicView.beforeEnter", function (event, data) {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard && ionic.Platform.isIOS()) {
                cordova.plugins.Keyboard.disableScroll(true);
            }
            var ua = navigator.userAgent.toLowerCase();
          
            $scope.loginModel = {
                username: '', // UserPreference.get('account', ''),
                phone: '', //UserPreference.get('account', ''),
                password: UserPreference.get('m_password', ''),
                userType: ''
            };
            // console.log('$scope.loginModel');
            // console.log($scope.loginModel);
            
                  // var bind = 1;//getURLParameter("isbind");
                
            $scope.isWeiXin = isWeixin();
            if (window.location.href.indexOf('openId=') > 0) {
                $rootScope.m_openId = getURLParameter("openId");
                var bind = getURLParameter("isbind");
                if (bind == 1 && $scope.loginModel.password !== '') {
                    AuthorizeService.login($scope.loginModel);
                    $state.go('schoolRepairList');
                    return;
                }
            } else {
                //console.log('---- not set');
                $rootScope.m_openId = undefined;
            }
            var username = UserPreference.get('m_account', '');
          
            if (username) {
                $scope.loginModel.phone = username; //username.substr(username.length - 11, username.length);
                if ($scope.loginModel.password !== '') {
                    $scope.loginModel.username = $scope.loginModel.phone; //$scope.loginModel.userType + $scope.loginModel.phone;
                    AuthorizeService.login($scope.loginModel);
                    //  $state.go('tabsController.mainPage');
                    $state.go('schoolRepairList');
                }
            } else {

            }
        });



        $scope.$watch('loginModel.userType', function () {
            $scope.getChildren();
        });

        $scope.isIOS = ionic.Platform.isIOS();
        $scope.showSelectBox = function () {
            $scope.stuPopup = $ionicPopup.show({
                template: '<ion-radio ng-model="loginModel.username" ng-value="item.username" ng-repeat="item in children" ng-click="closeSelectBox($index)">{{item.classname}} {{item.name}}</ion-radio>',
                title: '请选择要登录的学生',
                scope: $scope
            });
        };

        $scope.closeSelectBox = function (i) {
            if ($scope.stuPopup)
                $scope.stuPopup.close();
            $scope.selectLabel = $scope.children[i].classname + ' ' + $scope.children[i].name;
        };

        $scope.getChildren = function () {
            if ($scope.loginModel.userType === 's' && isPhoneNumber($scope.loginModel.phone)) {
                $scope.loginModel.username = undefined;
                Requester.getChildren($scope.loginModel.phone).then(function (resp) {
                    $scope.children = resp.data;
                    if ($scope.children && $scope.children.length > 0) {
                        $scope.loginModel.username = $scope.children[0].username;
                        $scope.selectLabel = $scope.children[0].classname + ' ' + $scope.children[0].name;
                    } else
                        $scope.loginModel.username = undefined;
                });
            }
        };

        $scope.login = function () {
            if (this.loginForm.$valid) {
                $ionicLoading.show({
                    noBackdrop: true,
                    template: '<ion-spinner icon="lines" class="spinner-stable"></ion-spinner>'
                });
                if ($scope.loginModel.userType !== 's' || !$scope.loginModel.username)
                    $scope.loginModel.username = $scope.loginModel.userType + $scope.loginModel.phone;
                var rst = AuthorizeService.login($scope.loginModel);
                if (rst) {
                    rst.then(function (data) {
                        if (data.result) {
                            UserPreference.set("m_account", $scope.loginModel.username);
                            //if (!$scope.isWeiXin)
                            UserPreference.set("m_password", $scope.loginModel.password);
                            // $state.go('tabsController.mainPage');
                            $state.go('schoolRepairList');

                        } else
                            toaster.error({
                                title: MESSAGES.LOGIN_ERROR,
                                body: data.message
                            });
                    }).finally(function () {
                        $ionicLoading.hide();
                    });
                } else
                    $ionicLoading.hide();
            } else {
                if (this.loginForm.input_user.$error.required) {
                    toaster.warning({
                        title: MESSAGES.LOGIN_ERROR,
                        body: MESSAGES.LOGIN_NO_USERNAME
                    });
                } else if (this.loginForm.input_user.$error.pattern) {
                    toaster.warning({
                        title: MESSAGES.LOGIN_ERROR,
                        body: MESSAGES.LOGIN_USERNAME_PATTERN
                    });
                } else if (this.loginForm.input_pwd.$error.required) {
                    toaster.warning({
                        title: MESSAGES.LOGIN_ERROR,
                        body: MESSAGES.LOGIN_NO_PASSWORD
                    });
                } else if (this.loginForm.input_pwd.$error.pattern) {
                    toaster.warning({
                        title: MESSAGES.LOGIN_ERROR,
                        body: MESSAGES.LOGIN_PASSWORD_PATTERN
                    });
                } else
                    toaster.error({
                        title: MESSAGES.LOGIN_ERROR,
                        body: 'Unknown Error'
                    });
            }
        };

        $scope.$on(BroadCast.CONNECT_ERROR, function (arg, data) {
            $ionicLoading.hide();
        });

        //注册
        $scope.regist = function () {
            $state.go('register');
        };
    }]);
/**
 * Created by hewz on 2018/3/30.
 */
angular.module('app.controllers')
    .controller('resetPwdCtrl', ['$scope', '$ionicHistory', 'AccountService', 'BroadCast', 'UserPreference', 'Constant', '$state', '$ionicPopup', 'toaster', 'MESSAGES', function ($scope, $ionicHistory, AccountService, BroadCast, UserPreference, Constant, $state, $ionicPopup, toaster, MESSAGES) {
        $scope.goBack = function () {
            if ($scope.step > 1)
                $scope.step--;
            else
                $state.go('login');
        };

        $scope.step = 1;
        $scope.input = {
            smscode: '',
            phone: '',
            retype: 'm'
        };
        $scope.btnText = '获取验证码';

        function updateCoolDownText() {
            if ($scope.cd > 0) {
                $scope.cd--;
                $scope.btnText = $scope.cd;
            }
            else if ($scope.cooldown) {
                clearInterval($scope.cooldown);
                $scope.canReqSMS = true;
                $scope.cd = Constant.SMS_REQ_INTERVAL;
                $scope.btnText = '获取验证码';
            }
            $scope.$digest();
        }

        var lastSmsTime = UserPreference.get("LastSendSMSTime", 0);
        var diff = Math.round(new Date().getTime() / 1000) - lastSmsTime;
        $scope.canReqSMS = (diff >= Constant.SMS_REQ_INTERVAL);
        if ($scope.canReqSMS)
            $scope.cd = Constant.SMS_REQ_INTERVAL;
        else {
            $scope.cd = Constant.SMS_REQ_INTERVAL - diff;
            $scope.cooldown = setInterval(updateCoolDownText, 1000);
        }

        $scope.getSmsCode = function () {
            if ($scope.canReqSMS) {
                $scope.canReqSMS = false;
                AccountService.getSmsCode($scope.input.phone, 'forgetpass', $scope.input.retype);
            }
        };

        $scope.doReset = function () {
            var reg = /^[a-zA-Z0-9]+$/;
            if (!$scope.input.newpassword.match(reg) || !$scope.input.pwd.match(reg)) {
                toaster.warning({title: MESSAGES.REMIND, body: MESSAGES.LOGIN_PASSWORD_PATTERN});
                return;
            }
            if ($scope.input.pwd != $scope.input.newpassword) {
                toaster.warning({title: MESSAGES.REMIND, body: MESSAGES.PASSWORD_CONFIRM_ERROR});
                return;
            }
            AccountService.resetPwd(angular.copy($scope.input));
        };

        $scope.switchStep = function (s) {
            if (s === 2) {
                var opt = angular.copy($scope.input);
                opt.smstype = 'forgetpass';
                AccountService.checkCode(opt).then(function (resp) {
                    //console.log(resp);
                    if (resp.data.result) {
                        $scope.students = resp.data.data;
                        $scope.step = s;
                    }
                    else {
                        toaster.warning({title: MESSAGES.REMIND, body: resp.data.message});
                    }
                });
            }
        };

        $scope.$on(BroadCast.SMS_SENT, function (event, data) {
            if (data) {
                UserPreference.set("LastSendSMSTime", Math.round(new Date().getTime() / 1000));
                $scope.cooldown = setInterval(updateCoolDownText, 1000);
                if (!data.result) {
                    toaster.warning({title: MESSAGES.REMIND, body: data.message});
                }
            }
            if (Constant.debugMode) console.log(data);
        });

        $scope.$on(BroadCast.PASSWORD_RESET, function (event, data) {
            if (data && data.result) {
                var confirmPopup = $ionicPopup.alert({
                    title: '您的密码已重置',
                    template: '请再次尝试登录。',
                    okText: '确认',
                    okType: 'button-balanced'
                });
                confirmPopup.then(function () {
                    $state.go('login');
                });
            }
            if (Constant.debugMode) console.log(data);
        });
    }]);
/**
 * Created by hewz on 2018/3/30.
 */
angular.module('app.controllers')
    .controller('editProfileCtrl', ['$scope', 'Constant', '$rootScope', '$ionicHistory', '$stateParams', 'UserPreference', 'SettingService', 'BroadCast', 'toaster', 'MESSAGES', '$ionicLoading', '$state', 'Requester', 'CameraHelper', '$timeout', function ($scope, Constant, $rootScope, $ionicHistory, $stateParams, UserPreference, SettingService, BroadCast, toaster, MESSAGES, $ionicLoading, $state, Requester, CameraHelper, $timeout) {
        $scope.isWeiXin = isWeixin();
        $scope.visibleArea = $stateParams.content?$stateParams.content: $rootScope.WXRootEditProFileContent;
        if(isWeixin())
        $rootScope.WXRootEditProFileContent = $scope.visibleArea;
        $scope.user = UserPreference.getObject("user");
        $scope.defaultChildID = UserPreference.get('DefaultChildID');
        $scope.toChangeChild1 = {};
        $scope.rolename = String($scope.user.rolename);

        console.log($scope.defaultChildID);
        if ($scope.rolename == Constant.USER_ROLES.PARENT) {
            for (var i = 0; i < $scope.user.student.length; i++) {
                if ($scope.user.student[i].id == $scope.defaultChildID) {
                    $scope.toChangeChild = $scope.user.student[i];
                    break;
                }
            }
        }


        console.log($scope.toChangeChild);

        switch ($scope.visibleArea) {
            case 'name':
                $scope.pageTitle = "修改姓名";
                break;
            case 'password':
                $scope.pageTitle = "修改密码";
                break;
            case 'children':
                $scope.pageTitle = "子女信息";
                break;
            case 'instruction':
                $scope.pageTitle = "修改个人简介";
                break;

        }

        $scope.pwd = {
            _old: '',
            _new: '',
            _confirm: ''
        };
        $scope.save = function () {
            switch ($scope.visibleArea) {
                case 'name':
                    SettingService.editInfo('name', $scope.user.name);
                    break;
                case 'password':
                    var reg = /^[a-zA-Z0-9]+$/;
                    if (!$scope.pwd._old.match(reg) || !$scope.pwd._new.match(reg)) {
                        toaster.warning({
                            title: MESSAGES.REMIND,
                            body: MESSAGES.LOGIN_PASSWORD_PATTERN
                        });
                        return;
                    }
                    if ($scope.pwd._new != $scope.pwd._confirm) {
                        toaster.warning({
                            title: MESSAGES.REMIND,
                            body: MESSAGES.PASSWORD_CONFIRM_ERROR
                        });
                        return;
                    }
                    SettingService.changePwd($scope.pwd._old, $scope.pwd._new);
                    break;
                case 'instruction':
                    SettingService.editInfo('instruction', $scope.user.instruction);
                    break;
            }
            $ionicLoading.show({
                noBackdrop: true,
                template: '<ion-spinner icon="lines" class="spinner-stable"></ion-spinner>'
            });
        };

        $scope.setDefaultChild = function (child) {
            $scope.defaultChildID = child.id;
            UserPreference.set('DefaultChildID', child.id);
            UserPreference.set('DefaultClassID', child.classno.id);
            UserPreference.set('DefaultClassName', child.classno.className);
            UserPreference.set('DefaultChildName', child.student_name);
            UserPreference.set('DefaultSchoolName', child.school.schoolName);
            UserPreference.set('DefaultSchoolID', child.school.id);
            UserPreference.set('DefaultChildLogo', child.logo);
            UserPreference.setObject('DefaultChild', child);
        };

        $scope.goBack = function () {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('schoolRepairList');
            // if ($scope.visibleArea === 'children') {
            //     $state.go('tabsController.settingPage');
            // } else {
            //     $state.go('useProfile');
            // }
        };

        $scope.selectImage = function (child) {
            $scope.toChangeChild = child;
            if (!isWeixin()) {
                CameraHelper.selectImage('av', {
                    allowEdit: true
                });
            } else {
                var input = document.getElementById("childCapture");
                input.click();
            }

        };

        //web端选择文件
        $scope.getFile = function (files) {
            var file = files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (theFile) {
                $timeout(function () {
                    $scope.testImg = theFile.target.result;
                    var data = {
                        which: 'av',
                        source: $scope.testImg
                    };
                    $rootScope.$broadcast(BroadCast.IMAGE_SELECTED, data);

                }, 100);
            };
        };

        $scope.$on(BroadCast.IMAGE_SELECTED, function (a, rst) {

            if (rst && rst.which === 'av') {
                $ionicLoading.show({
                    noBackdrop: true,
                    template: '<ion-spinner icon="lines" class="spinner-stable"></ion-spinner>'
                });
                Requester.modifyStuInfo($scope.toChangeChild.id, 'logo', rst.source.substr(rst.source.indexOf('base64,') + 7)).then(function (resp) {
                    if (resp.result) {
                        toaster.success({
                            title: '修改成功'
                        });

                        $scope.toChangeChild.logo = rst.source;
                        for (var i = 0; i < $scope.user.student.length; i++) {
                            if ($scope.user.student[i].id === $scope.toChangeChild.id) {
                                $scope.user.student[i] = $scope.toChangeChild;
                                UserPreference.setObject('user', $scope.user);
                                UserPreference.setObject('DefaultChild', $scope.user.student[i]);
                                break;
                            }

                        }
                    }
                }).finally(function () {
                    $ionicLoading.hide();
                });
            }
        });

        $scope.$on(BroadCast.EDIT_INFO, function (a, rst) {
            if (rst && rst.result) {
                toaster.success({
                    title: MESSAGES.SAVE_SUCCESS,
                    body: MESSAGES.INFO_UPDATED
                });
                $scope.goBack();
            } else
                toaster.error({
                    title: MESSAGES.REMIND,
                    body: rst.message
                });
            $ionicLoading.hide();
        });

        $scope.$on(BroadCast.PASSWORD_CHANGE, function (a, rst) {
            if (rst && rst.result) {
                toaster.success({
                    title: MESSAGES.REMIND,
                    body: MESSAGES.PWD_UPDATED
                });
                UserPreference.set('m_password',$scope.pwd._new);
               $scope.goBack();
            } else
                toaster.error({
                    title: MESSAGES.REMIND,
                    body: rst.message
                });
            $ionicLoading.hide();
        });

        $scope.$on(BroadCast.CONNECT_ERROR, function (arg, data) {
            $ionicLoading.hide();
        });
    }]);
angular.module('app.controllers')
    .controller('repairRecordListCtrl', ['$scope', '$ionicModal', 'Constant', '$q', 'CameraHelper', '$timeout', '$state', 'Requester', 'UserPreference', '$ionicLoading', 'toaster', 'BroadCast', '$rootScope', '$stateParams', function ($scope, $ionicModal, Constant, $q, CameraHelper, $timeout, $state, Requester, UserPreference, $ionicLoading, toaster, BroadCast,$rootScope, $stateParams) {

        $scope.$on("$ionicView.enter", function (event, data) {
            console.log('enter');
            $scope.page = 1; //当前页面
            $scope.schoolId = $stateParams.schoolId?$stateParams.schoolId:$rootScope.WXManufactureSchoolId;
            $rootScope.WXManufactureSchoolId = $scope.schoolId;
            $scope.repairList = $scope.selectType == 1 ? UserPreference.getArray('WaitFix') ? UserPreference.getArray('WaitFix') : [] : UserPreference.getArray('Closed') ? UserPreference.getArray('Closed') : [];
            $scope.isMoreData = true;
            $scope.repairImgs = [];
            // $scope.repairData = {unclosedSize:0,closedSize:0};
            $scope.selected = {
                terminalAddress: '',
                orderDescribe: '',
                maintainImgs: [],
                assetNumber:''
            };
            $scope.getRepairRecordList($scope.selectType);

        });
        $scope.$on("$ionicView.loaded", function (event, data) {
            $scope.selectType = 1;
        });

        $scope.$on(BroadCast.CONNECT_ERROR, function () {
            console.log('error');
            $scope.isMoreData = false;
            $ionicLoading.hide();
        });
        //选择类型
        $scope.selectTypeClick = function (type) {
            $scope.selectType = type;
            $scope.repairList = type == 1 ? UserPreference.getArray('WaitFix') : UserPreference.getArray('Closed');
            $scope.page = 1;
            $scope.isMoreData = true;
            $scope.getRepairRecordList(type);
        };

        //获取报修记录列表
        $scope.getRepairRecordList = function (condition) {
            Requester.getRepairRecordList(condition, $scope.page,$scope.schoolId).then(function (res) {
                if (res.result) {
                    $scope.repairList = res.data.data.content;
                    $scope.repairData = res.data;
                    // UserPreference.setObject('RepairListData',$scope.repairData);
                    if (condition == 1) {
                        UserPreference.setObject('WaitFix', $scope.repairList);
                    } else {
                        UserPreference.setObject('Closed', $scope.repairList);
                    }

                } else {
                    $scope.isMoreData = false;
                    if(res.code==-100){
                        toaster.error({
                            title: '',
                            body: '用户未登录或登录失效，请重新登录',
                            timeout: 2000          
                        });
                       // alert('用户未登录或登录失效，请重新登录');
                        setTimeout(function(){
                            $state.go('login'); 
                            
                        },1500); 
                    }else{
                        toaster.error({
                            title: resp.message,
                            body: ''
                        });
                    }
                }
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        };
        //下拉刷新
        $scope.refreshData = function () {
            $scope.page = 0;
            $scope.getRepairRecordList($scope.selectType);
        };

        //上拉加载
        $scope.loadMore = function () {
            $scope.page++;
            Requester.getRepairRecordList($scope.selectType, $scope.page,$scope.schoolId).then(function (res) {
                if (res.result) {
                    res.data.data.content.forEach(function (item) {
                        $scope.repairList.push(item);
                    });
                    //关闭刷新
                    if (!res.data.data.content || res.data.data.content.length < Constant.reqLimit) {
                        $scope.isMoreData = false;
                    }
                }else{
                    if(res.code==-100){
                        toaster.error({
                            title: '',
                            body: '用户未登录或登录失效，请重新登录',
                            timeout: 2000          
                        });
                       // alert('用户未登录或登录失效，请重新登录');
                        setTimeout(function(){
                            $state.go('login'); 
                            
                        },1500); 
                    }else{
                        toaster.error({
                            title: resp.message,
                            body: ''
                        });
                    }
                }
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        };

        //查看详情
        $scope.goToDetail = function (repairRecordId, readStatus) {

            $state.go('repairDetail', {
                repairRecordId: repairRecordId,
                readStatus: readStatus
            });
        };

        //*** modal */
        var UIPath = '';
        if (Constant.debugMode) UIPath = 'page/';
        $ionicModal.fromTemplateUrl(UIPath + 'home/equipmentRepair/postRepairInfo.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function () {
            $scope.requestCount = 0;
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        $scope.selectImg = function () {
            //if(!isWeixin())
            if (window.cordova) {
                CameraHelper.selectMultiImage(function (resp) {
                    console.log(resp);
                    if (!resp)
                        return;
                    if (resp instanceof Array) {

                        Array.prototype.push.apply($scope.repairImgs, resp);
                        $scope.$apply();
                    } else {
                        $scope.repairImgs.push("data:image/jpeg;base64," + resp);
                    }
                }, 9 - $scope.repairImgs.length);
            } else {
                //web 端
                var input = document.getElementById("capture");
                input.click();
            }

        };

        // input形式打开系统系统相册
        $scope.getFile = function (files) {
            var file = files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (theFile) {
                $timeout(function () {
                    $scope.testImg = theFile.target.result; //设置一个中间值
                    $scope.repairImgs.push($scope.testImg);

                }, 100);
            };
        };

        $scope.removeImg = function (index, $event) {
            $event.stopPropagation();
            $scope.repairImgs.splice(index, 1);
        };

        function onImageResized(resp) {

            $scope.selected.maintainImgs.push(resp);
        }

        //立即提交
        $scope.commitRepair = function () {

            var result = checkStringIsIncludeSpecialChar($scope.selected.assetNumber);
            if(!result||$scope.selected.assetNumber.length > 21){
                toaster.warning({
                    title: "提交失败",
                    body: '资产ID不存在',
                    timeout: 3000
                });
             return;
            }
            if (isEmojiCharacter($scope.selected.orderDescribe)) {
                $ionicLoading.show({
                    template: '请不要输入表情字符',
                    duration: 1500
                });
                return;
            }
            var promiseArr = [];
            $scope.repairImgs.forEach(function (img) {
                promiseArr.push(resizeImage(Constant.CAPTURE_IMAGE_RANGE, img).then(onImageResized));
            });

            $scope.requestCount++;
            $q.all(promiseArr).then(function () {
                if ($scope.requestCount === 1) {
                    $ionicLoading.show({
                        noBackdrop: true,
                        template: '<ion-spinner icon="lines" class="spinner-stable"></ion-spinner>'
                    });
                    Requester.addEquipmentRepairRecord($scope.selected).then(function (res) {
                        if (res.result) {
                            toaster.success({
                                title: "提交成功",
                                body: "成功报修，请耐心等待管理员处理",
                                timeout: 3000
                            });

                            $scope.isShow = true;
                            $ionicLoading.hide();
                            $scope.closeModal();
                            $scope.repairImgs = [];
                            $scope.selected = {
                                terminalAddress: '',
                                orderDescribe: '',
                                maintainImgs: []
                            };

                            return res;
                        }else{
                            $ionicLoading.hide();
                            $scope.requestCount = 0;
                            toaster.warning({
                                title: "提交失败",
                                body: res.message,
                                timeout: 3000
                            }); 
                        }
                    }).then(function (res) {
                        if (res.result) {
                            //$scope.updateRepairRecordStatus(res.data);
                            $scope.page = 1;
                            $scope.getRepairRecordList($scope.selectType);

                        }
                    });
                }

            });


        };

        $scope.updateRepairRecordStatus = function (repairRecordId) {
            Requester.addRepairProgress(repairRecordId, 2, '').then(function (res) {
                $scope.page = 1;
                $scope.getRepairRecordList($scope.selectType);
            });
        };

        //扫码
        $scope.scanningView = function(event){
            $scope.isIos = ionic.Platform.isIOS();
           if( $scope.isIos){
            $scope.getAssetsIdByScanning();
           }else{
            var permissions = cordova.plugins.permissions;
            permissions.hasPermission(permissions.CAMERA, function (status) {
                if (!status.hasPermission) {
                    var errorCallback = function () {};
                    permissions.requestPermission(
                        permissions.CAMERA,
                        function (status) {
                            if (!status.hasPermission) {
                                errorCallback();
                            } else {
                                $scope.getAssetsIdByScanning();
                            }
                        }, errorCallback);
                } else
                    $scope.getAssetsIdByScanning();
            }, null);
           }
           
        };


        $scope.getAssetsIdByScanning = function () {
            window.scanning.startScanning(function (result) {
                $scope.selected.assetNumber = '';
                Requester.getAssetsIdByScan(result).then(function (res) {
                    if (res.result) {
                        setTimeout(function () {
                            $scope.$apply(function () {
                                $scope.selected.assetNumber = res.data;
                            });

                        }, 200);
                    } else {
                        toaster.warning({
                            title: "获取失败",
                            body: res.message,
                            timeout: 3000
                        });
                    }

                });

            }, function (error) {
                // alert('error');
            }, {});
        };

    }]);
angular.module('app.controllers')
    .controller('repairDetailCtrl', ['$scope', '$rootScope', '$state', 'Constant', '$timeout', 'Requester', 'SavePhotoTool', '$stateParams', 'UserPreference', 'AuthorizeService', function ($scope, $rootScope, $state, Constant, $timeout, Requester, SavePhotoTool, $stateParams, UserPreference,AuthorizeService) {

        //收到通知 保存图片
        $rootScope.$on('saveImgUrl', function (event, url) {
            SavePhotoTool.savePhoto(url);
        });

        $scope.$on("$ionicView.enter", function (event, data) {
            $scope.isIos = ionic.Platform.isIOS();
            $scope.loginModel = {
                username:  UserPreference.get('m_account', ''),
                phone: UserPreference.get('m_account', ''),
                password: UserPreference.get('m_password', ''),
                userType: ''
            };
         
            if ( $scope.loginModel.username&&$scope.loginModel.password !== '') {
               
                  AuthorizeService.login($scope.loginModel);         
            } 
            // $scope.msgTest =  window.location.href?window.location.href:'======';
            // $scope.hash = window.location.hash? window.location.hash:'---';
            // console.log(window.location);
           // alert(window.location.href);
            if (window.location.href.indexOf('repairRecordId=') > 0) {
                //alert(window.location);
                // console.log('$stateParams.repairRecordId:'+$stateParams.repairRecordId);
                var url = window.location.href;
                $scope.repairRecordId = getURLParameter("repairRecordId");
                // $scope.repairID = getURLParameter("repairRecordId")?getURLParameter("repairRecordId"):getQueryString(url);
                // $scope.hashId = getQueryString($scope.hash);
            }
            // console.log("repair id:" +  $scope.repairRecordId);
         
            $scope.repairRecordId = $stateParams.repairRecordId ? $stateParams.repairRecordId : $scope.repairRecordId ? $scope.repairRecordId : $rootScope.WXDeatilRepairRecordId;
            $rootScope.WXDeatilRepairRecordId = $scope.repairRecordId;
            
              $scope.getRepairDetail();
        });

        //即将进入
        $scope.$on("$ionicView.enter", function (event, data) {

        });



        //获取维修记录详情
        $scope.getRepairDetail = function () {
            Requester.getRepairRecordDetail($scope.repairRecordId).then(function (res) {
                if (res.result) {
                    $scope.repairDetail = res.data;
                    $scope.picUrls = [];
                    $scope.events = []; //维修进度
                    if ($scope.repairDetail) {
                        $scope.repairDetail.tbMaintainImgs.forEach(function (pic) {
                            $scope.picUrls.push({
                                src: pic.url,
                                thumb: pic.thumb
                            });
                        });
                        // UserPreference.setObject('RepairDetail', $scope.repairDetail);
                        // UserPreference.setObject('RepairPictures', $scope.picUrls);


                        for (var i = 0; i < $scope.repairDetail.tbMaintainProgresses.length; i++) {
                            var pro = $scope.repairDetail.tbMaintainProgresses[i];
                            var icon;
                            if ($scope.repairDetail.tbMaintainProgresses.length > 2) {
                                if (i == 0) {
                                    icon = 'img/repair/selectRepair.png';
                                    // if(pro.orderProgress==Math.pow(2,30)){
                                    //     $scope.isClose = true; 
                                    //  }
                                } else if (i == $scope.repairDetail.tbMaintainProgresses.length - 1) {
                                    icon = 'img/repair/normalRepair.png';
                                } else if (i == $scope.repairDetail.tbMaintainProgresses.length - 2) {
                                    icon = 'img/repair/normalEmail.png';
                                } else {
                                    icon = 'img/repair/normalRepair.png';
                                }
                            } else {
                                if (i == $scope.repairDetail.tbMaintainProgresses.length - 1) {
                                    icon = 'img/repair/normalRepair.png';

                                } else {
                                    icon = 'img/repair/normalEmail.png';
                                    if (pro.orderProgress == Math.pow(2, 30)) {
                                        icon = 'img/repair/selectRepair.png';
                                        // $scope.isClose = true; 
                                    }
                                }
                            }
                            var manStatus = pro.orderProgress == 1 ? '申请人: ' : "处理人: ";
                            var userPhone = i == $scope.repairDetail.tbMaintainProgresses.length - 1 ? pro.userPhone : '';

                            $scope.events.push({
                                iconImg: icon,
                                badgeIconClass: 'tm-icon',
                                title: pro.progressName,
                                operateMan: manStatus + pro.userName,
                                operatePhone: userPhone,
                                text: pro.progressDescribe,
                                date: pro.operateTime.substr(5, 6),
                                time: pro.operateTime.substr(11, 5)
                            });

                        }
                        for (var k = 0; k < $scope.repairDetail.tbMaintainProgresses.length; k++) {
                            var proc = $scope.repairDetail.tbMaintainProgresses[k];
                            if (proc.orderProgress == Math.pow(2, 30)) {
                                $scope.isClose = false;
                                return;
                            } else {
                                $scope.isClose = true;
                            }
                        }
                        // UserPreference.setObject('RepairEvents', $scope.events);

                    }

                } else {

                }
            });
        };

        //修改报修记录已读状态
        $scope.updateRepairRecordStatus = function () {
            Requester.addRepairProgress($scope.repairRecordId, 2, '').then(function (res) {
                if (res.result) {
                    console.log('update is readed');
                    $scope.getRepairDetail();
                }
            });
        };


        //改变维修进度
        $scope.fixRepairProgress = function () {
            $state.go('repairProgress', {
                repairRecordId: $scope.repairRecordId
            });
        };

       function getQueryString(obj) {
            // var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            // var r = window.location.search.substr(1).match(reg);
            // if (r != null) return unescape(r[2]); return null;
          
            var index = obj.split("repairRecordId=")[1];
            
        //  console.log(obj);
            return index;
        }


    }]);
angular.module('app.controllers')
.controller('repairProgressCtrl',['$scope', 'Requester', '$stateParams', '$ionicHistory', 'toaster', '$rootScope', '$state', function($scope,Requester,$stateParams, $ionicHistory,toaster,$rootScope, $state){
    $scope.$on("$ionicView.enter", function (event, data){
        console.log('enter progress');
      
        $scope.repairRecordId = $stateParams.repairRecordId?$stateParams.repairRecordId:$rootScope.WXRepairdRecordId;
        $rootScope.WXRepairdRecordId =  $scope.repairRecordId;
        //进度状态
        $scope.progressStatues = [
            // {key:1,value:'已经联系售后了'},
            {key:2,value:'今天会解决'},
            {key:3,value:'马上过来修'},
            {key:4,value:'设备没坏不用修'},
            {key:5,value:'设备修好了'},
            {key:6,value:'设备报废了'},
        ];
        $scope.closedNum =  Math.pow(2,30);
        //提交进度信息
        $scope.select = {
          key:0,
          status :16,//售后回复
          content:''
        };
     });
 
     //确定
     $scope.confirm = function(){
         
         Requester.addRepairProgress($scope.repairRecordId, $scope.select.status,$scope.select.content).then(function(res){
            if(res.result){ 
                if($scope.select.status== 16){
                    toaster.success({title: "回复成功", body: "该报修记录已成功回复",timeout:3000});
                }else{
                    toaster.success({title: "更新成功", body: "该报修记录更新进度成功",timeout:3000});
                }
                $ionicHistory.goBack();
                $scope.select = {
                    key:0,
                    status :4,
                    content:''
                  };
            }else{
                if(res.code==-100){
                    toaster.error({
                        title: '',
                        body: '用户未登录或登录失效，请重新登录',
                        timeout: 2000          
                    });
                   // alert('用户未登录或登录失效，请重新登录');
                    setTimeout(function(){
                        $state.go('login'); 
                        
                    },1500); 
                }else{
                    toaster.error({
                        title: resp.message,
                        body: ''
                    });
                }
            }
         });
     };

     //增加进度
     


   
}]);
angular.module('app.controllers')
    .controller('schoolRepairListCtrl', ['$scope', '$ionicLoading', 'AuthorizeService', '$ionicHistory', 'Constant', '$timeout', '$state', 'Requester', 'UserPreference', 'toaster', 'BroadCast', 'ngIntroService', function ($scope, $ionicLoading, AuthorizeService, $ionicHistory, Constant, $timeout, $state, Requester, UserPreference, toaster, BroadCast, ngIntroService) {

        $scope.$on("$ionicView.beforeEnter", function (event, data) {
            setTimeout(function () {
                // console.log('---tip:'+UserPreference.getBoolean("ShowAlertMsgTip"));
                if (!UserPreference.getBoolean("ShowAlertMsgTip")) {
                    var IntroOptions = {
                        steps: [{
                            element: document.querySelector('#set_btn'),
                            intro: "<strong>点击这里，可以退出登录、修改密码等操作</strong>",
                            position: 'center'
                        }],
                        showStepNumbers: false,
                        cssClass:'msg-alert',
                        showBullets: false,
                        showButtons: false,
                        exitOnOverlayClick: true,
                        exitOnEsc: true
                    };
                    ngIntroService.onHintClick(function () {
                        ngIntroService.exit();
                    });
                    ngIntroService.setOptions(IntroOptions);
                    ngIntroService.start();
                    UserPreference.set("ShowAlertMsgTip", true);
                }
            }, 200);
        });

        $scope.$on("$ionicView.enter", function (event, data) {

            $scope.getStatOfSchoolList();
        });
        $scope.$on("$ionicView.loaded", function (event, data) {
            $scope.selectType = 1;
            //$scope.getStatOfSchoolList();
        });

        $scope.showMoreData = function () {
            $scope.isShow = !$scope.isShow;
            ngIntroService.exit();
        };

        $scope.fixPswOrLogout = function (type) {
            if (type === 1) {
                $state.go('editProfile', {
                    content: 'password'
                });
            } else {
                $ionicLoading.show({
                    noBackdrop: true,
                    template: '<ion-spinner icon="lines" class="spinner-stable"></ion-spinner>'
                });

                AuthorizeService.logout();
            }
            $scope.isShow = false;

        };
        $scope.$on(BroadCast.WechatLogout, function (a, rst) {
            if (rst) {
                // console.log('--logout');
                logout();
            }

        });

        function logout() {
            //console.log('----logout succceed');
            $ionicLoading.hide();
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
            var currentVersion = Constant.version;
            var rst = UserPreference.getBoolean(currentVersion);
            var lastUser = UserPreference.get('username', '');
            var lastUser2 = UserPreference.get('m_account', '');
            var alertMsg = UserPreference.getBoolean('ShowAlertMsgTip');

            //班牌留言 取
            UserPreference.clear();
            UserPreference.set(currentVersion, rst);
            UserPreference.set("username", lastUser);
            UserPreference.set("m_account", lastUser2);
            UserPreference.set('ShowAlertMsgTip', alertMsg);

            var url = window.location.href.replace('isbind=1', 'isbind=0');
            window.location.href = url;
            $state.go('login');
        }

        $scope.hideAlert = function () {
            $scope.isShow = false;
        };

        //选择类型
        $scope.selectTypeClick = function (type) {
            $scope.selectType = type;
            $scope.page = 1;
        };
        //
        $scope.goToRecordList = function (item) {
            $state.go('repairRecordList', {
                schoolId: item.schoolId
            });
        };

        //下拉刷新
        $scope.refreshData = function () {
            $scope.getStatOfSchoolList();
        };

        $scope.getStatOfSchoolList = function () {
            Requester.getStatOfSchoolList().then(function (resp) {
                if (resp.result) {
                    $scope.schoolList = resp.data;
                } else {
                    if (resp.code == -100) {
                        toaster.error({
                            title: '',
                            body: '用户未登录或登录失效，请重新登录',
                            timeout: 2000
                        });
                        // alert('用户未登录或登录失效，请重新登录');
                        setTimeout(function () {
                            $state.go('login');

                        }, 1500);
                    } else {
                        toaster.error({
                            title: resp.message,
                            body: ''
                        });
                    }
                }
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        };
    }]);
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('common/ionic-image-view.html','<ion-modal-view class="image-modal">\n\t<ion-header-bar class="bar bar-header bar-follower">\n\t\t<button class="button button-icon icon " ng-click="closeImageModal()">\n\t\t\t<img src="img/icon/icon-arrow_left.png" style="max-width: 25px; max-height:25px;  padding-top: 7px;" alt=""/>\n\t\t</button>\n\t\t<h1 class="title bar-follower-font">\u67E5\u770B\u56FE\u7247</h1>\n\t\t<button class="button button-clear" ng-click="saveImg2Gallery(image)" style="color: white;font-size: small;font-weight: normal" ng-if="config.allowSave">\u4FDD\u5B58\u56FE\u7247</button>\n\t</ion-header-bar>\n\t<ion-content scroll="false">\n\n\t\t<ion-scroll zooming="true" direction="xy" delegate-handle="Handle" class="zoom-pane" min-zoom="1" scrollbar-x="false" scrollbar-y="false" overflow-scroll="false"\n\t\t\t\t\ton-swipe-right="onSwipeRight()" on-swipe-left="onSwipeLeft()" on-release="onRelease()">\n\t\t\t<img ng-src="{{image}}" ion-img-cache imageonload >\n\t\t</ion-scroll>\n\n\t</ion-content>\n</ion-modal-view>\n');
$templateCache.put('common/pdfView.html','<ion-view>\n\t<ion-header-bar class="bar bar-header bar-follower">\n\t\t<back-btn></back-btn>\n\t\t<h1 class="title bar-follower-font">\u9884\u89C8</h1>\n\t</ion-header-bar>\n\t<ion-content scroll="false">\n\n\t\t<div style="height: 100vh;width: 100vw">\n\t\t\t<pdfjs-viewer data="pdfdata"></pdfjs-viewer>\n\t\t</div>\n\n\t</ion-content>\n</ion-view>\n');
$templateCache.put('equipmentRepair/postRepairInfo.html','<ion-modal-view>\n    <ion-header-bar class="bar bar-header bar-follower" style="background-image: none;">\n        <button class="button button-icon icon " ng-click="closeModal()">\n            <img src="img/icon/icon-arrow_left.png" style="max-width: 25px; max-height:25px;  padding-top: 7px;" alt="" />\n        </button>\n        <h1 class="title bar-follower-font">\u62A5\u4FEE</h1>\n\n        <!-- <button class="button button-icon " ng-click="save()" ng-disabled="equipmentRepairForm.$invalid">\n            <img src="img/icon/icon-submit.png" style="max-width: 25px; max-height:25px;  padding-top: 7px;" alt="" />\n        </button> -->\n    </ion-header-bar>\n    <form name="equipmentRepairForm" novalidate>\n        <ion-content style="padding: 15px;">\n\n            <div class="item item-input" style="border:0px;border-bottom: 1px solid #ddd;">\n                <!-- <img src="img/repair/location.png" style="width: 18px;height:27px;"/> -->\n                <input name="ip_title" type="text" placeholder="\u8D44\u4EA7ID\uFF0C\u975E\u5FC5\u586B\uFF0C\u652F\u6301\u626B\u7801"  style="font-size: 16px;margin-left: 0px;margin-right: 20px;" ng-model="selected.assetNumber" maxlength="30" >\n                <img src="img/repair/scan.png" style="height:25px;width:28px;float:right;" ng-click="scanningView($event)"/>\n            </div>\n            <label class="item item-input" style="border:0px;border-bottom: 1px solid #ddd;margin-top:7px;">\n                <img src="img/repair/location.png" style="width: 18px;height:27px;"/>\n                <input name="ip_title" type="text" placeholder="\u8BBE\u5907\u6240\u5728\u4F4D\u7F6E"  style="font-size: 16px;margin-left: 10px;" ng-model="selected.terminalAddress" maxlength="99" required>\n                \n            </label>\n\n\n            <div class="spacer" style="height: 20px;"></div>\n\n            <div style="background-color:#F3F4F6;border-radius:8px;padding:0px;">\n                <textarea placeholder="\u8BBE\u5907\u6545\u969C\u63CF\u8FF0,\u5FC5\u586B" style="width:100%;height: 160px;padding: 8px 9px;background-color:#F3F4F6;font-size:16px;border-radius: 8px; " ng-model="selected.orderDescribe" maxlength="1023" required></textarea>\n            </div>\n            <div class="spacer" style="height: 20px;"></div>\n\n            <div class="row flex-row" style="padding: 0;margin-top: 2px;">\n                <div class="col pic-grid" ng-repeat="item in repairImgs track by $index" style="position: relative;">\n                    <img style="position:absolute;right: 2px;top: 2px;height: 20px;width: 20px;" src="img/icon/fail_03.png" ng-click="removeImg($index, $event)"\n                    />\n                    <img ng-src="{{item.data?item.data:item}}" style="max-width: 100%" ng-click="preViewImages($index)" />\n                </div>\n                <div class="col pic-grid" style="text-align: center;padding-top: 30px;" ng-if="repairImgs.length < 9">\n                    <a class="button icon ion-plus-round border-btn-add" style="color: #888" ng-click="selectImg()"></a>\n                </div>\n                <input type="file" accept="image/*" id="capture" name="file" class="mFileInput" style="display:none;" onchange="angular.element(this).scope().getFile(this.files)"\n                />\n            </div>\n\n            <div class="button"  style="width:calc(100% - 110px);margin-left: 55px;margin-top:60px;height: 40px;line-height: 40px;min-height: 40px;border:1px solid #DDDDDD;border-radius: 20px;font-size:17px;background-color:#DDDDDD;color:#9D9D9D;font-weight: 500;" ng-if="equipmentRepairForm.$invalid">\u7ACB\u5373\u63D0\u4EA4</div>\n            <div class="button" ng-click="commitRepair()" style="width:calc(100% - 110px);margin-left: 55px;margin-top:60px;height: 40px;line-height: 40px;min-height: 40px;border-radius: 20px;font-size:17px;background-color:#FEB736 ;color:white;font-weight: 500;" ng-if="!equipmentRepairForm.$invalid">\u7ACB\u5373\u63D0\u4EA4</div>\n  \n            <div class="spacer" style="height: 30px;"></div>\n\n        </ion-content>\n    </form>\n\n</ion-modal-view>');
$templateCache.put('equipmentRepair/repairDetail.html','<ion-view hide-nav-bar="true" cache-view="true">\n    <ion-header-bar class="bar bar-header bar-follower" style="background-image: none;">\n        <back-btn></back-btn>\n        <h1 class="title bar-follower-font">\u62A5\u4FEE\u8BE6\u60C5</h1>\n    </ion-header-bar>\n\n    <ion-content style="background-color: #FCFCFC;">\n        <ion-list>\n            <!-- <div style="padding:10px;">test99999999</div>\n            <div style="padding:10px;">id:{{repairID}}</div>\n            <div style="padding:10px;">hashid:{{hashId}}</div>\n            <div style="margin-top:30px;padding:10px;">ad:{{msgTest}}</div>\n            <div style="margin-top:30px;padding:10px;">hash:{{hash}}</div> -->\n            <div style="padding: 13px;">\n                <h2 style="padding:2px 0px;" class="text-title">{{repairDetail.terminalAddress}}</h2>\n                \n                <div style="width:100%; background-color:  #ddd;height: 1px;margin-top: 7px;"></div>\n                <div class="short-text-main">{{repairDetail.orderDescribe}}</div>\n                <ion-gallery style="margin-top: 10px;margin-bottom: 6px;" ion-gallery-items="picUrls" ion-gallery-row="3" ion-gallery-toggle="true"\n                    ng-if="picUrls.length>0"></ion-gallery>\n            </div>\n\n            <div style="width: 100%;background-color: #F3F4F6;height: 15px;" ng-if="repairDetail.assetNumber"></div>\n            <div style="font-size:15px;margin-top: 6px;margin-left:13px;height:44px;line-height: 44px;" ng-if="repairDetail.assetNumber" class="selectable"> \n              <span style="color:#333;">\u8D44\u4EA7ID: </span>\n              <span style="color:#666;">{{repairDetail.assetNumber}}</span>\n            </div>\n            <div style="width: 100%;background-color: #F3F4F6;height: 15px;"></div>\n            <div style="padding: 13px;">\n                <img src="img/repair/group.png" style="margin-left: 4px;margin-top: 2px;width:22px;height:19px;" />\n                <span style="font-size: 16px;font-weight: 500;color: #0072FE;position: relative;top: 1px;">\u8FDB\u5EA6</span>\n                <div style="width: 100%;background-color: #ddd;margin-top: 12px;height: 1px;"></div>\n\n                <timeline id="repair_timeline">\n                    <timeline-event ng-repeat="event in events" side="right">\n                        <div style="margin-top: 28px;text-align: right;max-width: 45px;">\n                            <div style="font-size: 13px;color:#333;">{{event.date}}</div>\n                            <div style="font-size: 12px;color:#999;">{{event.time}}</div>\n                        </div>\n                        <timeline-badge class="{{event.badgeClass}}" id="repair_badge">\n                            <i class="statueIcon{{event.statue}}">\n                                <img src="{{event.iconImg}}" style="width: 26px;height: 26px;"/>\n                            </i>\n                        </timeline-badge>\n                        <timeline-panel style="margin-top: -45px;" id="repair_timeline_panel">\n                            <div style="color:#222;font-size: 16px;">{{event.title}}</div>\n                            <div style="color:#666;font-size: 15px;margin-top: 4px;">{{event.operateMan}}\n                                <a   ng-href="tel:{{event.operatePhone}}" ng-if="event.operatePhone" style="font-size: 14px;">({{event.operatePhone}})</a>\n                            </div>\n                            <div id="timeline-content" style="color:#666;font-size: 15px;margin-top: 4px;">{{event.text}}</div>\n\n                        </timeline-panel>\n                    </timeline-event>\n                </timeline>\n            </div>\n\n            <div style="height: 55px;width: 100%;"></div>\n        </ion-list>\n    </ion-content>\n\n    <div class="bar bar-footer " style="height: 50px;background-color: #F8f8f8;border-top: 1px #e5e5e5 solid;font-size:17px;" ng-if="isClose">\n        <div class="button button-clear button-full" style="color: #222;margin-top: 3px;width:100%;"\n            ng-click="fixRepairProgress()">\u56DE\u590D\u5B66\u6821</div>\n        <!-- <div ng-if="!isIos" style="width: 100%;">\n            <a class="button button-clear  button-full" style="color: #222;margin-top: 3px;width: 50%;float: left;border-right: 1px solid #ddd;"\n                ng-href="tel:">\u8054\u7CFB\u552E\u540E</a>\n            <div class="button button-clear  button-full" style="color: #222;margin-top: 3px;width: 50%;float: left;"\n                ng-click="fixRepairProgress()">\u589E\u52A0\u8FDB\u5EA6</div>\n        </div> -->\n    </div>\n</ion-view>');
$templateCache.put('equipmentRepair/repairProgress.html','<ion-view hide-nav-bar="true" cache-view="true" style="background-color: #FCFCFC;">\n    <ion-header-bar class="bar bar-header bar-follower" style="background-image: none;">\n        <back-btn></back-btn>\n        <h1 class="title bar-follower-font">\u589E\u52A0\u8FDB\u5EA6</h1>\n        <button class="button button-icon " style="color: white;font-size: 15px;padding-top: 3px;" ng-click="confirm()"\n            ng-disabled="repairProgressForm.$invalid">\n            <!-- <img src="img/icon/icon-submit.png" style="max-width: 25px; max-height:25px;  padding-top: 7px;" alt="" /> -->\n            \u786E\u5B9A\n        </button>\n    </ion-header-bar>\n\n    <form name="repairProgressForm" novalidate>\n        <ion-content style="margin:0px 12px;">\n           \n            <div style="border-radius: 10px;background-color:#F3F4F6; margin-top: 22px;">\n                <textarea name="chatInput"\n                    style="width:100%;height: 160px;padding: 7px 8px;background-color:#F3F4F6;font-size:16px;border-radius: 10px;"\n                    placeholder="\u8FDB\u5EA6\u8BF4\u660E\uFF0C\u5FC5\u586B" maxlength="300" required ng-model="select.content">\n                </textarea>\n            </div>\n\n            <div class="item item-text-wrap"\n                style="padding: 5px !important;border: 0px;margin-top: 14px;background-color:#FCFCFC;">\n                <button class="button" ng-repeat="btn in progressStatues" style="color:white;"\n                    ng-class="select.key==btn.key?\'repair_btn_select\':\'repair_btn_normal\'"\n                    ng-click="select.content=select.content+btn.value;select.key=btn.key">\n                    {{btn.value}}\n                </button>\n            </div>\n\n        </ion-content>\n    </form>\n\n\n\n</ion-view>');
$templateCache.put('equipmentRepair/repairRecordList.html','<ion-view hide-nav-bar="true" cache-view="true" class="global-view">\n    <ion-header-bar class="bar bar-header bar-follower" style="background-image: none;">\n        <back-btn></back-btn>\n        <h1 class="title bar-follower-font">\u62A5\u4FEE\u8BB0\u5F55</h1>\n        <!-- <button class="button button-icon icon icon-moreData" ng-click="showMoreData()" ></button> -->\n    </ion-header-bar>\n    <!-- <a class="button icon button-balanced ion-plus-round float-button" ng-click="openModal()" style="bottom: 50px;"></a> -->\n\n    <ion-content style="background-color: #F3F5F4;">\n        <ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0..." on-refresh="refreshData()">\n        </ion-refresher>\n        <div class="row row-wrap" style="background-color: white;height:57px; ">\n            <div class="col col-50" style="text-align: center;padding-top:4px;padding-bottom:0px;border-right: solid 1px #ddd;" \n                ng-click="selectTypeClick(1)">\n                <div style="font-size: 20px;" ng-style="{\'color\':selectType==1?\'#2bcab2\':\'black\'}">{{repairData.unclosedSize?repairData.unclosedSize:0}}</div>\n                <div style="font-size: 14px;margin-top: -3px;"  ng-style="{\'color\':selectType==1?\'#2bcab2\':\'#666\'}">\u5F85\u89E3\u51B3</div>\n            </div>\n            <div class="col col-50" style="text-align: center;padding-top:4px;"\n                ng-click="selectTypeClick(2)">\n                <div style="font-size: 20px;" ng-style="{\'color\':selectType==2?\'#2bcab2\':\'black\'}">{{repairData.closedSize?repairData.closedSize:0}}</div>\n                <div style="font-size:14px;margin-top: -3px;" ng-style="{\'color\':selectType==2?\'#2bcab2\':\'#666\'}">\u5DF2\u5173\u95ED</div>\n            </div>\n        </div>\n        <ion-list>\n\n            <div class="spacer" style="width: 100%; height: 10px;"></div>\n            <ion-item class="item" style="padding:10px 12px;border-radius: 5px;border: none;margin:10px;" ng-repeat="item in repairList"\n                ng-click="goToDetail(item.id,item.readStatus)">\n                <div style="position: relative;top:-10px;right: -12px;float: right;" ng-if="item.readStatus==0">\n                    <img src="img/repair/unread.png" style="width: 50px;height: 50px;" />\n                </div>\n                <h2 style="white-space: nowrap;overflow: hidden;text-overflow : ellipsis;margin-top: 5px;margin-bottom: 5px;" class="list-title-set"> {{item.terminalAddress}}&nbsp;</h2>\n                <div style="width:100%; background-color:  #ddd;height: 1px;margin-top: 8px;"></div>\n                <div style="font-size: small;color: #999;margin-top: 6px;">{{item.name}}\n                    <span style="color:#6c99e7;" ng-style="{\'margin-left\':item.name?\'5px\':\'0px\'}">{{item.orderTime.substr(5,11)}}</span>\n                </div>\n                <div style="margin-top: 5px;overflow: hidden;white-space: nowrap;overflow: hidden;text-overflow : ellipsis;" class="list-content-set">{{item.orderDescribe}}</div>\n                <div style="background-color: #ddd;width: 100%;height: 1px;margin-top: 8px;" ng-if="item.assetNumber"></div>\n                <div style="font-size:small;color:#666;margin-top:8px;" ng-if="item.assetNumber"> \n                    <img src="img/repair/assetsId.png" style="width:16px;height:14px;margin-top: 2px;float:left;"/>\n                    <div style="font-size:small;float:left;margin-left:5px;">{{item.assetNumber}}</div>\n                </div>\n            </ion-item>\n\n            <div class="empty-list-tip" ng-if="repairList.length==0">\n                <img src="img/repair/no_repair.png">\n                <p ng-if="selectType==1" style="margin-top:10px;">\u6682\u65E0\u5F85\u89E3\u51B3\u62A5\u4FEE\u8BB0\u5F55</p>\n                <p ng-if="selectType==2" style="margin-top:10px;">\u6682\u65E0\u5DF2\u5173\u95ED\u62A5\u4FEE\u8BB0\u5F55</p>\n            </div>\n        </ion-list>\n        <ion-infinite-scroll ng-if="isMoreData" on-infinite="loadMore()" immediate-check="false" distance="0.5%"></ion-infinite-scroll>\n        <div class="load_no_more" ng-if="!isMoreData&&repairList.length>9">\u6CA1\u6709\u66F4\u591A\u4E86</div>\n\n    </ion-content>\n\n\n</ion-view>');
$templateCache.put('equipmentRepair/schoolRepairList.html','<ion-view hide-nav-bar="true" cache-view="false" class="global-view">\n    <ion-header-bar class="bar bar-header bar-follower" style="background-image: none;">\n        <!-- <back-btn></back-btn> -->\n        <h1 class="title bar-follower-font">\u62A5\u4FEE\u8BB0\u5F55</h1>\n        <button class="button button-icon icon icon-moreData" id="set_btn" ng-click="showMoreData()"></button>\n    </ion-header-bar>\n    <div class="down-option-alert" ng-if="isShow" >\n        <span class="org_bot_cor_2"></span>\n        <div ng-click="fixPswOrLogout(1)"\n            style="width:100%;text-align:center;height:44px;line-height:44px;font-size:15px;border-bottom:1px solid #aaa;margin-top:1px;">\n            \u4FEE\u6539\u5BC6\u7801</div>\n        <div ng-click="fixPswOrLogout(2)"\n            style="width:100%;text-align:center;height:44px;line-height:44px;font-size:15px;">\u9000\u51FA\u767B\u5F55</div>\n    </div>\n  \n    <ion-content style="background:#f3f4f6;" ng-click="hideAlert()">\n        <ion-refresher pulling-text="\u4E0B\u62C9\u5237\u65B0..." on-refresh="refreshData()">\n        </ion-refresher>\n        <ion-list>\n            <div class="item" ng-repeat="item in schoolList" ng-click="goToRecordList(item)" style="border:none;border-radius:5px;margin:10px;display: flex;align-items: center;white-space: normal;">\n                <div style="width:calc(100% - 75px);">\n                    <h2 class="list-title-set">{{item.schoolName}}</h2>\n                    <div style="color:#666;font-size:15px;margin-top:7px;width:100%;">{{item.areaTips}}</div>\n                </div>\n                <div style="font-size:15px;color:#666;text-align: right;width:72px;">\n                    <div><span style="color:orange;margin-right:5px;font-size:19px;font-weight:500;">{{item.unclosedSize}}</span>\u672A\u5173\u95ED</div>\n                    <div><span style="color:#999;margin-right:5px;font-size:19px;font-weight:500;">{{item.closedSize}}</span>\u5DF2\u5173\u95ED</div>\n                </div>\n            </div>\n        </ion-list>\n        <div class="empty-list-tip" ng-if="schoolList&&schoolList.length==0">\n            <img src="img/repair/no_repair.png">\n            <p  style="margin-top:10px;">\u6682\u65E0\u6570\u636E</p>\n        </div>\n    </ion-content>\n</ion-view>');
$templateCache.put('open/login.html','<ion-view cache-view="false" hide-nav-bar="true" id="login-bg">\n\t<ion-content padding="false">\n\t\t<div class="spacer" style="height: 35px;"></div>\n\t\t<img src="img/icon/logo.png" class="login_logo">\n\n\t\t<form name="loginForm" class="list" ng-submit="login()" novalidate style="margin: 1.5em 10% 0 10%">\n\n\t\t\t<div id="loginInputs">\n\t\t\t\t<div class="item login-input-item" style="display: flex">\n\t\t\t\t\t<img src="img/icon/icon-user.png" style="width: 15px;min-width:15px;height: 20px;margin-top: -2px;">\n\t\t\t\t\t<h2 style="width:100%;text-align:center;margin-left:-7.5px;font-weight:400;">\u5382\u5BB6\u552E\u540E\u767B\u5F55</h2>\n\t\t\t\t\t<!-- <input type="radio" ng-model="loginModel.userType" ng-value="\'t\'"\n\t\t\t\t\t\t   style="padding-right: 0;flex: inherit;margin-left: 1em" required /> <span ng-click="loginModel.userType=\'t\'" style="margin-left: 5px;"> \u6559\u5E08</span>\n\t\t\t\t\t<input type="radio" ng-model="loginModel.userType" ng-value="\'f\'"\n\t\t\t\t\t\t   style="padding-right: 0;flex: inherit;margin-left: 0.5em" required ng-style="{\'margin-left\':isWeiXin?\'4em\':\'0.5em\'}"/> <span ng-click="loginModel.userType=\'f\'" style="margin-left: 5px;"> \u5BB6\u957F</span>\n\t\t\t\t\t<input type="radio" ng-model="loginModel.userType" ng-value="\'s\'"\n\t\t\t\t\t\t   style="padding-right: 0;flex: inherit;margin-left: 0.5em" required ng-if="!isWeiXin" /> <span ng-click="loginModel.userType=\'s\'" style="margin-left: 5px;" ng-if="!isWeiXin"> \u5B66\u751F</span> -->\n\t\t\t\t</div>\n\t\t\t\t<div class="spacer" style="height: 10px;"></div>\n\t\t\t\t<div class="item item-input login-input-item">\n\t\t\t\t\t<i class="icon input-icon-username placeholder-icon"></i>\n\t\t\t\t\t<input name="input_user" type="text" placeholder="\u8BF7\u8F93\u5165{{loginModel.userType==\'s\'?\'\':\'\'}}\u7528\u6237\u540D" class="login_input" autocomplete="off"\n\t\t\t\t\t\t   ng-model="loginModel.phone"\n\t\t\t\t\t\t   maxlength="18" required\n\t\t\t\t\t\t   ng-class="isIOS?\'input_ios_placeholder\':\'\'" id="focusItem" phone-check="loginModel.userType===\'s\'">\n\t\t\t\t\t<img ng-if="loginModel.phone.length>0" src="img/icon/close.png" ng-click="loginModel.phone=\'\'" style="width: 16px;height: 16px;margin-right: 10px;min-width: 16px;"/>\n\t\t\t\t</div>\n\t\t\t\t<button class="button login-input-item" style="width: 100%;" ng-if="loginModel.userType===\'s\'&&children.length>0" type="button" ng-click="showSelectBox()">{{selectLabel}}\n\t\t\t\t\t<img class="people-select-triangle-open" src="img/icon/triangle_down.png" style="float: right;margin-top: 18px;">\n\t\t\t\t</button>\n\t\t\t\t<div class="spacer" style="height: 10px;"></div>\n\t\t\t\t<div class="item item-input login-input-item">\n\t\t\t\t\t<i class="icon input-icon-password placeholder-icon"></i>\n\t\t\t\t\t<input name="input_pwd" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" class="login_input"\n\t\t\t\t\t\t   ng-model="loginModel.password"\n\t\t\t\t\t\t   maxlength="20" required ng-pattern="/^[a-zA-Z0-9]+$/"\n\t\t\t\t\t\t   ng-class="isIOS?\'input_ios_placeholder\':\'\'" password-toggle>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="spacer" style="height: 20px;"></div>\n\t\t\t<button id="login-button" class=" button button-block" type="submit">\u767B\u5F55</button>\n\t\t\t<!-- <a  ng-click="regist()" class="button button-positive button-clear" style="float: left;color: #333" ng-if="!isWeiXin">\u6CE8\u518C</a> -->\n\t\t\t<a ui-sref="resetPwd" class="button button-positive button-clear" style="float: right;color: #333">\u5FD8\u8BB0\u5BC6\u7801</a>\n\t\t</form>\n\t</ion-content>\n</ion-view>\n');
$templateCache.put('open/resetPassword.html','<ion-view hide-nav-bar="true" cache-view="false">\n\t<ion-header-bar class="bar bar-header bar-follower">\n\t\t<button class="button button-icon icon " ng-click="goBack()">\n\t\t\t<img src="img/icon/icon-arrow_left.png" style="max-width: 25px; max-height:25px;  padding-top: 7px;" alt=""/>\n\t\t</button>\n\t\t<h1 class="title bar-follower-font">\u627E\u56DE\u5BC6\u7801</h1>\n\t</ion-header-bar>\n\t<ion-content padding="false" class="has-header">\n\t\t<div style="text-align: center;width: 100%;height: 150px;padding-top: 15px;background-color: #2bcab2;">\n\t\t\t<img src="img/logo.png" class="login_logo">\n\t\t\t<div class="spacer" style="width: 300px; height: 30px;"></div>\n\t\t</div>\n\t\t<form style="padding: 15px 7px" ng-if="step===1" novalidate name="step1Form" ng-submit="getSmsCode()">\n\t\t\t<!-- <div class="item no-border-radius">\n\t\t\t\t<span class="input-label" style="display: inline;padding: 0">\u7528\u6237\u89D2\u8272</span>\n\t\t\t\t<input type="radio" ng-model="input.retype" ng-value="\'t\'"\n\t\t\t\t\t   style="padding-right: 0;flex: inherit;margin-left: 10%" required /> <span ng-click="input.retype=\'t\'"> \u6559\u5E08 </span>\n\t\t\t\t<input type="radio" ng-model="input.retype" ng-value="\'f\'"\n\t\t\t\t\t   style="padding-right: 0;flex: inherit;margin-left: 10px" required /> <span ng-click="input.retype=\'f\'"> \u5BB6\u957F </span>\n\t\t\t\t<input type="radio" ng-model="input.retype" ng-value="\'s\'"\n\t\t\t\t\t   style="padding-right: 0;flex: inherit;margin-left: 10px" required /> <span ng-click="input.retype=\'s\'"> \u5B66\u751F </span>\n\t\t\t</div> -->\n\n\t\t\t<label class="item item-input no-border-radius">\n\t\t\t\t<input type="tel" placeholder="\u624B\u673A\u53F7" required ng-model="input.phone" ng-minlength="11" maxlength="11">\n\t\t\t</label>\n\n\t\t\t<div class="item item-input no-border-radius" style="display: -webkit-box !important;">\n\t\t\t\t<input type="text" placeholder="\u8BF7\u586B\u5199\u624B\u673A\u9A8C\u8BC1\u7801" ng-model="input.smscode" maxlength="8">\n\t\t\t\t<button class="button button-stable" style="font-size: small" type="submit" ng-disabled="step1Form.$invalid || !canReqSMS">{{btnText}}\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div style="width: 100%;text-align: center;margin-top: 20px">\n\t\t\t\t<button class="button button-balanced" ng-click="switchStep(2)" style="width: 70%;" type="button" ng-disabled="input.smscode.length < 4">\u4E0B\u4E00\u6B65</button>\n\t\t\t</div>\n\t\t</form>\n\n\t\t<form style="padding: 15px 7px" ng-if="step===2" novalidate name="step2Form" ng-submit="doReset()">\n\n\t\t\t<div ng-if="students && students.length > 0">\n\t\t\t\t<div class="item item-divider" style="border-radius: 0;">\n\t\t\t\t\t\u8BF7\u9009\u62E9\u8981\u627E\u56DE\u5BC6\u7801\u7684\u5B66\u751F\u8D26\u53F7\uFF1A\n\t\t\t\t</div>\n\t\t\t\t<ion-radio style="border-radius: 0;" ng-model="input.stusername" ng-value="item.stusername" required ng-repeat="item in students">{{item.name}}</ion-radio>\n\t\t\t\t<div class="spacer" style="height: 30px;"></div>\n\t\t\t</div>\n\n\t\t\t<div class="item item-input no-border-radius">\n\t\t\t\t<input name="input_pwd" type="password" class="input" style="width: 100%" maxlength="20" placeholder="\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801" ng-pattern="/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/"\n\t\t\t\t\t   required ng-model="input.newpassword" password-toggle>\n\t\t\t</div>\n\t\t\t<div class="item item-input no-border-radius">\n\t\t\t\t<input name="input_pwd_confirm" type="password" class="input" style="width: 100%" maxlength="20" placeholder="\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801" ng-pattern="/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/"\n\t\t\t\t\t   required ng-model="input.pwd" password-toggle>\n\t\t\t</div>\n\t\t\t<p style="width: 100%;text-align: center;margin-top: 15px;font-size: 0.8em">\u5BC6\u7801\u8981\u6C42\u4E3A6-20\u4F4D\u6570\u5B57\u4E0E\u5B57\u6BCD\u7EC4\u5408</p>\n\t\t\t<div style="width: 100%;text-align: center;margin-top: 20px">\n\t\t\t\t<button class="button button-balanced" style="width: 70%;" type="submit" ng-disabled="step2Form.$invalid">\u786E\u5B9A</button>\n\t\t\t</div>\n\t\t</form>\n\t</ion-content>\n</ion-view>\n');
$templateCache.put('tabs/tabsController.html','<ion-view hide-nav-bar="true" >\n\t<!-- <ion-tabs class="tabs-stable tabs-icon-top tabs-color-active-positive" ng-if="!isPhone">\n\t\t<ion-tab title="\u9996\u9875" icon-off="notice-off" icon-on="notice-on" ui-sref="tabsController.mainPage">\n\t\t\t<ion-nav-view name="mainTab"></ion-nav-view>\n\t\t</ion-tab>\n\t\t<ion-tab title="\u6821\u56ED" icon-off="school-off" icon-on="school-on" ui-sref="tabsController.schoolPage" badge="campus" badge-style="badge-assertive">\n\t\t\t<ion-nav-view name="schoolTab"></ion-nav-view>\n\t\t</ion-tab>\n\t\t<ion-tab title="\u5BB6\u6821" icon-off="communicate-off" icon-on="communicate-on" ui-sref="tabsController.communicatePage" badge="badge" badge-style="badge-assertive" >\n\t\t\t<ion-nav-view name="communicateTab"></ion-nav-view>\n\t\t</ion-tab>\n\t\t<ion-tab title="\u8BBE\u7F6E" icon-off="setting-off" icon-on="setting-on" ui-sref="tabsController.settingPage">\n\t\t\t<ion-nav-view name="settingTab"></ion-nav-view>\n\t\t</ion-tab>\n\t</ion-tabs> -->\n\n\t<!-- <ion-tabs class="tabs-stable tabs-icon-top"  >\n\t\t<ion-tab  title="\u62A5\u4FEE\u8BB0\u5F55" icon-off="notice-off" icon-on="notice-on" ui-sref="tabsController.mainPage">\n\t\t\t<ion-nav-view name="mainTab"></ion-nav-view>\n\t\t</ion-tab>\n\t</ion-tabs> -->\n</ion-view>\n');
$templateCache.put('setting/editProfile.html','<ion-view cache-view="!isWeiXin">\n\t<ion-header-bar class="bar bar-header bar-follower">\n\t\t<!-- <button class="button button-icon icon " ng-click="goBack()">\n\t\t\t<img src="img/icon/icon-arrow_left.png" style="max-width: 25px; max-height:25px;  padding-top: 7px;" alt=""/>\n\t\t</button> -->\n\t\t<back-btn></back-btn>\n\t\t<h1 class="title bar-follower-font">{{pageTitle}}</h1>\n\t\t<button class="button button-icon " ng-click="save()" ng-if="visibleArea === \'name\'||visibleArea === \'instruction\'"\n\t\t\t\tng-disabled="infoForm.$invalid">\n\t\t\t<img src="img/icon/icon-submit.png" style="max-width: 25px; max-height:25px;  padding-top: 7px;" alt=""/>\n\t\t</button>\n\t</ion-header-bar>\n\t<form name="infoForm" novalidate>\n\t\t<ion-content class="has-header">\n\n\t\t\t<div ng-if="visibleArea === \'name\'" style="padding: 5px;">\n\t\t\t\t<input name="input_name" class="input" style="width: 100%;height: 40px; border-color: #d5d5d5;" maxlength="10" required\n\t\t\t\t\t   ng-model="user.name" ng-pattern="/^[\\u4E00-\\u9FA5A-Za-z]+$/"/><a class="clear" style="margin-top: 12px;" ng-click="user.name=\'\';"></a>\n\t\t\t</div>\n\n\t\t\t<div class="list" ng-if="visibleArea === \'password\'">\n\t\t\t\t<div class="item item-input" style="border-radius:0;">\n\t\t\t\t\t<input name="input_old_pwd" type="password" class="input" style="width: 100%" maxlength="20"\n\t\t\t\t\t\t   placeholder="\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801" ng-pattern="/^[a-zA-Z0-9]+$/"\n\t\t\t\t\t\t   required ng-model="pwd._old" password-toggle>\n\t\t\t\t</div>\n\t\t\t\t<div class="item item-input" style="border-radius: 0;">\n\t\t\t\t\t<input name="input_pwd" type="password" class="input" style="width: 100%" maxlength="20"\n\t\t\t\t\t\t   placeholder="\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801" ng-pattern="/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/"\n\t\t\t\t\t\t   required ng-model="pwd._new" password-toggle>\n\t\t\t\t</div>\n\t\t\t\t<div class="item item-input"\n\t\t\t\t\t   style="border-radius:0;">\n\t\t\t\t\t<input name="input_pwd_confirm" type="password" class="input" style="width: 100%" maxlength="20"\n\t\t\t\t\t\t   placeholder="\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801" ng-pattern="/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/"\n\t\t\t\t\t\t   required ng-model="pwd._confirm" password-toggle>\n\t\t\t\t</div>\n\n\t\t\t\t<p style="width: 100%;text-align: center;margin-top: 15px;font-size: 0.8em">\u5BC6\u7801\u8981\u6C42\u4E3A6-20\u4F4D\u6570\u5B57\u4E0E\u5B57\u6BCD\u7EC4\u5408</p>\n\n\t\t\t\t<div style="width: 100%;text-align: center;margin-top: 20px">\n\t\t\t\t\t<button class="button button-balanced" style="width: 70%;" ng-click="save()"\n\t\t\t\t\t\t\tng-disabled="infoForm.$invalid">\u786E\u5B9A\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\n\t\t\t<div class="item item-input" style="margin:20px 15px 0px 15px;border-radius: 5px;" ng-if="visibleArea === \'instruction\'">\n\t\t\t\t<textarea name="chatInput" style="height: 180px;padding-top: 6px;padding-bottom: 6px;margin-right: 7px;margin-left:-5px;"\n\t\t\t\t placeholder="\u9650300\u5B57\u4EE5\u5185~"  maxlength="300" required ng-model="user.instruction"></textarea>\n\t\t\t</div>\n\t\t\t\n\n\t\t\t<ion-list class="list" ng-if="visibleArea === \'children\'">\n\t\t\t\t<p style="padding: 15px;" ng-if="user.student.length>1">\u8BF7\u70B9\u51FB\u4E0B\u65B9"<span style="color: #0c60ee;border: 0">\u9009\u5B9A</span>"\u4EE5\u8BBE\u7F6E\u8981\u67E5\u770B\u7684\u5B69\u5B50\u4FE1\u606F</p>\n\t\t\t\t<ion-item class="item item-thumbnail-left item-avatar box-border" collection-repeat="child in user.student" style="position: relative">\n\t\t\t\t\t<img src="img/icon/default_student.png" ng-src="{{child.logo}}" ion-img-cache>\n\t\t\t\t\t<h2>{{child.student_name}}</h2>\n\t\t\t\t\t<p style="padding-right: 80px;">{{child.school.schoolName}}</p>\n\t\t\t\t\t<p>{{child.classno.className}}</p>\n\n\t\t\t\t\t<button class="button" ng-if="user.student.length>1" ng-click="setDefaultChild(child)" ng-class="defaultChildID!=child.id?\'btn-type-positive\':\'btn-text_style-positive\'" style="position: absolute;right: 0;top: 3px;">\n\t\t\t\t\t\t{{defaultChildID!=child.id?\'\u9009\u5B9A\':\'\u5DF2\u9009\u5B9A\'}}\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class="button btn-type" ng-if="user.student.length>1" ng-click="selectImage(child)" style="position: absolute;right: 0;bottom: 3px;min-height: 25px;padding: 0 10px;">\n\t\t\t\t\t\t\u66F4\u6539\u5934\u50CF\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class="button btn-type" ng-if="user.student.length==1" ng-click="selectImage(child)" style="position: absolute;right: 0;bottom: 20px;min-height: 35px;padding: 0 10px;">\n\t\t\t\t\t\t\u66F4\u6539\u5934\u50CF\n\t\t\t\t\t</button>\n\t\t\t\t\t\n\t\t\t\t</ion-item>\n                <input type="file" accept="image/*"   id="childCapture" name="file" class="mFileInput"   style="display:none;"  onchange="angular.element(this).scope().getFile(this.files)" /> \n\t\t\t</ion-list>\n\n\t\t</ion-content>\n\t</form>\n\n</ion-view>\n');}]);