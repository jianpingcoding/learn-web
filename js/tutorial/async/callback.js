// define function loadScript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}
// call function
loadScript('/my/script.js', function(scriptEl) {
  console.log(scriptEl);
});

function isGreater(a, b, callBack) {
  var greater = false
  if (a > b) {
    greater = true
  }
  callBack(greater);
}
isGreater(1, 2, function (result) {
  if (result) {
    console.log('greater');
  } else {
    console.log('smaller')
  }
});