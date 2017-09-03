var isMobile = {
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }
};
if( isMobile.iOS()) {
  var bodyclass=document.createAttribute("class");
  bodyclass.value="ios";
  document.getElementsByTagName("body")[0].setAttributeNode(bodyclass);
}