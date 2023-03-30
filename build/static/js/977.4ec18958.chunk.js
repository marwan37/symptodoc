"use strict";(self.webpackChunksymptodoc=self.webpackChunksymptodoc||[]).push([[977],{1674:function(e,t,n){var r=n(1413),s=n(8096),o=n(6048),i=n(7692),a=n(184);t.Z=function(e){var t=e.tags,n=e.updateFields,l=e.setTagValue,c=e.isNew,u=void 0===c||c;return(0,a.jsx)(s.Z,{sx:{width:"100%"},children:(0,a.jsx)(o.Z,{disablePortal:!0,autoHighlight:!0,size:"small",id:"symptom-tags",getOptionLabel:function(e){return e},value:t,options:["Constitutional/General","Eyes","Ear/Nose/Throat","Cardiovascular","Respiratory","Gastrointestinal","Genitourinary","Gynecological","Peripheral (extremities)","Hematologic/Lymphatic","Hormonal/Endocrinological","Musculoskeletal","Neurological","Psychiatric","Sexual history","Past Medical History","Skin"],renderInput:function(e){return(0,a.jsx)(i.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Organ System (tags)",sx:{fontFamily:"Poppins",color:"#36454f",marginY:"5px",fontSize:"12px"},value:t}))},onChange:function(e,t){u?n({tags:t}):l(t)},freeSolo:!0})})}},5636:function(e,t,n){function r(){return{fieldStyles:{color:"#36454F",fontFamily:"Helvetica",fontSize:"12px","&:last-child td, &:last-child th":{border:0}},headerStyles:{color:"#36454F",fontFamily:"Helvetica",fontSize:"12px",fontWeight:"bold"},sxKeys:["symptoms","associated_symptoms","minor"],sxHeaders:["Symptom","Layman terms","System","Delete"],dxKeys:["symptoms","associated_symptoms","minor"],dxHeaders:["Diagnosis","Symptoms","Associated","Minor"]}}n.d(t,{Z:function(){return r}})},7977:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(4165),s=n(1413),o=n(5861),i=n(9439),a=n(9201),l=n(184),c=(0,a.Z)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),u=n(1582),d=n(5527),m=n(9281),h=n(9836),p=n(6890),f=n(5855),x=n(3994),y=n(3382),Z=n(890),g=n(5136),j=n(6151),S=n(2791),v=n(1087),b=n(1674),k=n(9500),w=n(5636),C=function(e){var t=e.resource.read(),n=(0,S.useState)(t),a=(0,i.Z)(n,2),C=a[0],H=a[1],z=(0,S.useState)(""),F=(0,i.Z)(z,2),D=F[0],M=F[1],P=(0,S.useState)(null),_=(0,i.Z)(P,2),E=_[0],G=_[1],N=(0,S.useState)(!1),T=(0,i.Z)(N,2),V=T[0],A=T[1],L=(0,k.Z)(),K=L.deleteSymptom,O=L.updateSymptom,R=(0,w.Z)(),q=R.sxHeaders,I=R.fieldStyles,U=R.headerStyles;function W(){return(W=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("Are you sure you want to delete this symptom?")){e.next=6;break}return n=C.filter((function(e){return e.id!==t})),e.next=5,K(t);case 5:H(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={symptom:E.symptom,medical_term:E.medical_term,tags:D},e.next=4,O(E.id,n);case 4:A(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,S.useEffect)((function(){document.title="Symptoms"}),[]),(0,l.jsxs)(u.Z,{direction:"column",sx:{width:"100%",height:"100vh",backgroundColor:"#fff"},children:[(0,l.jsx)(d.Z,{sx:{width:"100%"},children:(0,l.jsx)(m.Z,{children:(0,l.jsxs)(h.Z,{size:"small","aria-label":"Requests Table",children:[(0,l.jsx)(p.Z,{children:(0,l.jsx)(f.Z,{children:q.map((function(e){return(0,l.jsx)(x.Z,{sx:U,children:"Symptom"===e?"Symptom (".concat(C.length,")"):e},e)}))})}),(0,l.jsx)(y.Z,{children:C.length>0&&C.map((function(e){return(0,l.jsxs)(f.Z,{children:[(0,l.jsx)(x.Z,{children:(0,l.jsx)(v.rU,{to:"".concat(e.id),style:{textDecoration:"none"},children:(0,l.jsx)(Z.Z,{sx:(0,s.Z)((0,s.Z)({},I),{},{cursor:"pointer","&:hover":{color:"blue"}}),children:e.medical_term})})}),(0,l.jsx)(x.Z,{children:(0,l.jsx)(Z.Z,{sx:I,children:e.symptom})}),(0,l.jsx)(x.Z,{children:(0,l.jsx)(Z.Z,{onClick:function(){return function(e){G(e),A(!0)}(e)},sx:(0,s.Z)((0,s.Z)({},I),{},{cursor:"pointer","&:hover":{color:"blue"},fontSize:"10px"}),children:e.tags?e.tags:"Add"})}),(0,l.jsx)(x.Z,{children:(0,l.jsx)(c,{onClick:function(){return function(e){return W.apply(this,arguments)}(e.id)},sx:{cursor:"pointer",fontSize:"16px","&:hover":{color:"red"}}})})]},e.id)}))})]})})}),V&&(0,l.jsx)(g.Z,{open:V,onClose:function(){return A(!1)},children:(0,l.jsxs)(u.Z,{sx:{backgroundColor:"#fff",margin:"0 auto",mt:"100px"},children:[(0,l.jsx)(b.Z,{tags:E.tags||"",setTagValue:M,isNew:!1}),(0,l.jsx)(j.Z,{onClick:function(e){return Y.apply(this,arguments)},children:"Submit"})]})})]})}}}]);
//# sourceMappingURL=977.4ec18958.chunk.js.map