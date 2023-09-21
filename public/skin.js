// Garden Gnome Software - Skin
// Pano2VR 6.1.2/17873
// Filename: Los tordos.ggsk
// Generated 2023-09-18T22:38:32

function pano2vrSkin(player,base) {
	player.addVariable('var_compass', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('vis_card', 2, false);
	player.addVariable('ht_ani', 2, true);
	player.addVariable('descriptionPopUp', 0, "");
	player.addVariable('OpenPopUp', 2, false);
	player.addVariable('ht_ani_1', 2, true);
	player.addVariable('enlaceTemporal', 0, "");
	player.addVariable('numerolote', 0, "");
	player.addVariable('popup_geoInfo', 2, false);
	player.addVariable('tagsOn', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 469px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 630px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_2);
		el=me._compass=document.createElement('div');
		el.ggId="Compass";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._compass.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._compass.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._compass.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._compass.style[domTransition]='right 0s, bottom 0s, opacity 0s';
				if (me._compass.ggCurrentLogicStatePosition == 0) {
					me._compass.style.right='31px';
					me._compass.style.bottom='85px';
				}
				else {
					me._compass.style.right='31px';
					me._compass.style.bottom='5px';
				}
			}
		}
		me._compass.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._compass.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._compass.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._compass.style[domTransition]='right 0s, bottom 0s, opacity 0s';
				if (me._compass.ggCurrentLogicStateAlpha == 0) {
					me._compass.style.visibility=me._compass.ggVisible?'inherit':'hidden';
					me._compass.style.opacity=0.5;
				}
				else {
					me._compass.style.visibility=me._compass.ggVisible?'inherit':'hidden';
					me._compass.style.opacity=1;
				}
			}
		}
		me._compass.ggUpdatePosition=function (useTransition) {
		}
		el=me._compassring=document.createElement('div');
		el.ggId="CompassRing";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 14px solid rgba(255,255,255,0.686275);';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		hs+='color: white;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compassring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compassring.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._n=document.createElement('div');
		els=me._n__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="N";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="N";
		el.appendChild(els);
		me._n.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._n.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._compassring.appendChild(me._n);
		el=me._e=document.createElement('div');
		els=me._e__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="E";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : -13px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="E";
		el.appendChild(els);
		me._e.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._e.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._compassring.appendChild(me._e);
		el=me._s=document.createElement('div');
		els=me._s__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="S";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:-180,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -13px;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="S";
		el.appendChild(els);
		me._s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._compassring.appendChild(me._s);
		el=me._o=document.createElement('div');
		els=me._o__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="O";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="O";
		el.appendChild(els);
		me._o.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._o.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._compassring.appendChild(me._o);
		me._compass.appendChild(me._compassring);
		el=me._compasspointer1=document.createElement('div');
		els=me._compasspointer1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ5LjcyIDE3My44NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDojYjdiN2I3O308L3N0eWxlPgogPC9kZWZzPgogPHRpdGxlPlJlY3Vyc28gMTwvdGl0bGU+CiA8ZyBpZD0iQ2FwYV8yIiBkYXRhLW5hbWU9IkNhcGEgMiI+CiAgPGcgaWQ9IkNhcGFfMS0yIiBkYXRhLW5hbWU9IkNhcGEgMSI+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxNDkuNzIgMTczLjg2IDc0Ljg2IDEzNS44NiA3NC44NiAwIDE0OS43MiAxNzMuODYiLz4KICAgPHBvbH'+
			'lnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9Ijc0Ljg2IDAgNzQuODYgMTM1Ljg2IDAgMTczLjg2IDc0Ljg2IDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._compasspointer1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;color: white;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CompassPointer1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		hs+='color: white;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compasspointer1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compasspointer1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_compass') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._compasspointer1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._compasspointer1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._compasspointer1.style[domTransition]='';
				if (me._compasspointer1.ggCurrentLogicStateVisible == 0) {
					me._compasspointer1.style.visibility="hidden";
					me._compasspointer1.ggVisible=false;
				}
				else {
					me._compasspointer1.style.visibility=(Number(me._compasspointer1.style.opacity)>0||!me._compasspointer1.style.opacity)?'inherit':'hidden';
					me._compasspointer1.ggVisible=true;
				}
			}
		}
		me._compasspointer1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._compass.appendChild(me._compasspointer1);
		el=me._beamdot=document.createElement('div');
		el.ggId="BeamDot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(0,0,0,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._beamdot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._beamdot.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_compass') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._beamdot.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._beamdot.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._beamdot.style[domTransition]='';
				if (me._beamdot.ggCurrentLogicStateVisible == 0) {
					me._beamdot.style.visibility=(Number(me._beamdot.style.opacity)>0||!me._beamdot.style.opacity)?'inherit':'hidden';
					me._beamdot.ggVisible=true;
				}
				else {
					me._beamdot.style.visibility="hidden";
					me._beamdot.ggVisible=false;
				}
			}
		}
		me._beamdot.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._compassbeam=document.createElement('div');
		els=me._compassbeam__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCI+CiA8cGF0aCBkPSJNNTAsNTBMNjYsMThIMzRMNTAsNTAiIGZpbGw9IiMwMDAwMDAiIGlkPSJUcmlhbmdsZV8xIiBjbGFzcz0iY2xzLTEiIGZpbGwtb3BhY2l0eT0iMC42ODYyNzUiIGRhdGEtbmFtZT0iVHJpYW5nbGUgMSIvPgo8L3N2Zz4K';
		me._compassbeam__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CompassBeam";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compassbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compassbeam.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._beamdot.appendChild(me._compassbeam);
		me._compass.appendChild(me._beamdot);
		me.divSkin.appendChild(me._compass);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 106px;';
		hs+='left : 50%;';
		hs+='margin-left : -54.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 109px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 9 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 9 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 9 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 9 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._thumbnail_menu__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 9px; height: 480px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_menu__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 9px; height: 480px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_menu.ggScrollPosY = 0;
		me._thumbnail_menu.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastY = e.clientY;
				me._thumbnail_menu.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_menu.ggScrollHeight;
			if (e.offsetY < me._thumbnail_menu.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_menu.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_menu.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_menu.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 9px; height: 9px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(100% - 36px);';
		hs+='left : 0%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 115px;';
		hs+='pointer-events:none;';
		hs+='background-color:white;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 9;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (9/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._thumbnail_menu__vertScrollBg.style.visibility = 'inherit';
				me._thumbnail_menu__vertScrollFg.style.visibility = 'inherit';
				me._thumbnail_menu.ggVertScrollVisible = true;
				if(me._thumbnail_menu.ggVertScrollVisible) {
					me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth - 9;
					if (me._thumbnail_menu.ggHorScrollVisible) {
						me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight - 9;
						me._thumbnail_menu.ggAvailableHeightWithScale = me._thumbnail_menu.getBoundingClientRect().height - me._thumbnail_menu__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_menu__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight;
						me._thumbnail_menu.ggAvailableHeightWithScale = me._thumbnail_menu.getBoundingClientRect().height;
						me._thumbnail_menu__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_menu__vertScrollBg.style.height = me._thumbnail_menu.ggAvailableHeight + 'px';
					me._thumbnail_menu.ggVPercentVisible = me._thumbnail_menu.ggAvailableHeightWithScale / contentHeight;
					if (me._thumbnail_menu.ggVPercentVisible > 1.0) me._thumbnail_menu.ggVPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollHeight =  Math.round(me._thumbnail_menu__vertScrollBg.offsetHeight * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu__vertScrollFg.style.height = me._thumbnail_menu.ggScrollHeight + 'px';
					me._thumbnail_menu.ggScrollPosY = me._thumbnail_menu.ggScrollPosYPercent * me._thumbnail_menu.ggAvailableHeight;
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
					me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth;
					me._thumbnail_menu.ggScrollPosY = 0;
					me._thumbnail_menu.ggScrollPosYPercent = 0.0;
					me._thumbnail_menu__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_menu__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 110;
		el.ggHeight = 106;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._rectangle_1 && me._thumbnail_cloner.ggInstances[i]._rectangle_1.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._rectangle_1.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._text_14 && me._thumbnail_cloner.ggInstances[i]._text_14.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._text_14.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._svg_10 && me._thumbnail_cloner.ggInstances[i]._svg_10.logicBlock_scaling) {
						me._thumbnail_cloner.ggInstances[i]._svg_10.logicBlock_scaling();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_nodeimage && me._thumbnail_cloner.ggInstances[i]._thumbnail_nodeimage.logicBlock_scaling) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_nodeimage.logicBlock_scaling();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumCols = 0;
			curNumCols = me._thumbnail_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "mostrar";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 106px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._card=document.createElement('div');
		el.ggId="card";
		el.ggDx=0;
		el.ggDy=-16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 214px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._card.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._card.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_card') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._card.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._card.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._card.style[domTransition]='';
				if (me._card.ggCurrentLogicStateVisible == 0) {
					me._card.style.visibility=(Number(me._card.style.opacity)>0||!me._card.style.opacity)?'inherit':'hidden';
					me._card.ggVisible=true;
				}
				else {
					me._card.style.visibility="hidden";
					me._card.ggVisible=false;
				}
			}
		}
		me._card.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._card_body=document.createElement('div');
		els=me._card_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="card_body";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardDescription";
		el.ggType='text';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 71px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: 90px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._card_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._card_body.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._card.appendChild(me._card_body);
		el=me._card_title=document.createElement('div');
		els=me._card_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="card_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardTitle";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 73px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._card_title.ggUpdateText=function() {
			var hs="Lote "+player.getVariableValue('numerolote');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._card_title.ggUpdateText();
		player.addListener('timer', function() {
			me._card_title.ggUpdateText();
		});
		el.appendChild(els);
		me._card_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._card_title.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._card_title);
		el=me._card_price=document.createElement('div');
		els=me._card_price__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="card_price";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardPrice";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 73px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._card_price.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._card_price.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._card_price);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MjUuMiAyODMuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDI1LjIgMjgzLjU7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHZlcnNpb2'+
			'49IjEuMSIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojQjRCNkMzO30mI3hkOwoJLnN0MXtmaWxsOiMxQjFBMTg7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzY4LjIsMjgzLjVINTdjLTMxLjUsMC01Ny0yMS4yLTU3LTQ3LjVWNDcuNUMwLDIxLjIsMjUuNSwwLDU3LDBoMzExLjJjMzEuNSwwLDU3LDIxLjIsNTcsNDcuNXYxODguNCYjeGQ7JiN4YTsmI3g5O0M0MjUuMiwyNjIuMSwzOTkuNywyODMuNSwzNjguMiwyODMuNXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMDguMSw0NS44Yy0yNC0yNC01NS45LTM3LjMtODku'+
			'OC0zNy4zYy03MCwwLTEyNyw1Ny0xMjcsMTI3YzAsMjIuNCw1LjksNDQuMiwxNi45LDYzLjRsLTE4LDY1LjhsNjcuMy0xNy43JiN4ZDsmI3hhOyYjeDk7YzE4LjUsMTAuMSwzOS40LDE1LjQsNjAuNywxNS40aDAuMWM2OS45LDAsMTI4LjEtNTcsMTI4LjEtMTI3QzM0Ni40LDEwMS43LDMzMiw2OS44LDMwOC4xLDQ1Ljh6IE0yMTguMywyNDEuMSYjeGQ7JiN4YTsmI3g5O2MtMTksMC0zNy41LTUuMS01My44LTE0LjdsLTMuOC0yLjNsLTM5LjksMTAuNWwxMC42LTM4LjlsLTIuNS00Yy0xMC42LTE2LjgtMTYuMS0zNi4yLTE2LjEtNTYuMmMwLTU4LjEsNDcuNC0xMDUuNSwxMDUuNi0xMDUuNSYjeGQ7Ji'+
			'N4YTsmI3g5O2MyOC4yLDAsNTQuNywxMSw3NC41LDMxczMyLjEsNDYuNCwzMi4xLDc0LjZDMzI1LDE5My44LDI3Ni40LDI0MS4xLDIxOC4zLDI0MS4xeiBNMjc2LjIsMTYyLjFjLTMuMS0xLjYtMTguNy05LjItMjEuNi0xMC4zJiN4ZDsmI3hhOyYjeDk7Yy0yLjktMS4xLTUuMS0xLjYtNy4yLDEuNmMtMi4xLDMuMi04LjIsMTAuMy0xMCwxMi41Yy0xLjksMi4xLTMuNywyLjQtNi44LDAuOGMtMTguNi05LjMtMzAuOS0xNi43LTQzLjItMzcuNyYjeGQ7JiN4YTsmI3g5O2MtMy4zLTUuNiwzLjMtNS4yLDkuMy0xNy4zYzEuMS0yLjEsMC41LTMuOS0wLjMtNS42Yy0wLjgtMS42LTcuMi0xNy4yLTkuOC0y'+
			'My42Yy0yLjYtNi4yLTUuMi01LjMtNy4yLTUuNGMtMS45LTAuMS0zLjktMC4xLTYtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC01LjYsMC44LTguNCwzLjljLTIuOSwzLjItMTEuMSwxMC44LTExLjEsMjYuNHMxMS40LDMwLjcsMTMsMzIuOGMxLjYsMi4xLDIyLjQsMzQuMiw1NC4yLDQ3LjljMjAuMSw4LjcsMjgsOS40LDM4LjEsOCYjeGQ7JiN4YTsmI3g5O2M2LjEtMC45LDE4LjctNy42LDIxLjQtMTUuMWMyLjctNy41LDIuNy0xMy44LDEuOS0xNS4xQzI4MS41LDE2NC40LDI3OS4zLDE2My42LDI3Ni4yLDE2Mi4xeiIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateScaling == 0) {
					me._svg_1.ggParameter.sx = 1.1;
					me._svg_1.ggParameter.sy = 1.1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.sx = 1;
					me._svg_1.ggParameter.sy = 1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		me._svg_1.onclick=function (e) {
			player.openUrl("https:\/\/wa.me\/56987631317\n","_blank");
		}
		me._svg_1.onmouseover=function (e) {
			me.elementMouseOver['svg_1']=true;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.onmouseout=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.ontouchend=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 69px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 69px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>Reservar";
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_1.appendChild(me._text_5);
		me._container_2.appendChild(me._svg_1);
		el=me._buttongotopanorama=document.createElement('div');
		els=me._buttongotopanorama__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="buttongotopanorama";
		el.ggDx=49;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 68px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: 700; margin-bottom:2px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 68px;';
		hs+='height: 15px;';
		hs+='background: #b4b6c3;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 2px;';
		hs+=cssPrefix + 'border-radius: 2px;';
		hs+='color: #000000;';
		hs+='font-size: 10px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="foto parcela";
		el.appendChild(els);
		me._buttongotopanorama.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttongotopanorama.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['buttongotopanorama'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttongotopanorama.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttongotopanorama.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttongotopanorama.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._buttongotopanorama.ggCurrentLogicStateScaling == 0) {
					me._buttongotopanorama.ggParameter.sx = 1.1;
					me._buttongotopanorama.ggParameter.sy = 1.1;
					me._buttongotopanorama.style[domTransform]=parameterToTransform(me._buttongotopanorama.ggParameter);
				}
				else {
					me._buttongotopanorama.ggParameter.sx = 1;
					me._buttongotopanorama.ggParameter.sy = 1;
					me._buttongotopanorama.style[domTransform]=parameterToTransform(me._buttongotopanorama.ggParameter);
				}
			}
		}
		me._buttongotopanorama.onclick=function (e) {
			player.openNext(player.getVariableValue('enlaceTemporal'),"");
			player.setVariableValue('vis_card', false);
			me._main_title.ggText=me.ggUserdata.title;
			me._main_title.ggTextDiv.innerHTML=me._main_title.ggText;
			if (me._main_title.ggUpdateText) {
				me._main_title.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._main_title.ggUpdatePosition) {
				me._main_title.ggUpdatePosition();
			}
			me._main_title.ggTextDiv.scrollTop = 0;
		}
		me._buttongotopanorama.onmouseover=function (e) {
			me.elementMouseOver['buttongotopanorama']=true;
			me._buttongotopanorama.logicBlock_scaling();
		}
		me._buttongotopanorama.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttongotopanorama__text)
					return;
				}
			}
			me.elementMouseOver['buttongotopanorama']=false;
			me._buttongotopanorama.logicBlock_scaling();
		}
		me._buttongotopanorama.ontouchend=function (e) {
			me.elementMouseOver['buttongotopanorama']=false;
			me._buttongotopanorama.logicBlock_scaling();
		}
		me._buttongotopanorama.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_2.appendChild(me._buttongotopanorama);
		el=me._buttongdownload=document.createElement('div');
		els=me._buttongdownload__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="buttongdownload";
		el.ggDx=-21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: 700; margin-bottom:2px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 65px;';
		hs+='height: 15px;';
		hs+='background: #b4b6c3;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 2px;';
		hs+=cssPrefix + 'border-radius: 2px;';
		hs+='color: #000000;';
		hs+='font-size: 10px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="plano";
		el.appendChild(els);
		me._buttongdownload.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttongdownload.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['buttongdownload'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttongdownload.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttongdownload.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttongdownload.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._buttongdownload.ggCurrentLogicStateScaling == 0) {
					me._buttongdownload.ggParameter.sx = 1.1;
					me._buttongdownload.ggParameter.sy = 1.1;
					me._buttongdownload.style[domTransform]=parameterToTransform(me._buttongdownload.ggParameter);
				}
				else {
					me._buttongdownload.ggParameter.sx = 1;
					me._buttongdownload.ggParameter.sy = 1;
					me._buttongdownload.style[domTransform]=parameterToTransform(me._buttongdownload.ggParameter);
				}
			}
		}
		me._buttongdownload.onclick=function (e) {
			player.openUrl("https:\/\/drive.google.com\/file\/d\/1qDz9r8J4TDquoU0lnpG1fgJxPp9iduED\/view?usp=share_link","_blank");
		}
		me._buttongdownload.onmouseover=function (e) {
			me.elementMouseOver['buttongdownload']=true;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttongdownload__text)
					return;
				}
			}
			me.elementMouseOver['buttongdownload']=false;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.ontouchend=function (e) {
			me.elementMouseOver['buttongdownload']=false;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_2.appendChild(me._buttongdownload);
		me._card.appendChild(me._container_2);
		el=me._buttonclose=document.createElement('div');
		els=me._buttonclose__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="buttonclose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: 700; margin-bottom:2px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 28px;';
		hs+='height: 15px;';
		hs+='background: #b4b6c3;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 2px;';
		hs+=cssPrefix + 'border-radius: 2px;';
		hs+='color: #000000;';
		hs+='font-size: 10px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="x";
		el.appendChild(els);
		me._buttonclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttonclose.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['buttonclose'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttonclose.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttonclose.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttonclose.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._buttonclose.ggCurrentLogicStateScaling == 0) {
					me._buttonclose.ggParameter.sx = 1.1;
					me._buttonclose.ggParameter.sy = 1.1;
					me._buttonclose.style[domTransform]=parameterToTransform(me._buttonclose.ggParameter);
				}
				else {
					me._buttonclose.ggParameter.sx = 1;
					me._buttonclose.ggParameter.sy = 1;
					me._buttonclose.style[domTransform]=parameterToTransform(me._buttonclose.ggParameter);
				}
			}
		}
		me._buttonclose.onclick=function (e) {
			player.setVariableValue('vis_card', false);
		}
		me._buttonclose.onmouseover=function (e) {
			me.elementMouseOver['buttonclose']=true;
			me._buttonclose.logicBlock_scaling();
		}
		me._buttonclose.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttonclose__text)
					return;
				}
			}
			me.elementMouseOver['buttonclose']=false;
			me._buttonclose.logicBlock_scaling();
		}
		me._buttonclose.ontouchend=function (e) {
			me.elementMouseOver['buttonclose']=false;
			me._buttonclose.logicBlock_scaling();
		}
		me._buttonclose.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._buttonclose);
		me.divSkin.appendChild(me._card);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 535px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background-color:white;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_hide_button=document.createElement('div');
		els=me._thumbnail_hide_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIH'+
			'k9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MTE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC43QzAsMTEuOSw1LjYsNi4yLDEyLjUsNi4yaDc1YzYuOSwwLDEyLjUsNS42LDEyLjUsMTIuNXY2Mi41YzAsNi45LTUuNiwxMi41LTEyLjUsMTIuNWgtNzVDNS42LDkzLjcsMCw4OC4xLDAsODEuMiYjeGQ7JiN4YTsmI3g5O1YxOC43eiBNNjMuMiwzOS42Yy0wLjktMS4zLTIuMy0yLjEtMy45LTIuMXMtMywwLjgtMy45'+
			'LDIuMWwtMTcsMjQuOUwzMy4zLDU4Yy0wLjktMS4xLTIuMi0xLjgtMy43LTEuOFMyNi45LDU2LjksMjYsNThMMTMuNSw3My42JiN4ZDsmI3hhOyYjeDk7Yy0xLjEsMS40LTEuMywzLjMtMC42LDVzMi40LDIuNyw0LjIsMi43aDE4LjhoNi4zaDQwLjZjMS43LDAsMy4zLTEsNC4xLTIuNWMwLjgtMS41LDAuNy0zLjQtMC4zLTQuOEw2My4yLDM5LjZMNjMuMiwzOS42eiYjeGQ7JiN4YTsmI3g5OyBNMjEuOSwzNy41YzUuMiwwLDkuNC00LjIsOS40LTkuNGMwLTUuMi00LjItOS40LTkuNC05LjRzLTkuNCw0LjItOS40LDkuNEMxMi41LDMzLjMsMTYuNywzNy41LDIxLjksMzcuNXoiLz4KIDxsaW5lIHkxPS'+
			'I4OS40IiB4MT0iNiIgY2xhc3M9InN0MCIgeDI9IjkyLjkiIHkyPSIxMS40Ii8+Cjwvc3ZnPgo=';
		me._thumbnail_hide_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_hide_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIH'+
			'k9IjBweCI+CiA8cGF0aCBkPSJNMCwxOC43QzAsMTEuOSw1LjYsNi4yLDEyLjUsNi4yaDc1YzYuOSwwLDEyLjUsNS42LDEyLjUsMTIuNXY2Mi41YzAsNi45LTUuNiwxMi41LTEyLjUsMTIuNWgtNzVDNS42LDkzLjcsMCw4OC4xLDAsODEuMiYjeGQ7JiN4YTsmI3g5O1YxOC43eiBNNjMuMiwzOS42Yy0wLjktMS4zLTIuMy0yLjEtMy45LTIuMXMtMywwLjgtMy45LDIuMWwtMTcsMjQuOUwzMy4zLDU4Yy0wLjktMS4xLTIuMi0xLjgtMy43LTEuOFMyNi45LDU2LjksMjYsNThMMTMuNSw3My42JiN4ZDsmI3hhOyYjeDk7Yy0xLjEsMS40LTEuMywzLjMtMC42LDVzMi40LDIuNyw0LjIsMi43aDE4LjhoNi4z'+
			'aDQwLjZjMS43LDAsMy4zLTEsNC4xLTIuNWMwLjgtMS41LDAuNy0zLjQtMC4zLTQuOEw2My4yLDM5LjZMNjMuMiwzOS42eiYjeGQ7JiN4YTsmI3g5OyBNMjEuOSwzNy41YzUuMiwwLDkuNC00LjIsOS40LTkuNGMwLTUuMi00LjItOS40LTkuNC05LjRzLTkuNCw0LjItOS40LDkuNEMxMi41LDMzLjMsMTYuNywzNy41LDIxLjksMzcuNXoiLz4KPC9zdmc+Cg==';
		me._thumbnail_hide_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_hide_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_hide_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_hide_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_hide_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_hide_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_hide_button.style[domTransition]='opacity 0s';
				if (me._thumbnail_hide_button.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_hide_button.style.visibility="hidden";
					me._thumbnail_hide_button.style.opacity=0;
				}
				else {
					me._thumbnail_hide_button.style.visibility=me._thumbnail_hide_button.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button.style.opacity=1;
				}
			}
		}
		me._thumbnail_hide_button.onmouseover=function (e) {
			me._thumbnail_hide_button__img.style.visibility='hidden';
			me._thumbnail_hide_button__imgo.style.visibility='inherit';
		}
		me._thumbnail_hide_button.onmouseout=function (e) {
			me._thumbnail_hide_button__img.style.visibility='inherit';
			me._thumbnail_hide_button__imgo.style.visibility='hidden';
		}
		me._thumbnail_hide_button.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_hide_button);
		el=me._thumbnail_show_button=document.createElement('div');
		els=me._thumbnail_show_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIH'+
			'k9IjBweCI+CiA8cGF0aCBkPSJNMCwxOC43QzAsMTEuOSw1LjYsNi4yLDEyLjUsNi4yaDc1YzYuOSwwLDEyLjUsNS42LDEyLjUsMTIuNXY2Mi41YzAsNi45LTUuNiwxMi41LTEyLjUsMTIuNWgtNzVDNS42LDkzLjcsMCw4OC4xLDAsODEuMiYjeGQ7JiN4YTsmI3g5O1YxOC43eiBNNjMuMiwzOS42Yy0wLjktMS4zLTIuMy0yLjEtMy45LTIuMXMtMywwLjgtMy45LDIuMWwtMTcsMjQuOUwzMy4zLDU4Yy0wLjktMS4xLTIuMi0xLjgtMy43LTEuOFMyNi45LDU2LjksMjYsNThMMTMuNSw3My42JiN4ZDsmI3hhOyYjeDk7Yy0xLjEsMS40LTEuMywzLjMtMC42LDVzMi40LDIuNyw0LjIsMi43aDE4LjhoNi4z'+
			'aDQwLjZjMS43LDAsMy4zLTEsNC4xLTIuNWMwLjgtMS41LDAuNy0zLjQtMC4zLTQuOEw2My4yLDM5LjZMNjMuMiwzOS42eiYjeGQ7JiN4YTsmI3g5OyBNMjEuOSwzNy41YzUuMiwwLDkuNC00LjIsOS40LTkuNGMwLTUuMi00LjItOS40LTkuNC05LjRzLTkuNCw0LjItOS40LDkuNEMxMi41LDMzLjMsMTYuNywzNy41LDIxLjksMzcuNXoiLz4KPC9zdmc+Cg==';
		me._thumbnail_show_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIH'+
			'k9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MTE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC43QzAsMTEuOSw1LjYsNi4yLDEyLjUsNi4yaDc1YzYuOSwwLDEyLjUsNS42LDEyLjUsMTIuNXY2Mi41YzAsNi45LTUuNiwxMi41LTEyLjUsMTIuNWgtNzVDNS42LDkzLjcsMCw4OC4xLDAsODEuMiYjeGQ7JiN4YTsmI3g5O1YxOC43eiBNNjMuMiwzOS42Yy0wLjktMS4zLTIuMy0yLjEtMy45LTIuMXMtMywwLjgtMy45'+
			'LDIuMWwtMTcsMjQuOUwzMy4zLDU4Yy0wLjktMS4xLTIuMi0xLjgtMy43LTEuOFMyNi45LDU2LjksMjYsNThMMTMuNSw3My42JiN4ZDsmI3hhOyYjeDk7Yy0xLjEsMS40LTEuMywzLjMtMC42LDVzMi40LDIuNyw0LjIsMi43aDE4LjhoNi4zaDQwLjZjMS43LDAsMy4zLTEsNC4xLTIuNWMwLjgtMS41LDAuNy0zLjQtMC4zLTQuOEw2My4yLDM5LjZMNjMuMiwzOS42eiYjeGQ7JiN4YTsmI3g5OyBNMjEuOSwzNy41YzUuMiwwLDkuNC00LjIsOS40LTkuNGMwLTUuMi00LjItOS40LTkuNC05LjRzLTkuNCw0LjItOS40LDkuNEMxMi41LDMzLjMsMTYuNywzNy41LDIxLjksMzcuNXoiLz4KIDxsaW5lIHkxPS'+
			'I4OS40IiB4MT0iNiIgY2xhc3M9InN0MCIgeDI9IjkyLjkiIHkyPSIxMS40Ii8+Cjwvc3ZnPgo=';
		me._thumbnail_show_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_show_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_show_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_show_button.style[domTransition]='opacity 0s';
				if (me._thumbnail_show_button.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_show_button.style.visibility=me._thumbnail_show_button.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button.style.opacity=1;
				}
				else {
					me._thumbnail_show_button.style.visibility="hidden";
					me._thumbnail_show_button.style.opacity=0;
				}
			}
		}
		me._thumbnail_show_button.onmouseover=function (e) {
			me._thumbnail_show_button__img.style.visibility='hidden';
			me._thumbnail_show_button__imgo.style.visibility='inherit';
		}
		me._thumbnail_show_button.onmouseout=function (e) {
			me._thumbnail_show_button__img.style.visibility='inherit';
			me._thumbnail_show_button__imgo.style.visibility='hidden';
		}
		me._thumbnail_show_button.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_show_button);
		me._header.appendChild(me._thumbnail);
		el=me._svg_30=document.createElement('div');
		els=me._svg_30__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIH'+
			'k9IjBweCI+CiA8cGF0aCBkPSJNOTkuNCwxMC42YzEuMi0yLjksMC41LTYuMi0xLjctOC4zYy0yLjItMi4yLTUuNS0yLjktOC4zLTEuN0w0LjgsMzUuMmMtMy40LDEuNC01LjMsNS00LjYsOC42UzQsNTAsNy43LDUwSDUwdjQyLjMmI3hkOyYjeGE7JiN4OTtjMCwzLjcsMi42LDYuOCw2LjIsNy41YzMuNiwwLjcsNy4yLTEuMiw4LjYtNC42QzY0LjgsOTUuMiw5OS40LDEwLjYsOTkuNCwxMC42eiIvPgo8L3N2Zz4K';
		me._svg_30__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_30.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_30'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_30.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_30.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_30.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_30.ggCurrentLogicStateScaling == 0) {
					me._svg_30.ggParameter.sx = 1.1;
					me._svg_30.ggParameter.sy = 1.1;
					me._svg_30.style[domTransform]=parameterToTransform(me._svg_30.ggParameter);
				}
				else {
					me._svg_30.ggParameter.sx = 1;
					me._svg_30.ggParameter.sy = 1;
					me._svg_30.style[domTransform]=parameterToTransform(me._svg_30.ggParameter);
				}
			}
		}
		me._svg_30.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 1000))
				)
			) {
				player.openNext("{node1}","-180\/-77\/90");
			}
			player.openNext("{node6}","");
			player.setVariableValue('vis_card', false);
		}
		me._svg_30.onmouseover=function (e) {
			me.elementMouseOver['svg_30']=true;
			me._svg_30.logicBlock_scaling();
		}
		me._svg_30.onmouseout=function (e) {
			me.elementMouseOver['svg_30']=false;
			me._svg_30.logicBlock_scaling();
		}
		me._svg_30.ontouchend=function (e) {
			me.elementMouseOver['svg_30']=false;
			me._svg_30.logicBlock_scaling();
		}
		me._svg_30.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._svg_30);
		el=me._main_title=document.createElement('div');
		els=me._main_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="main_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text mainTitle";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._main_title.ggUpdateText=function() {
			var hs=player.getNodeUserdata('_master').title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._main_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._main_title.ggUpdateText();
		});
		el.appendChild(els);
		me._main_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._main_title.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("mostrar") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._main_title.ggCurrentLogicStateText != newLogicStateText) {
				me._main_title.ggCurrentLogicStateText = newLogicStateText;
				me._main_title.style[domTransition]='';
				if (me._main_title.ggCurrentLogicStateText == 0) {
					me._main_title.ggText=me.ggUserdata.title;
					me._main_title__text.innerHTML=me._main_title.ggText;
					if (me._main_title.ggUpdateText) {
					me._main_title.ggUpdateText=function() {
						var hs=me.ggUserdata.title;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._main_title.ggUpdatePosition) me._main_title.ggUpdatePosition();
					}
				}
				else {
					me._main_title.ggText=player.getNodeUserdata('_master').title;
					me._main_title__text.innerHTML=me._main_title.ggText;
					if (me._main_title.ggUpdateText) {
					me._main_title.ggUpdateText=function() {
						var hs=player.getNodeUserdata('_master').title;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._main_title.ggUpdatePosition) me._main_title.ggUpdatePosition();
					}
				}
			}
		}
		me._main_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._header.appendChild(me._main_title);
		me.divSkin.appendChild(me._header);
		el=me._menu_inferior=document.createElement('div');
		el.ggId="Menu inferior";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 55px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_inferior.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_inferior.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("main") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_inferior.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_inferior.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_inferior.style[domTransition]='';
				if (me._menu_inferior.ggCurrentLogicStateVisible == 0) {
					me._menu_inferior.style.visibility="hidden";
					me._menu_inferior.ggVisible=false;
				}
				else {
					me._menu_inferior.style.visibility=(Number(me._menu_inferior.style.opacity)>0||!me._menu_inferior.style.opacity)?'inherit':'hidden';
					me._menu_inferior.ggVisible=true;
				}
			}
		}
		me._menu_inferior.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxNyAxNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTcgMTc7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeT0iMH'+
			'B4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwLjksNC45TDcuMiw4LjVsMy42LDMuNmwtMC43LDAuN0w1LjgsOC41bDQuNC00LjRDMTAuMSw0LjEsMTAuOSw0LjksMTAuOSw0Ljl6IE0xNyw4LjUmI3hkOyYjeGE7JiN4OTtjMCw0LjctMy44LDguNS04LjUsOC41UzAsMTMuMiwwLDguNVMzLjgsMCw4LjUsMFMxNywzLjgsMTcsOC41eiBNMTYsOC41QzE2LDQuNCwxMi42LDEsOC41LDFTMSw0LjQsMSw4LjVTNC40LDE2LDguNSwxNiYjeGQ7JiN4YTsmI3g5O1MxNiwxMi42LDE2LDgu'+
			'NXoiLz4KPC9zdmc+Cg==';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 24px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_3'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_3.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_3.ggCurrentLogicStateScaling == 0) {
					me._svg_3.ggParameter.sx = 1.1;
					me._svg_3.ggParameter.sy = 1.1;
					me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
				}
				else {
					me._svg_3.ggParameter.sx = 1;
					me._svg_3.ggParameter.sy = 1;
					me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
				}
			}
		}
		me._svg_3.onclick=function (e) {
			player.moveTo("-79.74","-85.77","96.49","1.5000");
		}
		me._svg_3.onmouseover=function (e) {
			me.elementMouseOver['svg_3']=true;
			me._text_12.logicBlock_visible();
			me._svg_3.logicBlock_scaling();
		}
		me._svg_3.onmouseout=function (e) {
			me.elementMouseOver['svg_3']=false;
			me._text_12.logicBlock_visible();
			me._svg_3.logicBlock_scaling();
		}
		me._svg_3.ontouchend=function (e) {
			me.elementMouseOver['svg_3']=false;
			me._text_12.logicBlock_visible();
			me._svg_3.logicBlock_scaling();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_12=document.createElement('div');
		els=me._text_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -23px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 49px;';
		hs+='pointer-events:auto;';
		hs+='font-size:12pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 49px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="vovler";
		el.appendChild(els);
		me._text_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_3'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_12.style[domTransition]='';
				if (me._text_12.ggCurrentLogicStateVisible == 0) {
					me._text_12.style.visibility=(Number(me._text_12.style.opacity)>0||!me._text_12.style.opacity)?'inherit':'hidden';
					me._text_12.ggVisible=true;
				}
				else {
					me._text_12.style.visibility="hidden";
					me._text_12.ggVisible=false;
				}
			}
		}
		me._text_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._svg_3.appendChild(me._text_12);
		me._menu_inferior.appendChild(me._svg_3);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzgzLjk2IDM4My45MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPHRpdGxlPmluZm9pY29uPC90aXRsZT4KIDxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj4KICA8ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCwyMDMuOTN2LTI0Yy4yMi0xLjIxLjQ4LTIuNDIuNjctMy42NCwxLjQyLTkuMjQsMi4yLTE4LjYzLDQuMzQtMjcuN0MyOS4zMSw0NS42NSwxMjkuNDItMT'+
			'cuNjEsMjMzLDQuMzVjODQuNzcsMTgsMTQ4LjE0LDkzLjQyLDE1MC44NywxODAsMS42MSw1MC45MS0xNC4wOSw5NS45NS00Ny42OSwxMzQuMjgtMjkuNiwzMy43Ni02Ni44MSw1NC41NC0xMTEuMDgsNjIuNC03LDEuMjQtMTQuMDUsMi0yMS4wOCwyLjkySDE4MGExOS40OCwxOS40OCwwLDAsMC0yLjg4LS42MmMtMjAuNDYtMS41My00MC4yOS01LjkxLTU5LTE0LjI0QzU0Ljg4LDM0MSwxNi4yOSwyOTMsMi45NCwyMjUsMS41NywyMTguMDYsMSwyMTEsMCwyMDMuOTNabTE5Mi0xNzRBMTYyLDE2MiwwLDAsMCwzMCwxOTEuNzVjLS4xNCw4OS40OCw3Mi41LDE2Mi4xOSwxNjIsMTYyLjE3QTE2MiwxNjIs'+
			'MCwwLDAsMzU0LDE5Mi4wOUMzNTQuMTUsMTAyLjU5LDI4MS41MiwyOS45MSwxOTIsMjkuOTNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE3NywyMjMuOTRxMC0yMy40MSwwLTQ2Ljg0YzAtOS42MSw2LjQxLTE2LjU2LDE1LjExLTE2LjQ2UzIwNywxNjcuNTQsMjA3LDE3N3EwLDQ3LDAsOTQuMDZjMCw5LjUxLTYuMTgsMTYuMTYtMTQuOTIsMTYuMTlzLTE1LTYuNjMtMTUuMDYtMTZRMTc3LDI0Ny41NSwxNzcsMjIzLjk0WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTIuMTcsMTAxLjg3YTIwLjE1LDIwLjE1LDAsMCwxLDIwLjA3LDIwLjM1LDIwLjI0LDIwLjI0LDAsMSwxLT'+
			'QwLjQ4LS4zM0EyMC4xNywyMC4xNywwLDAsMSwxOTIuMTcsMTAxLjg3WiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_4'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_4.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_4.ggCurrentLogicStateScaling == 0) {
					me._svg_4.ggParameter.sx = 1.1;
					me._svg_4.ggParameter.sy = 1.1;
					me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
				}
				else {
					me._svg_4.ggParameter.sx = 1;
					me._svg_4.ggParameter.sy = 1;
					me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
				}
			}
		}
		me._svg_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("mainPano") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_4.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_4.ggCurrentLogicStateVisible == 0) {
					me._svg_4.style.visibility="hidden";
					me._svg_4.ggVisible=false;
				}
				else {
					me._svg_4.style.visibility="hidden";
					me._svg_4.ggVisible=false;
				}
			}
		}
		me._svg_4.onclick=function (e) {
			me._card_title.ggText=me.ggUserdata.title;
			me._card_title.ggTextDiv.innerHTML=me._card_title.ggText;
			if (me._card_title.ggUpdateText) {
				me._card_title.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._card_title.ggUpdatePosition) {
				me._card_title.ggUpdatePosition();
			}
			me._card_title.ggTextDiv.scrollTop = 0;
			me._card_body.ggText=me.ggUserdata.description;
			me._card_body.ggTextDiv.innerHTML=me._card_body.ggText;
			if (me._card_body.ggUpdateText) {
				me._card_body.ggUpdateText=function() {
					var hs=me.ggUserdata.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._card_body.ggUpdatePosition) {
				me._card_body.ggUpdatePosition();
			}
			me._card_body.ggTextDiv.scrollTop = 0;
			me._card_price.ggText=me.ggUserdata.information;
			me._card_price.ggTextDiv.innerHTML=me._card_price.ggText;
			if (me._card_price.ggUpdateText) {
				me._card_price.ggUpdateText=function() {
					var hs=me.ggUserdata.information;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._card_price.ggUpdatePosition) {
				me._card_price.ggUpdatePosition();
			}
			me._card_price.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_card', true);
		}
		me._svg_4.onmouseover=function (e) {
			me.elementMouseOver['svg_4']=true;
			me._text_11.logicBlock_visible();
			me._svg_4.logicBlock_scaling();
		}
		me._svg_4.onmouseout=function (e) {
			me.elementMouseOver['svg_4']=false;
			me._text_11.logicBlock_visible();
			me._svg_4.logicBlock_scaling();
		}
		me._svg_4.ontouchend=function (e) {
			me.elementMouseOver['svg_4']=false;
			me._text_11.logicBlock_visible();
			me._svg_4.logicBlock_scaling();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_11=document.createElement('div');
		els=me._text_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 49px;';
		hs+='pointer-events:auto;';
		hs+='font-size:12pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="informaci\xf3n";
		el.appendChild(els);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_4'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_11.style[domTransition]='';
				if (me._text_11.ggCurrentLogicStateVisible == 0) {
					me._text_11.style.visibility=(Number(me._text_11.style.opacity)>0||!me._text_11.style.opacity)?'inherit':'hidden';
					me._text_11.ggVisible=true;
				}
				else {
					me._text_11.style.visibility="hidden";
					me._text_11.ggVisible=false;
				}
			}
		}
		me._text_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((47-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._svg_4.appendChild(me._text_11);
		me._menu_inferior.appendChild(me._svg_4);
		me.divSkin.appendChild(me._menu_inferior);
		el=me._textoguia=document.createElement('div');
		el.ggId="Textoguia";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 69px;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 640px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textoguia.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._textoguia.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getTilt() >= -63))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._textoguia.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._textoguia.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._textoguia.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._textoguia.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._textoguia.style.opacity == 0.0) { me._textoguia.style.visibility="hidden"; } }, 1005);
					me._textoguia.style.opacity=0;
				}
				else {
					me._textoguia.style.visibility=me._textoguia.ggVisible?'inherit':'hidden';
					me._textoguia.style.opacity=1;
				}
			}
		}
		me._textoguia.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 271px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._textoguia.appendChild(me._rectangle_3);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:700; font-size:16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 23px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Explora cada lote haciendo clic en ellos";
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._textoguia.appendChild(me._text_4);
		me.divSkin.appendChild(me._textoguia);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=100;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 526px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp + me._timer_2.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style[domTransition]='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_2);
		el=me._variables=document.createElement('div');
		els=me._variables__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="variables";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._variables.ggUpdateText=function() {
			var hs=player.getCurrentNode();
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._variables.ggUpdateText();
		player.addListener('changenode', function() {
			me._variables.ggUpdateText();
		});
		el.appendChild(els);
		me._variables.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._variables.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._variables);
		el=me._buttonmasterplan=document.createElement('div');
		els=me._buttonmasterplan__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ButtonMasterplan";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 76px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:700; font-size:16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.509804);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 8px 5px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Ver master Plan";
		el.appendChild(els);
		me._buttonmasterplan.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttonmasterplan.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['buttonmasterplan'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttonmasterplan.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttonmasterplan.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttonmasterplan.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._buttonmasterplan.ggCurrentLogicStateScaling == 0) {
					me._buttonmasterplan.ggParameter.sx = 1.1;
					me._buttonmasterplan.ggParameter.sy = 1.1;
					me._buttonmasterplan.style[domTransform]=parameterToTransform(me._buttonmasterplan.ggParameter);
				}
				else {
					me._buttonmasterplan.ggParameter.sx = 1;
					me._buttonmasterplan.ggParameter.sy = 1;
					me._buttonmasterplan.style[domTransform]=parameterToTransform(me._buttonmasterplan.ggParameter);
				}
			}
		}
		me._buttonmasterplan.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getTilt() <= -63))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._buttonmasterplan.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._buttonmasterplan.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._buttonmasterplan.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._buttonmasterplan.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._buttonmasterplan.style.opacity == 0.0) { me._buttonmasterplan.style.visibility="hidden"; } }, 1005);
					me._buttonmasterplan.style.opacity=0;
				}
				else {
					me._buttonmasterplan.style.visibility=me._buttonmasterplan.ggVisible?'inherit':'hidden';
					me._buttonmasterplan.style.opacity=1;
				}
			}
		}
		me._buttonmasterplan.onclick=function (e) {
			player.moveTo("-79","-85","96","2.0000");
		}
		me._buttonmasterplan.onmouseover=function (e) {
			me.elementMouseOver['buttonmasterplan']=true;
			me._buttonmasterplan.logicBlock_scaling();
		}
		me._buttonmasterplan.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttonmasterplan__text)
					return;
				}
			}
			me.elementMouseOver['buttonmasterplan']=false;
			me._buttonmasterplan.logicBlock_scaling();
		}
		me._buttonmasterplan.ontouchend=function (e) {
			me.elementMouseOver['buttonmasterplan']=false;
			me._buttonmasterplan.logicBlock_scaling();
		}
		me._buttonmasterplan.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._buttonmasterplan);
		el=me._text_infotagsgeo=document.createElement('div');
		els=me._text_infotagsgeo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_infotagsgeo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.509804);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._text_infotagsgeo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_infotagsgeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('popup_geoInfo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_infotagsgeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_infotagsgeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_infotagsgeo.style[domTransition]='';
				if (me._text_infotagsgeo.ggCurrentLogicStateVisible == 0) {
					me._text_infotagsgeo.style.visibility=(Number(me._text_infotagsgeo.style.opacity)>0||!me._text_infotagsgeo.style.opacity)?'inherit':'hidden';
					me._text_infotagsgeo.ggVisible=true;
				}
				else {
					me._text_infotagsgeo.style.visibility="hidden";
					me._text_infotagsgeo.ggVisible=false;
				}
			}
		}
		me._text_infotagsgeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._text_infotagsgeo);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_nodisponible_changenode = function(){
		if(hotspotTemplates['ht_noDisponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noDisponible'].length; i++) {
				if (hotspotTemplates['ht_noDisponible'][i]._rectangle_disable && hotspotTemplates['ht_noDisponible'][i]._rectangle_disable.logicBlock_scaling) {
					hotspotTemplates['ht_noDisponible'][i]._rectangle_disable.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_noDisponible'][i]._rectangle_disable && hotspotTemplates['ht_noDisponible'][i]._rectangle_disable.logicBlock_alpha) {
					hotspotTemplates['ht_noDisponible'][i]._rectangle_disable.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodisponible_mouseover = function(){
		if(hotspotTemplates['ht_noDisponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noDisponible'].length; i++) {
				if (hotspotTemplates['ht_noDisponible'][i]._text_1_1 && hotspotTemplates['ht_noDisponible'][i]._text_1_1.logicBlock_visible) {
					hotspotTemplates['ht_noDisponible'][i]._text_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodisponible_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_noDisponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noDisponible'].length; i++) {
				if (hotspotTemplates['ht_noDisponible'][i]._rectangle_disable && hotspotTemplates['ht_noDisponible'][i]._rectangle_disable.logicBlock_scaling) {
					hotspotTemplates['ht_noDisponible'][i]._rectangle_disable.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_noDisponible'][i]._rectangle_disable && hotspotTemplates['ht_noDisponible'][i]._rectangle_disable.logicBlock_alpha) {
					hotspotTemplates['ht_noDisponible'][i]._rectangle_disable.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_disponible_mouseover = function(){
		if(hotspotTemplates['ht_disponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible'].length; i++) {
				if (hotspotTemplates['ht_disponible'][i]._circle8 && hotspotTemplates['ht_disponible'][i]._circle8.logicBlock_scaling) {
					hotspotTemplates['ht_disponible'][i]._circle8.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_disponible_mouseover = function(){
		if(hotspotTemplates['ht_disponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible'].length; i++) {
				if (hotspotTemplates['ht_disponible'][i]._text_13 && hotspotTemplates['ht_disponible'][i]._text_13.logicBlock_visible) {
					hotspotTemplates['ht_disponible'][i]._text_13.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_arrow_d_positionchanged = function(){
		if(hotspotTemplates['ht_arrow_d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_arrow_d'].length; i++) {
				if (hotspotTemplates['ht_arrow_d'][i]._ht_arrow_d.logicBlock_alpha) {
					hotspotTemplates['ht_arrow_d'][i]._ht_arrow_d.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_disponible2_mouseover = function(){
		if(hotspotTemplates['ht_disponible2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible2'].length; i++) {
				if (hotspotTemplates['ht_disponible2'][i]._circle1 && hotspotTemplates['ht_disponible2'][i]._circle1.logicBlock_scaling) {
					hotspotTemplates['ht_disponible2'][i]._circle1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_disponible2_mouseover = function(){
		if(hotspotTemplates['ht_disponible2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible2'].length; i++) {
				if (hotspotTemplates['ht_disponible2'][i]._text_10 && hotspotTemplates['ht_disponible2'][i]._text_10.logicBlock_visible) {
					hotspotTemplates['ht_disponible2'][i]._text_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_bosque_mouseover = function(){
		if(hotspotTemplates['ht_bosque']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bosque'].length; i++) {
				if (hotspotTemplates['ht_bosque'][i]._text_1 && hotspotTemplates['ht_bosque'][i]._text_1.logicBlock_visible) {
					hotspotTemplates['ht_bosque'][i]._text_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geoinfo_changenode = function(){
		if(hotspotTemplates['ht_tag_geoinfo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geoinfo'].length; i++) {
				if (hotspotTemplates['ht_tag_geoinfo'][i]._ht_tag_geoinfo.logicBlock_visible) {
					hotspotTemplates['ht_tag_geoinfo'][i]._ht_tag_geoinfo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geoinfo_mouseover = function(){
		if(hotspotTemplates['ht_tag_geoinfo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geoinfo'].length; i++) {
				if (hotspotTemplates['ht_tag_geoinfo'][i]._text_2 && hotspotTemplates['ht_tag_geoinfo'][i]._text_2.logicBlock_alpha) {
					hotspotTemplates['ht_tag_geoinfo'][i]._text_2.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geoinfo_varchanged_tagsOn = function(){
		if(hotspotTemplates['ht_tag_geoinfo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geoinfo'].length; i++) {
				if (hotspotTemplates['ht_tag_geoinfo'][i]._ht_tag_geoinfo.logicBlock_visible) {
					hotspotTemplates['ht_tag_geoinfo'][i]._ht_tag_geoinfo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geo_changenode = function(){
		if(hotspotTemplates['ht_tag_geo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geo'].length; i++) {
				if (hotspotTemplates['ht_tag_geo'][i]._ht_tag_geo.logicBlock_visible) {
					hotspotTemplates['ht_tag_geo'][i]._ht_tag_geo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geo_varchanged_tagsOn = function(){
		if(hotspotTemplates['ht_tag_geo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geo'].length; i++) {
				if (hotspotTemplates['ht_tag_geo'][i]._ht_tag_geo.logicBlock_visible) {
					hotspotTemplates['ht_tag_geo'][i]._ht_tag_geo.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._compassring.ggParameter) {
			hs+=parameterToTransform(me._compassring.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(-1 * player.getPanNorth() + 0)) + 'deg) ';
		me._compassring.style[domTransform]=hs;
		var hs='';
		if (me._compassbeam.ggParameter) {
			hs+=parameterToTransform(me._compassbeam.ggParameter) + ' ';
		}
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._compassbeam.style[domTransform]=hs;
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
			} else {
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		me._timer_2.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_nodisponible(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodisponible=document.createElement('div');
		el.ggId="ht_noDisponible";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 143px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodisponible.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_nodisponible.onclick=function (e) {
			player.setVariableValue('vis_card', false);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodisponible.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodisponible.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_nodisponible']=true;
			me._text_1_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodisponible.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_nodisponible']=false;
			me._text_1_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodisponible.ontouchend=function (e) {
			me.elementMouseOver['ht_nodisponible']=false;
			me._text_1_1.logicBlock_visible();
		}
		me._ht_nodisponible.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_disable=document.createElement('div');
		el.ggId="Rectangle_disable";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #aa0000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_disable.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_disable.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_disable.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_disable.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_disable.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_disable.ggCurrentLogicStateScaling == 0) {
					me._rectangle_disable.ggParameter.sx = 0.85;
					me._rectangle_disable.ggParameter.sy = 0.85;
					me._rectangle_disable.style[domTransform]=parameterToTransform(me._rectangle_disable.ggParameter);
				}
				else {
					me._rectangle_disable.ggParameter.sx = 1;
					me._rectangle_disable.ggParameter.sy = 1;
					me._rectangle_disable.style[domTransform]=parameterToTransform(me._rectangle_disable.ggParameter);
				}
			}
		}
		me._rectangle_disable.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_disable.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_disable.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_disable.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_disable.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_disable.style.visibility=me._rectangle_disable.ggVisible?'inherit':'hidden';
					me._rectangle_disable.style.opacity=0.4;
				}
				else {
					me._rectangle_disable.style.visibility=me._rectangle_disable.ggVisible?'inherit':'hidden';
					me._rectangle_disable.style.opacity=1;
				}
			}
		}
		me._rectangle_disable.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodisponible.appendChild(me._rectangle_disable);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 20px;';
		hs+='background: #aa0000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%; line-height:20px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_3.onclick=function (e) {
			player.setVariableValue('var_compass', false);
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodisponible.appendChild(me._text_3);
		el=me._text_1_1=document.createElement('div');
		els=me._text_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : -32px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="no disponible";
		el.appendChild(els);
		me._text_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_nodisponible'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_1.style[domTransition]='';
				if (me._text_1_1.ggCurrentLogicStateVisible == 0) {
					me._text_1_1.style.visibility=(Number(me._text_1_1.style.opacity)>0||!me._text_1_1.style.opacity)?'inherit':'hidden';
					me._text_1_1.ggVisible=true;
				}
				else {
					me._text_1_1.style.visibility="hidden";
					me._text_1_1.ggVisible=false;
				}
			}
		}
		me._text_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_nodisponible.appendChild(me._text_1_1);
		me.__div = me._ht_nodisponible;
	};
	function SkinHotspotClass_ht_disponible(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_disponible=document.createElement('div');
		el.ggId="ht_disponible";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 361px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_disponible.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_disponible.onclick=function (e) {
			player.setVariableValue('vis_card', true);
			player.setVariableValue('enlaceTemporal', me.hotspot.url);
			player.setVariableValue('numerolote', me.hotspot.title);
			player.setVariableValue('popup_geoInfo', false);
			skin._card_body.ggText=me.hotspot.description;
			skin._card_body.ggTextDiv.innerHTML=skin._card_body.ggText;
			if (skin._card_body.ggUpdateText) {
				skin._card_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_body.ggUpdatePosition) {
				skin._card_body.ggUpdatePosition();
			}
			skin._card_body.ggTextDiv.scrollTop = 0;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_disponible']=true;
			me._text_13.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_disponible']=false;
			me._text_13.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible.ontouchend=function (e) {
			me.elementMouseOver['ht_disponible']=false;
			me._text_13.logicBlock_visible();
		}
		me._ht_disponible.ggUpdatePosition=function (useTransition) {
		}
		el=me._circle8=document.createElement('div');
		els=me._circle8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -8px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%; line-height:20px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._circle8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['circle8'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circle8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circle8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circle8.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._circle8.ggCurrentLogicStateScaling == 0) {
					me._circle8.ggParameter.sx = 1.1;
					me._circle8.ggParameter.sy = 1.1;
					me._circle8.style[domTransform]=parameterToTransform(me._circle8.ggParameter);
				}
				else {
					me._circle8.ggParameter.sx = 1;
					me._circle8.ggParameter.sy = 1;
					me._circle8.style[domTransform]=parameterToTransform(me._circle8.ggParameter);
				}
			}
		}
		me._circle8.onmouseover=function (e) {
			me.elementMouseOver['circle8']=true;
			me._circle8.logicBlock_scaling();
		}
		me._circle8.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._circle8__text)
					return;
				}
			}
			me.elementMouseOver['circle8']=false;
			me._circle8.logicBlock_scaling();
		}
		me._circle8.ontouchend=function (e) {
			me.elementMouseOver['circle8']=false;
			me._circle8.logicBlock_scaling();
		}
		me._circle8.ggUpdatePosition=function (useTransition) {
		}
		me._ht_disponible.appendChild(me._circle8);
		el=me._text_13=document.createElement('div');
		els=me._text_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : -32px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lote "+me.hotspot.title+" - Ver detalles<br\/>";
		el.appendChild(els);
		me._text_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_disponible'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_13.style[domTransition]='';
				if (me._text_13.ggCurrentLogicStateVisible == 0) {
					me._text_13.style.visibility=(Number(me._text_13.style.opacity)>0||!me._text_13.style.opacity)?'inherit':'hidden';
					me._text_13.ggVisible=true;
				}
				else {
					me._text_13.style.visibility="hidden";
					me._text_13.ggVisible=false;
				}
			}
		}
		me._text_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_disponible.appendChild(me._text_13);
		me.__div = me._ht_disponible;
	};
	function SkinHotspotClass_ht_tag_georeferencia_largeright(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_largeright=document.createElement('div');
		el.ggId="ht_tag_georeferencia_largeRight";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_largeright.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_largeright.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeright.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeright.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeright.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeright.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag4=document.createElement('div');
		els=me._subtag4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeright.appendChild(me._subtag4);
		el=me._titletag4=document.createElement('div');
		els=me._titletag4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -118px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeright.appendChild(me._titletag4);
		el=me._circle7=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle7.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeright.appendChild(me._circle7);
		el=me._linev4=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 102px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_largeright.appendChild(me._linev4);
		me.__div = me._ht_tag_georeferencia_largeright;
	};
	function SkinHotspotClass_ht_tag_georeferencia_mediumright(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_mediumright=document.createElement('div');
		el.ggId="ht_tag_georeferencia_mediumRight";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_mediumright.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_mediumright.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag3=document.createElement('div');
		els=me._subtag3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -61px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright.appendChild(me._subtag3);
		el=me._titletag3=document.createElement('div');
		els=me._titletag3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -79px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright.appendChild(me._titletag3);
		el=me._circle6=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle6.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright.appendChild(me._circle6);
		el=me._linev3=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 63px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_mediumright.appendChild(me._linev3);
		me.__div = me._ht_tag_georeferencia_mediumright;
	};
	function SkinHotspotClass_ht_arrow_d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_arrow_d=document.createElement('div');
		el.ggId="ht_arrow_d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 461px;';
		hs+='position : absolute;';
		hs+='top : 282px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_arrow_d.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_arrow_d.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getTilt() >= -45))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_arrow_d.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_arrow_d.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_arrow_d.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_arrow_d.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_arrow_d.style.opacity == 0.0) { me._ht_arrow_d.style.visibility="hidden"; } }, 505);
					me._ht_arrow_d.style.opacity=0;
				}
				else {
					me._ht_arrow_d.style.visibility=me._ht_arrow_d.ggVisible?'inherit':'hidden';
					me._ht_arrow_d.style.opacity=1;
				}
			}
		}
		me._ht_arrow_d.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d.ggUpdatePosition=function (useTransition) {
		}
		el=me._arrow=document.createElement('div');
		els=me._arrow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="arrow";
		el.ggDx=-11;
		el.ggDy=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 245px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 239px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 239px;';
		hs+='height: 245px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="    <div class=\"arrow\"><br\/>        <span><\/span><br\/>        <span><\/span><br\/>        <span><\/span><br\/>    <\/div>";
		el.appendChild(els);
		me._arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._arrow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_arrow_d.appendChild(me._arrow);
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -107px;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Arrastrar";
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_arrow_d.appendChild(me._text_20);
		me.__div = me._ht_arrow_d;
	};
	function SkinHotspotClass_ht_tag_georeferencia_largeleft(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_largeleft=document.createElement('div');
		el.ggId="ht_tag_georeferencia_largeLeft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 262px;';
		hs+='position : absolute;';
		hs+='top : 288px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_largeleft.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_largeleft.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleft.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleft.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleft.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag2=document.createElement('div');
		els=me._subtag2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : -100px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleft.appendChild(me._subtag2);
		el=me._titletag2=document.createElement('div');
		els=me._titletag2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -118px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleft.appendChild(me._titletag2);
		el=me._circle5=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle5.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleft.appendChild(me._circle5);
		el=me._linev2=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 102px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_largeleft.appendChild(me._linev2);
		me.__div = me._ht_tag_georeferencia_largeleft;
	};
	function SkinHotspotClass_ht_tag_georeferencia_mediumleft(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_mediumleft=document.createElement('div');
		el.ggId="ht_tag_georeferencia_mediumLeft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_mediumleft.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_mediumleft.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleft.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleft.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleft.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag1=document.createElement('div');
		els=me._subtag1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : -61px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleft.appendChild(me._subtag1);
		el=me._titletag1=document.createElement('div');
		els=me._titletag1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -79px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleft.appendChild(me._titletag1);
		el=me._circle4=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleft.appendChild(me._circle4);
		el=me._linev1=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 63px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_mediumleft.appendChild(me._linev1);
		me.__div = me._ht_tag_georeferencia_mediumleft;
	};
	function SkinHotspotClass_ht_tag_georeferencia_smallleft(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_smallleft=document.createElement('div');
		el.ggId="ht_tag_georeferencia_smallLeft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_smallleft.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_smallleft.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallleft.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallleft.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallleft.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag0=document.createElement('div');
		els=me._subtag0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallleft.appendChild(me._subtag0);
		el=me._titletag0=document.createElement('div');
		els=me._titletag0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallleft.appendChild(me._titletag0);
		el=me._circle3=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallleft.appendChild(me._circle3);
		el=me._linev0=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_smallleft.appendChild(me._linev0);
		me.__div = me._ht_tag_georeferencia_smallleft;
	};
	function SkinHotspotClass_ht_tag_georeferencia_smallright(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_smallright=document.createElement('div');
		el.ggId="ht_tag_georeferencia_smallRight";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 461px;';
		hs+='position : absolute;';
		hs+='top : 263px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_smallright.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_smallright.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallright.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallright.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallright.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallright.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag=document.createElement('div');
		els=me._subtag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallright.appendChild(me._subtag);
		el=me._titletag=document.createElement('div');
		els=me._titletag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallright.appendChild(me._titletag);
		el=me._circle2=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallright.appendChild(me._circle2);
		el=me._linev=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_smallright.appendChild(me._linev);
		me.__div = me._ht_tag_georeferencia_smallright;
	};
	function SkinHotspotClass_ht_disponible2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_disponible2=document.createElement('div');
		el.ggId="ht_disponible2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 361px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_disponible2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_disponible2.onclick=function (e) {
			skin._card_body.ggText=me.ggUserdata.description;
			skin._card_body.ggTextDiv.innerHTML=skin._card_body.ggText;
			if (skin._card_body.ggUpdateText) {
				skin._card_body.ggUpdateText=function() {
					var hs=me.ggUserdata.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_body.ggUpdatePosition) {
				skin._card_body.ggUpdatePosition();
			}
			skin._card_body.ggTextDiv.scrollTop = 0;
			skin._card_title.ggText=me.ggUserdata.title;
			skin._card_title.ggTextDiv.innerHTML=skin._card_title.ggText;
			if (skin._card_title.ggUpdateText) {
				skin._card_title.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_title.ggUpdatePosition) {
				skin._card_title.ggUpdatePosition();
			}
			skin._card_title.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_card', true);
			player.setVariableValue('enlaceTemporal', me.hotspot.url);
			skin._card_price.ggText=me.ggUserdata.information;
			skin._card_price.ggTextDiv.innerHTML=skin._card_price.ggText;
			if (skin._card_price.ggUpdateText) {
				skin._card_price.ggUpdateText=function() {
					var hs=me.ggUserdata.information;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_price.ggUpdatePosition) {
				skin._card_price.ggUpdatePosition();
			}
			skin._card_price.ggTextDiv.scrollTop = 0;
			player.setVariableValue('popup_geoInfo', false);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_disponible2']=true;
			me._text_10.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_disponible2']=false;
			me._text_10.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible2.ontouchend=function (e) {
			me.elementMouseOver['ht_disponible2']=false;
			me._text_10.logicBlock_visible();
		}
		me._ht_disponible2.ggUpdatePosition=function (useTransition) {
		}
		el=me._circle1=document.createElement('div');
		els=me._circle1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -8px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%; line-height:20px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._circle1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['circle1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circle1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circle1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circle1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._circle1.ggCurrentLogicStateScaling == 0) {
					me._circle1.ggParameter.sx = 1.1;
					me._circle1.ggParameter.sy = 1.1;
					me._circle1.style[domTransform]=parameterToTransform(me._circle1.ggParameter);
				}
				else {
					me._circle1.ggParameter.sx = 1;
					me._circle1.ggParameter.sy = 1;
					me._circle1.style[domTransform]=parameterToTransform(me._circle1.ggParameter);
				}
			}
		}
		me._circle1.onmouseover=function (e) {
			me.elementMouseOver['circle1']=true;
			me._circle1.logicBlock_scaling();
		}
		me._circle1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._circle1__text)
					return;
				}
			}
			me.elementMouseOver['circle1']=false;
			me._circle1.logicBlock_scaling();
		}
		me._circle1.ontouchend=function (e) {
			me.elementMouseOver['circle1']=false;
			me._circle1.logicBlock_scaling();
		}
		me._circle1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_disponible2.appendChild(me._circle1);
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : -32px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lote "+me.hotspot.title+" - Ver detalles<br\/>";
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_disponible2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_10.style[domTransition]='';
				if (me._text_10.ggCurrentLogicStateVisible == 0) {
					me._text_10.style.visibility=(Number(me._text_10.style.opacity)>0||!me._text_10.style.opacity)?'inherit':'hidden';
					me._text_10.ggVisible=true;
				}
				else {
					me._text_10.style.visibility="hidden";
					me._text_10.ggVisible=false;
				}
			}
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_disponible2.appendChild(me._text_10);
		me.__div = me._ht_disponible2;
	};
	function SkinHotspotClass_ht_bosque(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_bosque=document.createElement('div');
		el.ggId="ht_bosque";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 520px;';
		hs+='position : absolute;';
		hs+='top : 192px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_bosque.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_bosque.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bosque.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bosque.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_bosque']=true;
			me._text_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bosque.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_bosque']=false;
			me._text_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bosque.ontouchend=function (e) {
			me.elementMouseOver['ht_bosque']=false;
			me._text_1.logicBlock_visible();
		}
		me._ht_bosque.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeT0iMH'+
			'B4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9JiN4ZDsKPC9zdHlsZT4KIDx0aXRsZS8+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzkuNywzNS4xYzAsNC4yLTMuNCw3LjYtNy43LDcuNnMtNy42LTMuNC03LjYtNy42VjIyLjhjMC00LjIsMy40LTcuNiw3LjYtNy42aDcuN1YzNS4xeiIvPgogIDxsaW5lIHkxPSI0OC44IiB4MT0iMzIiIGNsYXNzPSJzdDAiIHgyPSIzMiIgeTI9IjIxLjMiLz4KICA8cG9seWxpbmUg'+
			'Y2xhc3M9InN0MCIgcG9pbnRzPSIyOC45LDI0LjQgMzIsMjcuNCAzNS4xLDI0LjQgJiN4OTsiLz4KICA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIyOC45LDMzLjUgMzIsMzYuNiAzNS4xLDMzLjUgJiN4OTsiLz4KICA8bGluZSB5MT0iNDguOCIgeDE9IjE1LjIiIGNsYXNzPSJzdDAiIHgyPSI0OC44IiB5Mj0iNDguOCIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNS4yLDM1LjFjMCwyLjUsMi4xLDQuNiw0LjYsNC42czQuNi0yLjEsNC42LTQuNlYyNC40aC00LjZjLTIuNSwwLTQuNiwyLjEtNC42LDQuNlYzNS4xeiIvPgogIDxsaW5lIHkxPSI0OC44IiB4MT0iMTkuOCIgY2xhc3M9In'+
			'N0MCIgeDI9IjE5LjgiIHkyPSIzMC41Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTM5LjcsMzUuMWMwLDIuNSwyLjEsNC42LDQuNiw0LjZjMi41LDAsNC42LTIuMSw0LjYtNC42VjI0LjRoLTQuNmMtMi41LDAtNC42LDIuMS00LjYsNC42YzAsMCwwLDAsMCwwVjM1LjF6Ii8+CiAgPGxpbmUgeTE9IjQ4LjgiIHgxPSI0NC4yIiBjbGFzcz0ic3QwIiB4Mj0iNDQuMiIgeTI9IjMwLjUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_bosque.appendChild(me._svg_2);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : -39px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Bosque Nativo<br\/>";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_bosque'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style[domTransition]='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
			}
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_bosque.appendChild(me._text_1);
		me.__div = me._ht_bosque;
	};
	function SkinHotspotClass_ht_tag_geoinfo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_geoinfo=document.createElement('div');
		el.ggId="ht_tag_geoinfo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_geoinfo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_geoinfo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tag_geoinfo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tag_geoinfo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tag_geoinfo.style[domTransition]='';
				if (me._ht_tag_geoinfo.ggCurrentLogicStateVisible == 0) {
					me._ht_tag_geoinfo.style.visibility="hidden";
					me._ht_tag_geoinfo.ggVisible=false;
				}
				else {
					me._ht_tag_geoinfo.style.visibility=(Number(me._ht_tag_geoinfo.style.opacity)>0||!me._ht_tag_geoinfo.style.opacity)?'inherit':'hidden';
					me._ht_tag_geoinfo.ggVisible=true;
				}
			}
		}
		me._ht_tag_geoinfo.onclick=function (e) {
			player.setVariableValue('popup_geoInfo', true);
			skin._text_infotagsgeo.ggText=" "+me.hotspot.title+" "+me.hotspot.description;
			skin._text_infotagsgeo.ggTextDiv.innerHTML=skin._text_infotagsgeo.ggText;
			if (skin._text_infotagsgeo.ggUpdateText) {
				skin._text_infotagsgeo.ggUpdateText=function() {
					var hs=" "+me.hotspot.title+" "+me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._text_infotagsgeo.ggUpdatePosition) {
				skin._text_infotagsgeo.ggUpdatePosition();
			}
			skin._text_infotagsgeo.ggTextDiv.scrollTop = 0;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geoinfo.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geoinfo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_tag_geoinfo']=true;
			me._text_2.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geoinfo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_tag_geoinfo']=false;
			me._text_2.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geoinfo.ontouchend=function (e) {
			me.elementMouseOver['ht_tag_geoinfo']=false;
			me._text_2.logicBlock_alpha();
		}
		me._ht_tag_geoinfo.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_geotag0=document.createElement('div');
		els=me._text_geotag0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_geotag";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Montserrat\", sans-serif; font-weight:800; font-size:13pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(21,21,21,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.url;
		el.appendChild(els);
		me._text_geotag0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_geotag0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_geoinfo.appendChild(me._text_geotag0);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-transform: uppercase; text-shadow:2px 2px 6px black; font-size: 10pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_tag_geoinfo'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_2.style[domTransition]='opacity 500ms ease 0ms';
				if (me._text_2.ggCurrentLogicStateAlpha == 0) {
					me._text_2.style.visibility=me._text_2.ggVisible?'inherit':'hidden';
					me._text_2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._text_2.style.opacity == 0.0) { me._text_2.style.visibility="hidden"; } }, 505);
					me._text_2.style.opacity=0;
				}
			}
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_tag_geoinfo.appendChild(me._text_2);
		me.__div = me._ht_tag_geoinfo;
	};
	function SkinHotspotClass_ht_tag_geo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_geo=document.createElement('div');
		el.ggId="ht_tag_geo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_geo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_geo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tag_geo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tag_geo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tag_geo.style[domTransition]='';
				if (me._ht_tag_geo.ggCurrentLogicStateVisible == 0) {
					me._ht_tag_geo.style.visibility="hidden";
					me._ht_tag_geo.ggVisible=false;
				}
				else {
					me._ht_tag_geo.style.visibility=(Number(me._ht_tag_geo.style.opacity)>0||!me._ht_tag_geo.style.opacity)?'inherit':'hidden';
					me._ht_tag_geo.ggVisible=true;
				}
			}
		}
		me._ht_tag_geo.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geo.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geo.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_geotag=document.createElement('div');
		els=me._text_geotag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_geotag";
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ea374c;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 11px 2px 11px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_geotag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_geotag.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_geo.appendChild(me._text_geotag);
		el=me._rectangle_large=document.createElement('div');
		el.ggId="Rectangle_large";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ea374c;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 86px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_large.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_large.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_geo.appendChild(me._rectangle_large);
		el=me._circle0=document.createElement('div');
		el.ggId="circle";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ea374c;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 9px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_geo.appendChild(me._circle0);
		me.__div = me._ht_tag_geo;
	};
	function SkinHotspotClass_ht_tag_background(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_background=document.createElement('div');
		el.ggId="ht_tag_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 429px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_background.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_background.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_background.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_background.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_background.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._tagbkg=document.createElement('div');
		els=me._tagbkg__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tagbkg";
		el.ggDx=0;
		el.ggDy=-23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.607843);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title+" | "+me.hotspot.description;
		el.appendChild(els);
		me._tagbkg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tagbkg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_tag_background.appendChild(me._tagbkg);
		el=me._circle=document.createElement('div');
		el.ggId="circle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_background.appendChild(me._circle);
		me.__div = me._ht_tag_background;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_noDisponible') {
			hotspot.skinid = 'ht_noDisponible';
			hsinst = new SkinHotspotClass_ht_nodisponible(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodisponible_changenode();;
			me.callChildLogicBlocksHotspot_ht_nodisponible_mouseover();;
			me.callChildLogicBlocksHotspot_ht_nodisponible_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_disponible') {
			hotspot.skinid = 'ht_disponible';
			hsinst = new SkinHotspotClass_ht_disponible(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_disponible_mouseover();;
			me.callChildLogicBlocksHotspot_ht_disponible_mouseover();;
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_largeRight') {
			hotspot.skinid = 'ht_tag_georeferencia_largeRight';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_largeright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_mediumRight') {
			hotspot.skinid = 'ht_tag_georeferencia_mediumRight';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_mediumright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_arrow_d') {
			hotspot.skinid = 'ht_arrow_d';
			hsinst = new SkinHotspotClass_ht_arrow_d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_arrow_d_positionchanged();;
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_largeLeft') {
			hotspot.skinid = 'ht_tag_georeferencia_largeLeft';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_largeleft(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_mediumLeft') {
			hotspot.skinid = 'ht_tag_georeferencia_mediumLeft';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_mediumleft(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_smallLeft') {
			hotspot.skinid = 'ht_tag_georeferencia_smallLeft';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_smallleft(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_smallRight') {
			hotspot.skinid = 'ht_tag_georeferencia_smallRight';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_smallright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_disponible2') {
			hotspot.skinid = 'ht_disponible2';
			hsinst = new SkinHotspotClass_ht_disponible2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_disponible2_mouseover();;
			me.callChildLogicBlocksHotspot_ht_disponible2_mouseover();;
		} else
		if (hotspot.skinid=='ht_bosque') {
			hotspot.skinid = 'ht_bosque';
			hsinst = new SkinHotspotClass_ht_bosque(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_bosque_mouseover();;
		} else
		if (hotspot.skinid=='ht_tag_geoinfo') {
			hotspot.skinid = 'ht_tag_geoinfo';
			hsinst = new SkinHotspotClass_ht_tag_geoinfo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tag_geoinfo_changenode();;
			me.callChildLogicBlocksHotspot_ht_tag_geoinfo_mouseover();;
			me.callChildLogicBlocksHotspot_ht_tag_geoinfo_varchanged_tagsOn();;
		} else
		if (hotspot.skinid=='ht_tag_geo') {
			hotspot.skinid = 'ht_tag_geo';
			hsinst = new SkinHotspotClass_ht_tag_geo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tag_geo_changenode();;
			me.callChildLogicBlocksHotspot_ht_tag_geo_varchanged_tagsOn();;
		} else
		{
			hotspot.skinid = 'ht_tag_background';
			hsinst = new SkinHotspotClass_ht_tag_background(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_noDisponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noDisponible'].length; i++) {
				hotspotTemplates['ht_noDisponible'][i] = null;
			}
		}
		if(hotspotTemplates['ht_disponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible'].length; i++) {
				hotspotTemplates['ht_disponible'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_largeRight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_largeRight'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_largeRight'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_mediumRight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_mediumRight'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_mediumRight'][i] = null;
			}
		}
		if(hotspotTemplates['ht_arrow_d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_arrow_d'].length; i++) {
				hotspotTemplates['ht_arrow_d'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_largeLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_largeLeft'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_largeLeft'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_mediumLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_mediumLeft'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_mediumLeft'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_smallLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_smallLeft'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_smallLeft'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_smallRight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_smallRight'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_smallRight'][i] = null;
			}
		}
		if(hotspotTemplates['ht_disponible2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible2'].length; i++) {
				hotspotTemplates['ht_disponible2'][i] = null;
			}
		}
		if(hotspotTemplates['ht_bosque']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bosque'].length; i++) {
				hotspotTemplates['ht_bosque'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_geoinfo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geoinfo'].length; i++) {
				hotspotTemplates['ht_tag_geoinfo'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_geo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geo'].length; i++) {
				hotspotTemplates['ht_tag_geo'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_background']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_background'].length; i++) {
				hotspotTemplates['ht_tag_background'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 110px; height: 106px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardDescription";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.information;
		el.appendChild(els);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._description);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardTitle";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 78px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._title);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MjUuMiAyODMuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDI1LjIgMjgzLjU7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHZlcnNpb2'+
			'49IjEuMSIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojQjNCNUMxO30mI3hkOwoJLnN0MXtmaWxsOiMxOTE4MTc7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzY3LjEsMjgzLjVoLTMwOWMtMzEuNSwwLTU2LjktMjUuNS01Ni45LTU2LjlWNTYuOUMxLjEsMjUuNSwyNi42LDAsNTguMSwwaDMwOS4xYzMxLjUsMCw1Ni45LDI1LjUsNTYuOSw1Ni45JiN4ZDsmI3hhOyYjeDk7djE2OS42QzQyNC4xLDI1OCwzOTguNiwyODMuNSwzNjcuMSwyODMuNXoiLz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNDkuNiwxOTcuOGMt'+
			'MjIuNSwyMy42LTM5LjMsMzUuNC01MC40LDM1LjRjLTYuMSwwLTExLjMtMy4xLTE1LjYtOS40Yy00LjItNi4zLTYuMy0xNC4yLTYuMy0yMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yMC41LDYuOS00OC44LDIwLjctODVsMzYuNi03LjZoMS43TDIyMiwxNTIuNmMtNiwxOC42LTguOSwzMS45LTguOSwzOS45YzAsMy4yLDAuNyw1LjcsMi4xLDcuN2MxLjQsMiwzLjEsMyw1LjMsMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNywwLDcuNS0xLjQsMTEuMy00LjFjMy44LTIuNyw5LjgtOC43LDE3LjktMTcuOFYxOTcuOHogTTI0Ni43LDUxLjJjMCwyMy4xLTguNSwzNC42LTI1LjUsMzQuNmMtOC4zLDAtMT'+
			'UuMy0yLjUtMjEuMi03LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjYtOC41LDkuOS0xOCwxMy0yOC41YzcuNiw0LjcsMTMuNyw3LjEsMTguMyw3LjFDMjM2LjUsNTYuOCwyNDEuNiw1NC45LDI0Ni43LDUxLjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_10'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_10.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_10.ggCurrentLogicStateScaling == 0) {
					me._svg_10.ggParameter.sx = 1.1;
					me._svg_10.ggParameter.sy = 1.1;
					me._svg_10.style[domTransform]=parameterToTransform(me._svg_10.ggParameter);
				}
				else {
					me._svg_10.ggParameter.sx = 1;
					me._svg_10.ggParameter.sy = 1;
					me._svg_10.style[domTransform]=parameterToTransform(me._svg_10.ggParameter);
				}
			}
		}
		me._svg_10.onclick=function (e) {
			skin._card_title.ggText=me.ggUserdata.title;
			skin._card_title.ggTextDiv.innerHTML=skin._card_title.ggText;
			if (skin._card_title.ggUpdateText) {
				skin._card_title.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_title.ggUpdatePosition) {
				skin._card_title.ggUpdatePosition();
			}
			skin._card_title.ggTextDiv.scrollTop = 0;
			skin._card_body.ggText=me.ggUserdata.description;
			skin._card_body.ggTextDiv.innerHTML=skin._card_body.ggText;
			if (skin._card_body.ggUpdateText) {
				skin._card_body.ggUpdateText=function() {
					var hs=me.ggUserdata.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_body.ggUpdatePosition) {
				skin._card_body.ggUpdatePosition();
			}
			skin._card_body.ggTextDiv.scrollTop = 0;
			skin._card_price.ggText=me.ggUserdata.information;
			skin._card_price.ggTextDiv.innerHTML=skin._card_price.ggText;
			if (skin._card_price.ggUpdateText) {
				skin._card_price.ggUpdateText=function() {
					var hs=me.ggUserdata.information;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_price.ggUpdatePosition) {
				skin._card_price.ggUpdatePosition();
			}
			skin._card_price.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_card', true);
			player.setVariableValue('enlaceTemporal', "{"+me.ggNodeId+"}");
		}
		me._svg_10.onmouseover=function (e) {
			me.elementMouseOver['svg_10']=true;
			me._svg_10.logicBlock_scaling();
		}
		me._svg_10.onmouseout=function (e) {
			me.elementMouseOver['svg_10']=false;
			me._svg_10.logicBlock_scaling();
		}
		me._svg_10.ontouchend=function (e) {
			me.elementMouseOver['svg_10']=false;
			me._svg_10.logicBlock_scaling();
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_10);
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius:10px;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['thumbnail_nodeimage'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._thumbnail_nodeimage.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._thumbnail_nodeimage.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._thumbnail_nodeimage.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._thumbnail_nodeimage.ggCurrentLogicStateScaling == 0) {
					me._thumbnail_nodeimage.ggParameter.sx = 1.1;
					me._thumbnail_nodeimage.ggParameter.sy = 1.1;
					me._thumbnail_nodeimage.style[domTransform]=parameterToTransform(me._thumbnail_nodeimage.ggParameter);
				}
				else {
					me._thumbnail_nodeimage.ggParameter.sx = 1;
					me._thumbnail_nodeimage.ggParameter.sy = 1;
					me._thumbnail_nodeimage.style[domTransform]=parameterToTransform(me._thumbnail_nodeimage.ggParameter);
				}
			}
		}
		me._thumbnail_nodeimage.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_card', false);
			skin._main_title.ggText=me.ggUserdata.title;
			skin._main_title.ggTextDiv.innerHTML=skin._main_title.ggText;
			if (skin._main_title.ggUpdateText) {
				skin._main_title.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._main_title.ggUpdatePosition) {
				skin._main_title.ggUpdatePosition();
			}
			skin._main_title.ggTextDiv.scrollTop = 0;
			player.setVariableValue('enlaceTemporal', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=true;
			me._thumbnail_nodeimage.logicBlock_scaling();
		}
		me._thumbnail_nodeimage.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._thumbnail_nodeimage.logicBlock_scaling();
		}
		me._thumbnail_nodeimage.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._thumbnail_nodeimage.logicBlock_scaling();
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._thumbnail_nodeimage);
		me.__div.appendChild(me._container_1);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle coverNoDisponible";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 7px;';
		hs+='border-radius : 7px;';
		hs+='background : rgba(6,21,29,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 98px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("nodisponible") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_1.style[domTransition]='';
				if (me._rectangle_1.ggCurrentLogicStateVisible == 0) {
					me._rectangle_1.style.visibility=(Number(me._rectangle_1.style.opacity)>0||!me._rectangle_1.style.opacity)?'inherit':'hidden';
					me._rectangle_1.ggVisible=true;
				}
				else {
					me._rectangle_1.style.visibility="hidden";
					me._rectangle_1.ggVisible=false;
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.__div.appendChild(me._rectangle_1);
		el=me._text_14=document.createElement('div');
		els=me._text_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=1;
		el.ggDy=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text cardTitle";
		el.ggType='text';
		hs ='';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 90px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="NO <br\/>DISPONIBLE";
		el.appendChild(els);
		me._text_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("nodisponible") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_14.style[domTransition]='';
				if (me._text_14.ggCurrentLogicStateVisible == 0) {
					me._text_14.style.visibility=(Number(me._text_14.style.opacity)>0||!me._text_14.style.opacity)?'inherit':'hidden';
					me._text_14.ggVisible=true;
				}
				else {
					me._text_14.style.visibility="hidden";
					me._text_14.ggVisible=false;
				}
			}
		}
		me._text_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__div.appendChild(me._text_14);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: "Roboto Condensed", sans-serif; font-size: 14px;} .cardTitle { font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 16px;} .cardDescription{ font-family: "Roboto Condensed", sans-serif; font-size: 12px} .cardPrice{font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 14px;} .mainTitle{font-weight: 700; font-size: 16px;} .arrow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); transform: rotate(180deg); } .arrow span { display: block; width: 1.5vw; height: 1.5vw; border-bottom: 5px solid white; border-right: 5px solid white; transform: rotate(45deg); margin: -10px; animation: animate 2s infinite; } .arrow span:nth-child(2) { animation-delay: -0.2s; } .arrow span:nth-child(3) { animation-delay: -0.4s; } @keyframes animate { 0% { opacity: 0; transform: rotate(45deg) translate(-20px, -20px); } 50% { opacity: 1; } 100% { opacity: 0; transform: rotate(45deg) translate(20px, 20px); } }'));
	document.head.appendChild(style);
	me._compasspointer1.logicBlock_visible();
	me._beamdot.logicBlock_visible();
	me._thumbnail_menu.logicBlock_alpha();
	me._card.logicBlock_visible();
	me._thumbnail_hide_button.logicBlock_alpha();
	me._thumbnail_show_button.logicBlock_alpha();
	me._main_title.logicBlock_text();
	me._menu_inferior.logicBlock_visible();
	me._svg_4.logicBlock_visible();
	me._text_infotagsgeo.logicBlock_visible();
	me._compass.logicBlock_position();
	me._compass.logicBlock_alpha();
	me._textoguia.logicBlock_alpha();
	me._buttonmasterplan.logicBlock_alpha();
	player.addListener('changenode', function(args) { me._compasspointer1.logicBlock_visible();me._beamdot.logicBlock_visible();me._thumbnail_menu.logicBlock_alpha();me._card.logicBlock_visible();me._thumbnail_hide_button.logicBlock_alpha();me._thumbnail_show_button.logicBlock_alpha();me._main_title.logicBlock_text();me._menu_inferior.logicBlock_visible();me._svg_4.logicBlock_visible();me._text_infotagsgeo.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._compass.logicBlock_position();me._compass.logicBlock_alpha(); });
	player.addListener('positionchanged', function(args) { me._textoguia.logicBlock_alpha();me._buttonmasterplan.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._thumbnail_menu.logicBlock_alpha();me._thumbnail_hide_button.logicBlock_alpha();me._thumbnail_show_button.logicBlock_alpha(); });
	player.addListener('varchanged_vis_card', function(args) { me._card.logicBlock_visible(); });
	player.addListener('varchanged_popup_geoInfo', function(args) { me._text_infotagsgeo.logicBlock_visible(); });
	player.addListener('varchanged_var_compass', function(args) { me._compasspointer1.logicBlock_visible();me._beamdot.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_nodisponible_changenode();me.callChildLogicBlocksHotspot_ht_tag_geoinfo_changenode();me.callChildLogicBlocksHotspot_ht_tag_geo_changenode(); });
	player.addListener('positionchanged', function(args) { me.callChildLogicBlocksHotspot_ht_arrow_d_positionchanged(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_disponible_mouseover();me.callChildLogicBlocksHotspot_ht_disponible2_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_nodisponible_mouseover();me.callChildLogicBlocksHotspot_ht_disponible_mouseover();me.callChildLogicBlocksHotspot_ht_disponible2_mouseover();me.callChildLogicBlocksHotspot_ht_bosque_mouseover();me.callChildLogicBlocksHotspot_ht_tag_geoinfo_mouseover(); });
	player.addListener('varchanged_tagsOn', function(args) { me.callChildLogicBlocksHotspot_ht_tag_geoinfo_varchanged_tagsOn();me.callChildLogicBlocksHotspot_ht_tag_geo_varchanged_tagsOn(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_ht_nodisponible_varchanged_ht_ani(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};