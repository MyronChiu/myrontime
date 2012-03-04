$(document).ready(function(){

  function time () {
    var now = new Date();
    return now.getTime()/1000;
  }

  function highlighter (ring_section, time_interval) {
    ring = $("#"+ring_section+" figure").filter("figure")
    $(ring).css("background-color","rgba(255, 255, 255, .6)").css("color","black")    
    $(ring[time_interval]).css("background-color","rgba(243, 45, 15, 1)").css("color","white")
  }

  function highlight () {
    var sec = (parseInt(time())-1) % 60
    var min = parseInt((time()-1)/60-1) % 60
    var hrs = parseInt(((time()-1)/3600-1)-8) % 24
    highlighter("minutes", min)
    highlighter("hours", hrs)
    highlighter("seconds", sec)
  }

  function rings(){ 
    transform = Modernizr.prefixed('transform')
    seconds.style[transform] = 'translateZ( -400px ) rotateY(' + -6 * parseInt(time()) + 'deg)';
    minutes.style[transform] = 'translateZ( -370px ) rotateY(' + -6 * parseInt(time()/60) + 'deg)';
    hours.style[transform] = 'translateZ( -300px ) rotateY(' + -15 * parseInt(((time()/3600)-8)) + 'deg)';
    spinner.style[transform] = 'translateZ( -400px ) rotateY(' + -360 * parseInt(time()) + 'deg)';
  }
  setInterval(rings, 500);
  setInterval(highlight, 500);

});

