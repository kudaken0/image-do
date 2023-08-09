function slideAnime(){
	//====上に動くアニメーションここから===
		$('.upAnime').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            // 上から下へ表示するクラスを付与
            // テキスト要素を挟む親要素（上）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeUpDown");
            // 要素を上枠外に移動しCSS アニメーションで上から元の位置に移動
            $(this).children(".upAnimeInner").addClass("slideAnimeDownUp");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
            // 上から下へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeUpDown");
            $(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
            }
            });
	}
	
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// rollAnimeにrollというクラス名を付ける定義
function RollAnimeControl() {
    $('.rollAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var childs = $(this).children();  //rollAnimeの子要素を取得
      if (scroll >= elemPos - windowHeight) {
        $(childs).each(function (i) {   //子要素を1つ1つ処理をおこなう
          if (i < 10) {         //10未満の場合
          $(this).css("transition-delay","."+i+"s");  //子要素にcsstransition-delayを追加
          }else {             //10以上の場合
            var n = i / 10;       //ミリ秒指定なので10で割る
            $(this).css("transition-delay",n+"s");  //子要素にcsstransition-delayを追加
          }
        });
        
        $(this).addClass("roll"); //rollというアニメーションクラスを付与
  
      } else {
        $(childs).each(function () {    //子要素を1つ1つ処理をおこなう
          $(this).css("transition-delay","0s");//子要素にcsstransition-delayの秒を0とする
        });
        $(this).removeClass("roll");//rollというアニメーションクラスを除去
      }
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    //spanタグを追加する
    var element = $(".rollAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = [];
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="transition-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="transition-delay:' + n + 's;">' + t + '</span>';
          }
  
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  
    RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  
$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

    //＝＝＝Muuriギャラリープラグイン設定
    var grid = new Muuri('.grid', {
    
    //アイテムの表示速度※オプション。入れなくても動作します
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        
    // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
      visibleStyles: {
        opacity: '1',
        transform: 'scale(1)'
      },
      hiddenStyles: {
        opacity: '0',
        transform: 'scale(0.5)'
      }    
    });
    
    //＝＝＝並び替えボタン設定
    $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
        $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
        var className = $(this).attr("class");			//クラス名を取得
        className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
        $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
        if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
             grid.show('');								//全ての要素を出す
        }else{											//それ以外の場合は
            grid.filter("."+className[0]); 				//フィルターを実行
        }
    });
    
    //＝＝＝ Fancyboxの設定
    $('[data-fancybox]').fancybox({
     thumbs: {
        autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
      },	
    });
        
    });
