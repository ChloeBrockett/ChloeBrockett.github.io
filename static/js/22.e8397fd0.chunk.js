"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[22],{5022:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return u}});var r=n(1811),i=n(9507),a=n(7909),u=function(e,t,n,u,o){var c=e.ownerDocument.defaultView,f=(0,i.i)(e),h=function(e){return f?-e.deltaX:e.deltaX};return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var t=e.startX;return f?t>=c.innerWidth-50:t<=50}(e)&&t()},onStart:n,onMove:function(e){var t=h(e)/c.innerWidth;u(t)},onEnd:function(e){var t=h(e),n=c.innerWidth,i=t/n,a=function(e){return f?-e.velocityX:e.velocityX}(e),u=a>=0&&(a>.2||t>n/2),s=(u?1-i:i)*n,d=0;if(s>5){var l=s/Math.abs(a);d=Math.min(l,540)}o(u,i<=0?.01:(0,r.h)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=22.e8397fd0.chunk.js.map