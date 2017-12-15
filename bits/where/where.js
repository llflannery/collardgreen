import $ from "jquery";

if ($( window ).width() < 700) {
  $(".map").append("<img width='100%' src='http://s3.amazonaws.com/ledejs/resized/collardgreen/1500/mapshort.jpg'>");
}
else {
  $(".map").append("<img width='100%' src='http://s3.amazonaws.com/ledejs/resized/collardgreen/1500/mapwide.jpg'>");
}
