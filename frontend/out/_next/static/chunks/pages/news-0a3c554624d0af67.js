(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{6811:function(n,t,e){"use strict";e.r(t);var _=e(29),s=e(7794),a=e.n(s),i=e(7294),r=e(2294),c=e(5578),o=e(6463),u=e(1925),d=e(4162),l=e(3375),b=e(3303),w=e.n(b),m=e(5893);t.default=function(){var n=(0,i.useState)("Lonely Rabbit News"),t=n[0],e=n[1],s=(0,i.useState)([]),b=s[0],f=s[1],v=(0,i.useState)(4),h=v[0],x=v[1],p=(0,i.useState)(!1),j=p[0],N=p[1],g=(0,i.useCallback)((function(){x((function(n){return n+4}))}),[]),k=(0,i.useCallback)((0,_.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return N(!0),n.prev=1,n.next=4,(0,d.yP)(l.T3.news,[l.vv.banner_title]);case 4:(t=n.sent)&&e(t[0][l.vv.banner_title]),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0);case 11:return n.prev=11,N(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])}))),[]),y=(0,i.useCallback)((0,_.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,d.yP)(l.T3.newsSingle,["*"],"limit=".concat(h));case 2:(t=n.sent)&&f(t);case 4:case"end":return n.stop()}}),n)}))),[h]);return(0,i.useEffect)((function(){k()}),[]),(0,i.useEffect)((function(){y()}),[h]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.h,{}),(0,m.jsxs)("main",{className:w().news,children:[(0,m.jsx)("div",{className:w().news__banner,children:(0,m.jsx)("div",{className:w().news__banner__img,children:(0,m.jsx)("h1",{children:t})})}),(0,m.jsxs)("div",{className:w().news__newsList,children:[b.map((function(n){return(0,m.jsx)("div",{className:w().news__newsList__item,children:(0,m.jsx)(u.e,{card:n},n.id)},n.id)})),0===b.length&&!j&&(0,m.jsx)("p",{children:"There are no news yet"})]}),(0,m.jsx)("div",{className:w().news__button,children:(0,m.jsx)(c.z,{name:"Show More",onClick:g,isOnLoad:j})})]}),(0,m.jsx)(o.$,{})]})}},5578:function(n,t,e){"use strict";e.d(t,{z:function(){return o}});var _=e(9499),s=(e(7294),e(4184)),a=e.n(s),i=e(3618),r=e.n(i),c=e(5893),o=function(n){var t,e=n.variant,s=void 0===e?"primary":e,i=n.type,o=void 0===i?"button":i,u=n.name,d=n.disabled,l=n.isOnLoad,b=n.onClick;return(0,c.jsxs)("button",{type:o,onClick:function(){d||b()},className:a()(r().button,(t={},(0,_.Z)(t,r()["button--".concat(s)],s),(0,_.Z)(t,r().button_disabled,d),t)),children:[l&&(0,c.jsx)("div",{className:r().loading}),(0,c.jsx)("div",{className:a()(r().button__name,r()["button--".concat(s,"__name")],(0,_.Z)({},r().button__name_invisible,l)),children:u})]})}},1925:function(n,t,e){"use strict";e.d(t,{e:function(){return d}});var _=e(4085),s=e(7294),a=e(1163),i=e(5578),r=e(558),c=e(2296),o=e.n(c),u=e(5893),d=function(n){var t=n.card,e=t.id,c=t.thumbnail_image,d=t.title,l=t.caption,b=t.date,w=t.meta,m=(0,_.F)().isMobile,f=((0,a.useRouter)(),(0,s.useMemo)((function(){var n=l.split(" ");return n.length>5&&m?n.slice(0,5).join(" "):n.length>12&&!m?n.slice(0,12).join(" ")+"...":l}),[m]));return(0,u.jsxs)("div",{className:o().card,children:[c&&(0,u.jsx)("img",{src:"".concat(r.QJ).concat(c.meta.download_url),alt:c.title,className:o().card__img}),(0,u.jsxs)("div",{className:o().card__text,children:[(0,u.jsx)("h1",{className:o().card__text__title,children:d}),(0,u.jsx)("p",{className:o().card__text__desc,children:f}),(0,u.jsx)("p",{className:o().card__text__date,children:b.split("-").reverse().join("/")}),(0,u.jsx)("a",{href:"/news/".concat(w.slug),className:o().card__button,children:(0,u.jsx)(i.z,{name:"Read more",onClick:function(){},variant:"secondary"})})]})]},e)}},4085:function(n,t,e){"use strict";e.d(t,{F:function(){return s}});var _=e(7294),s=function(){var n=(0,_.useState)(!1),t=n[0],e=n[1],s=(0,_.useState)(!1),a=s[0],i=s[1],r=(0,_.useState)(!1),c=r[0],o=r[1],u=(0,_.useState)(!1),d=u[0],l=u[1];return(0,_.useEffect)((function(){var n=function(){e(window.innerWidth<480),o(window.innerWidth<800&&window.innerWidth>=480),i(window.innerWidth<1200&&window.innerWidth>=800),l(window.innerWidth>=1200)};return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),{isMobile:t,isSmallNote:a,isTablet:c,isDesktop:d}}},830:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return e(6811)}])},3303:function(n){n.exports={news:"news_news__d5jOl",news__banner:"news_news__banner__Bjto0",news__banner__img:"news_news__banner__img__2hLL4",news__newsList:"news_news__newsList__x1WP5",news__newsList__item:"news_news__newsList__item__m8hEV",news__button:"news_news__button__7EOtM"}},3618:function(n){n.exports={button:"button_button__X2akn",button__name:"button_button__name__2TLPs",button__name_invisible:"button_button__name_invisible___B7v7",button__icon:"button_button__icon__adUaZ",button__icon_start:"button_button__icon_start__T9cpa",button__icon_end:"button_button__icon_end__uNclI",button__icon_invisible:"button_button__icon_invisible__DXCzi","button--primary":"button_button--primary__G_KBp","button--primary__name":"button_button--primary__name__wPE9G","button--secondary":"button_button--secondary__tP3qv","button--secondary__name":"button_button--secondary__name__f0u2i",button_disabled:"button_button_disabled__BMHwY",loading:"button_loading__sphjT",shadowLoading:"button_shadowLoading__Y7ZWh"}},2296:function(n){n.exports={card:"news-card_card__C4_rE","fade-in":"news-card_fade-in__fWQvs",card__img:"news-card_card__img__NQKO7",card__text:"news-card_card__text__zBSaT",card__text__title:"news-card_card__text__title__o0NOq",card__text__desc:"news-card_card__text__desc__VisTV",card__text__date:"news-card_card__text__date__nt4f5",card__button:"news-card_card__button__jXIrz"}}},function(n){n.O(0,[664,555,774,888,179],(function(){return t=830,n(n.s=t);var t}));var t=n.O();_N_E=t}]);