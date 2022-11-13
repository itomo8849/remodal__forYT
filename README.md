# Remodal for YouTube
  ・Remodalの実装<br>
  ・ロード時のモーダル表示<br>
  ・YouTubeの切り替えスイッチ<br>


## Remodalの実装
  ### 読み込みファイル<br>
  ・remodal-default-theme.css<br>
  ・remodal.css<br>
  ・remodal.min.js<br>
  ・jQuery

  ### HTML<br>
  ・モーダル表示したい要素<br>
  ```html
  <div class="remodal" data-remodal-id="modal">...</div>
  ```
  ・aタグ
  ```html
  <a href="#modal" id="js_remodalBtn">...</a>
  ```

## ロード時のモーダル表示
```javascript
window.onload = function () {
  document.getElementById( "js_remodalBtn" ).click();
}
```

## YouTubeの切り替えスイッチ
```javascript
function servVideo(anything,clickElement){
  document.querySelector('.js_modalVideo').src = 'https://'+anything;
  document.getElementsByClassName('js_YTswitchBtn is_active')[0].classList.remove('is_active');
  clickElement.classList.add('is_active');
};
```