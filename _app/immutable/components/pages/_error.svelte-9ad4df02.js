import{S as X,i as F,s as G,a as S,k as d,q as g,w as V,X as J,h as l,c as q,l as h,m as $,r as b,x as j,n as k,b as P,Q as u,y as x,u as z,f as N,t as O,z as Q,T as K,R as L}from"../../chunks/singletons-50d50dfd.js";import{p as M}from"../../chunks/stores-0c210690.js";import{A as U,B as W}from"../../chunks/Button-c9a4b026.js";function Y(o){let t,s=o[0].error.message+"",e,a;return{c(){t=d("p"),e=g(s),a=g(".")},l(n){t=h(n,"P",{});var c=$(t);e=b(c,s),a=b(c,"."),c.forEach(l)},m(n,c){P(n,t,c),u(t,e),u(t,a)},p(n,c){c&1&&s!==(s=n[0].error.message+"")&&z(e,s)},d(n){n&&l(t)}}}function Z(o){let t,s;return{c(){t=d("p"),s=g("Page not found.")},l(e){t=h(e,"P",{});var a=$(t);s=b(a,"Page not found."),a.forEach(l)},m(e,a){P(e,t,a),u(t,s)},p:L,d(e){e&&l(t)}}}function ee(o){let t;return{c(){t=g("Return home")},l(s){t=b(s,"Return home")},m(s,e){P(s,t,e)},d(s){s&&l(t)}}}function te(o){let t,s;return t=new W({props:{href:"/archive",$$slots:{default:[ee]},$$scope:{ctx:o}}}),{c(){V(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,a){x(t,e,a),s=!0},p(e,a){const n={};a&2&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){s||(N(t.$$.fragment,e),s=!0)},o(e){O(t.$$.fragment,e),s=!1},d(e){Q(t,e)}}}function se(o){let t,s,e,a,n,c,y=o[0].status+"",R,A,v,_,D,m,E;document.title=t="Error "+o[0].status;function B(r,f){return r[0].status===404?Z:Y}let w=B(o),i=w(o);return m=new U({props:{class:"px1 py2 md:p2",$$slots:{default:[te]},$$scope:{ctx:o}}}),{c(){s=S(),e=d("section"),a=d("header"),n=d("h1"),c=g("Error "),R=g(y),A=S(),v=d("div"),_=d("div"),i.c(),D=S(),V(m.$$.fragment),this.h()},l(r){J("svelte-jisvly",document.head).forEach(l),s=q(r),e=h(r,"SECTION",{class:!0});var p=$(e);a=h(p,"HEADER",{class:!0});var C=$(a);n=h(C,"H1",{class:!0});var I=$(n);c=b(I,"Error "),R=b(I,y),I.forEach(l),C.forEach(l),A=q(p),v=h(p,"DIV",{class:!0});var H=$(v);_=h(H,"DIV",{class:!0});var T=$(_);i.l(T),T.forEach(l),H.forEach(l),D=q(p),j(m.$$.fragment,p),p.forEach(l),this.h()},h(){k(n,"class","h1 lh1 lsh"),k(a,"class","px1 py2 md:p2"),k(_,"class","copy h5 lh2"),k(v,"class","px1 py2 md:p2"),k(e,"class","py2")},m(r,f){P(r,s,f),P(r,e,f),u(e,a),u(a,n),u(n,c),u(n,R),u(e,A),u(e,v),u(v,_),i.m(_,null),u(e,D),x(m,e,null),E=!0},p(r,[f]){(!E||f&1)&&t!==(t="Error "+r[0].status)&&(document.title=t),(!E||f&1)&&y!==(y=r[0].status+"")&&z(R,y),w===(w=B(r))&&i?i.p(r,f):(i.d(1),i=w(r),i&&(i.c(),i.m(_,null)));const p={};f&2&&(p.$$scope={dirty:f,ctx:r}),m.$set(p)},i(r){E||(N(m.$$.fragment,r),E=!0)},o(r){O(m.$$.fragment,r),E=!1},d(r){r&&l(s),r&&l(e),i.d(),Q(m)}}}function ae(o,t,s){let e;return K(o,M,a=>s(0,e=a)),[e]}class le extends X{constructor(t){super(),F(this,t,ae,se,G,{})}}export{le as default};
