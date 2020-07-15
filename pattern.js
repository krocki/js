"use strict";

const canvas = document.querySelector('.image');
const c_width = canvas.width
const w_width = window.innerWidth;
const c_height = canvas.height;
const w_height = window.innerHeight;

var ctx = canvas.getContext("2d");
var imdata = ctx.getImageData(0, 0, c_width, c_height);
var data = imdata.data;

function set_pattern() {
  for (var x=0; x<c_width; x++) {
    for (var y=0; y<c_height; y++) {
      var index = 4*(c_width)*y + 4*x;
      data[index+0] = (32*x+32*y)%256
      data[index+1] = (32*x+32*y)%256
      data[index+2] = (32*x+32*y)%256
      data[index+3] = 255
    }
  }
  ctx.putImageData(imdata, 0, 0)
}

set_pattern()
