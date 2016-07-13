# LLLoader

This is an animation library, used as an animation effects of load. Draw lessons from the online most of the CSS  code, JS for encapsulation.
look this pic:

![image](https://github.com/wawsc5354524/LLLoader/blob/master/Loader/img/img.jpg)


###How to uese
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


