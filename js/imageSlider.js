"use strict";

// --スライド--
//1. 定義
// スライド画像の配列
const sliderImages = document.querySelectorAll(".p-slider__image");
// インジケーターボタンの配列
const sliderIndicators = document.querySelectorAll(".p-slider__indicator")
// 前へ次へボタン
const sliderPrev = document.querySelector(".p-slider__btn--prev");
const sliderNext = document.querySelector(".p-slider__btn--next");
// 現在地
let sliderCurrent = 0;

// 2.振る舞いの定義
// .remove sliderCurrent .add 関数
function showSlider(targetIndex) {
    // remove.is-active
    sliderImages[sliderCurrent].classList.remove('is-active');
    sliderIndicators[sliderCurrent].classList.remove('is-active');

    // sliderCurrent
    sliderCurrent = targetIndex; 

    // add.is-active
    sliderImages[sliderCurrent].classList.add('is-active');
    sliderIndicators[sliderCurrent].classList.add('is-active');

    // 画像の時間切替
    startTimer()
};

// ボタンの挙動
// prev
sliderPrev.addEventListener('click', function() {
    changeSlider(-1)
});
// next
sliderNext.addEventListener('click', function() {
    changeSlider(+1)
});
//（現在地＋１）％画像総数 これでループが出来る。

// 3.画像、インジケーターの切り替えの動作
// ボタンでの切替
function changeSlider(num) {
    // ループ条件
    let nextIndex = sliderCurrent + num;
    if(nextIndex > 3) {
        nextIndex = 0;
    } else if(nextIndex < 0) {
        nextIndex = 3;
    }
    showSlider(nextIndex);
};

// インジケーターでの切替
sliderIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlider(index);
    });
});

// 時間での切替
let timerId; // タイマーの受け取り
function startTimer(){
    clearInterval(timerId);
    timerId = setInterval(() => {
        changeSlider(1);
    }, 5000);
};// タイマーのリセット
startTimer(); // ページ読み込み時にスタートさせる 