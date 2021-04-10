(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],[,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(6),a=n.n(i),s=(n(11),n(12),n(2)),r=(n(13),n(0));var o=function(){function e(){var e=function(){var e=document.querySelector("#canvasClock").getContext("2d"),t=240;console.log(t),e.translate(t,t);var n=e.createRadialGradient(0,0,144,0,0,480);function c(t,n,c){e.beginPath(),e.lineWidth=c,e.lineCap="round",e.moveTo(0,0),e.rotate(t),e.lineTo(0,-n),e.strokeStyle="#0F2027",e.stroke(),e.rotate(-t)}return n.addColorStop(.2,"#2d343600"),n.addColorStop(.1,"#ffb142"),e.beginPath(),e.arc(0,0,216,0,2*Math.PI),e.lineWidth=10,e.strokeStyle="#8395a7",e.stroke(),{drawClock:function(){e.fillStyle=n,e.fillRect(-240,-240,480,480),e.fillStyle="#130f40",e.font="30px Arial",e.font=144*.15+"px Vazir",e.textBaseline="middle",e.textAlign="center";for(var t=12;t>0;t--)e.fillText(t.toString(),0,-144),e.rotate(-30*Math.PI/180)},drawTime:function(t){var n=new Date,i=n.getHours(),a=n.getMinutes(),s=n.getSeconds();c(i=(i%=12)*Math.PI/6+a*Math.PI/360,.5*t,.07*t),c(a*=Math.PI/30,.8*t,.07*t),c(s*=Math.PI/30,.9*t,.02*t),e.beginPath(),e.arc(0,0,12.5,0,2*Math.PI),e.fillStyle="#2C5364",e.fill()}}}(),t=e.drawClock,n=e.drawTime;setInterval((function(){t(),n(150)}),1e3)}return Object(c.useEffect)((function(){e()}),[]),Object(r.jsx)("div",{id:"Clock",children:Object(r.jsx)("canvas",{id:"canvasClock",width:"500",height:"500"})})};n(15),n(16);var u=function(e){var t=e.setShow,n=e.show;return Object(r.jsxs)("div",{id:"nav",className:"ui inverted menu secondary vertical pointing menu",children:[Object(r.jsxs)("a",{className:"".concat("Clock"===n?"active":null," item"),onClick:function(){return t("Clock")},children:[Object(r.jsx)("i",{className:"clock icon"}),"Clock"]}),Object(r.jsxs)("a",{className:"".concat("Timer"===n?"active":null," item"),onClick:function(){return t("Timer")},children:[Object(r.jsx)("i",{className:"hourglass icon"}),"Timer"]}),Object(r.jsxs)("a",{className:"".concat("Stopwatch"===n?"active":null," item"),onClick:function(){return t("Stopwatch")},children:[Object(r.jsx)("i",{className:"stopwatch icon"}),"Stopwatch"]})]})};var l=function(e){var t=e.resume,n=e.pause,c=e.stop;return Object(r.jsxs)("div",{id:"Button-group",className:"ui buttons",children:[Object(r.jsxs)("button",{className:"ui blue inverted basic labeled icon button",onClick:function(){return c()},children:[Object(r.jsx)("i",{className:"redo icon"}),"Reset"]}),Object(r.jsxs)("button",{className:"ui blue inverted basic labeled icon button",onClick:function(){return n()},children:[Object(r.jsx)("i",{className:"pause icon"}),"Pause"]}),Object(r.jsxs)("button",{className:"ui blue inverted basic labeled icon button",onClick:function(){return t()},children:[Object(r.jsx)("i",{className:"play icon"}),"Resume"]})]})};n(17);var j=function(e){var t,n=Object(c.useState)(0),i=Object(s.a)(n,2),a=i[0],o=i[1];function u(){clearTimeout(t),t=setTimeout((function(){return o(a+1)}),1e3)}return Object(c.useEffect)((function(){u(),console.log(a)}),[a]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"stopwatch",children:a}),Object(r.jsx)(l,{resume:u,pause:function(){clearTimeout(t)},stop:function(){clearTimeout(t),o(0)}})]})},d=n(3);n(5);var b=function(e){var t=e.changeHandler,n=e.timer,c=n.hour,i=n.minute,a=n.second;return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsxs)("div",{className:"timer inp",children:[Object(r.jsx)("input",{value:c,type:"number",id:"hour",min:"0",max:"10",onChange:function(e){return t(e)}}),Object(r.jsx)("label",{htmlFor:"hour",children:"hour"})]}),Object(r.jsxs)("div",{className:"timer inp",children:[Object(r.jsx)("input",{value:i,type:"number",id:"minute",min:"0",max:"60",onChange:function(e){return t(e)}}),Object(r.jsx)("label",{htmlFor:"minute",children:"minute"})]}),Object(r.jsxs)("div",{className:"timer inp",children:[Object(r.jsx)("input",{value:a,type:"number",id:"second",min:"0",max:"60",onChange:function(e){return t(e)}}),Object(r.jsx)("label",{htmlFor:"second",children:"second"})]})]})};var m=function(e){var t=e.timer,n=t.hour,c=t.minute,i=t.second;return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{class:"element",children:n}),Object(r.jsx)("div",{class:"element",children:c}),Object(r.jsx)("div",{class:"element",children:i})]})};var h=function(e){var t=e.timer,n=e.isEnd;return Object(r.jsx)("div",{className:"ui grid",children:n()?Object(r.jsx)("div",{class:"element End",children:"End"}):Object(r.jsx)(m,{timer:t})})};var f=function(){var e=Object(c.useState)({hour:0,minute:2,second:30}),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),o=Object(s.a)(a,2),u=o[0],l=o[1];function j(){return 0===n.second&&0===n.minute&&0===n.hour}return Object(c.useEffect)((function(){if(u&&!j())setTimeout((function(){0!==n.second?i((function(e){var t=Object(d.a)({},e);return t.second=n.second-1,t})):i((function(e){var t=Object(d.a)({},e);t.second=59;var c=n.minute-1;0===n.minute&&(c=59),t.minute=c;var i=n.hour-1;return 0===n.hour&&(i=0),t.hour=i,t}))}),1e3)}),[n,u]),Object(r.jsxs)("div",{className:"timer",children:[u?Object(r.jsx)(h,{timer:n,isEnd:j}):Object(r.jsx)(b,{timer:n,changeHandler:function(e){var t=+e.target.value;""===t&&(t=0),i((function(n){n[e.target.id]=t;var c=Object(d.a)({},n);return console.log(c),c}))}}),j()?Object(r.jsx)("button",{className:"ui blue button",onClick:function(e){i({hour:0,minute:2,second:30}),l(!1)},children:" Restart"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"ui green button",onClick:function(e){l(!0)},children:"Start"}),Object(r.jsx)("button",{className:"ui red button",onClick:function(e){l(!1)},children:" Stop"})]})]})};var v=function(){var e=Object(c.useState)("Clock"),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{setShow:i,show:n}),"Clock"===n?Object(r.jsx)(o,{}):null,"Timer"===n?Object(r.jsx)(f,{}):null,"Stopwatch"===n?Object(r.jsx)(j,{}):null]})};a.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.97c940c5.chunk.js.map