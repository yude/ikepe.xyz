// https://qiita.com/amamamaou/items/a29b29f5267196a5e4ea

document.addEventListener('DOMContentLoaded', function () {
    // @media screen and (max-width: 780px) と同じ
    var mql = window.matchMedia('screen and (max-width: 780px)');
  
    function checkBreakPoint(mql) {
      if (mql.matches) {
        // スマホ向け
        alert("スマホを使ってますね")
      } else {
        // PC向け
        alert("PCを使ってますね")
      }
    }
  
    // ブレイクポイントの瞬間に発火
    mql.addListener(checkBreakPoint);
  
    // 初回チェック
    checkBreakPoint(mql);

    //前のページに戻る
    history.back();
  });