window.onload = function () {
  document.getElementById( "remodal-btn" ).click();
}
function servVideo(anything){
  document.querySelector('.js_modalVideo').src = 'https://'+anything;
};