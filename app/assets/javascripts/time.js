//
$(document).ready(function(){
  
  // firefox and safari transforms seem to break with degree values over 10 digits,
  // so instead of raw time I had to use % and revolution counts

  var sec_rotations = 0;
  var min_rotations = 0;
  var hrs_rotations = 0;

  function time () {
    var now = new Date().getTime()/1000;
    var sec = (parseInt(now)) % 60;
    var min = parseInt((now)/60) % 60;
    var hrs = parseInt(((now)/3600)-7) % 24;

    var sec_nomod = -6 * parseInt(now)%360;
    var min_nomod = -6 * parseInt((now)/60)%360;
    var hrs_nomod = -15 * parseInt((((now)/3600)-7))%360;
    
    if(sec_nomod % 360 === 0){sec_rotations += 1};
    if(sec_rotations > 0){sec_nomod -= 360*sec_rotations};

    if(min_nomod % 360 === 0 && sec ===0){min_rotations += 1};
    if(min_rotations > 0){min_nomod -= 360*min_rotations}; 

    if(hrs_nomod % 360 === 0 && min === 0 && sec ===0){hrs_rotations += 1};
    if(hrs_rotations > 0){hrs_nomod -= 360*hrs_rotations};

    highlighter("minutes", min);
    highlighter("hours", hrs);
    highlighter("seconds", sec);

    sec_t = 'translateZ(-400px) rotateY(' + sec_nomod + 'deg)';
    min_t = 'translateZ( -370px ) rotateY(' + min_nomod + 'deg)';
    hrs_t = 'translateZ( -300px ) rotateY(' + hrs_nomod + 'deg)';

    $("#seconds").css({"-webkit-transform" : sec_t,"-moz-transform" : sec_t});
    $("#minutes").css({"-webkit-transform" : min_t,"-moz-transform" : min_t});
    $("#hours").css({"-webkit-transform" : hrs_t,"-moz-transform" : hrs_t});
  }

  function highlighter (ring_section, time_interval) {
    ring = $("#"+ring_section+" figure").filter("figure");
    $(ring).removeClass("highlight");
    $(ring[time_interval]).addClass("highlight");
  }

  time();
  // each run takes about 2.5ms, so set interval time to 998 to prevent mis-ticks
  setInterval(time, 998);
});

