 // var xin=document.querySelectorAll('.zby_titright a');
 var xins=document.querySelectorAll('.zby_titright a img');
 console.log(xins);
 var url="./images/zby_images/zby_xin2.png"
 var urls="./images/zby_images/zby_xin.png"
 var al=xins[0].src
 console.log(al)
 var flag=true
 for(var i=0;i<xins.length;i++){
 	xins[i].indexs=i
	 xins[i].addEventListener('touchstart',function () {
	 	console.log(this.indexs)
	 	if (flag) {
	 		flag=false
			xins[this.indexs].src=url
			return
	 	}else{
			console.log(this.indexs)
			flag=true
			xins[this.indexs].src=urls
			return
	 	}
	})

 }
