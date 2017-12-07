window.onload=function(){

    //load加载
    var startShow = document.getElementById('start-show');
    var bag = document.getElementById('bag');
    var pic = document.getElementById('pic');
    var load = document.getElementById('load');
    var bg = document.getElementById('bg');
    var logo = document.getElementById('logo');
    var loadSpans = load.getElementsByTagName('span');
     // 图标放大
    setTimeout(function(){
        startShow.style.display='block';
    },30);
    setTimeout(function(){
        bag.style.transform='scale(2)';
    },60);
    //logo图片显示
    setTimeout(function(){
        pic.style.display='block';
    },600);
    //logo图片移到合适位置
    setTimeout(function(){
        pic.style.transform='translate(-50%,90%)'
    },620);
    //圆背景图消失
    setTimeout(function(){
        $("#bg").fadeOut('nomal');
    },1100);
     //loading效果显示
    setTimeout(function(){
        $("#load").fadeIn("slow");
        load.style.transform='rotate(720deg)'
    },1800);
    //loading炸开，图片出现阴影 
    setTimeout(function(){
        for(var i=0;i<loadSpans.length;i++){
            var numT=-(Math.random()*(2-(Math.random()*5))*(200-100)+100);
            var numL=-(Math.random()*(2-(Math.random()*5))*(500-100)+100);
            logo.style.boxShadow='0px 0px 15px 1px #ffefc6';
            loadSpans[i].style.transform='translate('+numL+'px,'+numT+'px) scale(2.5)';
        }
    },4000);

    setTimeout(function(){
        startShow.style.display="none";
    },5000)

    //逐行文字
    var textLine = document.getElementsByClassName('text-line');
    setTimeout(function(){
      
        var p1 = textLine[0].getElementsByTagName('p');
        var p2 = textLine[1].getElementsByTagName('p');
        var p3 = textLine[2].getElementsByTagName('p');
        var p4 = textLine[3].getElementsByTagName('p');
        var array=['你好，我是孙会霞！一个敢挑战敢创新的姑娘',
        '1990年我喜气洋洋的诞生在一个优美的小村庄',
        '随着年龄的增长，开始了自己的网络之旅，热衷于各种各样的图形色彩样式设计',
        '毕业期间酷爱网站设计，于是走上了一条幸福的不归路_']
       
        function fn(who){
            var str='';
            for(var i=0;i<who.length;i++){
                str+='<p>'+who[i]+'</p>'
            }
            return str;
        }
        
        textLine[0].innerHTML=fn(array[0]);
        textLine[1].innerHTML=fn(array[1]);
        textLine[2].innerHTML=fn(array[2]);
        textLine[3].innerHTML=fn(array[3]);
        var num=0;
        var n=0;
        var m=0;
        var t=0;

        var timer=setInterval(function(){
            if(num>=p1.length){
                p2[n].style.display='block';
                n++;
                if(n>=p2.length){
                    num=0;
                }
            }else if(n>=p2.length){
                p3[m].style.display='block';
                m++;
                if(m>=p3.length){
                    n=0;
                }
            }else if(m>=p3.length){

                if(t>=p4.length-1){
                    clearInterval(timer);
                }
                p4[t].style.display='block';
                t++;
                
            }else{
                p1[num].style.display='block';
                num++;
            }
        },90);

        setInterval(function(){
            if( p4[p4.length-1].style.opacity==1){
                p4[p4.length-1].style.opacity=0;
            }else{
                 p4[p4.length-1].style.opacity=1;
            }                    
        },400);

    },5500);    


    //沙画
    var sha = document.getElementById('sha');
    var girl = document.getElementById('girl');
    var sunshine = document.getElementById('sunshine');
    var mount = document.getElementById('mount');
    var sunshinePic = document.getElementById('sunshine-pic');
    var build = document.getElementsByClassName('build');

    setTimeout(function(){
        sha.style.width="690px";
    },6000);
    //沙画女孩
    setTimeout(function(){      
        girl.style.opacity=1;
        var h=-1;
        var l=0;
        var gT=0;
        var gL=0;
        var timerGirl=setInterval(function(){
            h++;
            l=h%2+1;
            girl.style.background='url(img/girl'+l+'.png) no-repeat';
            gT=girl.offsetTop-8;
            gL=girl.offsetLeft-10;

            if(gL<315){
                gL+=20;
            }
            if(gT<=-10){
                clearInterval(timerGirl);
            }
            girl.style.left=gL+'px';
            girl.style.top=gT+'px';
        },600)
    },7500);

    setTimeout(function(){

        startMove(sunshine, 'opacity', 1, function(){
            startMove(build[0], 'height', 291, function(){
                startMove(build[1], 'height', 224, function(){
                    startMove(build[2], 'height', 190, function(){
                        startMove(build[3], 'height', 327);
                    });
                });
            });
        });

    },7000);



    // skill 按钮
    var ski=document.getElementById('ski');
    var li=ski.getElementsByTagName('li');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var cloud = document.getElementById('cloud');
    var cloudLi = cloud.getElementsByTagName('li');
    var arr=[];
    for(var i=0; i<li.length;i++){
        var oSpan=li[i].children[0];
        arr[i]={left:getStyle(li[i],'left'),opacity:getStyle(li[i],'opaticy'),transform:getStyle(li[i],
            'transform'),zIndex:getStyle(li[i],'z-index'),spanOpacity:getStyle(oSpan,'opacity')};
    }
    prev.onclick=function(){
        arr.unshift(arr.pop());
        datas.unshift(datas.pop());
        toStyle();
    };
    next.onclick=function(){
        arr.push(arr.shift());
        datas.push(datas.shift());
        toStyle();
    };
    function toStyle(){
        for(var i=0;i<li.length;i++){
            var oSpan=li[i].children[0];
            li[i].style.left=arr[i].left;
            li[i].style.opacity=arr[i].opacity;
            li[i].style.transform=arr[i].transform;
            li[i].style.zIndex=arr[i].zIndex;
            oSpan.style.opacity=arr[i].spanOpacity;
        }
        for(var i=0;i<cloudLi.length;i++){
            cloudLi[i].innerHTML=datas[0][i];
        }
    };

    // 云里面的文字简介初始化
    for(var i=0;i<cloudLi.length;i++){
        cloudLi[i].innerHTML=datas[0][i];
    };


    // 第二页
    var hand = document.getElementById('hand');
    var dot = document.getElementById('dot');
    var area = document.getElementsByClassName('area');
    var areaText = document.getElementsByClassName('area-text');
    var explain =document.getElementsByClassName('explain');
    var littleM = document.getElementsByClassName('littleM');
    var liHeight = ['0.95','0.9','0.85','0.8','0.75','0.7','0.65','0.6']
    var liStatus=true;

    hand.onclick=function(){
        if(liStatus){
            for(var i=0;i<area.length;i++){
                area[i].index=i;
                startMove(area[i],'height',parseInt(150*liHeight[i]));
                startMove(littleM[i],'marginTop',parseInt(150*liHeight[i]-40));
                area[i].onmouseover=function(){                  
                    explain[this.index].style.display="block";
                }; 
                area[i].onmouseout=function(){
                    explain[this.index].style.display="none";
                };                                  
            }
            liStatus=false;
        }else{
            for(i=0;i<area.length;i++){
                area[i].index=i;
                startMove(area[i],'height',30);
                startMove(littleM[i],'marginTop','-50');
                area[i].onmouseover=function(){                  
                    explain[this.index].style.display="none";
                }; 
                area[i].onmouseout=function(){
                    explain[this.index].style.display="none";
                };   
            }
            liStatus=true;
        }
    }


    // 第三页
    var list = document.getElementById('list');
    var listLi = list.getElementsByTagName('li');
    var scroll = document.getElementById('scroll');
    var scrollSpan = scroll.getElementsByTagName('span')[0];
    var myProject = document.getElementById('my-project');
    var liContent =list.innerHTML;

    var ulContent='';
    for(var i=0;i<spanText.length;i++){
        ulContent+=liContent;
    }
    list.innerHTML=ulContent;

    setTimeout(function(){
        var HH=scroll.offsetHeight/(list.offsetHeight/myProject.offsetHeight);
        console.log(scroll.offsetHeight,list.offsetHeight,myProject.offsetHeight);
        if(myProject.offsetHeight/list.offsetHeight>1){
            HH=0;
        }else if(myProject.offsetHeight/list.offsetHeight<0.1){
            HH=20;
        }
        if(myProject.offsetHeight/list.offsetHeight<1){
             scroll.onmousewheel=list.onmousewheel=goScroll;
        }
        scrollSpan.style.height=HH+'px';
        scrollSpan.onmousedown=function(e){
            var boxHeight = scroll.offsetHeight;
            var box2Height = scrollSpan.offsetHeight;
            var pHeight = list.offsetHeight;
            var beginM = e.clientY-scrollSpan.offsetTop;
            document.onmousemove=function(e){
                var box2Top = scrollSpan.offsetTop;
                var T = e.clientY-beginM;
                if(T<0){
                    T=0;
                }else if(T>boxHeight-box2Height){
                    T=boxHeight-box2Height;
                }
                scrollSpan.style.top=T+'px';
                list.style.top=box2Top/(boxHeight-box2Height)*(scroll.clientHeight-list.offsetHeight)+'px';
            }
            document.onmouseup=function(){
                 document.onmousemove=null;
            }
            return false;
        }
       
        function goScroll(e){
            var onOff=true;
            if(e.wheelDelta){
                if(e.wheelDelta>0){
                    onOff=true;
                }else{
                    onOff=false;
                }
            }
            if(e.detail){
                if(e.detail>0){
                    onOff=false;
                }else{
                    onOff=true;
                }
            }
            var T;
            if(onOff){
                T=scrollSpan.offsetTop-10;
            }else{
                T=scrollSpan.offsetTop+10;
            }
            if(T<0){
                T=0;
            }else if(T>scroll.offsetHeight-scrollSpan.offsetHeight){
                T=scroll.offsetHeight-scrollSpan.offsetHeight;
            }
            scrollSpan.style.top=T+'px';
            list.style.top=scrollSpan.offsetTop/(scroll.offsetHeight-scrollSpan.offsetHeight)*(scroll.clientHeight-list.offsetHeight)+'px';
            return false;
        }

    },500)

    // li里面的背景图
    var number=-1;
    for(var i=0;i<listLi.length;i++){
        number++;
        listLi[i].style.background='url(img/pic/'+number+'.png)'
        listLi[i].style.backgroundSize='100% 100%'
    }
    var isay = document.getElementsByClassName('isay');
    for(var i=0;i<isay.length;i++){
        isay[i].innerHTML=spanText[i];
    }
    var listA = list.getElementsByTagName('a');
    for(var i=0;i<listA.length;i++){
        listA[i].href=href[i];
    }
    for(var i=0;i<listLi.length;i++){
        listLi[i].index=i;
        listLi[i].onmouseover=function(){
            console.log(this);
            this.style.cssText='box-shadow: 0 3px 8px 2px white;background-image:url(img/pic/'+this.index+'.png);backgroundSize:100% 100%;marginTop:0';
        }
        listLi[i].onmouseout=function(){
            this.style.cssText='box-shadow: 0 3px 6px 2px black;background-image:url(img/pic/'+this.index+'.png);backgroundSize:100% 100%;marginTop:4%';
        }
    }

    // 第四页
    var photoGo = document.getElementById('photoGo');
    var someOne=0;
    function autoPlay(){
        someOne++;
        if(someOne>2){
            someOne=0;
        }   
        startMove(photoGo,'left','-'+someOne*276)
    }
    
    timer5=setInterval(function(){
        autoPlay();
    },2000);

    // 点击nav
    var nav = document.getElementById('nav');
    var line =nav.getElementsByClassName('line');
    var menu=document.getElementById('menu');
    var isClick=true;
    nav.onclick=function(){
        if(isClick){
            line[0].style.transform='translate(0,20px) rotate(180deg)';
            line[2].style.transform='translate(0,20px) rotate(180deg)';
            setTimeout(function(){
                line[0].style.transform='translate(0,20px) rotate(405deg)';
                line[2].style.transform='translate(0,20px) rotate(-405deg)';
                line[1].style.display='none';
                menu.style.right='110px';
            },200);
            isClick=false;
        }else{
            line[0].style.transform='rotate(180deg)';
            line[2].style.transform='rotate(-180deg)';
            line[1].style.display='block';
            setTimeout(function(){
                line[0].style.transform='translate(0,10px) rotate(180deg)';
                line[2].style.transform='translate(0,30px) rotate(180deg)';
                menu.style.right='-400px';
            },300);
            isClick=true;
        }
    };

    







    //获取属性
    function getStyle(obj, attr){    
        if(obj.currentStyle){        
            return obj.currentStyle[attr];
        }else{       
            return getComputedStyle(obj, false)[attr];
        }
    }

    //运动框架
    function startMove(obj, attr, iTarget, fn){   
        clearInterval(obj.timer);
        obj.timer=setInterval(function (){
            var iCur=0;        
            if(attr=='opacity'){           
                iCur=parseFloat(getStyle(obj, attr));
            }else{            
                iCur=parseInt(getStyle(obj, attr));
            }
            
            var iSpeed=(iTarget-iCur)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
            
            if(iCur==iTarget){            
                clearInterval(obj.timer);
                if(fn){               
                    fn();
                }
            }else{           
                if(attr=='opacity'){
                    obj.style.opacity=iCur+iSpeed;
                }else{                                
                    obj.style[attr]=iCur+iSpeed+'px';
                }
            }
        }, 30);
    };



};