# Introduction #

Below is the complete source code for the simple spinning wheel example.


# Example source code #

```
<html>
<head>
<script type="text/javascript" src="script/jquery-1.4.4.min.js"></script>
<script type="text/javascript" src="script/asciimation-plugin.js"></script>
<style type="text/css" rel="Stylesheet">
</style>
<script type="text/javascript">

  $(function() {
    $("#animation").asciimation({
      'frameClass' : 'frame',
      'framesPerSecond' : 10,
      'removeSourceFrames' : true
    });
    $("#animation").asciimation("start").css("border", "1px red solid");
    setTimeout(function() {$("#animation").asciimation("stop")}, 3000);
    setTimeout(function() {$("#animation").asciimation("start")}, 5000);
  });
</script>
</head>
<body>

<div id="animation"></div>
<span class="frame">--</span>
<span class="frame">/</span>
<span class="frame">|</span>
<span class="frame">\</span>
</body>
</html>
```