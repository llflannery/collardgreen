var readmore = document.getElementById('read-more');
var pager = document.getElementById('pager');

if (pager) {
  window.onscroll = function() {
    pager.style.opacity = checkVisible(readmore) ? '0' : '1';
  };

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
}
