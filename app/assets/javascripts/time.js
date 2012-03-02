$(document).ready(function(){

  function time () {
    var now = new Date();
    return now.getTime()/1000;
  }

  function alpha (current_fig, fig_to_blend, max_fig) {
    return 1.0 - abs(current_fig - fig_to_blend) / (max_fig/2)
  }

  function seconds_ring(){
    seconds.style[Modernizr.prefixed('transform')] = 'translateZ( -400px ) rotateY(' + -6 * time() + 'deg)';
  };

  function minutes_ring () {
    minutes.style[Modernizr.prefixed('transform')] = 'translateZ( -350px ) rotateY(' + -6 * time()/60 + 'deg)';
  }
  function hours_ring () {
    hours.style[Modernizr.prefixed('transform')] = 'translateZ( -300px ) rotateY(' + 15 * time()/3600 + 'deg)';
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
  setInterval(minutes_ring, 60000);  
  setInterval(hours_ring, 3600000);  
});

