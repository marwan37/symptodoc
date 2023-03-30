"use strict";(self.webpackChunksymptodoc=self.webpackChunksymptodoc||[]).push([[593],{2593:function(t,e,n){n.r(e);var a=n(1413),i=n(4165),r=n(5861),s=n(9439),o=n(1582),u=n(4554),c=n(8096),l=n(7692),m=n(6151),d=n(2791),p=n(7689),x=n(8914),f=n(9500),h=n(1674),y=n(184),g={symptom:"",medical_term:"",tags:""};e.default=function(){var t=(0,p.UO)().id,e=(0,d.useState)(g),n=(0,s.Z)(e,2),Z=n[0],v=n[1],j=(0,f.Z)(),w=j.addNewSymptom,S=j.updateSymptom,b=(0,x.Z)().fetchSymptom,k=(0,p.s0)();function C(){return(C=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"add"!==t){e.next=7;break}return e.next=4,w(Z);case 4:v(g),e.next=10;break;case 7:return e.next=9,S(t,Z);case 9:k(-1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(t){v((function(e){return(0,a.Z)((0,a.Z)({},e),t)}))}return(0,d.useEffect)((function(){if("add"!==t){var e=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();document.title="Edit Symptom",e()}else document.title="Add Symptom"}),[]),(0,y.jsx)("form",{onSubmit:function(t){return C.apply(this,arguments)},children:(0,y.jsxs)(o.Z,{spacing:2,sx:{justifyContent:"center",alignItems:"center",mt:"20px"},children:[(0,y.jsx)(u.Z,{sx:{width:"90%",margin:"0 auto"},children:(0,y.jsx)(c.Z,{sx:{width:"100%"},children:(0,y.jsx)(l.Z,{value:Z.symptom,size:"small",label:"Symptom",id:"symptom",onChange:function(t){return E({symptom:t.target.value})}})})}),(0,y.jsx)(u.Z,{sx:{width:"90%",margin:"0 auto"},children:(0,y.jsx)(c.Z,{sx:{width:"100%"},children:(0,y.jsx)(l.Z,{value:Z.medical_term,size:"small",label:"Medical Term",id:"medical-term",onChange:function(t){return E({medical_term:t.target.value})}})})}),(0,y.jsx)(u.Z,{sx:{width:"90%",margin:"0 auto"},children:(0,y.jsx)(h.Z,{tags:Z.tags,updateFields:E})}),(0,y.jsx)(c.Z,{sx:{margin:"30px auto"},children:(0,y.jsx)(m.Z,{variant:"contained",type:"submit",sx:{width:"200px"},children:"add"===t?"Add Symptom":"Update Symptom"})})]})})}},1674:function(t,e,n){var a=n(1413),i=n(8096),r=n(6048),s=n(7692),o=n(184);e.Z=function(t){var e=t.tags,n=t.updateFields,u=t.setTagValue,c=t.isNew,l=void 0===c||c;return(0,o.jsx)(i.Z,{sx:{width:"100%"},children:(0,o.jsx)(r.Z,{disablePortal:!0,autoHighlight:!0,size:"small",id:"symptom-tags",getOptionLabel:function(t){return t},value:e,options:["Constitutional/General","Eyes","Ear/Nose/Throat","Cardiovascular","Respiratory","Gastrointestinal","Genitourinary","Gynecological","Peripheral (extremities)","Hematologic/Lymphatic","Hormonal/Endocrinological","Musculoskeletal","Neurological","Psychiatric","Sexual history","Past Medical History","Skin"],renderInput:function(t){return(0,o.jsx)(s.Z,(0,a.Z)((0,a.Z)({},t),{},{label:"Organ System (tags)",sx:{fontFamily:"Poppins",color:"#36454f",marginY:"5px",fontSize:"12px"},value:e}))},onChange:function(t,e){l?n({tags:e}):u(e)},freeSolo:!0})})}}}]);
//# sourceMappingURL=593.97c06af3.chunk.js.map