import{r as f,H as v,R as T,D as k}from"./index-DrMvIKwq.js";import{_ as O,a as y,f as D,d as P,b as S,s as C}from"./CircularProgress-B5agUqRt.js";function w(r){return r&&r.ownerDocument||document}function M(r){var a;return parseInt(f.version,10)>=19?((a=r==null?void 0:r.props)==null?void 0:a.ref)||null:(r==null?void 0:r.ref)||null}const I=f.createContext(),F=()=>f.useContext(I)??!1,g={disabled:!1};var L=function(a){return a.scrollTop},m="unmounted",c="exited",d="entering",h="entered",b="exiting",p=function(r){O(a,r);function a(i,e){var t;t=r.call(this,i,e)||this;var n=e,o=n&&!n.isMounting?i.enter:i.appear,u;return t.appearStatus=null,i.in?o?(u=c,t.appearStatus=d):u=h:i.unmountOnExit||i.mountOnEnter?u=m:u=c,t.state={status:u},t.nextCallback=null,t}a.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===m?{status:c}:null};var s=a.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==h&&(t=d):(n===d||n===h)&&(t=b)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e=this.props.timeout,t,n,o;return t=n=o=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,o=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:o}},s.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===d){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&L(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:m})},s.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,u=this.props.nodeRef?[o]:[v.findDOMNode(this),o],l=u[0],x=u[1],N=this.getTimeouts(),R=o?N.appear:N.enter;if(!e&&!n||g.disabled){this.safeSetState({status:h},function(){t.props.onEntered(l)});return}this.props.onEnter(l,x),this.safeSetState({status:d},function(){t.props.onEntering(l,x),t.onTransitionEnd(R,function(){t.safeSetState({status:h},function(){t.props.onEntered(l,x)})})})},s.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||g.disabled){this.safeSetState({status:c},function(){e.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:b},function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:c},function(){e.props.onExited(o)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),o=e==null&&!this.props.addEndListener;if(!n||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],l=u[0],x=u[1];this.props.addEndListener(l,x)}e!=null&&setTimeout(this.nextCallback,e)},s.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var o=y(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return T.createElement(D.Provider,{value:null},typeof n=="function"?n(e,o):T.cloneElement(T.Children.only(n),o))},a}(T.Component);p.contextType=D;p.propTypes={};function E(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E};p.UNMOUNTED=m;p.EXITED=c;p.ENTERING=d;p.ENTERED=h;p.EXITING=b;const X=r=>r.scrollTop;function W(r,a){const{timeout:s,easing:i,style:e={}}=r;return{duration:e.transitionDuration??(typeof s=="number"?s:s[a.mode]||0),easing:e.transitionTimingFunction??(typeof i=="object"?i[a.mode]:i),delay:e.transitionDelay}}function U(r){return typeof r=="function"?r():r}const j=f.forwardRef(function(a,s){const{children:i,container:e,disablePortal:t=!1}=a,[n,o]=f.useState(null),u=P(f.isValidElement(i)?M(i):null,s);if(S(()=>{t||o(U(e)||document.body)},[e,t]),S(()=>{if(n&&!t)return C(s,n),()=>{C(s,null)}},[s,n,t]),t){if(f.isValidElement(i)){const l={ref:u};return f.cloneElement(i,l)}return i}return n&&k.createPortal(i,n)});export{j as P,p as T,M as a,L as f,W as g,w as o,X as r,F as u};
