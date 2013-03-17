//
$(document).ready(function(){

  function time () {
    var now = new Date().getTime()/1000;
    var sec = (parseInt(now)) % 60;
    var min = parseInt((now)/60) % 60;
    var hrs = parseInt(((now)/3600)-7) % 24;

    highlighter("minutes", min);
    highlighter("hours", hrs);
    highlighter("seconds", sec);

    sec_t = 'translateZ(-400px) rotateY(' + -6 * parseInt(now) + 'deg)';
    min_t = 'translateZ( -370px ) rotateY(' + -6 * parseInt((now)/60) + 'deg)';
    hrs_t = 'translateZ( -300px ) rotateY(' + -15 * parseInt((((now)/3600)-7)) + 'deg)';

    $("#seconds").css({"-webkit-transform" : sec_t});
    $("#minutes").css({"-webkit-transform" : min_t});
    $("#hours").css({"-webkit-transform" : hrs_t});
  }

  function highlighter (ring_section, time_interval) {
    ring = $("#"+ring_section+" figure").filter("figure");
    $(ring).removeClass("highlight");
    $(ring[time_interval]).addClass("highlight");
  }


  setInterval(time, 1000);
});

