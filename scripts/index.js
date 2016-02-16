window.onload=function(){
	var screen=document.getElementById('screen');
	for(var i=0;i<220;i++){
		var block=document.createElement('div');
		block.setAttribute('class','block');
		screen.appendChild(block);
		while(block.innerHTML==''){
			var random=Math.random()*123;
			if(random>=65&&random<=90||random>=97&&random<=122){
				block.innerHTML=String.fromCharCode(random);
			}
		}
	}
	var blocks=document.getElementsByClassName('block');
	var ran=Math.floor(Math.random()*220),pre;
	var start=document.getElementById('start');
	var kk,timerId1,timerId2,kaiguan,kd,kg1,kg2,l=0;
	start.onclick=function(){
		if(!kg1||!kg2){
			return;
		}
		kd=true;
		if(!kk){
			timerId1=setInterval(function(){
				ran=Math.floor(Math.random()*220);
				if(pre){
					pre.style.background='#fff';
					pre.style.opacity=0;
				}
				blocks[ran].style.opacity=1;
				pre=blocks[ran];
				l++;
				if(l>5&&!kaiguan){
					clearInterval(timerId2);
					clearInterval(timerId1);
					zhezhao.style.display='block';
					fen.innerHTML=n.innerHTML;
					shi.innerHTML=num.innerHTML;
				}		
			},time);
			if(!kaiguan){
				timerId2=setInterval(function(){
					num.innerHTML++;	
				},1000);
			}else{
				timerId2=setInterval(function(){
					num.innerHTML--;
					console.log(typeof(num.innerHTML));
					if(num.innerHTML=='0'){
						clearInterval(timerId2);
						clearInterval(timerId1);
						zhezhao.style.display='block';
						cc.style.display='none';
						fen.innerHTML=n.innerHTML;
					}
				},1000);
			}
			kk=true;
			start.innerHTML='暂停';
		}else{
			clearInterval(timerId1);
			clearInterval(timerId2);
			kk=false;
			start.innerHTML='开始';
		}
	};
	var num=document.getElementById('num');
	var n=document.getElementById('n');
	document.onkeydown=function(e){
		var code=e.keyCode;
		if(!kk){
			return;
		}
		if(e.shiftKey){
			code+=32;
		}
		if(code==blocks[ran].innerHTML.charCodeAt(0)){
			blocks[ran].style.background='green';
			n.innerHTML++;
			l=0;
		}
	};
	var nandu=document.getElementById('nandu');
	var nns=document.getElementById('nn');
	var moshi=document.getElementById('moshi');
	var mms=document.getElementById('mm');
	var shuoming=document.getElementById('shuoming');
	var sss=document.getElementById('ss');
	var jiandan=document.getElementById('jiandan');
	var yiban=document.getElementById('yiban');
	var kunnan=document.getElementById('kunnan');
	var jingdian=document.getElementById('jingdian');
	var jieji=document.getElementById('jieji');
	var k1,k2,k3,time=2000,p;
	nandu.onclick=function(e){
		// e.target.style.color='black';
		if(e.target==nd&&k1){
			nns.style.display='none';
			k1=false;
		}else if(e.target==nd&&!k1){
			nns.style.display='block';
			// e.target.style.color='blue';
			k1=true;
		}
		jiandan.onclick=function(){
			if(kd){
				return;
			}
			time=2000;
			kg1=true;
			this.style.color="red";
			yiban.style.color="black";
			kunnan.style.color="black";
		};
		yiban.onclick=function(){
			if(kd){
				return;
			}
			time=1200;
			kg1=true;
			this.style.color="red";
			jiandan.style.color="black";
			kunnan.style.color="black";
		};
		kunnan.onclick=function(){
			if(kd){
				return;
			}
			time=800;
			kg1=true;
			this.style.color="red";
			yiban.style.color="black";
			jiandan.style.color="black";
		}	
	};
	moshi.onclick=function(e){
		if(k2&&e.target==ms){
			mms.style.display='none';
			k2=false;
		}else if(!k2&&e.target==ms){
			mms.style.display='block';
			k2=true;
		}
		if(kd){
			return;
		}
		jingdian.onclick=function(){
			num.innerHTML=60;
			kaiguan=true;
			kg2=true;
			this.style.color="red";
			jieji.style.color='black';
		};
		jieji.onclick=function(){
			num.innerHTML=0;
			kaiguan=false;
			kg2=true;
			this.style.color="red";
			jingdian.style.color='black';
		};
	};
	shuoming.onclick=function(e){
		if(k3&&e.target==sm){
			sss.style.display='none';
			k3=false;
		}else{
			sss.style.display='block';
			k3=true;
		}
	};
	var zhezhao=document.getElementById('zhezhao');
	var fen=document.getElementById('fen');
	var bb=document.getElementById('bb');
	var cc=document.getElementById('cc');
	var shi=document.getElementById('shi');
	bb.onclick=function(){
		zhezhao.style.display='none';
		location.reload();
	};
	document.onmousedown=function(e){
		e.preventDefault();
	};
};