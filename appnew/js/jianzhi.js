var but=document.querySelectorAll(".but");
var move=document.querySelector(".jcl-lists");
var sp=document.querySelectorAll(".jcl-bot>span");
var image=document.querySelectorAll(".but>img:first-child");
// var sub=document.querySelectorAll(".sub");
var img1=['images/jcl/text_03.png','images/jcl/text_03.png','images/jcl/text_03.png'];
var img2=['images/jcl/textes_06.png','images/jcl/textes_03.png','images/jcl/textes_06.png'];
for(var i=0;i<but.length;i++){
	
		but[i].index=i;
        but[i].addEventListener("touchstart",function(){ 
            
          for(var j=0;j<sp.length;j++){
                sp[j].classList.remove('active');
                image[j].setAttribute('src',img2[j]);
        };      console.log(sp[j]);
        sp[this.index].classList.add('active');
        move.style.transform="translate3d("+(-this.index*33.333333)+"%,0,0)";
        move.style.transition="all 1s";
        image[this.index].setAttribute('src',img1[this.index]);
	},false)
	
} 
