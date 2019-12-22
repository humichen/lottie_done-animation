$(document).ready(function () {

    let openingAnimWindow = document.querySelector('#openingLottie');
    let openingAnimData={
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        //path: 'json/download-icon.json'  //老師給的範例檔
       path: 'json/check.json'   //我自己設計的json檔
  };
  let openingAnim = bodymovin.loadAnimation(openingAnimData);
});