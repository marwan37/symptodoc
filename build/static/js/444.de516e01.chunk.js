"use strict";(self.webpackChunksymptodoc=self.webpackChunksymptodoc||[]).push([[444],{1444:function(e,t,o){o.r(t),o.d(t,{default:function(){return U}});var a=o(1413),r=o(4165),i=o(5861),n=o(9439),s=o(1582),d=o(4554),l=o(8096),c=o(7692),u=o(6151),p=o(2791),g=o(4942),m=o(3366),v=o(7462),f=(o(8457),o(8182)),h=o(4419),b=o(6934),Z=o(1402),x=o(4036);function y(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var R=o(5878),w=o(1217);function z(e){return(0,w.Z)("MuiToggleButtonGroup",e)}var C=(0,R.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),j=o(184),S=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],T=(0,b.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,g.Z)({},"& .".concat(C.grouped),t.grouped),(0,g.Z)({},"& .".concat(C.grouped),t["grouped".concat((0,x.Z)(o.orientation))]),t.root,"vertical"===o.orientation&&t.vertical,o.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,o=e.theme;return(0,v.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,g.Z)({},"& .".concat(C.grouped),(0,v.Z)({},"horizontal"===t.orientation?(0,g.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(C.selected," + .").concat(C.grouped,".").concat(C.selected),{borderLeft:0,marginLeft:0}):(0,g.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(C.selected," + .").concat(C.grouped,".").concat(C.selected),{borderTop:0,marginTop:0}))))})),k=p.forwardRef((function(e,t){var o=(0,Z.Z)({props:e,name:"MuiToggleButtonGroup"}),a=o.children,r=o.className,i=o.color,n=void 0===i?"standard":i,s=o.disabled,d=void 0!==s&&s,l=o.exclusive,c=void 0!==l&&l,u=o.fullWidth,g=void 0!==u&&u,b=o.onChange,R=o.orientation,w=void 0===R?"horizontal":R,C=o.size,k=void 0===C?"medium":C,W=o.value,B=(0,m.Z)(o,S),O=(0,v.Z)({},o,{disabled:d,fullWidth:g,orientation:w,size:k}),F=function(e){var t=e.classes,o=e.orientation,a=e.fullWidth,r=e.disabled,i={root:["root","vertical"===o&&"vertical",a&&"fullWidth"],grouped:["grouped","grouped".concat((0,x.Z)(o)),r&&"disabled"]};return(0,h.Z)(i,z,t)}(O),D=function(e,t){if(b){var o,a=W&&W.indexOf(t);W&&a>=0?(o=W.slice()).splice(a,1):o=W?W.concat(t):[t],b(e,o)}},M=function(e,t){b&&b(e,W===t?null:t)};return(0,j.jsx)(T,(0,v.Z)({role:"group",className:(0,f.Z)(F.root,r),ref:t,ownerState:O},B,{children:p.Children.map(a,(function(e){return p.isValidElement(e)?p.cloneElement(e,{className:(0,f.Z)(F.grouped,e.props.className),onChange:c?M:D,selected:void 0===e.props.selected?y(e.props.value,W):e.props.selected,size:e.props.size||k,fullWidth:g,color:e.props.color||n,disabled:e.props.disabled||d}):null}))}))})),W=o(2065),B=o(637);function O(e){return(0,w.Z)("MuiToggleButton",e)}var F=(0,R.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),D=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],M=(0,b.ZP)(B.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["size".concat((0,x.Z)(o.size))]]}})((function(e){var t,o,a=e.theme,r=e.ownerState,i="standard"===r.color?a.palette.text.primary:a.palette[r.color].main;return a.vars&&(i="standard"===r.color?a.vars.palette.text.primary:a.vars.palette[r.color].main,o="standard"===r.color?a.vars.palette.text.primaryChannel:a.vars.palette[r.color].mainChannel),(0,v.Z)({},a.typography.button,{borderRadius:(a.vars||a).shape.borderRadius,padding:11,border:"1px solid ".concat((a.vars||a).palette.divider),color:(a.vars||a).palette.action.active},r.fullWidth&&{width:"100%"},(t={},(0,g.Z)(t,"&.".concat(F.disabled),{color:(a.vars||a).palette.action.disabled,border:"1px solid ".concat((a.vars||a).palette.action.disabledBackground)}),(0,g.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,W.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,g.Z)(t,"&.".concat(F.selected),{color:i,backgroundColor:a.vars?"rgba(".concat(o," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,W.Fq)(i,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(o," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,W.Fq)(i,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(o," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,W.Fq)(i,a.palette.action.selectedOpacity)}}}),t),"small"===r.size&&{padding:7,fontSize:a.typography.pxToRem(13)},"large"===r.size&&{padding:15,fontSize:a.typography.pxToRem(15)})})),L=p.forwardRef((function(e,t){var o=(0,Z.Z)({props:e,name:"MuiToggleButton"}),a=o.children,r=o.className,i=o.color,n=void 0===i?"standard":i,s=o.disabled,d=void 0!==s&&s,l=o.disableFocusRipple,c=void 0!==l&&l,u=o.fullWidth,p=void 0!==u&&u,g=o.onChange,b=o.onClick,y=o.selected,R=o.size,w=void 0===R?"medium":R,z=o.value,C=(0,m.Z)(o,D),S=(0,v.Z)({},o,{color:n,disabled:d,disableFocusRipple:c,fullWidth:p,size:w}),T=function(e){var t=e.classes,o=e.fullWidth,a=e.selected,r=e.disabled,i=e.size,n=e.color,s={root:["root",a&&"selected",r&&"disabled",o&&"fullWidth","size".concat((0,x.Z)(i)),n]};return(0,h.Z)(s,O,t)}(S);return(0,j.jsx)(M,(0,v.Z)({className:(0,f.Z)(T.root,r),disabled:d,focusRipple:!c,ref:t,onClick:function(e){b&&(b(e,z),e.defaultPrevented)||g&&g(e,z)},onChange:g,value:z,ownerState:S,"aria-pressed":y},C,{children:a}))})),N=function(e){var t=e.tags,o=e.updateFields;var r={value:t,onChange:function(e,t){o({tags:t})},exclusive:!0};return(0,j.jsx)(d.Z,{sx:{width:"100%",margin:"0 auto",my:"10px"},children:(0,j.jsx)(l.Z,{sx:{width:"80%"},children:(0,j.jsx)(k,(0,a.Z)((0,a.Z)({},r),{},{"aria-label":"Tags",children:["general","heent","cvs","resp","gi","gu","msk","neuro","obgyn","endo","blood","psych","onco"].map((function(e){return(0,j.jsx)(L,{value:e,sx:{height:"3.3vh",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px;"},children:e},e)}))}))})})},A=o(8745),E=o(8914),q=o(9500),G=o(7689),P={diagnosis:"",age:[0,100],tags:"gu",symptoms:[],associated_symptoms:[],minor:[]},U=function(e){var t=e.resource.read(),o=(0,G.UO)().id;document.title="add"===o?"Add Diagnosis":"Edit Diagnosis";var g=(0,G.s0)(),m=(0,E.Z)().fetchDiagnosis,v=(0,q.Z)(),f=v.addNewDiagnosis,h=v.updateDiagnosis,b=(0,p.useState)(P),Z=(0,n.Z)(b,2),x=Z[0],y=Z[1],R=(0,p.useState)(!1),w=(0,n.Z)(R,2),z=w[0],C=w[1];function S(){return(S=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"add"!==o){e.next=7;break}return e.next=4,f(x);case 4:C(!0),e.next=10;break;case 7:return e.next=9,h(o,x);case 9:g("/diagnoses");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){y((function(t){return(0,a.Z)((0,a.Z)({},t),e)}))}return(0,p.useEffect)((function(){z&&(y(P),C(!1))}),[z]),(0,p.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(o);case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"add"!==o&&function(){e.apply(this,arguments)}()}),[]),(0,j.jsx)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:(0,j.jsxs)(s.Z,{spacing:2,sx:{justifyContent:"center",alignItems:"center"},children:[(0,j.jsx)(N,{tags:x.tags,updateFields:T}),(0,j.jsx)(d.Z,{sx:{width:"90%",margin:"0 auto"},children:(0,j.jsx)(l.Z,{sx:{width:"100%"},children:(0,j.jsx)(c.Z,{value:x.diagnosis,size:"small",label:"Diagnosis",id:"diagnosis",onChange:function(e){return T({diagnosis:e.target.value})}})})}),(0,j.jsx)(A.Z,{symptoms:x.symptoms,jsonSymptoms:t,updateFields:T,label:"Symptoms",id:"symptoms",didSubmit:z}),(0,j.jsx)(A.Z,{symptoms:x.associated_symptoms,jsonSymptoms:t,updateFields:T,label:"Associated Symptoms",id:"associated-symptoms",didSubmit:z}),(0,j.jsx)(A.Z,{symptoms:x.minor,jsonSymptoms:t,updateFields:T,label:"Minor",id:"minor-symptoms",didSubmit:z}),(0,j.jsx)(l.Z,{sx:{margin:"30px auto"},children:(0,j.jsx)(u.Z,{variant:"contained",type:"submit",sx:{width:"200px"},children:"add"===o?"Add Diagnosis":"Update Diagnosis"})})]})})}}}]);
//# sourceMappingURL=444.de516e01.chunk.js.map