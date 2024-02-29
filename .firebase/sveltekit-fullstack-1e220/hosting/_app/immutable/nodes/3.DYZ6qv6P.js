import{s as re,n as X,r as ce,b as ve,d as Z}from"../chunks/scheduler.DHKgWpgq.js";import{S as ie,i as ue,e as b,h as G,s as H,c as k,a as y,j as J,d as w,k as N,b as T,f as K,l as u,p as L,m as x,w as $,t as P,g as j,x as fe,n as U,o as ee,z as de,B as me,q as _e,r as ge,u as pe,v as Te}from"../chunks/index.CH_yHiIP.js";import{c as te,d as be,b as ke,s as qe,e as Ce}from"../chunks/store.D9NLukO8.js";function oe(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Ee(s){let t,o,e=s[0]+1+"",l,a,h,_,g,f,E,I,D,n;return{c(){t=b("div"),o=b("p"),l=G(e),a=G(". "),h=G(s[1]),_=H(),g=b("div"),f=b("i"),E=H(),I=b("i"),this.h()},l(m){t=k(m,"DIV",{class:!0});var q=y(t);o=k(q,"P",{});var d=y(o);l=J(d,e),a=J(d,". "),h=J(d,s[1]),d.forEach(w),_=N(q),g=k(q,"DIV",{class:!0});var p=y(g);f=k(p,"I",{class:!0}),y(f).forEach(w),E=N(p),I=k(p,"I",{class:!0}),y(I).forEach(w),p.forEach(w),q.forEach(w),this.h()},h(){T(f,"class","fa-regular fa-pen-to-square svelte-1fl9h32"),T(I,"class","fa-regular fa-trash-can svelte-1fl9h32"),T(g,"class","actions svelte-1fl9h32"),T(t,"class","todo svelte-1fl9h32")},m(m,q){K(m,t,q),u(t,o),u(o,l),u(o,a),u(o,h),u(t,_),u(t,g),u(g,f),u(g,E),u(g,I),D||(n=[L(f,"click",s[4]),L(f,"keydown",we),L(I,"click",s[5]),L(I,"keydown",Ie)],D=!0)},p(m,[q]){q&1&&e!==(e=m[0]+1+"")&&x(l,e),q&2&&x(h,m[1])},i:X,o:X,d(m){m&&w(t),D=!1,ce(n)}}}const we=()=>{},Ie=()=>{};function ye(s,t,o){let{index:e}=t,{todo:l}=t,{editTodo:a}=t,{removeTodo:h}=t;const _=()=>{a(e)},g=()=>{h(e)};return s.$$set=f=>{"index"in f&&o(0,e=f.index),"todo"in f&&o(1,l=f.todo),"editTodo"in f&&o(2,a=f.editTodo),"removeTodo"in f&&o(3,h=f.removeTodo)},[e,l,a,h,_,g]}class De extends ie{constructor(t){super(),ue(this,t,ye,Ee,re,{index:0,todo:1,editTodo:2,removeTodo:3})}}function le(s,t,o){const e=s.slice();return e[10]=t[o],e[12]=o,e}function se(s){let t,o,e,l="Todo List",a,h,_,g='<i class="fa-regular fa-floppy-disk svelte-11qu6c4"></i> <p>Save</p>',f,E,I='<i class="fa-solid fa-right-from-bracket svelte-11qu6c4"></i> <p>Logout</p>',D,n,m,q,d,p,R,B,Q="ADD",A,S,Y,W,C=s[0].length===0&&ne(),V=oe(s[0]),i=[];for(let r=0;r<V.length;r+=1)i[r]=ae(le(s,V,r));const he=r=>j(i[r],1,1,()=>{i[r]=null});return{c(){t=b("div"),o=b("div"),e=b("h1"),e.textContent=l,a=H(),h=b("div"),_=b("button"),_.innerHTML=g,f=H(),E=b("button"),E.innerHTML=I,D=H(),n=b("main"),C&&C.c(),m=H();for(let r=0;r<i.length;r+=1)i[r].c();q=H(),d=b("div"),p=b("input"),R=H(),B=b("button"),B.textContent=Q,this.h()},l(r){t=k(r,"DIV",{class:!0});var v=y(t);o=k(v,"DIV",{class:!0});var c=y(o);e=k(c,"H1",{"data-svelte-h":!0}),U(e)!=="svelte-1g9d2um"&&(e.textContent=l),a=N(c),h=k(c,"DIV",{class:!0});var M=y(h);_=k(M,"BUTTON",{class:!0,"data-svelte-h":!0}),U(_)!=="svelte-1g5ful5"&&(_.innerHTML=g),f=N(M),E=k(M,"BUTTON",{class:!0,"data-svelte-h":!0}),U(E)!=="svelte-f6h3b2"&&(E.innerHTML=I),M.forEach(w),c.forEach(w),D=N(v),n=k(v,"MAIN",{class:!0});var O=y(n);C&&C.l(O),m=N(O);for(let F=0;F<i.length;F+=1)i[F].l(O);O.forEach(w),q=N(v),d=k(v,"DIV",{class:!0});var z=y(d);p=k(z,"INPUT",{type:!0,placeholder:!0,class:!0}),R=N(z),B=k(z,"BUTTON",{class:!0,"data-svelte-h":!0}),U(B)!=="svelte-o5h7g0"&&(B.textContent=Q),z.forEach(w),v.forEach(w),this.h()},h(){T(_,"class","svelte-11qu6c4"),T(E,"class","svelte-11qu6c4"),T(h,"class","headerBtns svelte-11qu6c4"),T(o,"class","headerContainer svelte-11qu6c4"),T(n,"class","svelte-11qu6c4"),T(p,"type","text"),T(p,"placeholder","Enter todo"),T(p,"class","svelte-11qu6c4"),T(B,"class","svelte-11qu6c4"),T(d,"class",A=Z("enterTodo "+(s[2]?"errorBorder":""))+" svelte-11qu6c4"),T(t,"class","mainContainer svelte-11qu6c4")},m(r,v){K(r,t,v),u(t,o),u(o,e),u(o,a),u(o,h),u(h,_),u(h,f),u(h,E),u(t,D),u(t,n),C&&C.m(n,null),u(n,m);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(n,null);u(t,q),u(t,d),u(d,p),ee(p,s[1]),u(d,R),u(d,B),S=!0,Y||(W=[L(_,"click",s[8]),L(E,"click",Ce.logout),L(p,"input",s[9]),L(p,"keydown",s[4]),L(B,"click",s[5])],Y=!0)},p(r,v){if(r[0].length===0?C||(C=ne(),C.c(),C.m(n,m)):C&&(C.d(1),C=null),v&193){V=oe(r[0]);let c;for(c=0;c<V.length;c+=1){const M=le(r,V,c);i[c]?(i[c].p(M,v),P(i[c],1)):(i[c]=ae(M),i[c].c(),P(i[c],1),i[c].m(n,null))}for(de(),c=V.length;c<i.length;c+=1)he(c);fe()}v&2&&p.value!==r[1]&&ee(p,r[1]),(!S||v&4&&A!==(A=Z("enterTodo "+(r[2]?"errorBorder":""))+" svelte-11qu6c4"))&&T(d,"class",A)},i(r){if(!S){for(let v=0;v<V.length;v+=1)P(i[v]);S=!0}},o(r){i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)j(i[v]);S=!1},d(r){r&&w(t),C&&C.d(),me(i,r),Y=!1,ce(W)}}}function ne(s){let t,o="You have nothing to do!";return{c(){t=b("p"),t.textContent=o},l(e){t=k(e,"P",{"data-svelte-h":!0}),U(t)!=="svelte-1jtqiij"&&(t.textContent=o)},m(e,l){K(e,t,l)},d(e){e&&w(t)}}}function ae(s){let t,o;return t=new De({props:{todo:s[10],index:s[12],removeTodo:s[7],editTodo:s[6]}}),{c(){_e(t.$$.fragment)},l(e){ge(t.$$.fragment,e)},m(e,l){pe(t,e,l),o=!0},p(e,l){const a={};l&1&&(a.todo=e[10]),t.$set(a)},i(e){o||(P(t.$$.fragment,e),o=!0)},o(e){j(t.$$.fragment,e),o=!1},d(e){Te(t,e)}}}function Le(s){let t,o,e=!s[3].loading&&se(s);return{c(){e&&e.c(),t=$()},l(l){e&&e.l(l),t=$()},m(l,a){e&&e.m(l,a),K(l,t,a),o=!0},p(l,[a]){l[3].loading?e&&(de(),j(e,1,1,()=>{e=null}),fe()):e?(e.p(l,a),a&8&&P(e,1)):(e=se(l),e.c(),P(e,1),e.m(t.parentNode,t))},i(l){o||(P(e),o=!0)},o(l){j(e),o=!1},d(l){l&&w(t),e&&e.d(l)}}}function Be(s,t,o){let e;ve(s,te,n=>o(3,e=n));let l=[],a="",h=!1;te.subscribe(n=>{o(0,l=n.data.todos)});function _(n){n.key==="Enter"&&g()}function g(){o(2,h=!1),a||o(2,h=!0),o(0,l=[...l,a]),o(1,a="")}function f(n){let m=[...l].filter((q,d)=>(console.log(d,n,d!==n),d!=n));o(1,a=l[n]),o(0,l=m)}function E(n){let m=[...l].filter((q,d)=>(console.log(d,n,d!==n),d!=n));o(0,l=m)}async function I(){try{const n=be(ke,"users",e.user.uid);await qe(n,{todos:l},{merge:!0})}catch{console.log("There was an error saving your information")}}function D(){a=this.value,o(1,a)}return[l,a,h,e,_,g,f,E,I,D]}class Me extends ie{constructor(t){super(),ue(this,t,Be,Le,re,{})}}export{Me as component};
