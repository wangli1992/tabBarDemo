(function(){
  'use strict';

  angular
    .module('ion-gallery')
    .directive('ionSlider',ionSlider);

  ionSlider.$inject = ['$ionicModal','ionGalleryHelper','$ionicPlatform','$timeout','$ionicScrollDelegate','$ionicActionSheet'];

  function ionSlider($ionicModal,ionGalleryHelper,$ionicPlatform,$timeout,$ionicScrollDelegate,$ionicActionSheet){

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
