(this.webpackJsonpformation=this.webpackJsonpformation||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),m=a.n(r),o=(a(14),a(2)),i=a(3),c=a(4),s=a(5);var h=function(){return l.a.createElement("header",null,"Meme Generator in React")};var u=function(){return l.a.createElement("footer",null,"Created with ",l.a.createElement("i",{class:"fa fa-heart"})," by ",l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-venera/"},"Daniel Venera"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Daniel-Venera/todoapp_react",target:"blank"},l.a.createElement("i",{class:"fa fa-github"})),l.a.createElement("a",{href:"mailto:daniel.venera2@gmail.com",target:"blank"},l.a.createElement("i",{class:"fa fa-envelope-o"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-venera/",target:"blank"},l.a.createElement("i",{class:"fa fa-linkedin"})))},d=a(8),f=a(1),b=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(d.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({randomImg:a})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},this.state.randomImg?console.log("oui"):console.log("non"),l.a.createElement("input",{className:this.state.randomImg?null:"hidden-input",type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),l.a.createElement("input",{className:this.state.randomImg?null:"hidden-input",type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),l.a.createElement("button",{className:this.state.randomImg?null:"gen"},"Gen")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:""}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(l.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(b,null),l.a.createElement(u,null))}}]),a}(l.a.Component);m.a.render(l.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1e793383.chunk.js.map