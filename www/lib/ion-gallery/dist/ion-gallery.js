(function () {
  'use strict';

  angular
    .module('ion-gallery', ['templates'])
    .directive('ionGallery', ionGallery);

  ionGallery.$inject = ['$ionicPlatform', 'ionGalleryHelper', 'ionGalleryConfig'];

  function ionGallery($ionicPlatform, ionGalleryHelper, ionGalleryConfig) {
    controller.$inject = ["$scope"];
    return {
      restrict: 'AE',
      scope: {
        ionGalleryItems: '=ionGalleryItems',
        ionGalleryRowSize: '=?ionGalleryRow',
        ionItemCallback: '&?ionItemCallback'
      },
      controller: controller,
      link: link,
      replace: true,
      templateUrl: 'lib/ion-gallery/src/templates/gallery.html'
    };

    function controller($scope) {
      var _rowSize = parseInt($scope.ionGalleryRowSize);

      var _drawGallery = function () {
        $scope.ionGalleryRowSize = ionGalleryHelper.getRowSize(_rowSize || ionGalleryConfig.row_size, $scope.ionGalleryItems.length);
        $scope.actionLabel = ionGalleryConfig.action_label;
        $scope.items= ionGalleryHelper.buildGallery($scope.ionGalleryItems, $scope.ionGalleryRowSize);
        $scope.responsiveGrid = parseInt((1 / $scope.ionGalleryRowSize) * 100);
      };

      _drawGallery();

      (function () {
        $scope.$watch(function () {
          return $scope.ionGalleryItems.length;
        }, function (newVal, oldVal) {
          if (newVal !== oldVal) {
            _drawGallery();
          }
        });
      }());

    }

    function link(scope, element, attrs) {

      scope.customCallback = angular.isFunction(scope.ionItemCallback) && attrs.hasOwnProperty('ionItemCallback');

      scope.ionSliderToggle = attrs.ionGalleryToggle === 'false' ? false : ionGalleryConfig.toggle;
    }
  }
})();

(function(){
  'use strict';

  angular
    .module('ion-gallery')
    .provider('ionGalleryConfig',ionGalleryConfig);

  ionGalleryConfig.$inject = [];

  function ionGalleryConfig(){
    this.config = {
      action_label: 'Done',
      toggle: true,
      row_size: 3,
      fixed_row_size: true
    };

    this.$get = function() {
        return this.config;
    };

    this.setGalleryConfig = function(config) {
        angular.extend(this.config, this.config, config);
    };
  }

})();
(function(){
  'use strict';

  angular
    .module('ion-gallery')
    .service('ionGalleryHelper',ionGalleryHelper);

  ionGalleryHelper.$inject = ['ionGalleryConfig'];

  function ionGalleryHelper(ionGalleryConfig) {
 
   this.getRowSize = function(size,length){
      var rowSize;

      if(isNaN(size) === true || size <= 0){
        rowSize = ionGalleryConfig.row_size;
      }
      else if(size > length && !ionGalleryConfig.fixed_row_size){
        rowSize = length;
      }
      else{
        rowSize = size;
      }

      return rowSize;

    };

    this.buildGallery = function(items,rowSize){
      var _gallery = [];
      var row = -1;
      var col = 0;

      for(var i=0;i<items.length;i++){

        if(i % rowSize === 0){
          row++;
          _gallery[row] = [];
          col = 0;
        }

        if(!items[i].hasOwnProperty('sub')){
          items[i].sub = '';
        }

        if(!items[i].hasOwnProperty('thumb')){
          items[i].thumb = items[i].src;
        }

        items[i].position = i;

        _gallery[row][col] = items[i];
        col++;
      }

      return _gallery;
    };
  }
})();

