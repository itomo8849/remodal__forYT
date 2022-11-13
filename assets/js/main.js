window.onload = function () {
  document.getElementById( "remodal-btn" ).click();
}
function servVideo(anything,clickElement){
  document.querySelector('.js_modalVideo').src = 'https://'+anything;
  document.getElementsByClassName('js_YTswitchBtn is_active')[0].classList.remove('is_active');
  clickElement.classList.add('is_active');
};