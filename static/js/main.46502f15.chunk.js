(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(a,e,t){},15:function(a,e,t){"use strict";t.r(e);var r=t(1),l=t.n(r),s=t(4),n=t.n(s),u=t(2),c=t(5),v=t(6),i=t(8),o=t(7),d=(t(13),t(0)),h=function(a){Object(i.a)(t,a);var e=Object(o.a)(t);function t(a){var r;return Object(c.a)(this,t),(r=e.call(this,a)).componentDidMount=function(){},r.handleClick=function(a){r.handleValueChange(a)},r.handleValueChange=function(a){if(r.state.ansArr.length<9&&-1===r.state.ansArr.indexOf(a)){r.state.toggle?(document.getElementById("block".concat(a)).style.backgroundColor="yellow",document.getElementById("block".concat(a)).innerHTML="X"):(document.getElementById("block".concat(a)).style.backgroundColor="green",document.getElementById("block".concat(a)).innerHTML="0");var e=r.state.arr.map((function(e,t){var l=e;return a==t&&(l.value=r.state.toggle),l}));r.setState({toggle:!r.state.toggle,ansArr:[].concat(Object(u.a)(r.state.ansArr),[a]),arr:e}),r.state.toggle?r.setState({player1:[].concat(Object(u.a)(r.state.player1),[a])}):r.setState({player2:[].concat(Object(u.a)(r.state.player2),[a])})}},r.componentDidUpdate=function(a,e,t){var l="";1==r.state.arr[0].value&&1==r.state.arr[4].value&&1==r.state.arr[8].value||1==r.state.arr[0].value&&1==r.state.arr[1].value&&1==r.state.arr[2].value||1==r.state.arr[2].value&&1==r.state.arr[4].value&&1==r.state.arr[6].value||1==r.state.arr[0].value&&1==r.state.arr[3].value&&1==r.state.arr[6].value||1==r.state.arr[8].value&&1==r.state.arr[4].value&&1==r.state.arr[0].value||1==r.state.arr[2].value&&1==r.state.arr[5].value&&1==r.state.arr[8].value||1==r.state.arr[6].value&&1==r.state.arr[7].value&&1==r.state.arr[8].value||1==r.state.arr[3].value&&1==r.state.arr[4].value&&1==r.state.arr[5].value||1==r.state.arr[1].value&&1==r.state.arr[4].value&&1==r.state.arr[7].value||0==r.state.arr[8].value&&0==r.state.arr[4].value&&0==r.state.arr[0].value||0==r.state.arr[0].value&&0==r.state.arr[4].value&&0==r.state.arr[8].value||0==r.state.arr[2].value&&0==r.state.arr[4].value&&0==r.state.arr[6].value||0==r.state.arr[2].value&&0==r.state.arr[5].value&&0==r.state.arr[8].value||0==r.state.arr[0].value&&0==r.state.arr[1].value&&0==r.state.arr[2].value||0==r.state.arr[6].value&&0==r.state.arr[7].value&&0==r.state.arr[8].value||0==r.state.arr[3].value&&0==r.state.arr[4].value&&0==r.state.arr[5].value||0==r.state.arr[1].value&&0==r.state.arr[4].value&&0==r.state.arr[7].value||0==r.state.arr[0].value&&0==r.state.arr[3].value&&0==r.state.arr[6].value?(!0,l=r.state.player1.length>r.state.player2.length?"Winner is  Player 1 ":"Winner is  Player 2 "):9==r.state.ansArr.length&&(l="Its is draw"),e.ansArr!==r.state.ansArr&&""!=l&&(r.setState({winner:l}),console.log(r.state))},r.handleAnsString=function(a,e){},r.handleGameReset=function(){window.location.reload()},r.state={toggle:!0,player1:[],player2:[],ansArr:[],winner:"",arr:[{id:0,value:"10"},{id:1,value:"10"},{id:2,value:"10"},{id:3,value:"10"},{id:4,value:"10"},{id:5,value:"10"},{id:6,value:"10"},{id:7,value:"10"},{id:8,value:"10"}]},r}return Object(v.a)(t,[{key:"render",value:function(){var a=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"text-center",children:"Welcome to Tic Tac Toe"}),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"container",children:this.state.arr.map((function(e){return Object(d.jsx)("div",{id:"block".concat(e.id),className:"block block".concat(e.id),onClick:function(){return a.handleClick(e.id)}})}))}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:this.handleGameReset,children:"RESET"}),Object(d.jsxs)("h2",{children:["RESULT: ",""!=this.state.winner?this.state.winner:""]})]})]})]})}}]),t}(l.a.Component),b=document.getElementById("root");n.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(h,{})}),b)}},[[15,1,2]]]);
//# sourceMappingURL=main.46502f15.chunk.js.map