"use strict";

// -----header----- 
// ナビゲーションのレスポンシブ対応、ハンバーガーメニュー
// 1. 定数の宣言
const hamburger = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.p-global-nav');
// 2. 動作
hamburger.addEventListener('click', function(){
    document.body.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
});

// リンククリック時の動作
// 1.定数 a要素の取得
const navLinks = document.querySelectorAll('.p-global-nav a');
// 2.動作
navLinks.forEach(function(link){
    link.addEventListener('click', function() {
        document.body.classList.remove('is-active');
        hamburger.classList.remove('is-active');
        nav.classList.remove('is-active');
    });
});

// -----footer-----
// メールアドレスのコピーボタン
// 1.定数の宣言
const copyMail = document.querySelector('#copyMail');
const emailAddress = 'atsuchi.ryuusei@gmail.com';

// 2.振る舞いの定義
if (copyMail) { // ボタンが存在するかチェックする
    copyMail.addEventListener('click', () => {
        navigator.clipboard.writeText(emailAddress).then(() => {
            // クラスの付け外し
            copyMail.classList.add('is-copied');
            setTimeout(() => {
                copyMail.classList.remove('is-copied');
            }, 2000); // 2秒後にクラスを削除
        })
    });
}

// -----main-----
// page-top ボタン
// 1.定義
const pageTop = document.querySelector(".c-btn-top");
const header = document.querySelector("#header");
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        pageTop.classList.remove("is-visible");
    } else {
        pageTop.classList.add("is-visible");
    }
});

// 3.監視対象
observer.observe(header);

