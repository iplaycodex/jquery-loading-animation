# LLLoader

This is an animation library, used as an animation effects of load. Draw lessons from the online most of the CSS  code, JS for encapsulation.
##Show

![image](https://github.com/wawsc5354524/LLLoader/blob/master/Loader/img/animation.gif)


##How to use
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>demo</title>
		<!--include css file-->
		<link rel="stylesheet" type="text/css" href="css/loader.css"/>
	</head>
	<body>
		<input type="button" name="loading" id="loading" value="LoadMore" />
	</body>
	<!--js file-->
	<script src="js/loader.js" type="text/javascript" charset="utf-8"></script>
	<!--need jq file-->
	<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
	<script type="text/javascript">
		$(function(){
			// trigger
			$("#loading").click(function(){
				//start loading animation
				//parameterOne className,parameterTwo delayTime
				 loader.loading({ className: 'ball-clip-rotate-multiple', delay: 1000});
				 
				 //end loading animation
				 loader.close();
			})
		})
	</script>
</html>

```

##Optional parameters

'ball-pulse'<br/>
'ball-grid-pulse'<br/>
'ball-clip-rotate'<br/>
'ball-clip-rotate-pulse'<br/>
'square-spin'<br/>
'ball-clip-rotate-multiple'<br/>
'ball-pulse-rise'<br/>
'ball-rotate'<br/>
'cube-transition'<br/>
'ball-zig-zag'<br/>
'ball-zig-zag-deflect'<br/>
'ball-triangle-path'<br/>
'ball-scale'<br/>
'line-scale'<br/>
'line-scale-party'<br/>
'ball-scale-multiple'<br/>
'ball-pulse-sync'<br/>
'ball-beat'<br/>
'line-scale-pulse-out'<br/>
`line-scale-pulse-out-rapid'<br/>
'ball-scale-ripple'<br/>
'ball-scale-ripple-multiple'<br/>
'ball-spin-fade-loader'<br/>
'line-spin-fade-loader'<br/>
'triangle-skew-spin'<br/>
'pacman'<br/>
'ball-grid-beat'<br/>
'semi-circle-spin'<br/>


#Enjoy it!I hope you love it:)
