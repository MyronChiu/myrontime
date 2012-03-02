$(document).ready(function(){

  function time () {
    var now = new Date();
    return now.getTime()/1000;
  }

  function seconds_ring(){
    seconds.style[Modernizr.prefixed('transform')] = 'translateZ( -400px ) rotateY(' + -6 * time() + 'deg)';
  };

  function minutes_ring () {
    minutes.style[Modernizr.prefixed('transform')] = 'translateZ( -350px ) rotateY(' + -6 * time()/60 + 'deg)';
  }
  function hours_ring () {
    hours.style[Modernizr.prefixed('transform')] = 'translateZ( -200px ) rotateY(' + -6 * time()/3600 + 'deg)';
  }
  function set_clock(){
    seconds.style[Modernizr.prefixed('transform')] = 'rotateY('+ 0 +'deg)'
    minutes.style[Modernizr.prefixed('transform')] = 'rotateY('+ 10 +'deg)'
    hours.style[Modernizr.prefixed('transform')] = 'rotateY('+ 10 +'deg)'
    minutes_ring()
    hours_ring()
  }

  set_clock();
  setInterval(seconds_ring, 1000);
  setInterval(minutes_ring, 1000);  
  setInterval(hours_ring, 1000);  
});

