$(document).ready(function(){
    $('.slider').bxSlider(
      {
        auto: true,
        stopAutoOnClick: true,
      }
    );
    
});

  var id = null;
  function myMove() {
    var elem = document.getElementById("firstbox");   
    var pos = -350;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
  var id2 = null;
  function myMove2() {
    var elem = document.getElementById("secondbox");   
    var pos = -350;
    clearInterval(id2);
    id2 = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id2);
      } else {
        pos++; 
        elem.style.top = pos; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
  var id3 = null;
  function myMove3() {
    var elem = document.getElementById("thirdbox");   
    var pos = 325;
    clearInterval(id3);
    id3 = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id3);
      } else {
        pos--; 
        elem.style.top = pos; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
  var id4 = null;
  function myMove4() {
    var elem = document.getElementById("fourthbox");   
    var pos = 325;
    clearInterval(id4);
    id4 = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id4);
      } else {
        pos--; 
        elem.style.top = pos; 
        elem.style.left = pos + 'px'; 
      }
    }
  }