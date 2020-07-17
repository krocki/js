"use strict";

const canvas = document.querySelector('.image');
const c_width = canvas.width
const w_width = window.innerWidth;
const c_height = canvas.height;
const w_height = window.innerHeight;

var ctx = canvas.getContext("2d");

var px=144
var py=96
var sx=16
var sy=16
var increment=16

function update_screen() {
  ctx.clearRect(0, 0, c_width, c_height);
  ctx.fillRect(px, py, sx, sy);
}

var actions = {
  'ArrowUp':    function() { py -= increment; py = Math.max(py, 0);},
  'ArrowDown':  function() { if (py<(c_height-increment)) py += increment;},
  'ArrowLeft':  function() { px -= increment; px = Math.max(px, 0);},
  'ArrowRight': function() { if (px<(c_width-increment)) px += increment;}
}

function move(e) {
  console.log(e);
  actions[e]()
  update_screen()
}

window.addEventListener('keydown', (event) => { move(event.key); }, false);

update_screen()
