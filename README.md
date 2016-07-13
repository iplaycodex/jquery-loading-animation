# LLLoader

This is an animation library, used as an animation effects of load. Draw lessons from the online most of the CSS  code, JS for encapsulation.
look this pic:

![image](https://github.com/wawsc5354524/LLLoader/blob/master/Loader/img/img.jpg)


##How to ues
```javascript
		$(function(){
			$("#loading").click(function(){
			   //start loading
				 loader.loading({ className: 'ball-clip-rotate-multiple', delay: 1000});//parameterOne animationName parameterTwo delayTime,ms.
				 
				  //end loading
				  loader.close();
			})
		})
```

##Optional parameters

'ball-pulse'
'ball-grid-pulse'
'ball-clip-rotate'
'ball-clip-rotate-pulse'
'square-spin'
'ball-clip-rotate-multiple'
'ball-pulse-rise'
'ball-rotate'
'cube-transition'
'ball-zig-zag'
'ball-zig-zag-deflect'
'ball-triangle-path'
'ball-scale'
'line-scale'
'line-scale-party'
'ball-scale-multiple'
'ball-pulse-sync'
'ball-beat'
'line-scale-pulse-out'
`line-scale-pulse-out-rapid'
'ball-scale-ripple'
'ball-scale-ripple-multiple'
'ball-spin-fade-loader'
'line-spin-fade-loader'
'triangle-skew-spin'
'pacman'
'ball-grid-beat'
'semi-circle-spin'


