var cc = document.getElementById('canvi');
var $ = cc.getContext('2d');

var w = cc.width = window.innerWidth;
var h = cc.height = window.innerHeight;

var txt = function() {
  var _t = "Planetarium".split("").join(String.fromCharCode(0x2004));
  $.fillStyle = 'rgba(255, 255, 255, .9)';
  $.fillText(_t, (cc.width - $.measureText(_t).width) * 0.5, cc.height * 0.5);
  return _t;
}

var draw = function(a, b, t) {
  $.lineWidth = 0.8;
  $.fillStyle = 'rgba(0, 0, 0, .9)';
  $.fillRect(0, 0, w, h);
  for (var i = -60; i < 60; i += 1) {
    $.strokeStyle = 'rgba(255, 255, 255, .15)';
    $.beginPath();
    $.moveTo(0, h / 2);
    for (var j = 0; j < w; j += 10) {
      $.lineTo(10 * Math.sin(i / 10) +
        j + 0.008 * j * j,
        Math.floor(h / 2 + j / 2 *
          Math.sin(j / 50 - t / 50 - i / 118) +
          (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
    };
    $.stroke();
  }
}
var t = 0;

window.addEventListener('resize', function() {
  cc.width = w = window.innerWidth;
  cc.height = h = window.innerHeight;
  $.fillStyle = 'hsla(160, 95%, 55%, 1)';
}, false);

var run = function() {
  window.requestAnimationFrame(run);
  t += 1;
  draw(33, 52 * Math.sin(t / 2400), t);
  txt();
};

run();