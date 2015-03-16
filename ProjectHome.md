# Quick start #

Javascript and HTML below is an example of using asciimation on a webpage.

## Online demo ##

Check out the online demo: [spinning earth](http://skipperkongen.dk/demos/jquery-asciimation/) (view the source code for full example)

## The Javascript ##

```
    // initialize the container
    $("#animation").asciimation({
      'frameClass' : 'frame',
      'fps' : 10
    });

    // start the animation
    $("#animation").asciimation("start");

    // stop the animation
    $("#animation").asciimation("stop");

    // change frame rate
    $("#animation").asciimation("fps", 25);
```

## The HTML ##
```
  <!-- this is the animation container -->
  <div id="animation"></div>

  <!-- these are some frames -->
  <span class="frame">--</span>
  <span class="frame">/</span>
  <span class="frame">|</span>
  <span class="frame">\</span>
```

[full source](SpinningWheelExampleSourceCode.md) for this example.