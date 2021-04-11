(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],[,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),a=n.n(r),i=(n(11),n(12),n(2)),s=(n(13),n(0));var o=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var t=function(){var e=document.querySelector("#canvasClock").getContext("2d"),t=240;console.log(t),e.translate(t,t);var n=e.createRadialGradient(0,0,144,0,0,480);function c(t,n,c){e.beginPath(),e.lineWidth=c,e.lineCap="round",e.moveTo(0,0),e.rotate(t),e.lineTo(0,-n),e.strokeStyle="#0F2027",e.stroke(),e.rotate(-t)}return n.addColorStop(.2,"#2d343600"),n.addColorStop(.1,"#ffb142"),e.beginPath(),e.arc(0,0,216,0,2*Math.PI),e.lineWidth=10,e.strokeStyle="#8395a7",e.stroke(),{drawClock:function(){e.fillStyle=n,e.fillRect(-240,-240,480,480),e.fillStyle="#130f40",e.font="30px Arial",e.font=144*.15+"px Vazir",e.textBaseline="middle",e.textAlign="center";for(var t=12;t>0;t--)e.fillText(t.toString(),0,-144),e.rotate(-30*Math.PI/180)},drawTime:function(t){var n=new Date,r=n.getHours(),a=n.getMinutes(),i=n.getSeconds();c(r=(r%=12)*Math.PI/6+a*Math.PI/360,.5*t,.07*t),c(a*=Math.PI/30,.8*t,.07*t),c(i*=Math.PI/30,.9*t,.02*t),e.beginPath(),e.arc(0,0,12.5,0,2*Math.PI),e.fillStyle="#2C5364",e.fill()}}}(),n=t.drawClock,c=t.drawTime,r=setInterval((function(){n(),c(150)}),1e3);return e.current=r,function(){clearInterval(e.current)}}),[]),Object(s.jsx)("div",{id:"Clock",children:Object(s.jsx)("canvas",{id:"canvasClock",width:"500",height:"500"})})},u=Object(c.createContext)(["dark",function(){}]);n(15);var l=function(e){var t=e.setShow,n=e.show,r=Object(c.useContext)(u),a=Object(i.a)(r,2),o=a[0],l=a[1];return Object(s.jsxs)("div",{id:"nav",className:"ui menu secondary ".concat(o," vertical pointing menu"),children:[Object(s.jsxs)("a",{className:"".concat("Clock"===n&&"active"," item"),onClick:function(){return t("Clock")},children:[Object(s.jsx)("i",{className:"clock icon"}),"Clock"]}),Object(s.jsxs)("a",{className:"".concat("Timer"===n&&"active"," item"),onClick:function(){return t("Timer")},children:[Object(s.jsx)("i",{className:"hourglass icon"}),"Timer"]}),Object(s.jsxs)("a",{className:"".concat("Stopwatch"===n&&"active"," item"),onClick:function(){return t("Stopwatch")},children:[Object(s.jsx)("i",{className:"stopwatch icon"}),"Stopwatch"]}),Object(s.jsx)("button",{className:"ui ".concat(o," item button"),onClick:function(){return l(""===o?"inverted":"inverted"===o&&"")},children:"changeHandler"})]})};var j=function(e){var t=e.resume,n=e.pause,r=e.stop,a=Object(c.useContext)(u),o=Object(i.a)(a,1)[0];return Object(s.jsxs)("div",{id:"Button-group",className:"ui buttons",children:[Object(s.jsxs)("button",{className:"ui ".concat(o," blue basic labeled icon button"),onClick:function(){return r()},children:[Object(s.jsx)("i",{className:"redo icon"}),"Reset"]}),Object(s.jsxs)("button",{className:"ui ".concat(o," blue basic labeled icon button"),onClick:function(){return n()},children:[Object(s.jsx)("i",{className:"pause icon"}),"Pause"]}),Object(s.jsxs)("button",{className:"ui ".concat(o," blue basic labeled icon button"),onClick:function(){return t()},children:[Object(s.jsx)("i",{className:"play icon"}),"Resume"]})]})};n(16);var b=function(e){var t=Object(c.useRef)(),n=Object(c.useState)(0),r=Object(i.a)(n,2),a=r[0],o=r[1],u=Object(c.useState)(!0),l=Object(i.a)(u,2),b=l[0],d=l[1];function m(){b||d(!0),clearInterval(t.current);var e=setInterval((function(){console.log("I am still running!"),o(a+1)}),1e3);t.current=e}return Object(c.useEffect)((function(){return b&&m(),function(){return clearInterval(t.current)}}),[a]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"stopwatch",children:a}),Object(s.jsx)(j,{resume:m,pause:function(){clearInterval(t.current)},stop:function(){d(!1),o(0),clearInterval(t.current)}})]})},d=n(3);n(5);var m=function(e){var t=e.changeHandler,n=e.timer,c=n.hour,r=n.minute,a=n.second;return Object(s.jsxs)("div",{className:"group",children:[Object(s.jsxs)("div",{className:"timer inp",children:[Object(s.jsx)("input",{value:c,type:"number",id:"hour",min:"0",max:"10",onChange:function(e){return t(e)}}),Object(s.jsx)("label",{htmlFor:"hour",children:"hour"})]}),Object(s.jsxs)("div",{className:"timer inp",children:[Object(s.jsx)("input",{value:r,type:"number",id:"minute",min:"0",max:"60",onChange:function(e){return t(e)}}),Object(s.jsx)("label",{htmlFor:"minute",children:"minute"})]}),Object(s.jsxs)("div",{className:"timer inp",children:[Object(s.jsx)("input",{value:a,type:"number",id:"second",min:"0",max:"60",onChange:function(e){return t(e)}}),Object(s.jsx)("label",{htmlFor:"second",children:"second"})]})]})};var h=function(e){var t=e.timer,n=t.hour,c=t.minute,r=t.second;return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"element",children:n}),Object(s.jsx)("div",{className:"element",children:c}),Object(s.jsx)("div",{className:"element",children:r})]})};n(17);var O=function(e){var t=Object(c.useState)(0),n=Object(i.a)(t,2),r=n[0],a=n[1],o={width:"".concat(r,"%")};return Object(c.useEffect)((function(){r<98&&setTimeout((function(){a(r+2)}),20)})),Object(s.jsxs)("div",{className:"max",children:[Object(s.jsx)("div",{className:"content",children:e.children}),Object(s.jsx)("span",{style:o,className:"progressBar"})]})};var v=function(e){var t=e.timer,n=e.isEnd;return Object(s.jsx)("div",{className:"ui grid",children:n()?Object(s.jsx)(O,{children:"Time's up!"}):Object(s.jsx)(h,{timer:t})})};var f=function(){var e=Object(c.useState)({hour:0,minute:2,second:30}),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(i.a)(a,2),u=o[0],l=o[1],j=Object(c.useRef)();function b(){return 0===n.second&&0===n.minute&&0===n.hour}return Object(c.useEffect)((function(){if(u&&!b()){var e=setInterval((function(){return console.log("I am still run!!!"),u||clearInterval(j.current),void(0!==n.second?r((function(e){var t=Object(d.a)({},e);return t.second=n.second-1,t})):r((function(e){var t=Object(d.a)({},e);t.second=59;var c=n.minute-1;0===n.minute&&(c=59),t.minute=c;var r=n.hour-1;return 0===n.hour&&(r=0),t.hour=r,t})))}),1e3);j.current=e}return function(){clearInterval(j.current)}}),[n,u]),Object(s.jsxs)("div",{className:"timer",children:[u?Object(s.jsx)(v,{timer:n,isEnd:b}):Object(s.jsx)(m,{timer:n,changeHandler:function(e){var t=+e.target.value;""===t&&(t=0),r((function(n){return n[e.target.id]=t,Object(d.a)({},n)}))}}),b()?Object(s.jsx)("button",{className:"ui blue button",onClick:function(e){r({hour:0,minute:2,second:30}),l(!1)},children:" Restart"}):Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"ui green button",onClick:function(e){l(!0)},children:"Start"}),Object(s.jsx)("button",{className:"ui red button",onClick:function(e){l(!1)},children:" Stop"})]})]})};n(18);var x=function(){var e=Object(c.useState)("inverted"),t=Object(c.useState)("Clock"),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(s.jsx)("div",{className:"App ".concat(e[0]),children:Object(s.jsxs)(u.Provider,{value:e,children:[Object(s.jsx)(l,{setShow:a,show:r}),"Clock"===r?Object(s.jsx)(o,{}):null,"Timer"===r?Object(s.jsx)(f,{}):null,"Stopwatch"===r?Object(s.jsx)(b,{}):null]})})};a.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.8fcdd571.chunk.js.map