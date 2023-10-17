import{s as z,e as M,n as D,c as F,u as J,g as y,d as O}from"../chunks/scheduler.86e51451.js";import{S as W,i as q,g as I,s as T,m as E,h as P,j as B,f as $,c as j,n as K,k as _,a as d,y as A,o as X,d as p,t as g,r as h,u as b,v as w,w as k,x as N}from"../chunks/index.c3cb19b7.js";import{C as Q}from"../chunks/cloud background.113abd4d.js";import{A as U}from"../chunks/Article.e9234bca.js";import{T as Y}from"../chunks/TitlePage.7b5422d4.js";import{T as Z}from"../chunks/TextArticle.62e017a2.js";import{T as x}from"../chunks/TopBottomPad.a808eb76.js";import{B as ee}from"../chunks/PersonCard.svelte_svelte_type_style_lang.cfc06987.js";import{B as te}from"../chunks/Background.09fa2ce4.js";function R(l){let e,n;return{c(){e=I("div"),n=E(l[3]),this.h()},l(s){e=P(s,"DIV",{id:!0,class:!0});var a=B(e);n=K(a,l[3]),a.forEach($),this.h()},h(){_(e,"id","job"),_(e,"class","svelte-1ol6k5b")},m(s,a){d(s,e,a),A(e,n)},p(s,a){a&8&&X(n,s[3])},d(s){s&&$(e)}}}function se(l){let e,n,s,a,t,r,i,v,c,C,f,o=typeof l[3]=="string"&&R(l);return{c(){e=I("div"),n=I("div"),s=I("img"),t=T(),r=I("div"),i=E(l[1]),v=T(),c=I("div"),C=E(l[2]),f=T(),o&&o.c(),this.h()},l(m){e=P(m,"DIV",{id:!0,class:!0});var u=B(e);n=P(u,"DIV",{id:!0,class:!0});var G=B(n);s=P(G,"IMG",{src:!0,alt:!0,width:!0,class:!0}),G.forEach($),t=j(u),r=P(u,"DIV",{id:!0});var H=B(r);i=K(H,l[1]),H.forEach($),v=j(u),c=P(u,"DIV",{id:!0,class:!0});var L=B(c);C=K(L,l[2]),L.forEach($),f=j(u),o&&o.l(u),u.forEach($),this.h()},h(){M(s.src,a=l[0])||_(s,"src",a),_(s,"alt","person"),_(s,"width","180"),_(s,"class","svelte-1ol6k5b"),_(n,"id","avatar"),_(n,"class","svelte-1ol6k5b"),_(r,"id","name"),_(c,"id","class-assigned"),_(c,"class","svelte-1ol6k5b"),_(e,"id","body"),_(e,"class","svelte-1ol6k5b")},m(m,u){d(m,e,u),A(e,n),A(n,s),A(e,t),A(e,r),A(r,i),A(e,v),A(e,c),A(c,C),A(e,f),o&&o.m(e,null)},p(m,[u]){u&1&&!M(s.src,a=m[0])&&_(s,"src",a),u&2&&X(i,m[1]),u&4&&X(C,m[2]),typeof m[3]=="string"?o?o.p(m,u):(o=R(m),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:D,o:D,d(m){m&&$(e),o&&o.d()}}}function ae(l,e,n){let{image:s=ee}=e,{name:a="John Doe"}=e,{classAssigned:t="Kelas XI-F"}=e,{job:r=void 0}=e;return l.$$set=i=>{"image"in i&&n(0,s=i.image),"name"in i&&n(1,a=i.name),"classAssigned"in i&&n(2,t=i.classAssigned),"job"in i&&n(3,r=i.job)},[s,a,t,r]}class V extends W{constructor(e){super(),q(this,e,ae,se,z,{image:0,name:1,classAssigned:2,job:3})}}function ne(l){let e,n;const s=l[1].default,a=F(s,l,l[0],null);return{c(){e=I("div"),a&&a.c(),this.h()},l(t){e=P(t,"DIV",{class:!0});var r=B(e);a&&a.l(r),r.forEach($),this.h()},h(){_(e,"class","svelte-10a66rn")},m(t,r){d(t,e,r),a&&a.m(e,null),n=!0},p(t,[r]){a&&a.p&&(!n||r&1)&&J(a,s,t,t[0],n?O(s,t[0],r,null):y(t[0]),null)},i(t){n||(p(a,t),n=!0)},o(t){g(a,t),n=!1},d(t){t&&$(e),a&&a.d(t)}}}function re(l,e,n){let{$$slots:s={},$$scope:a}=e;return l.$$set=t=>{"$$scope"in t&&n(0,a=t.$$scope)},[a,s]}class S extends W{constructor(e){super(),q(this,e,re,ne,z,{})}}function le(l){let e;return{c(){e=E("Tokoh Wawancara")},l(n){e=K(n,"Tokoh Wawancara")},m(n,s){d(n,e,s)},d(n){n&&$(e)}}}function fe(l){let e,n;return e=new Y({props:{$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,a){w(e,s,a),n=!0},p(s,a){const t={};a&1&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){g(e.$$.fragment,s),n=!1},d(s){k(e,s)}}}function oe(l){let e,n;return e=new x({props:{$$slots:{default:[fe]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,a){w(e,s,a),n=!0},p(s,a){const t={};a&1&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){g(e.$$.fragment,s),n=!1},d(s){k(e,s)}}}function ie(l){let e,n;return e=new U({props:{$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,a){w(e,s,a),n=!0},p(s,a){const t={};a&1&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){g(e.$$.fragment,s),n=!1},d(s){k(e,s)}}}function ue(l){let e,n,s,a;return e=new V({props:{name:"Azka Nuran Ardiansyah",classAssigned:"Kelas XI-3"}}),s=new V({props:{name:"Rifat Agung Mulia",classAssigned:"Kelas XI-3"}}),{c(){h(e.$$.fragment),n=T(),h(s.$$.fragment)},l(t){b(e.$$.fragment,t),n=j(t),b(s.$$.fragment,t)},m(t,r){w(e,t,r),d(t,n,r),w(s,t,r),a=!0},p:D,i(t){a||(p(e.$$.fragment,t),p(s.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),a=!1},d(t){t&&$(n),k(e,t),k(s,t)}}}function $e(l){let e,n,s,a;return e=new V({props:{name:"Pak Reja",classAssigned:"Narasumber, Guru BK"}}),s=new V({props:{name:"Taruna Prasetya",classAssigned:"Korban Bully, Kelas XI-3"}}),{c(){h(e.$$.fragment),n=T(),h(s.$$.fragment)},l(t){b(e.$$.fragment,t),n=j(t),b(s.$$.fragment,t)},m(t,r){w(e,t,r),d(t,n,r),w(s,t,r),a=!0},p:D,i(t){a||(p(e.$$.fragment,t),p(s.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),a=!1},d(t){t&&$(n),k(e,t),k(s,t)}}}function ce(l){let e,n="Pewawancara",s,a,t,r,i="Wawancara",v,c,C;return a=new S({props:{$$slots:{default:[ue]},$$scope:{ctx:l}}}),c=new S({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}}),{c(){e=I("h1"),e.textContent=n,s=T(),h(a.$$.fragment),t=T(),r=I("h1"),r.textContent=i,v=T(),h(c.$$.fragment)},l(f){e=P(f,"H1",{["data-svelte-h"]:!0}),N(e)!=="svelte-1efbdcg"&&(e.textContent=n),s=j(f),b(a.$$.fragment,f),t=j(f),r=P(f,"H1",{["data-svelte-h"]:!0}),N(r)!=="svelte-9zj6cn"&&(r.textContent=i),v=j(f),b(c.$$.fragment,f)},m(f,o){d(f,e,o),d(f,s,o),w(a,f,o),d(f,t,o),d(f,r,o),d(f,v,o),w(c,f,o),C=!0},p(f,o){const m={};o&1&&(m.$$scope={dirty:o,ctx:f}),a.$set(m);const u={};o&1&&(u.$$scope={dirty:o,ctx:f}),c.$set(u)},i(f){C||(p(a.$$.fragment,f),p(c.$$.fragment,f),C=!0)},o(f){g(a.$$.fragment,f),g(c.$$.fragment,f),C=!1},d(f){f&&($(e),$(s),$(t),$(r),$(v)),k(a,f),k(c,f)}}}function me(l){let e,n,s,a;return e=new te({props:{image:Q,size:"cover",$$slots:{default:[ie]},$$scope:{ctx:l}}}),s=new Z({props:{$$slots:{default:[ce]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment),n=T(),h(s.$$.fragment)},l(t){b(e.$$.fragment,t),n=j(t),b(s.$$.fragment,t)},m(t,r){w(e,t,r),d(t,n,r),w(s,t,r),a=!0},p(t,[r]){const i={};r&1&&(i.$$scope={dirty:r,ctx:t}),e.$set(i);const v={};r&1&&(v.$$scope={dirty:r,ctx:t}),s.$set(v)},i(t){a||(p(e.$$.fragment,t),p(s.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),a=!1},d(t){t&&$(n),k(e,t),k(s,t)}}}class Ae extends W{constructor(e){super(),q(this,e,null,me,z,{})}}export{Ae as component};
