(this["webpackJsonpreact-alam"]=this["webpackJsonpreact-alam"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a,c,i,o,r,s,p,u,d=n(0),l=n.n(d),m=n(9),x=n.n(m),j=n(2),b=n(5),h=n.p+"static/media/piano-without-melody-short-loop-60-bpm.4eef14ed.mp3",O=n(3),f=n(1),g=O.a.div(a||(a=Object(j.a)(["\n  display: block;\n  max-width: 800px;\n  margin: 0 auto;\n  color: #fff;\n  padding-top: 30px;\n  text-align: center;\n"]))),v=O.a.h2(c||(c=Object(j.a)(["\n  font-size: 45px;\n  text-shadow: 1px 0 2px #333;\n"]))),w=O.a.p(i||(i=Object(j.a)(["\n  margin-top: 20px;\n  font-size: 20px;\n  text-shadow: 1px 0 2px #333;\n"]))),y=O.a.p(o||(o=Object(j.a)(["\n  font-size: 30px;\n  margin-top: 30px;\n  text-shadow: 1px 0 2px #333;\n"]))),S=O.a.input(r||(r=Object(j.a)(["\n  border: none;\n  padding: 5px;\n  margin-top: 20px;\n"]))),T=O.a.div(s||(s=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 30px;\n"]))),k=O.a.button(p||(p=Object(j.a)(["\n  border: none;\n  font-size: 18px;\n  border-radius: 5px;\n  padding: 5px 10px;\n"]))),A=function(e){var t=e.nowTime,n=e.time,a=e.handleTime,c=e.handleAdd,i=e.stopSound,o=e.alarmTime,r=e.dateMessage;return Object(f.jsxs)(g,{children:[Object(f.jsx)(v,{children:r.text}),Object(f.jsx)(w,{children:"The current time is"}),Object(f.jsx)(y,{children:t}),Object(f.jsx)(w,{children:"Please, set the alarm"}),Object(f.jsx)(S,{type:"time",value:n,onChange:a}),Object(f.jsxs)(T,{children:[Object(f.jsx)(k,{type:"submit",onClick:c,children:"SetAlarm"}),Object(f.jsx)(k,{type:"submit",onClick:i,children:"StopAlarm"})]}),Object(f.jsx)(y,{children:o})]})},G=(n(20),new Audio(h));G.loop=!0;var z={images:"",text:""},E=O.a.main(u||(u=Object(j.a)(["\n  height: 100vh;\n  width: 100%;\n  background-size: cover;\n"]))),I=function(){var e=Object(d.useState)(new Date),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(d.useState)(""),i=Object(b.a)(c,2),o=i[0],r=i[1],s=Object(d.useState)(""),p=Object(b.a)(s,2),u=p[0],l=p[1];Object(d.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){return clearInterval(e)}}),[]);var m=n.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}),x=n.toLocaleTimeString([],{hour:"numeric"}),j=parseFloat(x);return Object(d.useEffect)((function(){m===u&&G.play()}),[m]),Object(d.useEffect)((function(){z=j>18||j<6?{images:"https://source.unsplash.com/VZxNq9GytpQ",text:"Good Evening"}:j>6||j<12?{images:"https://source.unsplash.com/-G3rw6Y02D0",text:"Good Morning"}:{images:"https://source.unsplash.com/8GVuQUmZW8Y",text:"Good Afternoon"}}),[j]),Object(f.jsx)(E,{style:{backgroundImage:"url(".concat(z.images,")")},children:Object(f.jsx)(A,{dateMessage:z,nowTime:m,time:o,handleTime:function(e){return r(e.target.value)},handleAdd:function(){l(o)},stopSound:function(){G.pause(),G.currentTime=0},alarmTime:u})})};x.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b46ee26e.chunk.js.map