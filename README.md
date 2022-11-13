# Remodal for YouTube
  ・Remodalの実装<br>
  ・ロード時のモーダル表示<br>
  ・YouTubeの切り替えスイッチ<br>


# Remodalの実装
  読み込みファイル<br>
  ・remodal-default-theme.css<br>
  ・remodal.css<br>
  ・remodal.min.js<br>
  ・jQuery

  HTML<br>
  ・モーダル表示したい要素に<br>[class="remodal" data-remodal-id="modal"]<br>
  ・aタグに[href="#modal"]

# ロード時のモーダル表示
```
window.onload = function () {
  document.getElementById( "remodal-btn" ).click();
}
```