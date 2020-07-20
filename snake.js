"use strict";

const canvas = document.querySelector('.image');
const c_width = canvas.width
const w_width = window.innerWidth;
const c_height = canvas.height;
const w_height = window.innerHeight;

const dirs = {
  LEFT: 0,
  RIGHT: 1,
  UP: 2,
  DOWN: 3
}

var ctx = canvas.getContext("2d");

var px=144
var py=96
var sx=8
var sy=8
var increment=8
var interval_ms = 100;
var dir = -1;

function update_screen() {
  ctx.clearRect(0, 0, c_width, c_height);
  ctx.fillRect(px, py, sx, sy);
}

var actions = {
  'ArrowUp':    function() { dir = dirs.UP    },
  'ArrowDown':  function() { dir = dirs.DOWN  },
  'ArrowLeft':  function() { dir = dirs.LEFT  },
  'ArrowRight': function() { dir = dirs.RIGHT }
}

function move(e) {
  console.log(e);
  actions[e]()
  update_screen()
}

function update_positions() {
  switch (dir) {
    case dirs.LEFT:  px = ((px - increment) + c_width ) % c_width; break;
    case dirs.RIGHT: px = ((px + increment) + c_width ) % c_width; break;
    case dirs.UP:    py = ((py - increment) + c_height) % c_height; break;
    case dirs.DOWN:  py = ((py + increment) + c_height) % c_height; break;
    default: break;
  }
  update_screen()
}

window.addEventListener('keydown', (event) => { move(event.key); }, false);
window.setInterval(update_positions, interval_ms)
