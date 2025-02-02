var De=Object.defineProperty;var je=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>je(e,typeof t!="symbol"?t+"":t,n);import{r as a,X as Le,R as Y,_ as Ne,c as x,j as $,a as fe,u as de,s as ee,a4 as te,g as $e,d as ke}from"./index-DLpikvjc.js";const Oe=typeof window<"u"?a.useLayoutEffect:a.useEffect;function Ue(e,t){typeof e=="function"?e(t):e&&(e.current=t)}let ie=0;function ve(e){const[t,n]=a.useState(e),r=e||t;return a.useEffect(()=>{t==null&&(ie+=1,n(`mui-${ie}`))},[t]),r}const Fe={...Le},ae=Fe.useId;function ht(e){if(ae!==void 0){const t=ae();return e??t}return ve(e)}function G(e){const t=a.useRef(e);return Oe(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function ue(...e){return a.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Ue(n,t)})},e)}const le={};function he(e,t){const n=a.useRef(le);return n.current===le&&(n.current=e(t)),n}const ze=[];function _e(e){a.useEffect(e,ze)}class ne{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new ne}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Ae(){const e=he(ne.create).current;return _e(e.disposeEffect),e}function ce(e){try{return e.matches(":focus-visible")}catch{}return!1}function Xe(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},J(e,t)}function Ye(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,J(e,t)}const pe=Y.createContext(null);function Ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t){var n=function(o){return t&&a.isValidElement(o)?t(o):o},r=Object.create(null);return e&&a.Children.map(e,function(s){return s}).forEach(function(s){r[s.key]=n(s)}),r}function We(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var r=Object.create(null),s=[];for(var o in e)o in t?s.length&&(r[o]=s,s=[]):s.push(o);var i,p={};for(var l in t){if(r[l])for(i=0;i<r[l].length;i++){var f=r[l][i];p[r[l][i]]=n(f)}p[l]=n(l)}for(i=0;i<s.length;i++)p[s[i]]=n(s[i]);return p}function N(e,t,n){return n[t]!=null?n[t]:e.props[t]}function He(e,t){return se(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:N(n,"appear",e),enter:N(n,"enter",e),exit:N(n,"exit",e)})})}function Ge(e,t,n){var r=se(e.children),s=We(t,r);return Object.keys(s).forEach(function(o){var i=s[o];if(a.isValidElement(i)){var p=o in t,l=o in r,f=t[o],d=a.isValidElement(f)&&!f.props.in;l&&(!p||d)?s[o]=a.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:N(i,"exit",e),enter:N(i,"enter",e)}):!l&&p&&!d?s[o]=a.cloneElement(i,{in:!1}):l&&p&&a.isValidElement(f)&&(s[o]=a.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:N(i,"exit",e),enter:N(i,"enter",e)}))}}),s}var qe=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ze={component:"div",childFactory:function(t){return t}},oe=function(e){Ye(t,e);function t(r,s){var o;o=e.call(this,r,s)||this;var i=o.handleExited.bind(Ke(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(s,o){var i=o.children,p=o.handleExited,l=o.firstRender;return{children:l?He(s,p):Ge(s,i,p),firstRender:!1}},n.handleExited=function(s,o){var i=se(this.props.children);s.key in i||(s.props.onExited&&s.props.onExited(o),this.mounted&&this.setState(function(p){var l=Ne({},p.children);return delete l[s.key],{children:l}}))},n.render=function(){var s=this.props,o=s.component,i=s.childFactory,p=Xe(s,["component","childFactory"]),l=this.state.contextValue,f=qe(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,o===null?Y.createElement(pe.Provider,{value:l},f):Y.createElement(pe.Provider,{value:l},Y.createElement(o,p,f))},t}(Y.Component);oe.propTypes={};oe.defaultProps=Ze;class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const t=he(q.create).current,[n,r]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=r,a.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=Qe(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function Je(){return q.use()}function Qe(){let e,t;const n=new Promise((r,s)=>{e=r,t=s});return n.resolve=e,n.reject=t,n}function et(e){const{className:t,classes:n,pulsate:r=!1,rippleX:s,rippleY:o,rippleSize:i,in:p,onExited:l,timeout:f}=e,[d,h]=a.useState(!1),M=x(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),I={width:i,height:i,top:-(i/2)+o,left:-(i/2)+s},b=x(n.child,d&&n.childLeaving,r&&n.childPulsate);return!p&&!d&&h(!0),a.useEffect(()=>{if(!p&&l!=null){const B=setTimeout(l,f);return()=>{clearTimeout(B)}}},[l,p,f]),$.jsx("span",{className:M,style:I,children:$.jsx("span",{className:b})})}const g=fe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,tt=80,nt=te`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,st=te`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,ot=te`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,rt=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=ee(et,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${nt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${st};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ot};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,at=a.forwardRef(function(t,n){const r=de({props:t,name:"MuiTouchRipple"}),{center:s=!1,classes:o={},className:i,...p}=r,[l,f]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),I=Ae(),b=a.useRef(null),B=a.useRef(null),C=a.useCallback(c=>{const{pulsate:y,rippleX:R,rippleY:U,rippleSize:D,cb:v}=c;f(E=>[...E,$.jsx(it,{classes:{ripple:x(o.ripple,g.ripple),rippleVisible:x(o.rippleVisible,g.rippleVisible),ripplePulsate:x(o.ripplePulsate,g.ripplePulsate),child:x(o.child,g.child),childLeaving:x(o.childLeaving,g.childLeaving),childPulsate:x(o.childPulsate,g.childPulsate)},timeout:Q,pulsate:y,rippleX:R,rippleY:U,rippleSize:D},d.current)]),d.current+=1,h.current=v},[o]),k=a.useCallback((c={},y={},R=()=>{})=>{const{pulsate:U=!1,center:D=s||y.pulsate,fakeElement:v=!1}=y;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=v?null:B.current,w=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,T,S;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)V=Math.round(w.width/2),T=Math.round(w.height/2);else{const{clientX:F,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;V=Math.round(F-w.left),T=Math.round(j-w.top)}if(D)S=Math.sqrt((2*w.width**2+w.height**2)/3),S%2===0&&(S+=1);else{const F=Math.max(Math.abs((E?E.clientWidth:0)-V),V)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;S=Math.sqrt(F**2+j**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:U,rippleX:V,rippleY:T,rippleSize:S,cb:R})},I.start(tt,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:U,rippleX:V,rippleY:T,rippleSize:S,cb:R})},[s,C,I]),K=a.useCallback(()=>{k({},{pulsate:!0})},[k]),O=a.useCallback((c,y)=>{if(I.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,I.start(0,()=>{O(c,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[I]);return a.useImperativeHandle(n,()=>({pulsate:K,start:k,stop:O}),[K,k,O]),$.jsx(rt,{className:x(g.root,o.root,i),ref:B,...p,children:$.jsx(oe,{component:null,exit:!0,children:l})})});function ut(e){return $e("MuiButtonBase",e)}const lt=fe("MuiButtonBase",["root","disabled","focusVisible"]),ct=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:s}=e,i=ke({root:["root",t&&"disabled",n&&"focusVisible"]},ut,s);return n&&r&&(i.root+=` ${r}`),i},pt=ee("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${lt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=a.forwardRef(function(t,n){const r=de({props:t,name:"MuiButtonBase"}),{action:s,centerRipple:o=!1,children:i,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:I,LinkComponent:b="a",onBlur:B,onClick:C,onContextMenu:k,onDragLeave:K,onFocus:O,onFocusVisible:c,onKeyDown:y,onKeyUp:R,onMouseDown:U,onMouseLeave:D,onMouseUp:v,onTouchEnd:E,onTouchMove:w,onTouchStart:V,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:F,type:j,...z}=r,_=a.useRef(null),m=Je(),me=ue(m.ref,F),[L,W]=a.useState(!1);f&&L&&W(!1),a.useImperativeHandle(s,()=>({focusVisible:()=>{W(!0),_.current.focus()}}),[]);const be=m.shouldMount&&!d&&!f;a.useEffect(()=>{L&&M&&!d&&m.pulsate()},[d,M,L,m]);const ge=P(m,"start",U,h),Me=P(m,"stop",k,h),Re=P(m,"stop",K,h),ye=P(m,"stop",v,h),Ee=P(m,"stop",u=>{L&&u.preventDefault(),D&&D(u)},h),xe=P(m,"start",V,h),Ce=P(m,"stop",E,h),Te=P(m,"stop",w,h),Pe=P(m,"stop",u=>{ce(u.target)||W(!1),B&&B(u)},!1),Ie=G(u=>{_.current||(_.current=u.currentTarget),ce(u.target)&&(W(!0),c&&c(u)),O&&O(u)}),Z=()=>{const u=_.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},we=G(u=>{M&&!u.repeat&&L&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&Z()&&u.key===" "&&u.preventDefault(),y&&y(u),u.target===u.currentTarget&&Z()&&u.key==="Enter"&&!f&&(u.preventDefault(),C&&C(u))}),Ve=G(u=>{M&&u.key===" "&&L&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),R&&R(u),C&&u.target===u.currentTarget&&Z()&&u.key===" "&&!u.defaultPrevented&&C(u)});let H=l;H==="button"&&(z.href||z.to)&&(H=b);const A={};H==="button"?(A.type=j===void 0?"button":j,A.disabled=f):(!z.href&&!z.to&&(A.role="button"),f&&(A["aria-disabled"]=f));const Se=ue(n,_),re={...r,centerRipple:o,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:L},Be=ct(re);return $.jsxs(pt,{as:H,className:x(Be.root,p),ownerState:re,onBlur:Pe,onClick:C,onContextMenu:Me,onFocus:Ie,onKeyDown:we,onKeyUp:Ve,onMouseDown:ge,onMouseLeave:Ee,onMouseUp:ye,onDragLeave:Re,onTouchEnd:Ce,onTouchMove:Te,onTouchStart:xe,ref:Se,tabIndex:f?-1:T,type:j,...A,...z,children:[i,be?$.jsx(at,{ref:me,center:o,...S}):null]})});function P(e,t,n,r=!1){return G(s=>(n&&n(s),r||e[t](s),!0))}export{mt as B,oe as T,Ye as _,Xe as a,Oe as b,ht as c,ue as d,Ae as e,pe as f,ne as g,he as h,ce as i,_e as j,Ue as s,G as u};
