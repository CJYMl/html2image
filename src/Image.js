/*
 html2image 0.1.0
  Copyright (c) 2013 Ryota Mochizuki (@polidog)
*/
function html2image(target,callback,type) {
  html2canvas(target,{
    onrendered: function(canvas) {
      if (type === undefined) type = 'text/png';
      var dataURI = canvas.toDataURL(type);
      callback(dataURI);
    }
  });
}