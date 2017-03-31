var font=document.querySelector('.banner .font');
var p1=font.querySelector('p:first-child');
var p2=font.querySelector('p:last-child');
var p1inner=['我爱工作，工作爱我！','仁者荐人，智者荐智。','一起来工作！'];
var p2inner=['University of experience  for the first time very excited and is excited',
		'BBA招贤纳士，加入BBA共叙梦想之悦','加入我们吧'
];
var mySwiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay:true,
    speed:1500,
    loop:true,
    autoplayDisableOnInteraction:false,
    onSlideChangeStart: function(swiper){
      	p1.innerHTML=p1inner[swiper.realIndex];
		p2.innerHTML=p2inner[swiper.realIndex];
    }
})



 var cehua=document.querySelector('.cehua');
 var mask=document.querySelector('#mask');
 var chosecity=cehua.querySelector('.chose-city');
 var dw=document.querySelector('.head .headcon .dw');
 dw.addEventListener('touchstart',function(){
 	mask.classList.add('active');
 	cehua.classList.add('active');
 })
 mask.addEventListener('touchstart',function(){
 	mask.classList.remove('active');
 	cehua.classList.remove('active');
 })

var city1=document.querySelector('.nowcity span b');
var city2=document.querySelector('.dw span');
var citylist=document.querySelectorAll('.citylist>li');
for(var i=0;i<citylist.length;i++){
    citylist[i].onclick=function(){
        for(var j=0;j<citylist.length;j++){
            citylist[j].classList.remove('act');
        }
        this.classList.add('act');
        var text=this.querySelector('span').innerHTML;
        city1.innerText=text;
        city2.innerText=text;
    }
}
