(this["webpackJsonptwitch-clip-queue"]=this["webpackJsonptwitch-clip-queue"]||[]).push([[5],{103:function(e,t,c){},108:function(e,t,c){"use strict";c.r(t);var l=c(11),s=c(104),n=c(0),r=c(6),a=c(26),i=c(34),o=c(2),d=["pressed","className","colour","children","onClick"];var j=function(e){var t=e.pressed,c=e.className,s=e.colour,n=e.children,r=e.onClick,j=Object(i.a)(e,d),b=Object(a.a)(s,c);return t&&(b+=" pressed"),Object(o.jsx)("button",Object(l.a)(Object(l.a)({},j),{},{className:b,onClick:r,children:n}))},b=c(31),m=c(30),u=c(13),h=c(8);var O=function(e){var t,c=e.id,l=e.provider,s=e.url,n=e.thumbnailUrl,r=e.title,i=e.submitter,d=e.submitterCount,j=void 0===d?0:d,b=e.channel,m=e.game;return Object(o.jsxs)("div",{className:"clip max-w-sm rounded overflow-hidden flex flex-col",children:[n&&Object(o.jsx)("img",{className:"w-full",src:n,alt:r}),Object(o.jsxs)("div",{className:"h-full w-full relative",children:[Object(o.jsxs)("div",{className:"absolute flex right-1 bottom-1 clip-buttons space-x-1",children:[Object(o.jsx)(a.b,{colour:"green",onClick:function(){return Object(u.l)({id:c,provider:l})},children:"\xbb"}),Object(o.jsx)(a.b,{colour:"red",onClick:function(){return Object(u.k)({id:c,provider:l})},children:"\xd7"})]}),Object(o.jsxs)("div",{className:"px-2 py-1",children:[Object(o.jsx)("h4",{className:"font-bold text-sm mb-1",children:Object(o.jsx)("a",{className:"text-black no-underline",href:s,target:"_blank",rel:"noreferrer",children:r})}),Object(o.jsxs)("p",{className:"text-gray-700 text-xs mb-1 font-normal",children:[Object(o.jsxs)("span",{className:"font-bold",children:[b," "]}),m&&Object(o.jsxs)("span",{children:["playing\xa0",Object(o.jsx)("span",{className:"font-bold",children:m})]})]}),Object(o.jsxs)("p",{className:"text-gray-700 text-xs font-normal",children:[i&&Object(o.jsxs)(o.Fragment,{children:["Submitted by ",Object(o.jsx)("span",{className:"font-bold",children:null!==(t=i.displayName)&&void 0!==t?t:i.userName})]}),Object(o.jsx)("span",{className:"text-xs",children:j>0&&" +"+j})]})]})]})]})};var x=function(e){var t=e.clips,c=e.clipLimit,s=void 0===c?19:c,n=Object(r.c)(u.b);return Object(o.jsx)("div",{className:"grid gap-3 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full",children:t.length?Object(o.jsxs)(o.Fragment,{children:[t.slice(0,s).map((function(e){var t;return Object(o.jsx)(O,Object(l.a)(Object(l.a)({},e),{},{submitterCount:null===(t=e.submitters)||void 0===t?void 0:t.length}),"".concat(e.provider,":").concat(e.id))})),t.length>s&&Object(o.jsx)("div",{className:"clip max-w-sm rounded overflow-hidden text-3xl flex py-4",children:Object(o.jsxs)("div",{className:"mx-auto my-auto",children:["+",t.length-s," more"]})})]}):n.get()&&Object(o.jsx)("div",{className:"col-span-full text-lg font-bold",children:"Waiting for some clips from chat..."})})},p=c(107),f=c(110),g=["provider"];function v(e){var t,c=e.provider,l=Object(i.a)(e,g);switch(c){case void 0:return Object(o.jsx)(o.Fragment,{});case"twitch-clip":return Object(o.jsx)("iframe",{src:"https://clips.twitch.tv/embed?clip=".concat(l.id,"&autoplay=true&parent=").concat(window.location.hostname),height:"100%",width:"100%",className:"player",allowFullScreen:!0,title:l.title});case"twitch-vod":return Object(o.jsx)("iframe",{src:"https://player.twitch.tv/?video=".concat(l.id,"&autoplay=true&parent=").concat(window.location.hostname,"&time=").concat(l.startTime),height:"100%",width:"100%",className:"player",allowFullScreen:!0,title:l.title});case"youtube":return Object(o.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(l.id,"?autoplay=1&start=").concat(null!==(t=l.startTime)&&void 0!==t?t:""),height:"100%",width:"100%",className:"player",allowFullScreen:!0,title:l.title})}return Object(o.jsxs)("span",{children:["Provider not supported: ",c]})}var N=function(e){var t,c=e.game,s=e.channel,n=e.title,r=e.timestamp,a=e.submitter,i=e.submitterCount,d=void 0===i?0:i;return console.log(r),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"player",children:Object(o.jsx)(v,Object(l.a)({},e))}),Object(o.jsxs)("div",{className:"pt-2",children:[Object(o.jsx)("h2",{className:"font-bold mb-1",children:null!==n&&void 0!==n?n:Object(o.jsx)(o.Fragment,{children:"\xa0"})}),Object(o.jsx)("p",{className:"text-gray-500 text-sm font-normal",children:s?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{className:"font-bold",children:s}),c&&Object(o.jsxs)("span",{children:["\xa0playing\xa0",Object(o.jsx)("span",{className:"font-bold",children:c})]}),", submitted by ",Object(o.jsx)("span",{className:"font-bold",children:null!==(t=null===a||void 0===a?void 0:a.displayName)&&void 0!==t?t:null===a||void 0===a?void 0:a.userName}),d>0&&Object(o.jsxs)(o.Fragment,{children:[" and ",d," other(s)"]}),r&&Object(o.jsxs)("span",{children:[", created ",Object(p.a)(Object(f.a)(r))," ago"]})]}):Object(o.jsx)(o.Fragment,{children:"\xa0"})})]})]})};c(103);t.default=function(){var e,t=Object(n.useState)(!1),c=Object(s.a)(t,2),i=c[0],d=c[1],O=Object(r.c)(u.b),p=Object(r.c)(u.g),f=Object(r.c)(u.f),g=Object(r.c)(u.h),v=Object(r.c)(h.g),w=Object(r.c)(h.f),y=v.get();return Object(n.useEffect)((function(){return m.a.connect(),function(){m.a.disconnect()}}),[y]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(N,Object(l.a)(Object(l.a)({},g.get()),{},{submitterCount:null===(e=g.submitters.get())||void 0===e?void 0:e.length})),Object(o.jsxs)("div",{className:"mt-4 flex w-full",children:[Object(o.jsx)(a.b,{colour:"green",className:"mr-2",onClick:function(){return Object(u.j)()},children:"Next \xbb"}),Object(o.jsx)(j,{pressed:O.get(),className:"mr-2",onClick:function(){return Object(u.a)(!O.get())},children:O.get()?Object(o.jsx)(o.Fragment,{children:"Close the floodgates! \ud83c\udf0a"}):Object(o.jsx)(o.Fragment,{children:"Open the floodgates! \ud83d\udeaa"})}),Object(o.jsxs)(a.b,{colour:"red",className:"mr-2",onClick:function(){return Object(u.e)()},children:["\xd7 Clear queue ",Object(o.jsxs)("em",{children:["(",p.length,")"]})]}),Object(o.jsx)(j,{pressed:i,colour:"red",onClick:function(){return d(!i)},children:"\u2699\ufe0f"})]}),i&&Object(o.jsxs)("div",{className:"mt-2 flex w-full",children:[Object(o.jsxs)(a.b,{className:"mr-2",onClick:function(){var e=prompt("Enter channel to read chat from",w.get());e&&e!==w.get()&&Object(h.b)(e)},children:["Change channel ",Object(o.jsxs)("em",{children:["(",w.get(),")"]})]}),Object(o.jsx)(a.b,{className:"mr-2",onClick:function(){var e=prompt("Enter clip url","");e&&b.a.findByUrl(e).then((function(t){var c,l;t&&(t.url=e,t.submitter={userName:null!==(c=h.g.get())&&void 0!==c?c:"",displayName:null!==(l=h.g.get())&&void 0!==l?l:""},Object(u.c)(t))}))},children:"+ Add cilp"}),Object(o.jsxs)(a.b,{onClick:function(){return Object(u.d)()},title:"Remove all clips from permanent memory, allow all clips to be posted and queued again",children:["\xd7 Purge memory ",Object(o.jsxs)("em",{children:["(",f.length,")"]})]})]}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsx)(x,{clips:p.get()})})]})}}}]);
//# sourceMappingURL=5.e9b40e51.chunk.js.map