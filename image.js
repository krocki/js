"use strict";

const canvas = document.querySelector('.image');
const c_width = canvas.width
const w_width = window.innerWidth;
const c_height = canvas.height;
const w_height = window.innerHeight;

var ctx = canvas.getContext("2d");
var imdata = ctx.getImageData(0, 0, c_width, c_height);
var data = imdata.data;

for (var i=0; i<data.length; i++)
  data[i] = i % 255;

ctx.putImageData(imdata, 0, 0)
