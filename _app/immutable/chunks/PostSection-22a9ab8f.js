import{S as A,i as N,s as b,N as P,O as T,m as d,h,n as _,b as k,Q as p,R as E,W as Y,k as v,l as w,Y as Z,Z as j,_ as G,f as m,t as $,e as y,g as O,d as R,w as V,a as C,x as H,c as I,y as S,z as D,q as L,r as Q,u as W,a4 as J,a5 as K}from"./singletons-50d50dfd.js";import{c as q}from"./config-2d2f7f97.js";import{H as U,f as B}from"./ArchiveSection-923a7e98.js";function X(o){let e,t;return{c(){e=P("svg"),t=P("path"),this.h()},l(a){e=T(a,"svg",{class:!0,width:!0,height:!0,fill:!0,viewBox:!0});var s=d(e);t=T(s,"path",{d:!0}),d(t).forEach(h),s.forEach(h),this.h()},h(){_(t,"d","M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"),_(e,"class","block"),_(e,"width","16"),_(e,"height","16"),_(e,"fill","currentColor"),_(e,"viewBox","0 0 16 16")},m(a,s){k(a,e,s),p(e,t)},p:E,i:E,o:E,d(a){a&&h(e)}}}class x extends A{constructor(e){super(),N(this,e,null,X,b,{})}}function ee(o){let e,t,a;const s=o[1].default,l=Y(s,o,o[0],null);return{c(){e=v("div"),t=v("div"),l&&l.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var f=d(e);t=w(f,"DIV",{class:!0});var r=d(t);l&&l.l(r),r.forEach(h),f.forEach(h),this.h()},h(){_(t,"class","copy h5 lh2"),_(e,"class","px1 py2 md:p2")},m(n,f){k(n,e,f),p(e,t),l&&l.m(t,null),a=!0},p(n,[f]){l&&l.p&&(!a||f&1)&&Z(l,s,n,n[0],a?G(s,n[0],f,null):j(n[0]),null)},i(n){a||(m(l,n),a=!0)},o(n){$(l,n),a=!1},d(n){n&&h(e),l&&l.d(n)}}}function te(o,e,t){let{$$slots:a={},$$scope:s}=e;return o.$$set=l=>{"$$scope"in l&&t(0,s=l.$$scope)},[s,a]}class ae extends A{constructor(e){super(),N(this,e,te,ee,b,{})}}function se(o){let e=o[0].title+"",t;return{c(){t=L(e)},l(a){t=Q(a,e)},m(a,s){k(a,t,s)},p(a,s){s&1&&e!==(e=a[0].title+"")&&W(t,e)},d(a){a&&h(t)}}}function F(o){let e,t,a,s,l,n=B(new Date(o[0].date),q.dateFormat)+"",f,r,i;return a=new x({}),{c(){e=v("aside"),t=v("a"),V(a.$$.fragment),s=C(),l=v("span"),f=L(n),this.h()},l(c){e=w(c,"ASIDE",{class:!0});var u=d(e);t=w(u,"A",{class:!0,href:!0});var g=d(t);H(a.$$.fragment,g),s=I(g),l=w(g,"SPAN",{class:!0});var z=d(l);f=Q(z,n),z.forEach(h),g.forEach(h),u.forEach(h),this.h()},h(){_(l,"class","ul"),_(t,"class","h5 lh2 inline-row items-center gap05"),_(t,"href",r="/"+o[0].id),_(e,"class","px1 py1 md:px2")},m(c,u){k(c,e,u),p(e,t),S(a,t,null),p(t,s),p(t,l),p(l,f),i=!0},p(c,u){(!i||u&1)&&n!==(n=B(new Date(c[0].date),q.dateFormat)+"")&&W(f,n),(!i||u&1&&r!==(r="/"+c[0].id))&&_(t,"href",r)},i(c){i||(m(a.$$.fragment,c),i=!0)},o(c){$(a.$$.fragment,c),i=!1},d(c){c&&h(e),D(a)}}}function le(o){let e,t=o[0].content+"",a;return{c(){e=new J(!1),a=y(),this.h()},l(s){e=K(s,!1),a=y(),this.h()},h(){e.a=a},m(s,l){e.m(t,s,l),k(s,a,l)},p(s,l){l&1&&t!==(t=s[0].content+"")&&e.p(t)},d(s){s&&h(a),s&&e.d()}}}function M(o){let e,t,a,s,l,n,f;a=new U({props:{$$slots:{default:[se]},$$scope:{ctx:o}}});let r=o[0].date&&F(o);return n=new ae({props:{$$slots:{default:[le]},$$scope:{ctx:o}}}),{c(){e=v("section"),t=v("article"),V(a.$$.fragment),s=C(),r&&r.c(),l=C(),V(n.$$.fragment),this.h()},l(i){e=w(i,"SECTION",{class:!0});var c=d(e);t=w(c,"ARTICLE",{});var u=d(t);H(a.$$.fragment,u),s=I(u),r&&r.l(u),l=I(u),H(n.$$.fragment,u),u.forEach(h),c.forEach(h),this.h()},h(){_(e,"class","py2")},m(i,c){k(i,e,c),p(e,t),S(a,t,null),p(t,s),r&&r.m(t,null),p(t,l),S(n,t,null),f=!0},p(i,c){const u={};c&3&&(u.$$scope={dirty:c,ctx:i}),a.$set(u),i[0].date?r?(r.p(i,c),c&1&&m(r,1)):(r=F(i),r.c(),m(r,1),r.m(t,l)):r&&(O(),$(r,1,1,()=>{r=null}),R());const g={};c&3&&(g.$$scope={dirty:c,ctx:i}),n.$set(g)},i(i){f||(m(a.$$.fragment,i),m(r),m(n.$$.fragment,i),f=!0)},o(i){$(a.$$.fragment,i),$(r),$(n.$$.fragment,i),f=!1},d(i){i&&h(e),D(a),r&&r.d(),D(n)}}}function ne(o){let e=o[0].id,t,a,s=M(o);return{c(){s.c(),t=y()},l(l){s.l(l),t=y()},m(l,n){s.m(l,n),k(l,t,n),a=!0},p(l,[n]){n&1&&b(e,e=l[0].id)?(O(),$(s,1,1,E),R(),s=M(l),s.c(),m(s,1),s.m(t.parentNode,t)):s.p(l,n)},i(l){a||(m(s),a=!0)},o(l){$(s),a=!1},d(l){l&&h(t),s.d(l)}}}function re(o,e,t){let{post:a}=e;return o.$$set=s=>{"post"in s&&t(0,a=s.post)},[a]}class fe extends A{constructor(e){super(),N(this,e,re,ne,b,{post:0})}}export{fe as P};
