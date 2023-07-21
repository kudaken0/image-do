//UA判定
    // リンク要素を取得
    var redirectLink = document.getElementById('redirectLink');

    // リンククリック時のイベントハンドラ
    redirectLink.addEventListener('click', function(event) {
      event.preventDefault(); // リンクのデフォルトのクリック動作を無効化

      // ユーザーエージェントを取得
      var userAgent = navigator.userAgent.toLowerCase();

      // iPhoneの場合のリダイレクト
      if (userAgent.indexOf("iphone") !== -1) {
        window.location.href = "https://kudaken.com/image-do/houhou/ua-iphone.html"; // ここにiPhone専用ページのURLを入力してください
      }
      // Androidの場合のリダイレクト
      else if (userAgent.indexOf("android") !== -1) {
        window.location.href = "https://kudaken.com/image-do/houhou/ua-Android.html"; // ここにAndroid専用ページのURLを入力してください
      }
      // その他のデバイスの場合は失敗時のリダイレクト先に移動
      else {
        window.location.href = "https://kudaken.com/image-do/houhou/index.html";
      }
    });