(function(){
  'use strict';

  angular
    .module('ion-gallery')
    .directive('ionImageScale',ionImageScale);

  ionImageScale.$inject = [];

  function ionImageScale(){
    
    return {
      restrict: 'A',
      link : link
    };

    function link(scope, element, attrs) {
      
      var scaleImage = function(context,value) {
        if(value>0){
          if(context.naturalHeight >= context.naturalWidth){
            element.attr('width','100%');
          }
          else{
            element.attr('height',element.parent()[0].offsetHeight+'px');
          }
        } 
      };
      
      element.bind("load" , function(e){
        var _this = this;
        if(element.parent()[0].offsetHeight > 0){
          scaleImage(this,element.parent()[0].offsetHeight);
        }
        
        scope.$watch(function(){
          return element.parent()[0].offsetHeight;
        },function(newValue){
          scaleImage(_this,newValue);
        });
      });
    }
  }
})();
(function(){
  'use strict';

  angular
    .module('ion-gallery')
    .directive('ionRowHeight',ionRowHeight);

  ionRowHeight.$inject = ['ionGalleryConfig'];

  function ionRowHeight(ionGalleryConfig){
    
    return {
      restrict: 'A',
      link : link
    };

    function link(scope, element, attrs) {
      scope.$watch( 
        function(){
          return scope.ionGalleryRowSize;
        },
        function(newValue,oldValue){
          if(newValue > 0){
            element.css('height',element[0].offsetWidth * parseInt(scope.responsiveGrid)/100 + 'px');
          }
        });
    }
  }
})();
(function(){
  'use strict';

  angular
    .module('ion-gallery')
    .directive('ionSlideAction',ionSlideAction);

  ionSlideAction.$inject = ['$ionicGesture','$timeout'];

  function ionSlideAction($ionicGesture, $timeout){
    
    return {
      restrict: 'A',
      link : link
    };

    function link(scope, element, attrs) {
      
      var isDoubleTapAction = false;
      
      var pinchZoom = function pinchZoom(){
          scope.$emit('ZoomStarted');
      };
      
      var imageDoubleTapGesture = function imageDoubleTapGesture(event) {
        
        isDoubleTapAction = true;
        
        $timeout(function(){
          isDoubleTapAction = false;
          scope.$emit('DoubleTapEvent',{ 'x': event.gesture.touches[0].pageX, 'y': event.gesture.touches[0].pageY});
        },200);
      };

      var imageTapGesture = function imageTapGesture(event) {
        
        if(isDoubleTapAction === true){
          return;
        }
        else{
          $timeout(function(){
            if(isDoubleTapAction === true){
              return;
            }
            else{
             
              scope.closeModal();
              console.log('is once tap');
              scope.$emit('TapEvent');
            }
          },200);
        }
      };

      var imageHoldGesture = function(){
        console.log('hold image');
      };
      
      var pinchEvent = $ionicGesture.on('pinch',pinchZoom,element);
      var doubleTapEvent = $ionicGesture.on('doubletap', function(e){imageDoubleTapGesture(e);}, element);
      var tapEvent = $ionicGesture.on('tap', imageTapGesture, element);
      var holdEvent =   $ionicGesture.on('hold', imageHoldGesture, element);
      
      scope.$on('$destroy', function() {
        $ionicGesture.off(doubleTapEvent, 'doubletap', imageDoubleTapGesture);
        $ionicGesture.off(tapEvent, 'tap', imageTapGesture);
        $ionicGesture.off(pinchEvent, 'pinch', pinchZoom);
        $ionicGesture.off(holdEvent, 'hold', imageHoldGesture);
      });
    }
  }
})();
(function(){
  'use strict';

  angular
    .module('ion-gallery')
    .directive('ionSlider',ionSlider);

  ionSlider.$inject = ['$ionicModal','ionGalleryHelper','$ionicPlatform','$timeout','$ionicScrollDelegate','$ionicActionSheet'];

  function ionSlider($ionicModal,ionGalleryHelper,$ionicPlatform,$timeout,$ionicScrollDelegate,$ionicActionSheet){

    controller.$inject = ["$scope", "$rootScope"];
    return {
      restrict: 'A',
      controller: controller,
      link : link
    };

    function controller($scope,$rootScope){
      var lastSlideIndex;
      var currentImage;

      var rowSize = $scope.ionGalleryRowSize;
      var zoomStart = false;

      $scope.selectedSlide = 1;//框架默认是1
      //$scope.selectedSlide = 0;
      $scope.hideAll = false;
      $scope.downloadShow = false;
      $scope.isWeiXin = isWeixin();
      

      $scope.showImage = function(index,$event) {
        $event.stopPropagation();
       
        $timeout(function() {
          $scope.downloadShow = true;
        }, 3000);

        /** 修改后 不支持循环浏览 */
        $scope.selectedSlide = index;
        $scope.recordIndex = index;
        $scope.recordSlideIndex = index;

        $scope.slides = [];
        $scope.slides = $scope.ionGalleryItems;
        $scope.loadModal();


        //*******框架支持循环浏览部分 */
        // console.log('click index :'+$scope.recordIndex);
        // $scope.slides = [];
        // currentImage = index;

        // var galleryLength = $scope.ionGalleryItems.length;
        // var previndex = index - 1 < 0 ? galleryLength - 1 : index - 1;
        // var nextindex = index + 1 >= galleryLength ? 0 : index + 1;

        // $scope.slides[0] = $scope.ionGalleryItems[previndex];
        // $scope.slides[1] = $scope.ionGalleryItems[index];
        // $scope.slides[2] = $scope.ionGalleryItems[nextindex];

         //lastSlideIndex = 1;
        //$scope.loadModal();
      };

       //保存图片
      $scope.saveImg = function (imgUrl) {
       if(isWeixin()){
         return;
       } 
       
        var hideSheet = $ionicActionSheet.show({
          buttons: [
            { text: '<b>保存图片</b> ' }
          ],
       //  destructiveText: 'Delete',
          cancelText: '取消',
          cancel: function() {
               // add cancel code..
             },
          buttonClicked: function(index) {
             console.log('index:'+index);
             $rootScope.$broadcast('saveImgUrl',imgUrl);
             return true;
          }
        });
     
      };

      function isWeixin() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger";
    }
 
      //下载图片
      $scope.downloadImg = function($event){
        $event.stopPropagation();
       var imgUrl =   $scope.slides[$scope.recordIndex].src ;
        $rootScope.$broadcast('saveImgUrl',imgUrl);
      };

     

      $scope.slideChanged = function(currentSlideIndex) {
       
       
         // ****** 框架默认代码
        if(currentSlideIndex === lastSlideIndex){
          return;
        }
        var slideToLoad = $scope.slides.length - lastSlideIndex - currentSlideIndex;
        var galleryLength = $scope.ionGalleryItems.length;
        var imageToLoad;
        var slidePosition = lastSlideIndex + '>' + currentSlideIndex;

        if(slidePosition === '0>1' || slidePosition === '1>2' || slidePosition === '2>0'){
          currentImage++;

          if(currentImage >= galleryLength){
           currentImage = 0;
          }

          imageToLoad = currentImage + 1;

          if( imageToLoad >= galleryLength){
            imageToLoad = 0;
         
          }
        }
        else if(slidePosition === '0>2' || slidePosition === '1>0' || slidePosition === '2>1'){
          currentImage--;

          if(currentImage < 0){
            currentImage = galleryLength - 1 ;
          }

          imageToLoad = currentImage - 1;

          if(imageToLoad < 0){
            imageToLoad = galleryLength - 1;
          }
        }

        //Clear zoom
        $ionicScrollDelegate.$getByHandle('slide-' + slideToLoad).zoomTo(1);

        //$scope.slides[slideToLoad] = $scope.ionGalleryItems[imageToLoad];
      
        lastSlideIndex = currentSlideIndex;
      };

      $scope.onSwipeRight = function(currentIndex){
       
        if($scope.recordIndex<=0){
         
          $scope.closeModal();
         return;
        }
        $scope.recordIndex --;
      };
      $scope.onSwipeLeft = function(currentIndex){
   
        if($scope.recordIndex>=$scope.ionGalleryItems.length-1){
         
           $scope.closeModal();
          return;
        }
        $scope.recordIndex ++;
        
        
      };

      $scope.$on('ZoomStarted', function(e){
        $timeout(function () {
          zoomStart = true;
          $scope.hideAll = true;
        });

      });

      $scope.$on('TapEvent', function(e){
        $timeout(function () {
          _onTap();
        });

      });

      $scope.$on('DoubleTapEvent', function(event,position){
        $timeout(function () {
          _onDoubleTap(position);
        });

      });

      var _onTap = function _onTap(){

        if(zoomStart === true){
          $ionicScrollDelegate.$getByHandle('slide-'+lastSlideIndex).zoomTo(1,true);

          $timeout(function () {
            _isOriginalSize();
          },300);

          return;
        }

        if(($scope.hasOwnProperty('ionSliderToggle') && $scope.ionSliderToggle === false && $scope.hideAll === false) || zoomStart === true){
          return;
        }

        $scope.hideAll = !$scope.hideAll;
      };

      var _onDoubleTap = function _onDoubleTap(position){
        if(zoomStart === false){
          $ionicScrollDelegate.$getByHandle('slide-'+lastSlideIndex).zoomTo(3,true,position.x,position.y);
          zoomStart = true;
          $scope.hideAll = true;
        }
        else{
          _onTap();
        }
      };

      function _isOriginalSize(){
        zoomStart = false;
        _onTap();
      }

    }

    
    function link(scope, element, attrs) {
      var _modal;

      scope.loadModal = function(){
        $ionicModal.fromTemplateUrl('lib/ion-gallery/src/templates/slider.html', {
          scope: scope,
          animation: 'fade-in'
        }).then(function(modal) {
          _modal = modal;
          scope.openModal();
        });
      };

      scope.openModal = function() {
        _modal.show();
      };

      scope.closeModal = function() {
        _modal.hide();
      };

     
      scope.$on('$destroy', function() {
        try{
          _modal.remove();
        } catch(err) {
          console.log(err.message);
        }
      });
    }
  }
})();

angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("gallery.html","<div class=\"gallery-view\">\n  <div class=\"row\" ng-repeat=\"item in items track by $index\" ion-row-height>\n    <div ng-repeat=\"photo in item track by $index\"\n         class=\"col col-{{responsiveGrid}} image-container\">\n\n      <img ion-image-scale\n           ng-src=\"{{photo.thumb}}\"\n           ng-click=\"customCallback ? ionItemCallback({item:photo}) : showImage(photo.position,$event)\" on-touch=\"onTouch()\" >\n    </div>\n  </div>\n  <div ion-slider></div>\n</div>\n");
$templateCache.put("slider.html","<ion-modal-view class=\"imageView\">\n  <!-- <ion-header-bar class=\"headerView\" ng-show=\"!hideAll\">\n    <button class=\"button button-outline button-light close-btn\" ng-click=\"closeModal()\">{{::actionLabel}}</button>\n  </ion-header-bar> -->\n\n  <ion-content class=\"has-no-header\" scroll=\"false\">\n    <ion-slide-box active-slide=\"selectedSlide\" show-pager=\"false\" class=\"listContainer\" on-slide-changed=\"slideChanged($index)\" >\n      <ion-slide ng-repeat=\"single in slides track by $index\">\n        <ion-scroll direction=\"xy\" locking=\"false\" zooming=\"true\" min-zoom=\"1\" scrollbar-x=\"false\" scrollbar-y=\"false\" ion-slide-action\n          delegate-handle=\"slide-{{$index}}\" overflow-scroll=\"false\" on-swipe-right=\"onSwipeRight($index)\" on-swipe-left=\"onSwipeLeft($index)\">\n          <div class=\"item item-image gallery-slide-view\" style=\"border-width: 0px !important;\">\n            <img ng-src=\"{{single.src}}\" on-hold=\"saveImg(single.src)\">\n          </div>\n          <!-- <button class=\"button button-outline button-light save-btn\" ng-click=\"saveImg(single.src)\">Save</button> -->\n          <div ng-if=\"single.sub.length > 0\" class=\"image-subtitle\" ng-show=\"!hideAll\">\n            <span ng-bind-html=\'single.sub\'></span>\n          </div>\n          <!-- <button class=\"button  button-icon icon save-btn\" ng-click=\"downloadImg(single.src,$event);$event.stopPropagation();\" ng-if=\"!downloadShow\">\n            <img src=\"img/download.png\" style=\"width:24px;height: 24px;\" />\n          </button> -->\n        </ion-scroll>\n      </ion-slide>\n    </ion-slide-box>\n  </ion-content>\n\n  <ion-footer-bar class=\"headerView\">\n    <button class=\"button  button-icon icon save-btn\" ng-click=\"downloadImg($event);\" ng-if=\"!downloadShow&&!isWeiXin\">\n      <img src=\"img/download.png\" style=\"width:24px;height: 24px;\" />\n    </button>\n  </ion-footer-bar>\n</ion-modal-view>");}]);