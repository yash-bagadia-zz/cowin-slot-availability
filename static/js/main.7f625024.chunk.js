(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{214:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(22),r=n.n(i),s=n(100),l=n.n(s),o=n(153),d=n(147),j=n(31),u=(n(214),n(215),n(202)),b=n(46),h=n(322),p=n(319),O=n(323),x=n(133),f=n(98),v=n(126),m=n(50),g=n(320),y=n(316),_=n(196),k=n(59),I=n(324),C=n(321),w=n(4),D=function(e,t,n){return e.length?e.map((function(e){return Object(w.jsx)(C.a,{color:"#108ee9",closable:!0,onClose:function(){return t(e)},children:n?e.district_name:e},n?e.district_id:e)})):Object(w.jsx)("span",{style:{opacity:"0.5",userSelect:"none"},children:"Add a pincode or select a district. You can add multiple."})},S=function(e){var t=e.items,n=void 0===t?[]:t,a=e.itemRemoved,c=e.allItemsRemoved,i=e.visible,r=e.isDistrict;return i?Object(w.jsxs)("div",{className:"simple-border","data-tour":"display-filter",children:[Object(w.jsx)(I.a,{style:{marginRight:"0.5rem"},type:"filter"}),D(n,a,r),n.length>1&&Object(w.jsx)(m.a,{danger:!0,onClick:c,children:"Clear All"})]}):null},P=n(317),A=n(318),E=n(140),T=n.n(E),V=n(30),N=n.n(V),F=A.a.Title,G=new Audio("https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3");function R(e,t){var n=new Date(Number(e));return n.setDate(e.getDate()+t),n}var B="Public",L="Private",M=[{label:"Covishield",value:"COVISHIELD"},{label:"Covaxin",value:"COVAXIN"},{label:"Sputnik V",value:"SPUTNIK V"}],H=[{label:"Free",value:"Free"},{label:"Paid",value:"Paid"}],U=[{title:"Center",dataIndex:"name",key:"name"},{title:"District",dataIndex:"district_name",key:"district_name"},{title:"Pincode",dataIndex:"pincode",key:"pincode"},{title:"Date",dataIndex:"date",key:"date"},{title:"Address",dataIndex:"address",key:"address"},{title:"Slots Avalilable",dataIndex:"available_capacity",key:"available_capacity"},{title:"Dose",dataIndex:"dose",key:"dose"},{title:"Min Age Limit",dataIndex:"min_age_limit",key:"min_age_limit"},{title:"Vaccine",dataIndex:"vaccine",key:"vaccine"},{title:"Fee type",dataIndex:"fee_type",key:"fee_type"}],Y=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function J(){var e=N()(1),t=Object(j.a)(e,3),n=t[0],a=t[1],i=t[2],r=N()(18),s=Object(j.a)(r,3),I=s[0],C=s[1],D=s[2],A=N()(1),E=Object(j.a)(A,3),V=E[0],J=E[1],K=E[2],W=N()(""),X=Object(j.a)(W,2),q=X[0],z=X[1],Q=N()(1),Z=Object(j.a)(Q,3),$=(Z[0],Z[1]),ee=Z[2],te=N()(1),ne=Object(j.a)(te,3),ae=ne[0],ce=ne[1],ie=ne[2],re=N()(!1),se=Object(j.a)(re,3),le=se[0],oe=se[1],de=(se[2],N()(["COVAXIN","COVISHIELD","SPUTNIK V"])),je=Object(j.a)(de,3),ue=je[0],be=je[1],he=je[2],pe=N()(["Free","Paid"]),Oe=Object(j.a)(pe,3),xe=Oe[0],fe=Oe[1],ve=Oe[2],me=N()(B),ge=Object(j.a)(me,3),ye=ge[0],_e=ge[1],ke=ge[2],Ie=N()({state_id:"0",state_name:"Select State"}),Ce=Object(j.a)(Ie,2),we=Ce[0],De=Ce[1],Se=N()([]),Pe=Object(j.a)(Se,2),Ae=Pe[0],Ee=Pe[1],Te=N()([]),Ve=Object(j.a)(Te,3),Ne=Ve[0],Fe=Ve[1],Ge=Ve[2],Re=N()([]),Be=Object(j.a)(Re,3),Le=Be[0],Me=Be[1],He=Be[2],Ue=N()([]),Ye=Object(j.a)(Ue,2),Je=Ye[0],Ke=Ye[1],We=N()([]),Xe=Object(j.a)(We,2),qe=Xe[0],ze=Xe[1],Qe=N()(1),Ze=Object(j.a)(Qe,3),$e=Ze[0],et=Ze[1],tt=Ze[2];function nt(){return at.apply(this,arguments)}function at(){return(at=Object(d.a)(l.a.mark((function e(){var t,n,a,c,r,s,o,d,j,b,h,p,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=2===i.current,n=ke.current===B,a=[],c=new Date,r="https://cdn-api.co-vin.in/api/v2/appointment/sessions/".concat(n?"public/":"","calendarByDistrict?district_id="),s="https://cdn-api.co-vin.in/api/v2/appointment/sessions/".concat(n?"public/":"","calendarByPin?pincode="),o=[],t?o=He.current:(o=[],Ge.current.forEach((function(e){o.push(e.district_id)}))),d=ve.current,j=he.current,b=0;b<ie.current;b++)for(h=R(c,7*b).toLocaleDateString().replaceAll("/","-"),p=function(e){var n="",c=o[e].trim();n=t&&c?s+c:r+c,n+="&date="+h,T.a.get(n).then((function(e){u.b.destroy();var n=e.data,i=1;n.centers.forEach((function(e){e&&e.sessions&&-1!==d.indexOf(e.fee_type)&&e.sessions.forEach((function(n){if(n.min_age_limit===D.current&&(1===K.current&&n.available_capacity_dose1>=tt.current||2===K.current&&n.available_capacity_dose2>=tt.current)&&-1!==j.indexOf(n.vaccine)){G.play();var r={key:e.name+i,name:e.name,address:e.address,fee_type:e.fee_type,min_age_limit:n.min_age_limit,available_capacity:n.available_capacity,date:n.date,vaccine:n.vaccine,district_name:e.district_name,pincode:e.pincode,dose:K.current};a.push(r),i++,console.log((t?"Pincode":"District")+": "+c+"---\x3e>Centre: "+e.name+"-----\x3e>>>---Date: "+n.date+"----\x3e>>> "+n.available_capacity)}}))})),a.length>0&&ze(a)})).catch((function(e){u.b.destroy(),u.b.error("If this message is appearing continuously then something is wrong. \n Please reload the application and then try again or login to Cowin once in the browser and then try again. If the problem persists then contact the Developer - Yash Bagadia"),console.log(e)}))},O=0;O<o.length;O++)p(O);if(!(1e3*ee.current>500)){e.next=15;break}return e.next=14,Y(1e3*ee.current);case 14:nt();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ct(){return it.apply(this,arguments)}function it(){return(it=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ze([]),e.next=3,Y(1e4);case 3:ct();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.a.useEffect((function(){T.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(e){var t=e.data.states;Ee(t)})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){T.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+we.state_id).then((function(e){var t=e.data.districts;Ke(t)})).catch((function(e){console.log(e)}))}),[we]);var rt=Object(w.jsx)(b.a,{onClick:function(e){De({state_id:e.key,state_name:e.item.node.innerText})},children:Ae.map((function(e){return Object(w.jsx)(b.a.Item,{children:e.state_name},e.state_id)}))}),st=Object(w.jsx)(b.a,{onClick:function(e){var t=Object(o.a)(Ne);t.find((function(t){return t.district_id===e.key}))||(t.push({district_id:e.key,district_name:e.item.node.innerText}),Fe(t))},children:Je.map((function(e){return Object(w.jsx)(b.a.Item,{children:e.district_name},e.district_id)}))}),lt=Object(w.jsx)(c.a.Fragment,{children:Object(w.jsx)(S,{items:1===n?Ne:Le,visible:!0,isDistrict:1===n,itemRemoved:1===n?function(e){var t=Ne.filter((function(t){return t.district_id!==e.district_id}));Fe(t)}:function(e){var t=Le.filter((function(t){return t!==e}));Me(t)},allItemsRemoved:function(){1===n?Fe([]):Me([])}})});return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(F,{children:"Cowin Vaccine Slot Monitor"}),Object(w.jsx)(h.a,{justify:"center",children:Object(w.jsx)(p.a,{title:"How?",subTitle:"Start searching as per your criteria, once slot is available meeting  your criterias, an alarm beep sound will come and slots will be rendered on the UI below. Please keep your system unmute."})}),Object(w.jsxs)(h.a,{justify:"center",gutter:24,children:[Object(w.jsx)(O.a,{children:Object(w.jsx)(F,{level:5,children:"Enter no. of slots required for notification"})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(P.a,{min:0,max:100,value:$e,onChange:function(e){et(e)}})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(F,{level:5,children:"Minimum Age"})}),Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a.Group,{onChange:function(e){C(e.target.value)},value:I,children:[Object(w.jsx)(x.a,{value:18,children:"18+"}),Object(w.jsx)(x.a,{value:45,children:"45+"})]})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(F,{level:5,children:"Which Dose?"})}),Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a.Group,{onChange:function(e){J(e.target.value)},value:V,children:[Object(w.jsx)(x.a,{value:1,children:"Dose 1"}),Object(w.jsx)(x.a,{value:2,children:"Dose 2"})]})})]}),Object(w.jsxs)(h.a,{justify:"center",gutter:24,children:[Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a.Group,{onChange:function(e){a(e.target.value)},value:n,children:[Object(w.jsx)(x.a,{value:1,children:"Search by District"}),Object(w.jsx)(x.a,{value:2,children:"Search by Pincode"})]})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(f.a.Group,{options:M,value:ue,onChange:be})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(f.a.Group,{options:H,value:xe,onChange:fe})})]}),Object(w.jsxs)(h.a,{justify:"center",gutter:24,children:[1===n?Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)(O.a,{children:Object(w.jsx)(v.a,{overlay:rt,trigger:["click"],children:Object(w.jsxs)(m.a,{children:[we.state_name," ",Object(w.jsx)(k.a,{})]})})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(v.a,{overlay:st,trigger:["click"],children:Object(w.jsxs)(m.a,{children:["Select District ",Object(w.jsx)(k.a,{})]})})})]}):Object(w.jsx)(c.a.Fragment,{children:Object(w.jsx)(O.a,{span:12,children:Object(w.jsx)(g.a,{placeholder:"Type a pincode and then press Enter",onPressEnter:function(e){var t=Object(o.a)(Le);t.find((function(t){return t===e.target.value}))||(t.push(e.target.value),Me(t),z(""))},onChange:function(e){z(e.target.value)},value:q})})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(F,{level:5,children:"No. of weeks to search for"})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(P.a,{min:1,max:4,value:ae,onChange:function(e){ce(e)}})})]}),Object(w.jsx)(h.a,{justify:"center",gutter:24,children:lt}),Object(w.jsxs)(h.a,{justify:"center",gutter:24,children:[Object(w.jsx)(O.a,{children:Object(w.jsx)(F,{level:5,children:"API Type: (Whatever works for You! Prefer Private if works)"})}),Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a.Group,{onChange:function(e){_e(e.target.value)},value:ye,children:[Object(w.jsx)(x.a,{value:B,children:B}),Object(w.jsx)(x.a,{value:L,children:L})]})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(m.a,{disabled:2===n&&0===Le.length||1===n&&0===Ne.length,onClick:function(){le?($(0),ze([]),oe(!1)):($(0),$(1),nt(),ct(),oe(!0),G.play())},type:le?"danger":"primary",children:le?"Stop Searching":"Start Searching"})})]}),Object(w.jsx)(h.a,{justify:"center",children:qe.length>0||!le?Object(w.jsx)(y.a,{dataSource:qe,columns:U}):Object(w.jsx)(_.a,{size:"large"})})]})}var K=document.getElementById("root");r.a.render(Object(w.jsx)(a.StrictMode,{children:Object(w.jsx)(J,{})}),K)}},[[314,1,2]]]);
//# sourceMappingURL=main.7f625024.chunk.js.map