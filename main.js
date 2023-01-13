{
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/

  // 変数宣言
  // ハンバーガーメニューの要素
  const hamburgerMenu = document.querySelector(".wrapper");

  // ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
  const navi = document.getElementById("navi");

  // ハンバーガーメニュー内の各セクションの要素
  const humbergerMenuSections = document.querySelectorAll(".nav-menu-section");

  // ハンバーガーメニューをクリックした時の処理
  hamburgerMenu.addEventListener("click", function () {
    // toggleを使用することで、wrapperクラスに
    // openクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行ってくれる
    hamburgerMenu.classList.toggle("open");
    navi.classList.toggle('open');
  });

  // ハンバーガーメニュー内の各セクションをクリックした際、開いていたハンバーガーメニューを閉じる
  humbergerMenuSections.forEach((humbergerMenuSection) => {
    humbergerMenuSection.addEventListener("click", function () {
      hamburgerMenu.classList.remove("open");
      navi.classList.remove("open");
    });
  });
}