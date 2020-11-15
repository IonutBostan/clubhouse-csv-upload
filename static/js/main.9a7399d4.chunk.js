(this["webpackJsonpclubhouse-csv-upload"]=this["webpackJsonpclubhouse-csv-upload"]||[]).push([[0],{222:function(e,t,n){},224:function(e,t,n){},458:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(0),c=n.n(a),s=n(20),i=n.n(s),o=(n(222),n(223),n(224),n(16)),u=n.n(o),h=n(32),p=n(76),l=n(77),b=function(){function e(){Object(p.a)(this,e),this.clubhouseToken=void 0,this.headers=void 0,this.epics=void 0,this.iterations=void 0,this.milestones=void 0,this.projects=void 0,this.workflows=void 0,this.members=void 0;var t=Object({NODE_ENV:"production",PUBLIC_URL:"/clubhouse-csv-upload",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLUBHOUSE_API_TOKEN;if(!t)throw new Error("The clubhouse api token was not found in .env file");this.clubhouseToken=t,this.headers={"Content-Type":"application/json","Clubhouse-Token":this.clubhouseToken},this.epics=[],this.iterations=[],this.milestones=[],this.projects=[],this.workflows=[],this.members=[]}return Object(l.a)(e,[{key:"getRequest",value:function(){var e=Object(h.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{headers:this.headers,method:"get"});case 3:if(!0!==(null===(n=e.sent)||void 0===n?void 0:n.ok)){e.next=10;break}return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",n);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"postRequest",value:function(){var e=Object(h.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{headers:this.headers,method:"post",body:JSON.stringify(n)});case 3:if(!0!==(null===(r=e.sent)||void 0===r?void 0:r.ok)){e.next=10;break}return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",r);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getEpics",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((!(t.length>0&&void 0!==t[0])||t[0])&&!(this.epics.length<=0)){e.next=5;break}return e.next=4,this.getRequest("https://api.clubhouse.io/api/v3/epics");case 4:this.epics=e.sent;case 5:return e.abrupt("return",this.epics);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getIterations",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((!(t.length>0&&void 0!==t[0])||t[0])&&!(this.iterations.length<=0)){e.next=5;break}return e.next=4,this.getRequest("https://api.clubhouse.io/api/v3/iterations");case 4:this.iterations=e.sent;case 5:return e.abrupt("return",this.iterations);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMilestones",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((!(t.length>0&&void 0!==t[0])||t[0])&&!(this.milestones.length<=0)){e.next=5;break}return e.next=4,this.getRequest("https://api.clubhouse.io/api/v3/milestones");case 4:this.milestones=e.sent;case 5:return e.abrupt("return",this.milestones);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProjects",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((!(t.length>0&&void 0!==t[0])||t[0])&&!(this.projects.length<=0)){e.next=5;break}return e.next=4,this.getRequest("https://api.clubhouse.io/api/v3/projects");case 4:this.projects=e.sent;case 5:return e.abrupt("return",this.projects);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getWorkflows",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((!(t.length>0&&void 0!==t[0])||t[0])&&!(this.workflows.length<=0)){e.next=5;break}return e.next=4,this.getRequest("https://api.clubhouse.io/api/v3/workflows");case 4:this.workflows=e.sent;case 5:return e.abrupt("return",this.workflows);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMembers",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((!(t.length>0&&void 0!==t[0])||t[0])&&!(this.members.length<=0)){e.next=5;break}return e.next=4,this.getRequest("https://api.clubhouse.io/api/v3/members");case 4:this.members=e.sent;case 5:return e.abrupt("return",this.members);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createStories",value:function(e){return this.postRequest("https://api.clubhouse.io/api/v3/stories/bulk",{stories:e})}}]),e}(),f=function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"parseCSV",value:function(e){for(var t=[],n=e.split("\n"),r=1;r<n.length;r++)t.push(n[r].split(","));return this.CSVToArray(e).slice(1)}},{key:"CSVToArray",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=new RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),r=[[]],a=n.exec(e);a;){var c,s=a[1];s.length&&s!==t&&r.push([]),c=a[2]?a[2].replace(new RegExp('""',"g"),'"'):a[3],r[r.length-1].push(c),a=n.exec(e)}return r}}]),e}(),j=function(){function e(){Object(p.a)(this,e),this.reader=void 0,this.reader=new FileReader}return Object(l.a)(e,[{key:"getFileContent",value:function(e){var t=this;return new Promise((function(n,r){t.reader.onload=function(e){var t,r=null===(t=e.target)||void 0===t?void 0:t.result;n(r)};try{t.reader.readAsBinaryString(e)}catch(a){r(a)}}))}}]),e}(),d=c.a.createContext({clubhouseService:new b,fileService:new j,csvService:new f}),v=n(37),O=n(467),x=n(147),g=n(465),m=g.a.Title,S=g.a.Paragraph,w=function(){return Object(r.jsxs)(g.a,{children:[Object(r.jsx)(m,{children:"Clubhouse CSV Importer"}),Object(r.jsx)(S,{children:"To import a csv file to clubhouse you need to select a milestone, select an epic and after that upload a csv file with the stories"})]})},k=n(31),y=n(216),C=n(463),_=n(101),T=n.n(_),I=function(e){var t=e.dataSource,n=e.filterFunction,a=Object(y.a)(e,["dataSource","filterFunction"]),c=n?t.filter(n):t;return Object(r.jsx)(T.a,Object(k.a)(Object(k.a)({},a),{},{notFoundContent:t.length<=0?Object(r.jsx)(C.a,{size:"small"}):null,showSearch:!0,style:{width:300},filterOption:function(e,t){return(null===t||void 0===t?void 0:t.children.toLowerCase().indexOf(e.toLowerCase()))>=0},children:c.map((function(e){return Object(r.jsx)("option",{value:e.id,children:e.name},e.id)}))}))},E=function(e){var t=e.onChange,n=Object(a.useContext)(d).clubhouseService,c=Object(a.useState)([]),s=Object(v.a)(c,2),i=s[0],o=s[1],p=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getMilestones();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(I,Object(k.a)(Object(k.a)({},{onFocus:p,onChange:t}),{},{dataSource:i,placeholder:"Select a milestone"}))},R=function(e){var t=e.onChange,n=Object(a.useContext)(d).clubhouseService,c=Object(a.useState)([]),s=Object(v.a)(c,2),i=s[0],o=s[1],p=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getProjects();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(I,Object(k.a)(Object(k.a)({},{onFocus:p,onChange:t}),{},{dataSource:i,placeholder:"Select a project"}))},F=function(e){var t=e.onChange,n=e.selectedMilestoneId,c=Object(a.useContext)(d).clubhouseService,s=Object(a.useState)([]),i=Object(v.a)(s,2),o=i[0],p=i[1],l=function(){var e=Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,c.getEpics();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(I,Object(k.a)(Object(k.a)({},{onFocus:l,onChange:t,filterFunction:function(e){return e.milestone_id===n}}),{},{disabled:!n,dataSource:o,placeholder:"Select a epic"}))},P=function(e){var t=e.onChange,n=Object(a.useContext)(d).clubhouseService,c=Object(a.useState)([]),s=Object(v.a)(c,2),i=s[0],o=s[1],p=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getIterations();case 2:t=e.sent,o(t.sort((function(e,t){return e.created_at<t.created_at?1:e.created_at>t.created_at?-1:0})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(I,Object(k.a)(Object(k.a)({},{onFocus:p,onChange:t}),{},{dataSource:i,placeholder:"Select a iteration"}))},A=function(e){var t=e.onChange,n=Object(a.useContext)(d).clubhouseService,c=Object(a.useState)([]),s=Object(v.a)(c,2),i=s[0],o=s[1],p=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getMembers();case 2:t=e.sent,o(t.filter((function(e){return!e.disabled})).sort((function(e,t){return e.profile.name>t.profile.name?1:e.profile.name<t.profile.name?-1:0})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(I,Object(k.a)(Object(k.a)({},{onFocus:p,onChange:t}),{},{dataSource:i.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{name:e.profile.name})})),placeholder:"Select a project"}))},q=function(e){var t=e.onChange,n=e.projectId,c=Object(a.useContext)(d).clubhouseService,s=Object(a.useState)([]),i=Object(v.a)(s,2),o=i[0],p=i[1],l=function(){var e=Object(h.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getWorkflows();case 2:t=e.sent,n&&1===(r=t.filter((function(e){return e.project_ids.indexOf(n)>=0}))).length&&p(r[0].states);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(I,Object(k.a)(Object(k.a)({},{onFocus:l,onChange:t}),{},{dataSource:o,placeholder:"Select a state"}))},V=n(464),B=n(466),D=function(e){var t=e.onCSVDataChange,n=Object(a.useContext)(d),c=n.fileService,s=n.csvService,i=function(){var e=Object(h.a)(u.a.mark((function e(n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,c.getFileContent(n);case 3:r=e.sent,a=s.parseCSV(r),t(null===a||void 0===a?void 0:a.map((function(e){return{name:e[0],story_type:e[1],estimate:parseInt(e[2]),description:e[3]}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(V.a,{name:"file",multiple:!1,showUploadList:!1,beforeUpload:function(e){return i(e),!1},children:Object(r.jsx)(x.a,{type:"primary",icon:Object(r.jsx)(B.a,{}),children:"Upload CSV file"})})},M=n(212),U=n.n(M),L=function(e){var t=e.dataSource;return Object(r.jsx)(U.a,{dataSource:t.map((function(e,t){return Object(k.a)(Object(k.a)({},e),{},{key:t})})),columns:N,pagination:!1})},N=[{title:"Name",dataIndex:"name",key:"name"},{title:"Story type",dataIndex:"story_type",key:"story_type"},{title:"Estimation",dataIndex:"estimate",key:"estimate"},{title:"Description",dataIndex:"description",key:"description"}],W=function(){var e=Object(a.useContext)(d).clubhouseService,t=Object(a.useState)(),n=Object(v.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(),o=Object(v.a)(i,2),p=o[0],l=o[1],b=Object(a.useState)(),f=Object(v.a)(b,2),j=f[0],g=f[1],m=Object(a.useState)(),S=Object(v.a)(m,2),k=S[0],y=S[1],C=Object(a.useState)(),_=Object(v.a)(C,2),T=_[0],I=_[1],V=Object(a.useState)(),B=Object(v.a)(V,2),M=B[0],U=B[1],N=Object(a.useState)([]),W=Object(v.a)(N,2),H=W[0],K=W[1],J=Object(a.useState)(!1),z=Object(v.a)(J,2),G=z[0],Q=z[1],X=function(){var t=Object(h.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c){t.next=3;break}return console.error("Please select an project before creating stories"),t.abrupt("return");case 3:return Q(!0),n=H.map((function(e){var t=e.name,n=e.story_type,r=e.estimate,a=e.description;return{name:t,story_type:n,estimate:r,project_id:c,epic_id:k,description:a,workflow_state_id:p,iteration_id:T,requested_by_id:M}})),t.next=7,e.createStories(n);case 7:Q(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w,{}),Object(r.jsx)("div",{children:Object(r.jsxs)(O.b,{style:{marginBottom:16,marginTop:16},children:[Object(r.jsx)(R,{onChange:function(e){s(parseInt(e.toString()))}}),Object(r.jsx)(q,{onChange:function(e){l(parseInt(e.toString()))},projectId:c})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)(O.b,{style:{marginBottom:16},children:[Object(r.jsx)(E,{onChange:function(e){g(parseInt(e.toString()))}}),Object(r.jsx)(F,{onChange:function(e){y(parseInt(e.toString()))},selectedMilestoneId:j}),Object(r.jsx)(P,{onChange:function(e){I(parseInt(e.toString()))}})]})}),Object(r.jsx)("div",{children:Object(r.jsx)(O.b,{style:{marginBottom:16},children:Object(r.jsx)(A,{onChange:function(e){U(e.toString())}})})}),Object(r.jsx)("div",{style:{marginBottom:16,textAlign:"right",width:"100%"},children:Object(r.jsx)(D,{onCSVDataChange:K})}),Object(r.jsx)(L,{dataSource:H}),Object(r.jsx)("div",{style:{marginTop:16,textAlign:"right",width:"100%"},children:Object(r.jsx)(x.a,{disabled:H.length<=0,type:"primary",onClick:X,loading:G,children:"Create Stories"})})]})};var H=function(){var e={clubhouseService:new b,fileService:new j,csvService:new f};return Object(r.jsx)(d.Provider,{value:e,children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(W,{})})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root"))}},[[458,1,2]]]);
//# sourceMappingURL=main.9a7399d4.chunk.js.map