

(function(c){function I(b,a){c(b.currentImg.attr("data-text-id")).css("display","block");var e=c(b.currentImg.attr("data-text-id")).children(),g=0;currentText_arr=[];e.each(function(){currentText_arr[g]=c(this);var f=currentText_arr[g].attr("data-initial-left"),e=currentText_arr[g].attr("data-initial-top");a.responsive&&(f=parseInt(f/(a.origWidth/a.width),10),e=parseInt(e/(a.origWidth/a.width),10));currentText_arr[g].css({left:f+"px",top:e+"px",opacity:parseInt(currentText_arr[g].attr("data-fade-start"), 10)/100});var h=currentText_arr[g];setTimeout(function(){a.responsive&&(newCss="",-1!=h.css("font-size").lastIndexOf("px")?(fontSize=h.css("font-size").substr(0,h.css("font-size").lastIndexOf("px")),newCss+="font-size:"+fontSize/(a.origWidth/a.width)+"px;"):-1!=h.css("font-size").lastIndexOf("em")&&(fontSize=h.css("font-size").substr(0,h.css("font-size").lastIndexOf("em")),newCss+="font-size:"+fontSize/(a.origWidth/a.width)+"em;"),-1!=h.css("line-height").lastIndexOf("px")?(lineHeight=h.css("line-height").substr(0, h.css("line-height").lastIndexOf("px")),newCss+="line-height:"+lineHeight/(a.origWidth/a.width)+"px;"):-1!=h.css("line-height").lastIndexOf("em")&&(lineHeight=h.css("line-height").substr(0,h.css("line-height").lastIndexOf("em")),newCss+="line-height:"+lineHeight/(a.origWidth/a.width)+"em;"),h.wrapInner('<div class="newFS" style="'+newCss+'" />'));var e=h.attr("data-final-left"),f=h.attr("data-final-top");a.responsive&&(e=parseInt(e/(a.origWidth/a.width),10),f=parseInt(f/(a.origWidth/a.width),10)); var g=1;!0==b.isVideoPlaying&&(g=0);h.animate({opacity:g,left:e+"px",top:f+"px"},1E3*h.attr("data-duration"),function(){!0==b.isVideoPlaying&&c(b.currentImg.attr("data-text-id")).children().css("opacity",0)})},1E3*currentText_arr[g].attr("data-delay"));g++})}function y(b,a,e,g,f,t,h,B,x,u,s){var l=!0;if(!e.loop&&a.current_img_no+b>=g||!e.loop&&0>a.current_img_no+b)l=!1;l&&!a.slideIsRunning&&(c(".newFS",u).contents().unwrap(),a.arcInitialTime=(new Date).getTime(),a.timeElapsed=0,e.showCircleTimer&& (a.ctx.clearRect(0,0,a.canvas.width,a.canvas.height),a.ctx.beginPath(),a.ctx.globalAlpha=e.behindCircleAlpha/100,a.ctx.arc(e.circleRadius+2*e.circleLineWidth,e.circleRadius+2*e.circleLineWidth,e.circleRadius,0,2*Math.PI,!1),a.ctx.lineWidth=e.circleLineWidth+2,a.ctx.strokeStyle=e.behindCircleColor,a.ctx.stroke(),a.ctx.beginPath(),a.ctx.globalAlpha=e.circleAlpha/100,a.ctx.arc(e.circleRadius+2*e.circleLineWidth,e.circleRadius+2*e.circleLineWidth,e.circleRadius,0,0,!1),a.ctx.lineWidth=e.circleLineWidth, a.ctx.strokeStyle=e.circleColor,a.ctx.stroke()),a.slideIsRunning=!0,a.previous_current_img_no=a.current_img_no,c(a.currentImg.attr("data-text-id")).css("display","none"),c(f[a.current_img_no]).removeClass("bottomNavButtonON"),s.css("display","none"),a.current_img_no=a.current_img_no+b>=g?0:0>a.current_img_no+b?g-1:a.current_img_no+b,c(f[a.current_img_no]).addClass("bottomNavButtonON"),a.currentImg=c(t[a.current_img_no]),x.animate({left:-1*a.current_img_no*e.width+"px"},800,"easeOutQuad",function(){a.slideIsRunning= !1;"true"==c(t[a.current_img_no]).attr("data-video")&&s.css("display","block");"true"==c(t[a.previous_current_img_no]).attr("data-video")&&(c("#contentHolderUnit_"+a.previous_current_img_no,u).html(c(t[a.previous_current_img_no]).html()),E(a.previous_current_img_no,a,e,t,u,h,B));I(a,e,h,B);0<e.autoPlay&&(1<g&&!a.mouseOverBanner)&&(clearTimeout(a.timeoutID),a.timeoutID=setTimeout(function(){y(1,a,e,g,f,t,h,B,x,u,s)},1E3*e.autoPlay))}))}function x(b,a,c,g){a=c.origImgsDimensions[a].split(";");g.responsive&& (a[0]/=g.origWidth/g.width,a[1]/=g.origWidth/g.width);b.width(a[0]);b.height(a[1])}function E(b,a,e,g,f,t,h){e.responsive&&(imgInside=c("#contentHolderUnit_"+b,f).find("img:first"),null!=imgInside.width()&&x(imgInside,b,a,e),textIdChildren=c(c(g[b]).attr("data-text-id")).children(),k=-1,textIdChildren.each(function(){k++;imgInside=c(this).find("img:first");null!=imgInside.width()&&x(imgInside,c(g[b]).attr("data-text-id")+"-"+k,a,e)}),c(c(g[b]).attr("data-text-id")).css({width:t.width()+"px",left:parseInt(b* e.width,10),top:h.css("top")}))}function J(){var b=-1;"Microsoft Internet Explorer"==navigator.appName&&null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&(b=parseFloat(RegExp.$1));return parseInt(b,10)}c.fn.allinone_contentSlider=function(b){b=c.extend({},c.fn.allinone_contentSlider.defaults,b);return this.each(function(){var a=c(this);responsiveWidth=a.parent().width();responsiveHeight=a.parent().height();b.responsiveRelativeToBrowser&&(responsiveWidth=c(window).width(),responsiveHeight= c(window).height());b.origWidth=b.width;b.width100Proc&&(b.width=responsiveWidth);b.origHeight=b.height;b.height100Proc&&(b.height=responsiveHeight);if(b.responsive&&(b.origWidth!=responsiveWidth||b.width100Proc))b.width=b.origWidth>responsiveWidth||b.width100Proc?responsiveWidth:b.origWidth,b.height100Proc||(b.height=b.width/(b.origWidth/b.origHeight));var e=c("<div></div>").addClass("allinone_contentSlider").addClass(b.skin),g=c('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div> <div class="playOver"></div> <canvas class="mycanvas"></canvas>'); a.wrap(e);a.after(g);var f=a.parent(".allinone_contentSlider"),g=c(".bannerControls",f),t=c(".contentHolderVisibleWrapper",f),h=c(".contentHolder",f),e=c('<div class="bottomNavLeft"></div>'),B=c('<div class="bottomNav"></div>'),L=c('<div class="bottomNavRight"></div>');a.after(e);a.after(B);a.after(L);b.showAllControllers||g.css("display","none");var u=c(".leftNav",f),s=c(".rightNav",f);u.css("display","none");s.css("display","none");b.showNavArrows&&b.showOnInitNavArrows&&(u.css("display","block"), s.css("display","block"));var l=c(".bottomNav",f),w=c(".bottomNavLeft",f),z=c(".bottomNavRight",f),D;l.css("display","block");w.css("display","block");z.css("display","block");l.css({bottom:b.thumbsWrapperMarginBottom+"px",top:"auto"});w.css({bottom:b.thumbsWrapperMarginBottom+"px",top:"auto"});z.css({bottom:b.thumbsWrapperMarginBottom+"px",top:"auto"});b.showBottomNav||(l.css("display","none"),w.css("display","none"),z.css("display","none"));b.showOnInitBottomNav||(l.css("left","-5000px"),w.css("left", "-5000px"),z.css("left","-5000px"));b.enableTouchScreen&&(h.css({cursor:"url("+b.absUrl+"skins/hand.cur),url("+b.absUrl+"skins/hand.cur),move",left:"0px",top:"0px",position:"absolute"}),h.draggable({axis:"x",distance:10,start:function(){origLeft=parseInt(c(this).css("left"),10);r.css("display","none")},stop:function(){d.slideIsRunning||(finalLeft=parseInt(c(this).css("left"),10),direction=1,origLeft<finalLeft&&(direction=-1),y(direction,d,b,n,v,m,a,g,h,f,r))}}));var e=J(),r=c(".playOver",f);r.css({left:parseInt((b.width- r.width())/2,10)+"px",top:parseInt((b.height-r.height())/2,10)+"px"});var n=0,d={current_img_no:0,currentImg:0,previous_current_img_no:0,slideIsRunning:!1,mouseOverBanner:!1,isVideoPlaying:!1,timeoutID:"",intervalID:"",arcInitialTime:(new Date).getTime(),timeElapsed:0,windowWidth:0,origImgsDimensions:[],canvas:"",ctx:"",bannerRatio:b.origWidth/b.origHeight};d.canvas=c(".mycanvas",f)[0];d.canvas.width=2*b.circleRadius+4*b.circleLineWidth;d.canvas.height=2*b.circleRadius+4*b.circleLineWidth;-1!=e&& 9>e&&(b.showCircleTimer=!1);b.showCircleTimer&&(d.ctx=d.canvas.getContext("2d"));f.width(b.width);f.height(b.height);t.width(b.width);t.height(b.height);h.width(b.width);h.height(b.height);g.css("margin-top",parseInt((b.height-u.height())/2,10)+"px");var m=a.find("ul:first").children(),A,F=0,q,C=0,K=0,p;m.each(function(){d.currentImg=c(this);d.currentImg.is("li")||(d.currentImg=d.currentImg.find("li:first"));if(d.currentImg.is("li")){n++;A=c('<div class="contentHolderUnit" rel="'+(n-1)+'" id="contentHolderUnit_'+ (n-1)+'">'+d.currentImg.html()+"</div>");A.width(b.width);A.height(b.height);h.append(A);F+=b.width;p=c("#contentHolderUnit_"+(n-1),f).find("img:first");null!=p.width()?(d.origImgsDimensions[n-1]=p.width()+";"+p.height(),b.responsive&&b.origWidth!=responsiveWidth&&x(p,n-1,d,b)):d.origImgsDimensions[n-1]=null;q=c('<div class="bottomNavButtonOFF" rel="'+(n-1)+'"></div>');l.append(q);C+=parseInt(q.css("padding-left").substring(0,q.css("padding-left").length-2),10)+q.width();K=parseInt((l.height()-parseInt(q.css("height").substring(0, q.css("height").length-2)))/2,10);q.css("margin-top",K+"px");h.append(c(d.currentImg.attr("data-text-id")));c(d.currentImg.attr("data-text-id")).css({width:a.width()+"px",left:parseInt((n-1)*b.width,10),top:g.css("top")});var e=-1;c(d.currentImg.attr("data-text-id")).children().each(function(){e++;p=c(this).find("img:first");null!=p.width()?(d.origImgsDimensions[d.currentImg.attr("data-text-id")+"-"+e]=p.width()+";"+p.height(),b.responsive&&b.origWidth!=responsiveWidth&&x(p,d.currentImg.attr("data-text-id")+ "-"+e,d,b)):d.origImgsDimensions[d.currentImg.attr("data-text-id")+"-"+e]=null})}});h.width(F);l.width(C);b.showOnInitBottomNav&&(l.css("left",parseInt((f.width()-C)/2,10)+"px"),w.css("left",parseInt(l.css("left").substring(0,l.css("left").length-2),10)-w.width()+"px"),z.css("left",parseInt(l.css("left").substring(0,l.css("left").length-2),10)+l.width()+parseInt(q.css("padding-left").substring(0,q.css("padding-left").length-2),10)+"px"));c("iframe",f).each(function(){var b=c(this).attr("src"),a="?wmode=transparent"; -1!=b.indexOf("?")&&(a="&wmode=transparent");c(this).attr("src",b+a)});d.current_img_no=0;d.currentImg=c(m[0]);I(d,b,a,g);f.mouseenter(function(){d.mouseOverBanner=!0;clearTimeout(d.timeoutID);nowx=(new Date).getTime();d.timeElapsed+=nowx-d.arcInitialTime;b.autoHideNavArrows&&b.showNavArrows&&(u.css("display","block"),s.css("display","block"));b.autoHideBottomNav&&b.showBottomNav&&(l.css({display:"block",left:parseInt((f.width()-C)/2,10)+"px"}),w.css({display:"block",left:parseInt(l.css("left").substring(0, l.css("left").length-2),10)-w.width()+"px"}),z.css({display:"block",left:parseInt(l.css("left").substring(0,l.css("left").length-2),10)+l.width()+parseInt(q.css("padding-left").substring(0,q.css("padding-left").length-2),10)+"px"}))});f.mouseleave(function(){d.mouseOverBanner=!1;nowx=(new Date).getTime();b.autoHideNavArrows&&b.showNavArrows&&(u.css("display","none"),s.css("display","none"));b.autoHideBottomNav&&b.showBottomNav&&(l.css("display","none"),w.css("display","none"),z.css("display","none")); if(0<b.autoPlay&&1<n&&!d.isVideoPlaying){clearTimeout(d.timeoutID);d.arcInitialTime=(new Date).getTime();var c=parseInt(1E3*b.autoPlay-(d.timeElapsed+nowx-d.arcInitialTime),10);d.timeoutID=setTimeout(function(){y(1,d,b,n,v,m,a,g,h,f,r)},c)}});A=c(".contentHolderUnit",h);A.click(function(){var a=c(this).attr("rel");"true"==c(m[d.current_img_no]).attr("data-video")&&(a!=d.current_img_no?d.isVideoPlaying=!1:(clearTimeout(d.timeoutID),p=c(this).find("img:first"),p.css("display","none"),r.css("display", "none"),d.isVideoPlaying=!0));void 0!=c(m[d.current_img_no]).attr("data-link")&&(a==d.current_img_no&&""!=c(m[d.current_img_no]).attr("data-link"))&&(a=b.target,void 0!=c(m[d.current_img_no]).attr("data-target")&&""!=c(m[d.current_img_no]).attr("data-target")&&(a=c(m[d.current_img_no]).attr("data-target")),"_blank"==a?window.open(c(m[d.current_img_no]).attr("data-link")):window.location=c(m[d.current_img_no]).attr("data-link"))});r.click(function(){r.css("display","none");clearTimeout(d.timeoutID); p=c("#contentHolderUnit_"+d.current_img_no,f).find("img:first");p.css("display","none");d.isVideoPlaying=!0});u.click(function(){d.slideIsRunning||(d.isVideoPlaying=!1,clearTimeout(d.timeoutID),y(-1,d,b,n,v,m,a,g,h,f,r))});s.click(function(){d.slideIsRunning||(d.isVideoPlaying=!1,clearTimeout(d.timeoutID),y(1,d,b,n,v,m,a,g,h,f,r))});var H=!1;c(window).resize(function(){var e=J();doResizeNow=!0;-1!=navigator.userAgent.indexOf("Android")&&(0==b.windowOrientationScreenSize0&&0==window.orientation&&(b.windowOrientationScreenSize0= c(window).width()),0==b.windowOrientationScreenSize90&&90==window.orientation&&(b.windowOrientationScreenSize90=c(window).height()),0==b.windowOrientationScreenSize_90&&-90==window.orientation&&(b.windowOrientationScreenSize_90=c(window).height()),b.windowOrientationScreenSize0&&(0==window.orientation&&c(window).width()>b.windowOrientationScreenSize0)&&(doResizeNow=!1),b.windowOrientationScreenSize90&&(90==window.orientation&&c(window).height()>b.windowOrientationScreenSize90)&&(doResizeNow=!1),b.windowOrientationScreenSize_90&& (-90==window.orientation&&c(window).height()>b.windowOrientationScreenSize_90)&&(doResizeNow=!1),0==d.windowWidth&&(doResizeNow=!1,d.windowWidth=c(window).width()));-1!=e&&(9==e&&0==d.windowWidth)&&(doResizeNow=!1);d.windowWidth==c(window).width()?(doResizeNow=!1,b.windowCurOrientation!=window.orientation&&-1!=navigator.userAgent.indexOf("Android")&&(b.windowCurOrientation=window.orientation,doResizeNow=!0)):d.windowWidth=c(window).width();b.responsive&&doResizeNow&&(!1!==H&&clearTimeout(H),H=setTimeout(function(){var e= d,j=b,G=n,p=m,q=g,s=r,w=v,x=c("body").css("overflow");c("body").css("overflow","hidden");responsiveWidth=a.parent().parent().width();responsiveHeight=a.parent().parent().height();j.responsiveRelativeToBrowser&&(responsiveWidth=c(window).width(),responsiveHeight=c(window).height());j.width100Proc&&(j.width=responsiveWidth);j.height100Proc&&(j.height=responsiveHeight);if(j.origWidth!=responsiveWidth||j.width100Proc){j.origWidth>responsiveWidth||j.width100Proc?j.width=responsiveWidth:j.width100Proc|| (j.width=j.origWidth);j.height100Proc||(j.height=j.width/e.bannerRatio);f.width(j.width);f.height(j.height);t.width(j.width);t.height(j.height);h.width(j.width);h.height(j.height);q.css("margin-top",parseInt((j.height-u.height())/2,10)+"px");contentHolderUnit=c(".contentHolderUnit",f);contentHolderUnit.width(j.width);contentHolderUnit.height(j.height);holderWidth=j.width*G;for(i=0;i<G;i++)E(i,e,j,p,f,a,q);h.width(holderWidth);l.css({left:parseInt((f.width()-l.width())/2,10)+"px"});s.css({left:parseInt((j.width- s.width())/2,10)+"px",top:parseInt((j.height-s.height())/2,10)+"px"});clearTimeout(e.timeoutID);y(1,e,j,G,w,p,a,q,h,f,s)}c("body").css("overflow",x)},300))});var v=c(".bottomNavButtonOFF",f);v.click(function(){if(!d.slideIsRunning){d.isVideoPlaying=!1;var e=c(this).attr("rel");c(v[d.current_img_no]).removeClass("bottomNavButtonON");d.previous_current_img_no=d.current_img_no;c("#contentHolderUnit_"+d.previous_current_img_no,f).html(c(m[d.previous_current_img_no]).html());E(d.previous_current_img_no, d,b,m,f,a,g);d.current_img_no=e-1;y(1,d,b,n,v,m,a,g,h,f,r)}});v.mouseenter(function(){var a=c(this),d=a.attr("rel");b.showPreviewThumbs&&(D=c('<div class="bottomOverThumb"></div>'),a.append(D),d=c(m[d]).attr("data-bottom-thumb"),D.html('<img src="'+d+'">'));a.addClass("bottomNavButtonON")});v.mouseleave(function(){var a=c(this),e=a.attr("rel");b.showPreviewThumbs&&D.remove();d.current_img_no!=e&&a.removeClass("bottomNavButtonON")});c(v[d.current_img_no]).addClass("bottomNavButtonON");0<b.autoPlay&& 1<n&&(b.showCircleTimer&&(d.intervalID=setInterval(function(){var a=d,c=b;nowx=(new Date).getTime();!a.mouseOverBanner&&(!a.effectIsRunning&&c.showCircleTimer)&&(a.ctx.clearRect(0,0,a.canvas.width,a.canvas.height),a.ctx.beginPath(),a.ctx.globalAlpha=c.behindCircleAlpha/100,a.ctx.arc(c.circleRadius+2*c.circleLineWidth,c.circleRadius+2*c.circleLineWidth,c.circleRadius,0,2*Math.PI,!1),a.ctx.lineWidth=c.circleLineWidth+2,a.ctx.strokeStyle=c.behindCircleColor,a.ctx.stroke(),a.ctx.beginPath(),a.ctx.globalAlpha= c.circleAlpha/100,a.ctx.arc(c.circleRadius+2*c.circleLineWidth,c.circleRadius+2*c.circleLineWidth,c.circleRadius,0,2*((a.timeElapsed+nowx-a.arcInitialTime)/1E3)/c.autoPlay*Math.PI,!1),a.ctx.lineWidth=c.circleLineWidth,a.ctx.strokeStyle=c.circleColor,a.ctx.stroke())},125)),d.timeoutID=setTimeout(function(){y(1,d,b,n,v,m,a,g,h,f,r)},1E3*b.autoPlay));"true"==c(m[d.current_img_no]).attr("data-video")&&r.css("display","block")})};c.fn.allinone_contentSlider.defaults={skin:"imposing",width:918,height:382, width100Proc:!1,height100Proc:!1,autoPlay:7,loop:!0,target:"_blank",absUrl:"",showAllControllers:!0,showNavArrows:!0,showOnInitNavArrows:!0,autoHideNavArrows:!0,showBottomNav:!0,showOnInitBottomNav:!0,autoHideBottomNav:!0,showPreviewThumbs:!0,enableTouchScreen:!0,showCircleTimer:!0,showCircleTimerIE8IE7:!1,circleRadius:10,circleLineWidth:4,circleColor:"#FF0000",circleAlpha:100,behindCircleColor:"#000000",behindCircleAlpha:50,responsive:!1,responsiveRelativeToBrowser:!0,thumbsWrapperMarginBottom:-35, origWidth:0,origHeight:0,origThumbW:0,origThumbH:0,windowOrientationScreenSize0:0,windowOrientationScreenSize90:0,windowOrientationScreenSize_90:0,windowCurOrientation:0}})(jQuery);