$(document).ready(function () {

    let openingAnimWindow = document.querySelector('#openingLottie');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: false,
        path: 'json/loading.json'   //我自己設計的json檔
    };
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

    let openingAnimWindow2 = document.querySelector('#openingLottie2');
    let openingAnimData2 = {
        container: openingAnimWindow2,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: 'json/check.json'   //我自己設計的json檔
    };
    let openingAnim2 = bodymovin.loadAnimation(openingAnimData2);

    $('#lottie-start').click(function () {
        $('.loading').css('visibility', 'visible');
        openingAnim.play();
        let x = Math.floor(Math.random() * 5) + 1;
        setTimeout(function () { $('.check').css('visibility', 'visible'); openingAnim2.play(); $('.loading').css('visibility', 'hidden'); openingAnim.stop(); }, 2200 * x);
    });
    $('#lottie-reset').click(function () {
        $('.check').css('visibility', 'hidden');
        openingAnim2.stop();
    });
});