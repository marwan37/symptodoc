"use strict";(self.webpackChunksymptodoc_ui=self.webpackChunksymptodoc_ui||[]).push([[988],{7988:function(t,n,e){e.r(n),e.d(n,{default:function(){return j}});var s=e(1413),o=e(4165),r=e(5861),i=e(9439),a=e(1582),c=e(4554),u=e(8096),p=e(4280),l=e(6151),m=e(2791),d=e(3238),f=e(388),h=e(184),g=function(t){var n=t.tags,e=t.updateFields;var o={value:n,onChange:function(t,n){e({tags:n})},exclusive:!0};return(0,h.jsx)(c.Z,{sx:{width:"100%",margin:"0 auto",my:"10px"},children:(0,h.jsx)(u.Z,{sx:{width:"80%"},children:(0,h.jsx)(d.Z,(0,s.Z)((0,s.Z)({},o),{},{"aria-label":"Tags",children:["general","heent","cvs","resp","gi","gu","msk","neuro","obgyn","endo","blood","psych","onco"].map((function(t){return(0,h.jsx)(f.Z,{value:t,sx:{height:"3.3vh",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px;"},children:t},t)}))}))})})},x=e(1942),y=function(t){var n=t.symptoms,e=t.symptomList,o=t.jsonSymptoms,r=t.updateFields,a=t.id,c=t.label,l=t.didSubmit,d=(0,m.useState)(!1),f=(0,i.Z)(d,2),g=f[0],y=f[1],Z=(0,m.useState)([]),v=(0,i.Z)(Z,2),w=v[0],D=v[1];return(0,m.useEffect)((function(){l&&D([])}),[l]),(0,h.jsx)(u.Z,{sx:{width:"90%"},children:(0,h.jsx)(x.Z,{disablePortal:!0,autoHighlight:!0,size:"small",id:a,getOptionLabel:function(t){return t},value:g?w:n.map((function(t){return t.medical_term})),options:e,renderInput:function(t){return(0,h.jsx)(p.Z,(0,s.Z)((0,s.Z)({},t),{},{label:c,sx:{fontFamily:"Poppins",color:"#36454f",marginY:"5px",fontSize:"12px"},value:g?w:n.map((function(t){return t.medical_term}))}))},multiple:!0,onChange:function(t,n){y(!0),D(n);var e=n.map((function(t){return o.find((function(n){return n.medical_term===t}))}));r("symptoms"===a?{symptoms:e}:"associated-symptoms"===a?{associated_symptoms:e}:{minor:e})},freeSolo:!0})})},Z=e(8914),v=e(9500),w=e(7689),D={diagnosis:"",age:[0,100],tags:"msk",symptoms:[],associated_symptoms:[],minor:[]},j=function(t){var n,e=t.resource,d=t.id,f=e.read(),x=(n=f,Object.values(n).flatMap((function(t){return Object.values(t)}))),j=x.map((function(t){return t.medical_term})).sort();document.title="add"===d?"Add Diagnosis":"Edit Diagnosis";var b=(0,w.s0)(),S=(0,Z.Z)().fetchDiagnosis,k=(0,v.Z)(),E=k.addNewDiagnosis,_=k.updateDiagnosis,A=(0,m.useState)(D),F=(0,i.Z)(A,2),C=F[0],L=F[1],P=(0,m.useState)(!1),T=(0,i.Z)(P,2),z=T[0],N=T[1];function O(){return(O=(0,r.Z)((0,o.Z)().mark((function t(n){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"add"!==d){t.next=8;break}return console.log(C),t.next=5,E(C);case 5:N(!0),t.next=11;break;case 8:return t.next=10,_(d,C);case 10:b("/diagnoses");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(t){L((function(n){return(0,s.Z)((0,s.Z)({},n),t)}))}return(0,m.useEffect)((function(){z&&(L(D),N(!1))}),[z]),(0,m.useEffect)((function(){function t(){return(t=(0,r.Z)((0,o.Z)().mark((function t(){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(d);case 2:n=t.sent,L(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}"add"!==d&&function(){t.apply(this,arguments)}()}),[]),(0,h.jsx)("form",{onSubmit:function(t){return O.apply(this,arguments)},children:(0,h.jsxs)(a.Z,{spacing:2,sx:{justifyContent:"center",alignItems:"center"},children:[(0,h.jsx)(c.Z,{sx:{width:"90%",margin:"0 auto"},children:(0,h.jsx)(g,{tags:C.tags,updateFields:U})}),(0,h.jsx)(c.Z,{sx:{width:"90%",margin:"0 auto"},children:(0,h.jsx)(u.Z,{sx:{width:"100%"},children:(0,h.jsx)(p.Z,{value:C.diagnosis,size:"small",label:"Diagnosis",id:"diagnosis",onChange:function(t){return U({diagnosis:t.target.value})}})})}),(0,h.jsx)(y,{symptoms:C.symptoms,symptomList:j,jsonSymptoms:x,updateFields:U,label:"Symptoms",id:"symptoms",didSubmit:z}),(0,h.jsx)(y,{symptoms:C.associated_symptoms,jsonSymptoms:x,symptomList:j,updateFields:U,label:"Associated Symptoms",id:"associated-symptoms",didSubmit:z}),(0,h.jsx)(y,{symptoms:C.minor,jsonSymptoms:x,symptomList:j,updateFields:U,label:"Minor",id:"minor-symptoms",didSubmit:z}),(0,h.jsx)(u.Z,{sx:{margin:"30px auto"},children:(0,h.jsx)(l.Z,{variant:"contained",type:"submit",sx:{width:"200px"},children:"add"===d?"Add Diagnosis":"Update Diagnosis"})})]})})}},9500:function(t,n,e){e.d(n,{Z:function(){return a}});var s=e(4165),o=e(5861),r=e(1243),i="http://192.241.132.27:3007";function a(){function t(){return(t=(0,o.Z)((0,s.Z)().mark((function t(n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.post(i+i+"/api/diagnoses",n).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}));case 2:alert("ADDED Diagnosis.");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=(0,o.Z)((0,s.Z)().mark((function t(n,e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.patch(i+"/api/diagnoses/".concat(n),e).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}));case 2:alert("UPDATED Diagnosis.");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function e(){return(e=(0,o.Z)((0,s.Z)().mark((function t(n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.delete(i+"/api/diagnosis/".concat(n)).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}));case 2:alert("DELETED Diagnosis.");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=(0,o.Z)((0,s.Z)().mark((function t(n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.post(i+"/api/symptoms",n).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}));case 2:alert("ADDED Symptom.");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return(c=(0,o.Z)((0,s.Z)().mark((function t(n,e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.patch(i+"/api/symptoms/".concat(n),e).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}));case 2:alert("UPDATED Symptom.");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=(0,o.Z)((0,s.Z)().mark((function t(n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.delete(i+"/api/symptoms/".concat(n)).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{addNewDiagnosis:function(n){return t.apply(this,arguments)},updateDiagnosis:function(t,e){return n.apply(this,arguments)},deleteDiagnosis:function(t){return e.apply(this,arguments)},addNewSymptom:function(t){return a.apply(this,arguments)},updateSymptom:function(t,n){return c.apply(this,arguments)},deleteSymptom:function(t){return u.apply(this,arguments)}}}}}]);
//# sourceMappingURL=988.73076e36.chunk.js.map