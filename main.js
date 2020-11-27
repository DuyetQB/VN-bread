
var slide = document.querySelector('.slide');
var image = ['anh1', 'anh2','anh3','anh4'];

var i = image.length;

function next(){
    if(i<image.length){
        i = i + 1;
    }
    else{
        i = 1;
    }
    slide.innerHTML = "<img src =" + image[i - 1] + ".jpg>";
}
function prev(){
    if(i<image.length + 1 && i>1){
        i = i - 1;
    }
    else{
        i = image.length;
    }
    slide.innerHTML = "<img src =" + image[i - 1] + ".jpg>";
}
setInterval(next , 2000);



function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 4000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.wrap-slide', true);
    setVisible('.container', false);
  });