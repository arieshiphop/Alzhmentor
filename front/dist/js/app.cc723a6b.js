(function(e){function t(t){for(var o,c,s=t[0],l=t[1],i=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1462:function(e,t,n){"use strict";n("c0b3")},"21dd":function(e,t,n){"use strict";n("3589")},"2daf":function(e,t,n){e.exports=n.p+"img/logoonly.4357e3fa.png"},3589:function(e,t,n){},"35b9":function(e,t,n){"use strict";n("d52e")},"44c0":function(e,t,n){},"47e6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t){var n=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(n)}n("b6dd");var r=n("d959"),c=n.n(r);const s={},l=c()(s,[["render",a]]);var i=l,u=n("6c02"),d=n("cf05"),p=n.n(d),m=function(e){return Object(o["pushScopeId"])("data-v-0872ff92"),e=e(),Object(o["popScopeId"])(),e},b={class:"first-content"},g=m((function(){return Object(o["createElementVNode"])("img",{src:p.a,alt:""},null,-1)})),f=m((function(){return Object(o["createElementVNode"])("p",null," Recently, there have been many people who have witnessed their loved ones suffering from Alzheimer's and other forms of dementia 👩‍🦳. Through a web application, we will try to help them by training their brain and memory 🧠. ",-1)})),O={class:"field"},j={class:"p-float-label"},v=m((function(){return Object(o["createElementVNode"])("label",{for:"username"},"Username",-1)})),h={class:"p-float-label"},V=m((function(){return Object(o["createElementVNode"])("label",{for:"password"},"password",-1)})),N={class:"buttons"},y=m((function(){return Object(o["createElementVNode"])("button",{class:"seemoreb"},"See more",-1)}));function E(e,t,n,a,r,c){var s=Object(o["resolveComponent"])("NavBar"),l=Object(o["resolveComponent"])("InputText");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s),Object(o["createElementVNode"])("main",null,[Object(o["createElementVNode"])("section",b,[g,f,Object(o["createElementVNode"])("form",O,[Object(o["createElementVNode"])("span",j,[Object(o["createVNode"])(l,{id:"username",type:"text",modelValue:r.user,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.user=e})},null,8,["modelValue"]),v]),Object(o["createElementVNode"])("span",h,[Object(o["createVNode"])(l,{id:"password",type:"password",modelValue:r.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.password=e}),onKeyup:t[2]||(t[2]=Object(o["withKeys"])((function(e){return c.onButtonClicked()}),["enter"])),autocomplete:"password"},null,8,["modelValue"]),V])])]),Object(o["createElementVNode"])("section",N,[Object(o["createElementVNode"])("button",{onClick:t[3]||(t[3]=function(){return c.onButtonClicked&&c.onButtonClicked.apply(c,arguments)}),class:"startb"},"Login"),y])])],64)}var w=n("1da1"),k=(n("96cf"),n("e9c4"),n("2c28")),x=(n("d3b7"),{API_PATH:"http://localhost:5000/api",AUTH_PATH:"http://localhost:5000/auth"});function S(e,t){return B.apply(this,arguments)}function B(){return B=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t,password:n})},e.next=3,fetch("".concat(x.AUTH_PATH,"/login"),o);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}var _=n("2daf"),C=n.n(_),P={class:"header"},M=Object(o["createStaticVNode"])('<a href="/" class="logo" data-v-a33522d8><img class="normal-logo" src="'+p.a+'" alt="Alzhmentor logo" data-v-a33522d8><img class="small-logo" src="'+C.a+'" alt="Small alzhmenetor logo" data-v-a33522d8></a><input class="menu-btn" type="checkbox" id="menu-btn" data-v-a33522d8><label class="menu-icon" for="menu-btn" data-v-a33522d8><span class="nav-icon" data-v-a33522d8></span></label><ul class="menu" data-v-a33522d8><li data-v-a33522d8><a href="#" data-v-a33522d8>Home</a></li><li data-v-a33522d8><a href="#exercises" data-v-a33522d8>Exercises</a></li><li data-v-a33522d8><a href="#profile" data-v-a33522d8>Profile</a></li></ul>',4),I=[M];function T(e,t,n,a,r,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("header",P,I)}var U={name:"NavBar"};n("21dd");const R=c()(U,[["render",T],["__scopeId","data-v-a33522d8"]]);var L=R,D=n("8398"),A=n("3d20"),F=n.n(A);function H(e,t,n){F.a.fire({title:e,text:t,icon:"success",confirmButtonText:"Ok"}).then((function(){n.push("/exercises")}))}function J(e,t){F.a.fire({title:e,text:t,icon:"error",confirmButtonText:"Ok"})}var z={name:"HomePage",components:{NavBar:L,InputText:D["a"]},data:function(){return{user:"",password:"",localUser:Object(k["useStorage"])("user",{})}},methods:{onButtonClicked:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S(e.user,e.password);case 2:if(n=t.sent,"unauthorized"!=n.statusText.toLowerCase()){t.next=7;break}J("Bad","Username or password is incorrect"),t.next=13;break;case 7:return t.next=9,n.json();case 9:o=t.sent,e.localUser=o,localStorage.setItem("user",JSON.stringify(e.localUser)),H("Welcome","You are logged in",e.$router);case 13:case"end":return t.stop()}}),t)})))()}}};n("35b9");const $=c()(z,[["render",E],["__scopeId","data-v-0872ff92"]]);var G=$,q=(n("b0c0"),function(e){return Object(o["pushScopeId"])("data-v-b59f0b62"),e=e(),Object(o["popScopeId"])(),e}),K=q((function(){return Object(o["createElementVNode"])("h1",null,"What do you want to train today?",-1)})),W=["onClick"],Y=["src"];function Q(e,t,n,a,r,c){var s=Object(o["resolveComponent"])("NavBar");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s),Object(o["createElementVNode"])("main",null,[Object(o["createElementVNode"])("section",null,[K,Object(o["createElementVNode"])("article",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.exercises,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"redondel",key:e.name,onClick:function(t){return c.onExerciseClick(e)}},[Object(o["createElementVNode"])("img",{src:e.img,alt:"{{exercise.name}}"},null,8,Y),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.name),1)],8,W)})),128))])])])],64)}var X={components:{NavBar:L},data:function(){return{exercises:[{name:"Memory",img:"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2018_24/2462811/180612-memory-ideas-tricks-devices-ac-451p.jpg"},{name:"Language",img:"https://stimuluspro.com/www/book/imagenes/911/lenguaje.png"},{name:"Attention",img:"https://blog.neuronup.com/wp-content/uploads/2019/07/atencion.jpg"},{name:"Payments",img:"https://ecommercenews.eu/wp-content/uploads/2013/06/most_common_payment_methods_in_europe.png"}]}},methods:{onExerciseClick:function(e){this.$router.push("/exercises/".concat(e.name.toLowerCase()))}}};n("6f05");const Z=c()(X,[["render",Q],["__scopeId","data-v-b59f0b62"]]);var ee=Z,te=function(e){return Object(o["pushScopeId"])("data-v-4b62c28a"),e=e(),Object(o["popScopeId"])(),e},ne={class:"container"},oe={class:"profile-header"},ae={class:"profile-img"},re=["src"],ce={class:"profile-nav-info"},se={class:"user-name"},le=te((function(){return Object(o["createElementVNode"])("div",{class:"address"},[Object(o["createElementVNode"])("p",{id:"state",class:"state"},"Bilbao,"),Object(o["createElementVNode"])("span",{id:"country",class:"country"},"España")],-1)})),ie={class:"main-bd"},ue={class:"left-side"},de={class:"profile-side"},pe={class:"mobile-no"},me={class:"fa fa-phone"},be={class:"user-mail"},ge={class:"fa fa-envelope"},fe={class:"user-bio"},Oe=te((function(){return Object(o["createElementVNode"])("h3",null,"Bio",-1)})),je={class:"bio"},ve={class:"right-side"},he={class:"nav"},Ve={key:0,class:"log-container"},Ne={key:0,class:"stats-container"},ye=te((function(){return Object(o["createElementVNode"])("h1",null,"Stats",-1)})),Ee=[ye];function we(e,t,n,a,r,c){var s=Object(o["resolveComponent"])("NavBar");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s),Object(o["createElementVNode"])("div",ne,[Object(o["createElementVNode"])("div",oe,[Object(o["createElementVNode"])("div",ae,[Object(o["createElementVNode"])("img",{src:r.user.avatar,alt:"Profile Image"},null,8,re)]),Object(o["createElementVNode"])("div",ce,[Object(o["createElementVNode"])("h3",se,Object(o["toDisplayString"])(r.user.name),1),le])]),Object(o["createElementVNode"])("div",ie,[Object(o["createElementVNode"])("div",ue,[Object(o["createElementVNode"])("div",de,[Object(o["createElementVNode"])("p",pe,[Object(o["createElementVNode"])("i",me,Object(o["toDisplayString"])(r.user.phone),1)]),Object(o["createElementVNode"])("p",be,[Object(o["createElementVNode"])("i",ge,Object(o["toDisplayString"])(r.user.email),1)]),Object(o["createElementVNode"])("div",fe,[Oe,Object(o["createElementVNode"])("p",je,Object(o["toDisplayString"])(r.user.bio),1)])])]),Object(o["createElementVNode"])("div",ve,[Object(o["createElementVNode"])("div",he,[Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])(["user-post",{active:r.showLogs}]),onClick:t[0]||(t[0]=function(e){return c.getUserLogs(r.user.id)})}," Log ",2),Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])(["user-setting",{active:r.showStats}]),onClick:t[1]||(t[1]=function(){return c.getUserStats&&c.getUserStats.apply(c,arguments)})}," Stats ",2)])]),r.showLogs?(Object(o["openBlock"])(),Object(o["createElementBlock"])("section",Ve,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.logs,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("article",{key:e.id},[Object(o["createElementVNode"])("h1",null,"Log-"+Object(o["toDisplayString"])(e.log_id),1),Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",null,"Entry money: "+Object(o["toDisplayString"])(e.dinero_entregado)+"$",1),Object(o["createElementVNode"])("li",null,"Gived money: "+Object(o["toDisplayString"])(e.dinero_ofrecido)+"$",1),Object(o["createElementVNode"])("li",null,"Hour: "+Object(o["toDisplayString"])(e.hora),1),Object(o["createElementVNode"])("li",null,"Completed: "+Object(o["toDisplayString"])(e.completado),1)])])})),128))])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("section",null,[r.showStats?(Object(o["openBlock"])(),Object(o["createElementBlock"])("article",Ne,Ee)):Object(o["createCommentVNode"])("",!0)])])])])],64)}n("4de4"),n("99af");function ke(){var e=localStorage.getItem("user"),t=JSON.parse(e);return t}var xe={components:{NavBar:L},data:function(){return{user:"",logs:[],showLogs:!0,showStats:!1}},mounted:function(){this.getUserData(),this.getUserLogs(this.user.id)},computed:{},methods:{getUserStats:function(){this.logs.filter((function(e){return 0==e.completado})),this.logs.filter((function(e){return 1==e.completado}));this.showLogs=!1,this.showStats=!0},getUserData:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.user=ke();case 1:case"end":return t.stop()}}),t)})))()},getUserLogs:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x.API_PATH,"/users/").concat(e,"/logs"));case 2:return o=n.sent,n.next=5,o.json();case 5:a=n.sent,t.logs=a,t.showLogs=!0,t.showStats=!1;case 9:case"end":return n.stop()}}),n)})))()}}};n("1462");const Se=c()(xe,[["render",we],["__scopeId","data-v-4b62c28a"]]);var Be=Se,_e={class:"parent"},Ce=["onClick","src"];function Pe(e,t,n,a,r,c){var s=Object(o["resolveComponent"])("NavBar"),l=Object(o["resolveComponent"])("Button");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s),Object(o["createElementVNode"])("main",null,[Object(o["createElementVNode"])("section",null,[Object(o["createElementVNode"])("h1",null,"Money to pay: "+Object(o["toDisplayString"])(r.startMoney)+" 💵",1),Object(o["createElementVNode"])("h2",null,"Paid money: "+Object(o["toDisplayString"])(r.givedMoney)+" 💸",1),Object(o["createElementVNode"])("article",_e,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.money.coins,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:e.value},[Object(o["createElementVNode"])("img",{onClick:function(t){return c.addMoney(e)},class:"money",src:e.img,alt:"Money buttons"},null,8,Ce)])})),128))]),Object(o["createVNode"])(l,{label:"Submit",class:"p-button-raised",onClick:c.sendGameLog},null,8,["onClick"])])])],64)}n("b680"),n("35b3"),n("a9e3");var Me=n("ec26");function Ie(){return Object(Me["a"])()}function Te(){var e=new Date,t=e.getHours(),n=e.getMinutes();return 1==String(n).length&&(n="0"+n),t+":"+n}function Ue(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date,n=e[t.getMonth()];return n}function Re(e,t,n){return Le.apply(this,arguments)}function Le(){return Le=Object(w["a"])(regeneratorRuntime.mark((function e(t,n,o){var a,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=ke(),r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({log_id:Ie(),id:a.id,dinero_entregado:t,dinero_ofrecido:n,hora:Te(),completado:o,mes:Ue()})},e.next=4,fetch("".concat(x.API_PATH,"/users/").concat(a.id,"/logs"),r);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)}))),Le.apply(this,arguments)}var De={coins:[{value:50,img:"https://static2.abc.es/media/economia/2017/04/03/50_1a-kGgB--420x236@abc.jpg"},{value:20,img:"http://www.europaciudadana.org/wp-content/uploads/2015/10/FEC_Nuevo20euros_blog.jpg"},{value:10,img:"https://cdn.shortpixel.ai/spai/w_898+q_lossy+ret_img/https://www.eude.ec/wp-content/uploads/sites/7/2014/09/10-euros-820x450.jpg"},{value:5,img:"https://img.milanuncios.com/fg/2600/07/260007960_1.jpg?VersionId=_Nwomy4kzErqE0yugVOm1otP40NS9iau"},{value:2,img:"https://los10.org/wp-content/uploads/2021/02/DOSEUROS.jpg"},{value:1,img:"https://cdn.pixabay.com/photo/2013/07/12/12/14/euro-145386_960_720.png"},{value:.5,img:"https://img2.freepng.es/20180205/scw/kisspng-50-cent-euro-coin-euro-coins-euro-coin-png-image-5a7803ce65c250.4713586115178147344168.jpg"},{value:.2,img:"https://w7.pngwing.com/pngs/927/558/png-transparent-20-euro-cent-coin-20-cent-euro-coin-euro-coins-euro-coin-label-material-cash-thumbnail.png"},{value:.1,img:"https://e7.pngegg.com/pngimages/320/415/png-clipart-10-euro-cent-coin-10-euro-note-1-cent-euro-coin-20-cent-euro-coin-payment-gold-thumbnail.png"},{value:.05,img:"https://img2.freepng.es/20180519/kie/kisspng-5-cent-euro-coin-1-cent-euro-coin-nickel-5b0037550a81b9.142716971526740821043.jpg"},{value:.02,img:"https://w7.pngwing.com/pngs/877/533/png-transparent-2-cent-euro-coin-1-cent-euro-coin-euro-coins-1-euro-coin-euro-medal-material-cash.png"},{value:.01,img:"https://cronicaglobal.elespanol.com/uploads/s1/16/85/38/4/moneda-centimo.png"}]},Ae=n("bb57"),Fe=n("1628"),He={components:{NavBar:L,Button:Ae["a"],Dock:Fe["a"]},data:function(){return{startMoney:"",givedMoney:0,money:De}},mounted:function(){this.createRandomPrice()},methods:{createRandomPrice:function(){var e=100*Math.random();this.startMoney=e.toFixed(2)},sendGameLog:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0==e.givedMoney&&""==e.givedMoney){t.next=12;break}if(e.startMoney!=e.givedMoney){t.next=7;break}return F.a.fire({title:"Sucess!",text:"Continue",icon:"success",confirmButtonText:"Continue"}),t.next=5,Re(e.startMoney,e.givedMoney,!0);case 5:t.next=10;break;case 7:return F.a.fire({title:"Failed!",text:"Continue, you marked ".concat(e.givedMoney,"$"),icon:"error",confirmButtonText:"Continue"}),t.next=10,Re(e.startMoney,e.givedMoney,!1);case 10:e.createRandomPrice(),e.givedMoney=0;case 12:case"end":return t.stop()}}),t)})))()},addMoney:function(e){this.givedMoney=parseFloat(this.givedMoney)+parseFloat(e.value),this.givedMoney=Math.round(100*(this.givedMoney+Number.EPSILON))/100}}};n("f55d");const Je=c()(He,[["render",Pe],["__scopeId","data-v-3c9c5489"]]);var ze=Je,$e=function(e){return Object(o["pushScopeId"])("data-v-96f377ee"),e=e(),Object(o["popScopeId"])(),e},Ge={class:"first-content"},qe=$e((function(){return Object(o["createElementVNode"])("h1",null,"Register",-1)})),Ke={class:"grid p-fluid"},We={action:""},Ye={class:"col-12 md:col-4"},Qe={class:"p-inputgroup"},Xe=$e((function(){return Object(o["createElementVNode"])("span",{class:"p-inputgroup-addon"},[Object(o["createElementVNode"])("i",{class:"pi pi-user"})],-1)})),Ze={class:"col-12 md:col-4"},et={class:"p-inputgroup"},tt=$e((function(){return Object(o["createElementVNode"])("span",{class:"p-inputgroup-addon"},[Object(o["createElementVNode"])("i",{class:"pi pi-eye"})],-1)})),nt={class:"col-12 md:col-4"},ot={class:"p-inputgroup"},at=$e((function(){return Object(o["createElementVNode"])("span",{class:"p-inputgroup-addon"},[Object(o["createElementVNode"])("i",{class:"pi pi-envelope"})],-1)})),rt={class:"col-12 md:col-4"},ct={class:"p-inputgroup"},st=$e((function(){return Object(o["createElementVNode"])("span",{class:"p-inputgroup-addon"},[Object(o["createElementVNode"])("i",{class:"pi pi-phone"})],-1)})),lt={class:"col-12 md:col-4"},it={class:"p-inputgroup"},ut={class:"col-12 md:col-4"},dt={class:"p-inputgroup"},pt=$e((function(){return Object(o["createElementVNode"])("span",{class:"p-inputgroup-addon"},[Object(o["createElementVNode"])("p",null,"Bio")],-1)}));function mt(e,t,n,a,r,c){var s=Object(o["resolveComponent"])("NavBar"),l=Object(o["resolveComponent"])("InputText"),i=Object(o["resolveComponent"])("Textarea"),u=Object(o["resolveComponent"])("Button");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s),Object(o["createElementVNode"])("main",null,[Object(o["createElementVNode"])("section",Ge,[qe,Object(o["createElementVNode"])("div",Ke,[Object(o["createElementVNode"])("form",We,[Object(o["createElementVNode"])("div",Ye,[Object(o["createElementVNode"])("div",Qe,[Xe,Object(o["createVNode"])(l,{placeholder:"Username",modelValue:r.user,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.user=e})},null,8,["modelValue"])])]),Object(o["createElementVNode"])("div",Ze,[Object(o["createElementVNode"])("div",et,[tt,Object(o["createVNode"])(l,{type:"password",placeholder:"Password",modelValue:r.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.password=e}),autocomplete:"password"},null,8,["modelValue"])])]),Object(o["createElementVNode"])("div",nt,[Object(o["createElementVNode"])("div",ot,[at,Object(o["createVNode"])(l,{placeholder:"Email",modelValue:r.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.email=e})},null,8,["modelValue"])])]),Object(o["createElementVNode"])("div",rt,[Object(o["createElementVNode"])("div",ct,[st,Object(o["createVNode"])(l,{placeholder:"Phone number",modelValue:r.phone,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.phone=e})},null,8,["modelValue"])])]),Object(o["createElementVNode"])("div",lt,[Object(o["createElementVNode"])("div",it,[Object(o["createVNode"])(l,{placeholder:"Avatar",modelValue:r.avatar,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.avatar=e})},null,8,["modelValue"])])]),Object(o["createElementVNode"])("div",ut,[Object(o["createElementVNode"])("div",dt,[pt,Object(o["createVNode"])(i,{modelValue:r.bio,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.bio=e}),autoResize:!0,rows:"5",cols:"30"},null,8,["modelValue"])])])])]),Object(o["createVNode"])(u,{label:"Register",onClick:c.onRegisterClicked},null,8,["onClick"])])])],64)}var bt=n("a034"),gt=n("48d5"),ft=n("4c62"),Ot=n("e8f7"),jt={name:"HomePage",components:{NavBar:L,InputText:D["a"],Password:bt["a"],Avatar:gt["a"],Textarea:ft["a"],FileUpload:Ot["a"],Button:Ae["a"]},data:function(){return{user:"",password:"",avatar:"",email:"",phone:"",bio:""}},methods:{onRegisterClicked:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,o,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=Object(Me["a"])(),""==e.user||""==e.password||""==e.email||""==e.phone){t.next=10;break}return o={id:n,name:e.user,password:e.password,avatar:e.avatar,email:e.email,phone:e.phone,bio:e.bio},a={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}},t.next=6,fetch("http://localhost:5000/api/users",a);case 6:return r=t.sent,localStorage.setItem("user",JSON.stringify(o)),e.$router.push("/exercises"),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))()}}};n("ae08");const vt=c()(jt,[["render",mt],["__scopeId","data-v-96f377ee"]]);var ht=vt,Vt=[{path:"/",name:"HomePage",component:G},{path:"/exercises",name:"ExercisesPage",component:ee},{path:"/profile",name:"ProfilePage",component:Be},{path:"/exercises/payments",name:"PaymentsPage",component:ze},{path:"/register",name:"RegisterPage",component:ht}],Nt=Object(u["a"])({history:Object(u["b"])(),routes:Vt}),yt=Nt;n("098b"),n("e1ae"),n("4121");Object(o["createApp"])(i).use(yt).mount("#app")},6512:function(e,t,n){},"6f05":function(e,t,n){"use strict";n("6512")},ae08:function(e,t,n){"use strict";n("44c0")},b6b1:function(e,t,n){},b6dd:function(e,t,n){"use strict";n("47e6")},c0b3:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.68a181dc.png"},d52e:function(e,t,n){},f55d:function(e,t,n){"use strict";n("b6b1")}});
//# sourceMappingURL=app.cc723a6b.js.map