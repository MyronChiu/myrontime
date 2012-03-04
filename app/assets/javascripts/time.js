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
    var sec_t = 'translateZ(-400px) rotateY(' + -6 * parseInt(time()) + 'deg)';
    var min_t = 'translateZ( -370px ) rotateY(' + -6 * parseInt(time()/60) + 'deg)';
    var hrs_t = 'translateZ( -300px ) rotateY(' + -15 * parseInt(((time()/3600)-8)) + 'deg)';
    var spi_t = 'translateZ( -400px ) rotateY(' + -360 * parseInt(time()) + 'deg)';

    $("#seconds").css({"-webkit-transform" : sec_t});
    $("#minutes").css({"-webkit-transform" : min_t});
    $("#hours").css({"-webkit-transform" : hrs_t});
    $("#spinner").css({"-webkit-transform" : spi_t});

  }
  setInterval(rings, 500);
  setInterval(highlight, 500);

});

