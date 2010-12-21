/* http://docs.jquery.com/Plugins/Authoring */

(function( $ ){

  var jTarget;
  var currentFrame = 0;
  var frames = [];
  var timer;
  var settings = {
    'frameClass' : 'frame',
    'framesPerSecond' : 25,
    'removeSourceFrames' : false
  };
  
  var methods = {
    init : function( options ) {
    
      // store target
      jTarget = this;
      
      // merge options with settings
      if ( options ) { 
        $.extend( settings, options );
      }
      // extract frames from DOM and add text to frames array
      $("."+settings.frameClass).each(function() {frames.push($(this).text());});
      // optionaly remove source frames from DOM
      if(settings.removeSourceFrames) {
        $("."+settings.frameClass).remove();
      }
      // insert pre into animation container
      return this.each(function() {
        $(this).html("<pre/>");
      });
    },
    stop : function() {
      clearInterval(timer);
      return this;
    },
    start : function() {
      if(timer != undefined) {
        clearInterval(timer);
      }
      timer = setInterval(function() {
         jTarget.find("pre").text(frames[currentFrame]);
         currentFrame = (currentFrame + 1) % frames.length;
      }, 
      Math.floor(1000.0/settings.framesPerSecond));
      return this;
    },
    tempo : function(framesPerSecond) {
      if(typeof(framesPerSecond) === "number") {
        settings.framesPerSecond = Math.max(1, framesPerSecond); // avoid dividebyzero
        methods.start();
      }
      return this;
    }
  };

  $.fn.asciimation = function( method ) {
  
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.asciimation' );
    }
  };
})( jQuery );