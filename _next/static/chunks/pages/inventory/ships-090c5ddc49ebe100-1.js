(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{33032:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(67294);var r=n(74949),i=n(43582),s=n(85268),a=n(18819),o=n(57116),l=n(85893);function c(e){var t=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"relative z-10 w-full ",children:[(0,l.jsx)("div",{className:"fixed z-50 w-full",children:(0,l.jsx)(r.Z,{})}),(0,l.jsxs)("div",{className:"pt-21",children:[(0,l.jsx)("div",{className:"md:block",children:(0,l.jsx)(s.Z,{navType:"inventory"})}),(0,l.jsx)(a.Z,{children:t})]}),(0,l.jsx)("div",{className:"z-10",children:(0,l.jsx)(i.Z,{})}),(0,l.jsx)("div",{id:"modal-root"})]}),(0,l.jsx)(o.Z,{})]})}},55589:function(e,t,n){"use strict";n.r(t);var r=n(67294),i=n(25675),s=n.n(i),a=n(11163),o=n(85893);t.default=function(){var e=(0,a.useRouter)(),t=(0,r.useState)(0),i=t[0],l=t[1],c=[{href:"/inventory/ships",image:n(66058),name:"Ships"},{href:"/inventory/bridge",image:n(4201),name:"Bridge"}];return(0,o.jsx)("div",{className:"fixed bottom-0 left-0 flex justify-around w-full pt-2 pb-2 lg:hidden",style:{backgroundColor:"#300850"},children:c.map((function(t,n){return(0,o.jsxs)("div",{className:"text-center cursor-pointer",style:{borderBottom:"".concat(i===n?"2px solid #4BFFFF":""),width:"100px"},onClick:function(){return function(t,n){e.push(t.href),l(n)}(t,n)},children:[(0,o.jsx)("div",{children:(0,o.jsx)(s(),{src:t.image,alt:"page link",width:21,height:21})}),(0,o.jsx)("div",{className:"px-2 text-base text-white goldman-font sm:text-md",children:t.name})]},n)}))})}},65328:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(27812),i=n(50029),s=n(87794),a=n.n(s),o=n(67294),l=n(11163),c=n(94184),u=n.n(c),d=n(9008),f=n.n(d),h=n(4182),p=n(32113),m=n(87379),x=n(96911),v=n(17233),g=n(3717),y=n(55589),b=n(33032),j=n(98583),w=n(14052),N=n(37092),S=n(43544),E=n(73935),k=n(22314),C=n(8193),A=n(5434),P=n(6735),T=n(85893),O=m.ZP.div.withConfig({displayName:"NewMintModal__StyledCard",componentId:"sc-110jnj1-0"})(["display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;position:fixed;top:0;left:0;right:auto;bottom:auto;margin-right:-50%;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);.body{justify-content:center;width:auto;background-repeat:no-repeat;background-size:100% 100%;color:white;}.browser-1{background-image:url(../images/modal.png);}.browser-2{background-image:url(../images/modal_1.png);}.mobile-body-1{background-image:url(../images/sign_card.png);}.mobile-body-2{background-image:url(../images/sign_card_1.png);}.body .card-container{padding-right:2px!important;}.left-direction,.right-direction{top:50%;}.left-direction{left:0px;top:50%;transform:translate(-0%,-50%);font-size:21px;cursor:pointer;}.right-direction{top:50%;right:0px;transform:translate(0%,-50%);font-size:21px;cursor:pointer;}.ship-number{left:50%;bottom:-6px;font-size:18px;transform:translate(-50%,0%)}@media(max-width:640px){.ship-number{bottom:-18px;}}"]);function _(e){var t=e.show,n=e.onClose,r=e.handleClick,i=(0,w.FF)(),s=(0,w.TW)(),a=(0,w.QA)(),l=(0,o.useState)(!1),c=l[0],d=l[1],f=(0,o.useState)(0),h=f[0],p=f[1],m=(0,o.useState)(null),v=(m[0],m[1],(0,P.Ao)());(0,o.useEffect)((function(){s&&s.length&&a(s[h])}),[h,s]),(0,o.useEffect)((function(){d(!0),s&&s.length&&a(s[h])}),[]);(0,o.useEffect)((function(){}),[]);var g=function(e){var t=s.length,n=h+e;p(n=(n+t)%t)},y=t?(0,T.jsx)(O,{className:"z-50 Modal",children:(0,T.jsxs)("div",{className:u()("relative items-center p-5 mx-2 text-black sm:flex body",{"browser-1":"Firefox"!==v,"browser-2":"Firefox"===v,"mobile-body-1":window.innerWidth<=768&&"Firefox"!==v,"mobile-body-2":window.innerWidth<=768&&"Firefox"===v}),children:[(0,T.jsx)("div",{className:"absolute cursor-pointer right-5 top-5",children:(0,T.jsx)(C.LHV,{style:{fontSize:"18px"},onClick:function(){n()}})}),(0,T.jsxs)("div",{className:"relative px-3 mt-3",children:[s&&s.length>1&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(A.sG8,{className:"absolute left-direction",onClick:function(){g(-1)}}),(0,T.jsx)(A.AeI,{className:"absolute right-direction",onClick:function(){g(1)}}),(0,T.jsxs)("div",{className:"absolute ship-number",children:[h+1," / ",s.length]})]}),i&&(0,T.jsx)(x.Z,{nftData:i,price:"0",nftFullData:i})]}),(0,T.jsx)("div",{className:"flex items-center justify-center px-3",children:(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:"",style:{color:"#00ffff"},children:[(0,T.jsx)("div",{className:"mt-3 text-2xl font-bold text-center goldman-font",children:"Congratulations!"}),(0,T.jsxs)("div",{className:"mt-5",style:{fontSize:"14px",color:"#fff"},children:[(0,T.jsx)("div",{children:"You have minted this ship."}),k.ZP.BUTTONS.filter((function(e){return"Lock"===e})).length?(0,T.jsxs)("div",{className:"mt-2",children:["You can select ",(0,T.jsx)("b",{style:{color:"#00ffff"},children:"Lock"})," to bridge your ship ",(0,T.jsx)("br",{}),"into the game, or ",(0,T.jsx)("b",{style:{color:"#00ffff"},children:"List"})," to add a ",(0,T.jsx)("br",{}),"listing to the Outpost marketplace."]}):(0,T.jsxs)("div",{className:"mt-2",children:["You can select ",(0,T.jsx)("b",{style:{color:"#00ffff"},children:"List"})," to add a ",(0,T.jsx)("br",{}),"listing to the Outpost marketplace."]})]})]}),(0,T.jsx)("div",{children:(0,T.jsxs)("div",{className:u()("flex  mt-5 mb-3",{"justify-between":k.ZP.BUTTONS.filter((function(e){return"Lock"===e})).length>0,"justify-center":0===k.ZP.BUTTONS.filter((function(e){return"Lock"===e})).length}),children:[k.ZP.BUTTONS.filter((function(e){return"Lock"===e})).length?(0,T.jsxs)("button",{className:"px-6 py-1 font-bold text-black bg-white glass-button",onClick:function(){r("bridge-ship-in")},children:[(0,T.jsx)("span",{className:"glass-button-before"}),(0,T.jsx)("span",{children:"Lock"})]}):"",(0,T.jsxs)("button",{className:"px-6 py-1 font-bold text-black bg-white glass-button",onClick:function(){r("list-ship")},children:[(0,T.jsx)("span",{className:"glass-button-before"}),(0,T.jsx)("span",{children:"List"})]})]})})]})})]})}):null;return c?E.createPortal(y,document.getElementById("modal-root")):null}var Z=n(79410),I=(n(9069),n(42523),{src:"/_next/static/media/build_ship.49a43e44.svg",height:256,width:256}),F=n(25675),M=n.n(F),D=function(){var e,t=(0,p.aQ)().account,n=(0,o.useState)(!1),r=n[0],i=n[1],s=(0,o.useState)(!1),a=s[0],l=s[1],c=(0,o.useState)(!1),u=c[0],d=c[1],f=(0,o.useState)(!1),h=f[0],m=f[1],x=(0,o.useState)(null),v=x[0],g=x[1];(0,o.useEffect)((function(){g(e)}),[e]);var y=function(e){if(v){"accountDisconnect"===e&&v.error("Please connect wallet","Error"),"aprroveReady"===e&&v.info("A one-time Approve request is required before getting started","Message"),"approveSuccess"===e&&v.success("Approve success. You can ".concat("mint a ship",". Please click confirm."),"Success"),"listPriceError"===e&&v.error("List price is not valid.","Error"),"balanceNotEnough"===e&&v.error("Balance is not enough","Error")}};return(0,T.jsxs)("div",{className:"flex justify-center mt-3 mb-3",children:[(0,T.jsx)(Z.Ix,{ref:function(t){return e=t},className:"toast-top-right",style:{zIndex:"100000"}}),(0,T.jsx)("button",{type:"button",className:"flex items-center justify-center mint-button fire goldman-font",onClick:function(){return e="mint-ship",void(t?"mint-ship"===e&&i(!0):v.error("Please connect wallet"));var e},children:(0,T.jsxs)("div",{className:"flex items-center justify-center mint-button-image goldman-font",children:[(0,T.jsx)("span",{children:"BUILD SHIP\xa0\xa0\xa0\xa0"})," ",(0,T.jsx)(M(),{src:I,width:"30px",height:"30px",alt:""})]})}),(0,T.jsx)(S.Z,{show:r,onClose:function(){i(!1)},shipCardType:"mint-ship",onOpen:function(){l(!0)},showToastr:y}),(0,T.jsx)(_,{show:a,onClose:function(){l(!1)},handleClick:function(e){"bridge-ship-in"===e?d(!0):m(!0)}}),(0,T.jsx)(S.Z,{show:u,onClose:function(){d(!1)},shipCardType:"bridge-ship-in",showToastr:y}),(0,T.jsx)(S.Z,{show:h,onClose:function(){m(!1)},shipCardType:"list-ship",showToastr:y})]})},L=n(69251),B=(n(36860),n(16522)),R=m.ZP.div.withConfig({displayName:"ships__StyleNftList",componentId:"sc-1gq85ws-0"})([""]);function z(){var e=(0,w.zU)(),t=(0,w.hL)(),n=(0,w.Kc)(),s=(0,o.useState)(0),c=s[0],d=s[1],m=(0,o.useState)(1),b=m[0],S=m[1],E=(0,h.a)().account,C=(0,w.ZY)(),A=(0,o.useState)(0),P=A[0],O=(A[1],(0,l.useRouter)()),_=(0,o.useState)(!0),Z=_[0],I=_[1],F=(0,w.ph)(),M=(0,w.Y1)(),z=(0,p.y_)(),H=(0,p.ed)(),Y=(0,N._X)(P),U=(0,o.useState)(null),V=U[0],G=U[1],q=(0,o.useState)(null),X=q[0],K=q[1],Q=(0,o.useState)(null),W=Q[0],J=Q[1],$=(0,o.useState)(null),ee=$[0],te=$[1],ne=(0,o.useState)(""),re=ne[0],ie=ne[1],se=(0,o.useState)(0),ae=se[0],oe=se[1],le=(0,o.useState)(0),ce=le[0],ue=le[1],de=(0,w.E6)(),fe=(0,w.kN)(),he=(0,j.Wk)(Z,Y,b,V,"inventory"),pe=he.data,me=he.mutate,xe=he.error,ve=(0,j.rs)(),ge=ve.data,ye=(ve.mutate,ve.error,O.query);(0,o.useEffect)((function(){(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=5;break}return e.next=3,H.balanceOf(E);case 3:t=e.sent,oe(t.toString());case 5:case"end":return e.stop()}}),e)})))()})),(0,o.useEffect)((function(){ge&&ge.length&&ue(ge[0].numShips)}),[ge]),(0,o.useEffect)((function(){var e={};Object.keys(ye).length&&(Object.keys(ye).map((function(t,n){ye[t].length&&"sortType"!=t?e[t]=Number(ye[t]):e[t]=ye[t]})),t(e)),be()}),[]),(0,o.useEffect)((function(){d(0),I(!0)}),[n]),(0,o.useEffect)((function(){M(null),F(null),G(null),I(!0),S(1),d(0)}),[me]),(0,o.useEffect)((function(){M(null),F(null),G(null),d(0),I(!0),S(1)}),[C,e]),(0,o.useEffect)((function(){0!=c&&I(!1)}),[c]),(0,o.useEffect)((function(){if(X&&W){var e=(new Date).getTime();e<W?(te(W),ie("Genesis Collection Mint Starts In:")):W<=e&&e<=X?(te(X),ie("Genesis Collection Mint Ends In:")):(te(e),ie(""))}}),[W,X]);var be=function(){var e=(0,i.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.mintStart();case 2:return t=e.sent,e.next=5,z.mintEnd();case 5:n=e.sent,r=new Date,J(r.setTime(1e3*Number(t.toString()))),r=new Date,K(r.setTime(1e3*Number(n.toString())));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=(new Date).getTime();e<W?(te(W),ie("Genesis Collection Mint Starts In:")):W<=e&&e<=X?(te(X),ie("Genesis Collection Mint Ends In:")):(te(e),ie(""))},we=(0,o.useCallback)((function(){var t=[];return pe&&(t=(0,r.Z)(pe)),1!=b&&pe?(t=(0,r.Z)(pe).reverse())&&t.length==n+1&&t.shift():t&&t.length==n+1&&t.splice(-1,1),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(R,{className:u()("inline-flex flex-wrap justify-center px-6 mt-5 w-full",{}),children:t&&e&&t.map((function(t,n){var r;return r=1==e.listed?t.listing:t.ship,(0,T.jsx)("div",{className:"px-3",children:(0,T.jsx)(x.Z,{cardType:1===e.listed?"my-listing":"inventory",nftData:1===e.listed?r.token:r,price:1===e.listed?r.price:"0",nftFullData:r},n)},n)}))}),E&&!xe&&null==pe&&(0,T.jsx)("div",{className:"flex flex-wrap justify-center",children:(0,r.Z)(Array(5)).map((function(e,t){return(0,T.jsx)("div",{className:"px-3",children:(0,T.jsx)(B.Z,{})},t)}))}),E&&0==(null===pe||void 0===pe?void 0:pe.length)&&(0,T.jsx)("div",{className:"flex items-center justify-center w-full",children:"No Matching NFTs"}),!E&&(0,T.jsx)("div",{className:"flex items-center justify-center w-full",children:"You must connect to view inventory"}),E&&xe&&(0,T.jsx)("div",{className:"flex items-center justify-center w-full",children:"NFT searching temporarily unavailable. Please try again later."})]})}),[pe,c,C,Y,me]);if(!k.ZP.PAGES.includes("inventory-ships"))return null;var Ne=function(){return"DEVELOPMENT"===k.ZP.ENVIRONMENT?"Dev":"PRODUCTION"===k.ZP.ENVIRONMENT?"DPS":"Test"};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{className:"w-full px-2 py-6 pb-20 md:px-4 md:py-5 md:pb-14",children:[(0,T.jsxs)(f(),{children:[(0,T.jsxs)("title",{children:["DEEPSPACE - Inventory | ",Ne()]}),(0,T.jsx)("meta",{content:"DEEPSPACE - Outpost | "+"".concat(Ne()),property:"og:title"}),(0,T.jsx)("meta",{content:"DEEPSPACE - Outpost | "+"".concat(Ne()),property:"twitter:title"}),(0,T.jsx)("meta",{content:"One of the crown jewels of the DEEPSPACE Metaverse is the Outpost. The Outpost is a decentralized exchange hub where you can buy, sell, and trade your ships, cores, and other upgradeable Smart NFTs with fellow explorers. You can use the marketplace to build limited edition ships and acquire other valuable collectible assets. Build up your fleet to explore, harvest, and fight your way through the DEEPSPACE universe!",name:"description"}),(0,T.jsx)("meta",{content:"One of the crown jewels of the DEEPSPACE Metaverse is the Outpost. The Outpost is a decentralized exchange hub where you can buy, sell, and trade your ships, cores, and other upgradeable Smart NFTs with fellow explorers. You can use the marketplace to build limited edition ships and acquire other valuable collectible assets. Build up your fleet to explore, harvest, and fight your way through the DEEPSPACE universe!",property:"og:description"}),(0,T.jsx)("meta",{content:"One of the crown jewels of the DEEPSPACE Metaverse is the Outpost. The Outpost is a decentralized exchange hub where you can buy, sell, and trade your ships, cores, and other upgradeable Smart NFTs with fellow explorers. You can use the marketplace to build limited edition ships and acquire other valuable collectible assets. Build up your fleet to explore, harvest, and fight your way through the DEEPSPACE universe!",property:"twitter:description"}),(0,T.jsx)("meta",{property:"og:type",content:"website"}),(0,T.jsx)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,T.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})]}),(0,T.jsx)("div",{className:"justify-center block mt-2 mb-2 text-sm goldman-font ship-total-status md:hidden",children:E&&(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{children:["Your Total Ships In Inventory: ",ae]}),(0,T.jsxs)("div",{children:["Your Total Ships Burned: ",ce]})]})}),W&&X&&ee?(0,T.jsxs)(T.Fragment,{children:[ee==W&&(0,T.jsx)(L.Z,{expiryTimestamp:ee,handleTimer:je,content:re}),ee==X&&(0,T.jsx)(L.Z,{expiryTimestamp:ee,handleTimer:je,content:re}),ee!=W&&ee!=X&&(0,T.jsxs)("div",{className:"mt-2 mb-3 text-center goldman-font",children:[(0,T.jsx)("div",{style:{fontSize:"16px",color:"cyan"},children:"Minting round has ended, watch for future generations."}),(0,T.jsx)("div",{className:"mt-3 sm:mt-1",style:{fontSize:"16px",color:"cyan"},children:"Venture to the outpost to purchase a ship."})]})]}):"",(0,T.jsx)("div",{className:"flex justify-center px-5 pt-3 pb-0 md:px-0",children:ee&&X&&W?(0,T.jsx)(T.Fragment,{children:ee==X&&(0,T.jsx)(D,{})}):""}),(0,T.jsxs)("div",{className:"relative flex flex-wrap justify-center w-full p-3 px-5 inventory-filter-section",children:[C&&e&&(0,T.jsx)(v.Z,{filterType:"inventory"}),(0,T.jsx)("div",{className:u()("custom-sync",{"inventory-filter":!0===C}),style:{width:!0!==C&&"100%"},children:(0,T.jsx)(we,{})})]})]}),(0,T.jsx)(g.Z,{handlePagination:function(e){(!pe||pe.length!=n+1&&e>0)&&-1!=b&&(e=0);var t=c+e;t=Math.max(0,t),c!=t&&0!=e&&(e!=b?(S(e),G(de)):G(fe)),d(t)},data:{cur_pos:c},pageName:"inventory"}),(0,T.jsx)(y.default,{})]})}z.Layout=b.Z},2658:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inventory/ships",function(){return n(65328)}])},4201:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/bridge.ef9af9d8.png",height:108,width:150,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAG1BMVEVMaXFK/v9L/v9K/v9K/v9K/v9L/v9L/v9K/v/D8lXHAAAACXRSTlMARmYRVS0my4GQoEgTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAKElEQVQImTXGyQ0AIAwEsdnc/VccgcAv06ZwAJVHngCml/mRPO/LNL0IpABU5qwkuwAAAABJRU5ErkJggg=="}},66058:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/ships.726ed12e.svg",height:22,width:23}},36860:function(){},64396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(67294),s=l(i),a=l(n(45697)),o=l(n(94184));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={value:e.value},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,n=t.editing,r=t.value;n&&null==r&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,n,r){r.stopPropagation();var i=this.props,s=i.onStarClick;i.editing&&s&&s(e,t,n,r)}},{key:"onStarHover",value:function(e,t,n,r){r.stopPropagation();var i=this.props,s=i.onStarHover;i.editing&&s&&s(e,t,n,r)}},{key:"onStarHoverOut",value:function(e,t,n,r){r.stopPropagation();var i=this.props,s=i.onStarHoverOut;i.editing&&s&&s(e,t,n,r)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,n=t.name,r=t.starCount,i=t.starColor,a=t.emptyStarColor,o=t.editing,l=this.state.value,c=function(e,t){return{float:"right",cursor:o?"pointer":"default",color:t>=e?i:a}},u={display:"none",position:"absolute",marginLeft:-9999},d=[],f=function(t){var r=n+"_"+t,i=s.default.createElement("input",{key:"input_"+r,style:u,className:"dv-star-rating-input",type:"radio",name:n,id:r,value:t,checked:l===t,onChange:e.onChange.bind(e,t,n)}),a=s.default.createElement("label",{key:"label_"+r,style:c(t,l),className:"dv-star-rating-star "+(l>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:r,onClick:function(r){return e.onStarClick(t,l,n,r)},onMouseOver:function(r){return e.onStarHover(t,l,n,r)},onMouseLeave:function(r){return e.onStarHoverOut(t,l,n,r)}},e.renderIcon(t,l,n,r));d.push(i),d.push(a)},h=r;h>0;h--)f(h);return d.length?d:null}},{key:"renderIcon",value:function(e,t,n,r){var i=this.props,a=i.renderStarIcon,o=i.renderStarIconHalf;return"function"===typeof o&&Math.ceil(t)===e&&t%1!==0?o(e,t,n,r):"function"===typeof a?a(e,t,n,r):s.default.createElement("i",{key:"icon_"+r,style:{fontStyle:"normal"}},"\u2605")}},{key:"render",value:function(){var e=this.props,t=e.editing,n=e.className,r=(0,o.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},n);return s.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:r},this.renderStars())}}]),t}(i.Component);c.propTypes={name:a.default.string.isRequired,value:a.default.number,editing:a.default.bool,starCount:a.default.number,starColor:a.default.string,onStarClick:a.default.func,onStarHover:a.default.func,onStarHoverOut:a.default.func,renderStarIcon:a.default.func,renderStarIconHalf:a.default.func},c.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=c,e.exports=t.default},84849:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},y:function(){return o}});var r=n(67294);const i=r.createContext({});function s({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:i,circle:s,direction:a,duration:o,enableAnimation:l=true}){const c={};return"rtl"===a&&(c["--animation-direction"]="reverse"),"number"===typeof o&&(c["--animation-duration"]=`${o}s`),l||(c["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(c.width=n),"string"!==typeof r&&"number"!==typeof r||(c.height=r),"string"!==typeof i&&"number"!==typeof i||(c.borderRadius=i),s&&(c.borderRadius="50%"),"undefined"!==typeof e&&(c["--base-color"]=e),"undefined"!==typeof t&&(c["--highlight-color"]=t),c}function a({count:e=1,wrapper:t,className:n,containerClassName:a,containerTestId:o,circle:l=!1,style:c,...u}){var d,f;const h=r.useContext(i),p={...u};for(const[r,i]of Object.entries(u))"undefined"===typeof i&&delete p[r];const m={...h,...p,circle:l},x={...c,...s(m)};let v="react-loading-skeleton";n&&(v+=` ${n}`);const g=null!==(d=m.inline)&&void 0!==d&&d,y=[];for(let i=0;i<e;i++){const e=r.createElement("span",{className:v,style:x,key:i},"\u200c");g?y.push(e):y.push(r.createElement(r.Fragment,{key:i},e,r.createElement("br",null)))}return r.createElement("span",{className:a,"data-testid":o,"aria-live":"polite","aria-busy":null===(f=m.enableAnimation)||void 0===f||f},t?y.map(((e,n)=>r.createElement(t,{key:n},e))):y)}function o({children:e,...t}){return r.createElement(i.Provider,{value:t},e)}}},function(e){e.O(0,[296,4617,2770,6568,5445,5937,3662,955,3874,1228,7763,9286,7892,5360,9219,9347,2113,159,2791,1967,9868,1730,9774,2888,179],(function(){return t=2658,e(e.s=t);var t}));var t=e.O();_N_E=t}]);