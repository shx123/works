// JavaScript Document
window.onload=function ()
{
	var oMain=document.getElementById('main2').getElementsByTagName('ul')[0];
	var oLi=oMain.getElementsByTagName('li');
	var Main_1=document.getElementById('main2_1_').getElementsByTagName('ul')[0];
	var oLi_1=Main_1.getElementsByTagName('li');
	var oC=document.getElementById('oe').getElementsByTagName('ul');
	var oD=document.getElementById('od').getElementsByTagName('ul');
	var i=0;
	var oA=document.getElementById('oa').getElementsByTagName('a');
	var oB=document.getElementById('oi').getElementsByTagName('a');
	var oBanner=document.getElementById('qq');
	var oBannerUl=oBanner.getElementsByTagName('ul');
	var oNew=document.getElementById('right');
	var oNewUl=oNew.getElementsByTagName('ul');
	function oTable(obj,obj2){
		for(i=0;i<obj.length;i++){
			obj[i].index=i;
			obj[i].onmouseover=function(){
				for(i=0;i<obj.length;i++){
					obj[i].className=''
					obj2[i].style.display='none';	
				}
				this.className='active';
				obj2[this.index].style.display='block';
			}	
		}
	}
	oTable(oLi,oC)
	oTable(oLi_1,oD)
	oTable(oA,oBannerUl)
	oTable(oB,oNewUl)
	/*滑动门结束*/
	
	var oBanner=document.getElementById('banner').getElementsByTagName('li');
	var oBanner_1=document.getElementById('oc').getElementsByTagName('div');
	var timer_2=null;
	for(i=0;i<oBanner.length;i++){
		oBanner[i].index=i;		
		oBanner[i].onmouseover=function(){
			_this=this.index;
			clearTimeout(timer_2);
			for(i=0;i<oBanner.length;i++){
				oBanner[i].className=''	
				oBanner_1[i].style.display='none';
			}
			this.className='active_1';
			oBanner_1[this.index].style.display='block';
			oBanner_1[0].style.display='none';	
		}
		oBanner[i].onmouseout=oBanner_1[i].onmouseout=function(){	
			timer_2=setTimeout(function(){
				oBanner[_this].className='';
				oBanner_1[_this].style.display='none';
			},300)		
		}	
		
		oBanner_1[i].onmouseover=function(){
			clearTimeout(timer_2);
			for(i=0;i<oBanner.length;i++){
				oBanner[i].className=''	
				oBanner_1[i].style.display='none';
			}
			oBanner[_this].className='active_1';
			this.style.display='block';
			oBanner_1[0].style.display='none';	
		}	
	}
	/*灰块的显示与隐藏结束*/
	
	var iNow_1=0;
	var aMain1=document.getElementById('main1');
	var oLeft=document.getElementById('oleft');
	var oRight=document.getElementById('oright');
	var oUl=aMain1.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	oLeft.onclick=function(){
		iNow_1--;
		if(iNow_1<0){
			iNow_1=6;
		}
		oUl.style.left=-(aLi[0].offsetWidth)*iNow_1+'px';
					
	}
	
	oRight.onclick=function(){
		iNow_1++;
		if(iNow_1>6){
			iNow_1=0;
		}
		oUl.style.left=-(aLi[0].offsetWidth)*iNow_1+'px';	
	}
	/*中间按钮点击结束*/
		
	var bUl=document.getElementById('cicle');
	var oLicicle=bUl.getElementsByTagName('li');
	var oPic=document.getElementById('pic');
	var oLiPic=oPic.getElementsByTagName('li');
	var oA1=document.getElementById('a1');
	var oA2=document.getElementById('a2');
	var timer=null;
	var iNow=null;
	var i=0;
	function tab(){
		for(i=0;i<oLicicle.length;i++){
			oLicicle[i].className='';
			/*oLiPic[i].style.opacity=0;
			oLiPic[i].style.filter='alpha(opacity:0)';*/	
			startMove(oLiPic[i],{opacity:0});
		}
		oLicicle[iNow].className='active';
		startMove(oLiPic[iNow],{opacity:100});
	}
	for(i=0;i<oLicicle.length;i++){
		oLicicle[i].index=i;
		oLicicle[i].onmouseover=function(){
			iNow=this.index;
			tab()
		}	
	}
	oA1.onclick=function(){
		iNow--;
		if(iNow<0){
			iNow=oLiPic.length-1;	
		}
		tab()	
	}
	oA2.onclick=function(){
		autoPlay()
	}
	timer=setInterval(autoPlay,3000);
	function autoPlay(){
		iNow++;
		if(iNow==oLiPic.length){
			iNow=0;	
		}	
		tab();	
	}
	bUl.onmouseover=function(){
		clearInterval(timer);	
	}
	bUl.onmouseout=function(){
		timer=setInterval(autoPlay,3000);	
	}
	/*轮播图结束*/
	
	var timer_1=null;
	function startMove_(iTarget){
		var oDiv=document.getElementById('ending');
		clearInterval(timer_1);
		 timer_1=setInterval(function (){
			var iSpeed=0;
			if(oDiv.offsetLeft<iTarget){              
				iSpeed=10;
			}
			else{
				iSpeed=-10;
			}
			
			if(oDiv.offsetLeft==iTarget){
				clearInterval(timer_1);
			}
			else{
				oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
			}
		}, 15);
	}
	
	var oDiv=document.getElementById('ending');
	oDiv.onmouseover=function (){
		startMove_(0);	
	}
	oDiv.onmouseout=function (){
		startMove_(200);	
	}
	/*侧边弹出框结束*/
	
	var oPic_2=document.getElementById('pic_2');
	var oPic_2_=oPic_2.getElementsByTagName('div');
	oPic_2.onmouseover=function(){
		oPic_2_[0].style.display='none';
		oPic_2_[1].style.display='block';	
	}
	oPic_2.onmouseout=function(){
		oPic_2_[0].style.display='block';
		oPic_2_[1].style.display='none';	
	}
	/*二维码结束*/
}

