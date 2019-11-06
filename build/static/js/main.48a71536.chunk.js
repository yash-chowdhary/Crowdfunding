(this["webpackJsonpcrowdfunding-app"]=this["webpackJsonpcrowdfunding-app"]||[]).push([[0],{108:function(e,t,a){e.exports=a(162)},113:function(e,t,a){},114:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},115:function(e,t,a){},133:function(e,t,a){},155:function(e,t,a){},158:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=a(8),s=a(31),i=(a(113),a(114),a(115),a(24)),m=a(10),u=a(14),p=a(16),d=a(15),h=a(17),g=a(6),f=a.n(g),v=a(175),E=a(172),j=a(104),y=a(96),b=a(177),k=a(166),w=(a(133),a(165)),O=a(58),C=a(173),D=a(101),S=a(94),T=a.n(S),P=a(73),x=a.n(P);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var I=function e(){var t=this;Object(m.a)(this,e),this.login=function(e,a){var n={email:e,password:a};return f.a.post("http://localhost:3003/api/v1/login",n).then((function(e){return console.log(e),t.setToken(e.data.token),Promise.resolve(e)}))},this.loggedIn=function(){var e=t.getToken();return!!e&&!t.isTokenExpired(e)},this.isTokenExpired=function(e){try{return x()(e).exp<Date.now()/1e3}catch(t){return console.log("expired check failed! Line 42: AuthService.js"),!1}},this.setToken=function(e){localStorage.setItem("id_token",e)},this.getToken=function(){return localStorage.getItem("id_token")},this.logout=function(){localStorage.removeItem("id_token")},this.getTokenData=function(){var e=x()(t.getToken());return console.log("Recieved answer!"),e},this.fetch=function(e,a){var n={Accept:"application/json","Content-Type":"application/json"};return t.loggedIn()&&(n.Authorization="Bearer "+t.getToken()),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({headers:n},a)).then(t._checkStatus).then((function(e){return e.json()}))},this._checkStatus=function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).logout=function(){a.Auth.logout(),window.location.reload()},a.redirectToProfile=function(){var e=a.Auth.getTokenData();a.props.history.push({pathname:"/profile/".concat(e.username)})},a.loginArea=function(){if(null===a.token)return r.a.createElement("div",{className:"login"},r.a.createElement(c.b,{to:"/login"},r.a.createElement(y.a,{variant:"outline-secondary"},"Login")),"\xa0 \xa0",r.a.createElement(c.b,{to:"/signup"},r.a.createElement(y.a,{variant:"outline-secondary"},"Sign Up")));var e=a.Auth.getTokenData();return console.log(e),r.a.createElement(w.a,{id:"dropdown-basic-button",title:e.name,variant:"secondary"},r.a.createElement(O.a.Item,{onClick:a.redirectToProfile},"Profile"),r.a.createElement(O.a.Divider,null),r.a.createElement(O.a.Item,{onClick:a.logout},r.a.createElement("p",{style:{color:"red",marginBottom:"0px"}},"Logout")))},a.Auth=new I,a.token=a.Auth.getToken(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{bg:"dark",expand:"lg",variant:"dark",sticky:"top"},r.a.createElement(C.a.Brand,{href:"/"},r.a.createElement("img",{src:T.a,alt:"FundIt Logo",style:{width:120,height:37}})),r.a.createElement(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(C.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(D.a,{className:"mr-auto"},r.a.createElement(D.a.Link,{href:"/explore"},"Explore"),r.a.createElement(D.a.Link,{href:"/start"},"Start a Project")),this.loginArea()))}}]),t}(n.Component),U=Object(s.f)(N),L=a(44),B=a.n(L),F=a(51),M=a.n(F),Y=a(52),G=a.n(Y),$=[B.a,M.a,G.a],J=function(e){var t=e.color;return r.a.createElement("hr",{style:{color:t,backgroundColor:t,height:.1}})},R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleUserInput=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;console.log("output: ".concat(t," ").concat(n)),a.setState(Object(i.a)({},t,n))},a.submitSearch=function(){var e=a.state.search;a.props.history.push({pathname:"/explore",state:{searchString:e}})},a.renderCarousel=function(e){console.log("rendering carousel"),console.log(e.length);var t=e.map((function(e,t){var a=Math.floor(3*Math.random());return console.log(a),r.a.createElement(v.a.Item,{key:t},r.a.createElement(c.b,{to:"/projects/".concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname)},r.a.createElement("img",{src:$[a],alt:"img",style:{width:850,height:500}}),r.a.createElement(v.a.Caption,null,r.a.createElement("h3",null,e.projname),r.a.createElement("p",null,e.description))))}));return r.a.createElement(v.a,null,t)},a.state={featuredProjects:[],search:"",validSearch:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:3003/api/v1/getFeaturedProjects").then((function(t){var a=t.data;console.log(a),e.setState({featuredProjects:a})}))}},{key:"componentDidUpdate",value:function(e,t){if(console.log(this.state),JSON.stringify(t)!==JSON.stringify(this.state)){var a=!(""===this.state.search);this.setState({validSearch:a})}}},{key:"render",value:function(){var e=this,t=this.state.featuredProjects;return r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"10px"}},r.a.createElement(E.a,{inline:!0,style:{textAlign:"center"},onSubmit:this.submitSearch},r.a.createElement(j.a,{type:"text",placeholder:"Search",name:"search",className:"mr-sm-2",onChange:function(t){return e.handleUserInput(t)}}),r.a.createElement(y.a,{variant:"outline-success",type:"submit",disabled:!this.state.validSearch},"Search"))),r.a.createElement(J,{color:"gray"}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"}},r.a.createElement(b.a,{key:"right",placement:"right",overlay:r.a.createElement(k.a,{id:"tooltip-right"},"Projects that have been funded the most")},r.a.createElement("p",{style:{color:"gray",fontFamily:"sans-serif"}}," Featured Projects "))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{margin:"5px",textAlign:"center",width:"850px",display:"inline-block"}},this.renderCarousel(t))))}}]),t}(n.Component),K=Object(s.f)(R);var W=Object(s.f)((function(){return r.a.createElement(K,null)})),_=(a(155),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).Auth=new I,a.login=function(e){e.preventDefault();var t=e.target,n=t.elements.email.value,r=t.elements.password.value;console.log("Attempting login with ".concat(n," and ").concat(r)),console.log("Redirecting to ".concat(a.state.redirectUrl)),a.Auth.login(n,r).then((function(e){if(!1===e)return alert("Invalid Credentials!");a.props.history.push(a.state.redirectUrl)})).catch((function(e){console.log(e),alert("Invalid Credentials!")}))},a.state={redirectUrl:"/"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state;void 0!==e&&null!==e&&this.setState({redirectUrl:e.redirectUrl})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("div",{style:{marginLeft:"35%",marginTop:"10%",marginRight:"35%"}},r.a.createElement("h3",null," Log In "),r.a.createElement(E.a,{onSubmit:this.login},r.a.createElement(E.a.Group,{role:"form"},r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Control,{type:"email",placeholder:"Email",name:"email"})),r.a.createElement(E.a.Group,{controlId:"formBasicPassword"},r.a.createElement(E.a.Control,{type:"password",placeholder:"Password",name:"password"})),r.a.createElement(y.a,{style:{marginLeft:"40%"},variant:"primary",type:"submit"},"Login"))),r.a.createElement("p",{style:{textAlign:"center",marginTop:"5px"}},"Don't have an account? ",r.a.createElement(c.b,{to:"/signup"},"Sign Up "))))}}]),t}(n.Component)),z=Object(s.f)(_),H=a(103),V=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).setShow=function(e){a.setState({show:e})},a.dummy=function(){console.log("test")},a.createUser=function(e){e.preventDefault();var t=e.target,n=t.elements.name.value,r=t.elements.username.value,o=t.elements.email.value,l=t.elements.password.value,c=t.elements.confirmpassword.value;if(l.length<6)alert("Password must be at least 6 characters");else if(l!==c)alert("Passwords don't match!");else if(/^\w+$/.test(r)){var s={username:r,name:n,email:o,password:l};console.log(s),f.a.post("http://localhost:3003/api/v1/signup",s).then((function(e){a.props.history.push("/login")})).catch((function(e){console.log(e),alert("User with the same email already exists!")}))}else alert("Username must only contain letters, numbers and underscore(s)\ne.g. new_user123")},a.state={data:void 0,show:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("div",{style:{marginLeft:"35%",marginTop:"10%",marginRight:"35%"}},r.a.createElement("h3",null," Sign Up "),r.a.createElement(E.a,{onSubmit:this.createUser},r.a.createElement(H.a,{role:"form"},r.a.createElement(E.a.Group,{controlId:"formBasicName"},r.a.createElement(E.a.Control,{type:"name",placeholder:"Name",name:"name"})),r.a.createElement(E.a.Group,{controlId:"formBasicName"},r.a.createElement(E.a.Control,{type:"text",placeholder:"Username",name:"username"})),r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Control,{type:"email",placeholder:"Email",name:"email"})),r.a.createElement(E.a.Group,{controlId:"formBasicPassword"},r.a.createElement(E.a.Control,{type:"password",placeholder:"Password",name:"password"})),r.a.createElement(E.a.Group,{controlId:"formBasicPassword"},r.a.createElement(E.a.Control,{type:"password",placeholder:"Confirm Password",name:"confirmpassword"})),r.a.createElement(y.a,{style:{marginLeft:"40%"},variant:"primary",type:"submit"},"Sign Up"))),r.a.createElement("p",{style:{textAlign:"center",marginTop:"5px"}},"Already have an account? ",r.a.createElement(c.b,{to:"/login"},"Login"))))}}]),t}(n.Component),q=Object(s.f)(V),Q=a(167),X=a(168),Z=a(105),ee=a(66),te=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).Auth=new I,a.startProject=function(e){e.preventDefault(),console.log(a.state);var t=a.state,n=t.team,r=t.title,o=t.description,l=t.goal,c=t.deadline,s=t.category,i=t.orgName,m=a.Auth.getTokenData(),u=null===i?"$Independent$":i.trim(),p={team:n.trim(),title:r.trim(),category:s,description:o.trim(),goal:parseInt(l),deadline:c,username:m.username,orgName:u},d=ee(a.state.deadline).format("YYYY-MM-DD"),h=ee().get("year")+"-"+(ee().get("month")+1)+"-"+ee().get("date"),g=ee(h).format("YYYY-MM-DD");ee(d).isAfter(g)?f.a.post("http://localhost:3003/api/v1/start",p).then((function(e){a.props.history.push({pathname:"/editproject/".concat(m.username,"/").concat(u,"/").concat(n,"/").concat(r)})})).catch((function(e){console.log(e.response.data),alert(e.response.data)})):alert("Please enter a date in the future, i.e. after ".concat(ee(g).format("DD-MM-YYYY")))},a.getCategoryDropdown=function(){var e=a.state.values.map((function(e,t){return r.a.createElement("option",{key:t},e.category)}));return r.a.createElement(E.a.Control,{as:"select",name:"category"},e)},a.handleUserInput=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;console.log("output: ".concat(t," ").concat(n)),a.setState(Object(i.a)({},t,n)),console.log(a.state)},a.handleCheckboxChange=function(e){var t=a.state.hideOrg;a.setState({hideOrg:!t})},a.state={values:[],category:"Art",title:"",description:"",team:"",goal:"",deadline:"",orgName:null,formInvalid:!0,hideOrg:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:3003/api/v1/categories").then((function(t){console.log(t.data),e.setState({values:t.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(e,t){if(JSON.stringify(t)!==JSON.stringify(this.state)){var a=this.state,n=a.title,r=a.description,o=a.team,l=a.deadline,c=a.goal,s=a.hideOrg,i=a.orgName,m=""==n||""==r||""==o||""==l||""==c||!s&&null===i;this.setState({formInvalid:m})}}},{key:"render",value:function(){var e=this;this.Auth.loggedIn()||this.props.history.push({pathname:"/login",state:{redirectUrl:"/start"}});var t=this.state.hideOrg;return console.log(t),r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("h2",{style:{marginTop:"2%",textAlign:"center",fontFamily:"courier"}}," Let's get you started. "),r.a.createElement(Q.a,null,r.a.createElement(X.a,null,r.a.createElement(Z.a,null),r.a.createElement(Z.a,{xs:7},r.a.createElement(E.a,{onSubmit:this.startProject},r.a.createElement(E.a.Group,{onChange:function(t){return e.handleUserInput(t)}},r.a.createElement(E.a.Label,null,"Project Category"),this.getCategoryDropdown()),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Project Title"),r.a.createElement(E.a.Control,{as:"textarea",rows:"1",name:"title",onChange:function(t){return e.handleUserInput(t)},placeholder:"Tile that catches the eye of the reader."})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Project Description"),r.a.createElement(E.a.Control,{as:"textarea",rows:"3",name:"description",onChange:function(t){return e.handleUserInput(t)},placeholder:"Let people know why you deserve to make your dreams come true."})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Project Team"),r.a.createElement(E.a.Control,{type:"text",name:"team",placeholder:"Put your creative hat on!",onChange:function(t){return e.handleUserInput(t)}})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Funding goal amount (S$)"),r.a.createElement(E.a.Control,{type:"number",name:"goal",onChange:function(t){return e.handleUserInput(t)}})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Funding deadline"),r.a.createElement(E.a.Control,{type:"date",name:"deadline",onChange:function(t){return e.handleUserInput(t)}})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Organization"),r.a.createElement(E.a.Check,{style:{marginBottom:"4px"},type:"checkbox",id:"orgCheck",label:"Independent Project",onChange:this.handleCheckboxChange,checked:this.state.hideOrg}),this.state.hideOrg?null:r.a.createElement(E.a.Control,{type:"text",name:"orgName",placeholder:"Parent organization",onChange:function(t){return e.handleUserInput(t)}})),r.a.createElement(y.a,{style:{justifyItems:"center"},variant:"dark",type:"submit",disabled:this.state.formInvalid},"Create Project"))),r.a.createElement(Z.a,null))))}}]),t}(n.Component),ae=Object(s.f)(te),ne=a(76),re=a.n(ne),oe=a(107),le=a(174),ce=a(169),se=a(170),ie=a(171),me=(a(158),a(93)),ue=[B.a,M.a,G.a],pe=function(e){var t=e.color;return r.a.createElement("hr",{style:{color:t,backgroundColor:t,height:.1}})},de="The creator hasn't provided a detailed description of this project.",he=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).Auth=new I,a.handleUserInput=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;a.setState(Object(i.a)({},t,n))},a.submitComment=function(){var e=a.state.projectData,t={commentor:a.Auth.getTokenData().username,creator:e.username,orgname:e.orgname,teamname:e.teamname,projname:e.projname,comment:a.state.comment};f.a.post("http://localhost:3003/api/v1/comment",t).then((function(t){console.log(t.data),a.props.history.push("/projects/".concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname))})).catch((function(e){console.log(e.response.data),alert(e.response.data)}))},a.followUnfollowProject=function(){var e=a.state.projectData,t=a.Auth.getTokenData().username;if(a.state.follows)f.a.delete("http://localhost:3003/api/v1/follow/".concat(t,"/").concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname)).then((function(e){console.log("unfollowed");var t=a.state.follows;a.setState({follows:!t})})).catch((function(e){console.log("error")}));else{var n={follower:t,creator:e.username,orgname:e.orgname,teamname:e.teamname,projname:e.projname};f.a.post("http://localhost:3003/api/v1/follow",n).then((function(e){console.log("followed");var t=a.state.follows;a.setState({follows:!t})})).catch((function(e){console.log("error")}))}},a.withdrawFunding=function(){var e=a.state.projectData,t={backer:a.Auth.getTokenData().username,creator:e.username,orgname:e.orgname,teamname:e.teamname,projname:e.projname};f.a.post("http://localhost:3003/api/v1/withdraw",t).then((function(e){console.log(e.data),console.log(e.data.amount),alert("You have withdrawn S$ ".concat(e.data.amount," from this project")),setTimeout((function(){window.location.reload()}),3e3)})).catch((function(e){alert("Error!")}))},a.renderFollowButton=function(e){var t=a.Auth.getTokenData().username,n="Follow";return a.state.follows&&(n="Unfollow"),console.log(t),console.log(e.username),t===e.username?null:r.a.createElement(y.a,{style:{width:"100%",border:"1px solid black",marginTop:"2%"},variant:"Light",onClick:a.followUnfollowProject},n)},a.renderWithdrawButton=function(e){a.Auth.getTokenData().username;return a.state.hasFunded?r.a.createElement(y.a,{style:{width:"100%",marginTop:"2%"},variant:"danger",onClick:a.withdrawFunding},"Withdraw Funding"):null},a.renderDeleteComment=function(e){if(e.commentor===a.Auth.getTokenData().username)return r.a.createElement(y.a,{variant:"danger",onClick:function(){return a.deleteComment(e)}},"Delete")},a.deleteComment=function(e){f.a.delete("http://localhost:3003/api/v1/comment/".concat(e.commentor,"/").concat(e.timestamp)).then((function(e){console.log(e.data),window.location.reload()})).catch((function(e){alert(e.response.data)}))},a.renderComments=function(){var e=a.state.projectComments;return r.a.createElement("div",{style:{marginTop:"2%"}},e.map((function(e,t){var n=me(me.unix(e.timestamp).toDate()).format("MMM Do YYYY, hh:mm a");return console.log(n),r.a.createElement(le.a,{style:{marginTop:"1%"},key:t},r.a.createElement(le.a.Body,null,r.a.createElement(le.a.Title,null,"@",e.commentor),r.a.createElement(le.a.Subtitle,{className:"mb-2 text-muted"},n),r.a.createElement(le.a.Body,null,e.comment),a.renderDeleteComment(e)))})))},a.redirectToFundPage=function(){var e=a.state.projectData;e.backerName=a.Auth.getTokenData().name,e.backerUsername=a.Auth.getTokenData().username,a.props.history.push({pathname:"/fund/".concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname),state:{data:e}})},a.getDaysToDeadline=function(e){var t=me().get("year")+"-"+(me().get("month")+1)+"-"+me().get("date"),a=me(t).tz("Asia/Singapore"),n=me(e.deadline).tz("Asia/Singapore");return me.duration(n.diff(a)).asDays()},a.redirectToEditPage=function(e){a.props.history.push({pathname:"/editproject/".concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname)})},a.renderEditProject=function(e){var t=a.Auth.getTokenData().username;return e.username!==t?null:r.a.createElement(y.a,{style:{width:"100%"},variant:"primary",onClick:function(){return a.redirectToEditPage(e)}},"Edit Project")},a.renderBackOrStatus=function(e){return console.log(e.status),"In Progress"===e.status?r.a.createElement("div",null,r.a.createElement("div",{className:"div-stats"},r.a.createElement("h3",{className:"generic-h3-stats"},a.getDaysToDeadline(e)," "),r.a.createElement("p",{className:"generic-p-stats"},"day",a.getDaysToDeadline(e)>1?"s":null," to go")),a.renderEditProject(e),r.a.createElement(y.a,{style:{width:"100%",marginTop:"2%"},variant:"success",type:"submit",onClick:a.redirectToFundPage},"Back this project"),a.renderWithdrawButton(e),a.renderFollowButton(e)):"Complete"===e.status?r.a.createElement("div",null,r.a.createElement("h3",{className:"h3-complete"},"Project Funding Complete!")):r.a.createElement("div",null,r.a.createElement("h3",{className:"h3-abandoned"},"Project Funding Abandoned!"))},a.renderProjectData=function(){if(null==a.state.projectData||0==Object.keys(a.state.projectData).length)return null;var e=a.state.projectData,t=Math.floor(3*Math.random());return r.a.createElement("div",{style:{marginTop:"1%"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,e.projname),r.a.createElement("h5",null,e.description),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center"}},r.a.createElement("h6",null,"Creator: @",e.username),"\xa0 \xa0",r.a.createElement("h6",null,"Org: ","$Independent$"===e.orgname?"Independent":e.orgname),"\xa0 \xa0",r.a.createElement("h6",null,"Team: ",e.teamname),"\xa0 \xa0",r.a.createElement("h6",null,"Category: ",e.categories))),r.a.createElement(Q.a,{style:{marginTop:"3%"}},r.a.createElement(X.a,null,r.a.createElement(Z.a,null,r.a.createElement("img",{src:ue[t],alt:"img",style:{width:750,height:450}})),r.a.createElement(Z.a,null,r.a.createElement(ce.a,{variant:"success",now:e.curfunds/e.goal*100}),r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:"3%"}},r.a.createElement("div",{className:"div-stats"},r.a.createElement("h3",{className:"curfunds"},"S$ ",e.curfunds," "),r.a.createElement("p",{className:"goal"},"pledged of S$ ",e.goal," goal ")),r.a.createElement("div",{className:"div-stats"},r.a.createElement("h3",{className:"generic-h3-stats"},e.numbackers," "),r.a.createElement("p",{className:"generic-p-stats"},"backer",e.numbackers>1?"s":null," ")),a.renderBackOrStatus(e)),r.a.createElement("div",{style:{marginTop:"2%"}},r.a.createElement("p",{className:"p-fineprint"},"All or nothing funding. This project will only be funded if it reaches its goal by ",me(e.deadline).format("dddd, MMMM Do YYYY")," 0000 hrs SGT.")))))),r.a.createElement(Q.a,null,r.a.createElement(X.a,null,r.a.createElement(Z.a,null,r.a.createElement(pe,{color:"gray"}),r.a.createElement(se.a,{defaultActiveKey:"details",id:"uncontrolled-tab-example"},r.a.createElement(ie.a,{eventKey:"about",title:"About"},r.a.createElement("div",{style:{marginTop:"3%"}},r.a.createElement("p",null,null===a.state.projectData.about?de:a.state.projectData.about))),r.a.createElement(ie.a,{eventKey:"rewards",title:"Rewards"},r.a.createElement("h3",null,"Rewards")),r.a.createElement(ie.a,{eventKey:"comments",title:"Comments"},r.a.createElement("div",{style:{marginTop:"2%",display:"flex",flexDirection:"column"}},r.a.createElement(E.a,{onSubmit:a.submitComment},r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Control,{as:"textarea",rows:"3",name:"comment",onChange:function(e){return a.handleUserInput(e)},placeholder:"Type your comment here."})),r.a.createElement(y.a,{style:{justifyItems:"center"},variant:"dark",type:"submit",disabled:!a.state.validComment},"Comment")),a.renderComments())))))))},a.state={projectData:null,follows:!1,hasFunded:!1,validComment:!1,comment:"",projectComments:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(console.log(this.state),JSON.stringify(t)!==JSON.stringify(this.state)){var a=""==this.state.comment;this.setState({validComment:!a})}}},{key:"componentDidMount",value:function(){var e=Object(oe.a)(re.a.mark((function e(){var t,a,n,r,o,l,c,s=this;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("back here at display project page"),this.Auth.loggedIn()){e.next=3;break}return e.abrupt("return");case 3:t=this.Auth.getTokenData().username,a=this.props.match.params,n=a.username,r=a.orgName,o=a.teamName,l=a.projName,f.a.get("http://localhost:3003/api/v1/user/".concat(t)).then((function(e){var t=e.data;console.log("user data:"),console.log(t.followed);var a=!1,c=!1;t.followed.forEach((function(e){e.creator===n&&e.orgname===r&&e.teamname===o&&e.projname===l&&(a=!0)})),t.backed.forEach((function(e){e.creator===n&&e.orgname===r&&e.teamname===o&&e.projname===l&&(c=!0)})),a&&(console.log("Setting follows to true"),s.setState({follows:a})),c&&(console.log("Setting hasFunded to true"),s.setState({hasFunded:c}))})),console.log("http://localhost:3003/api/v1/projects/".concat(n,"/").concat(r,"/").concat(o,"/").concat(l)),c=null,f.a.get("http://localhost:3003/api/v1/projects/".concat(n,"/").concat(r,"/").concat(o,"/").concat(l)).then((function(e){console.log(e.data);var t=e.data;if(s.getDaysToDeadline(t)<=0&&"In Progress"===t.status&&(console.log("changing status"),t.curfunds<t.goal?t.status="Abandoned":t.status="Complete",c={username:n,orgname:r,teamname:o,projname:l,status:t.status}),console.log(t.status),s.setState({projectData:t}),null!==c)return f.a.post("http://localhost:3003/api/v1/setStatus",c)})).then((function(e){console.log("status changed")})).catch((function(e){alert(e)})),f.a.get("http://localhost:3003/api/v1/comments/".concat(n,"/").concat(r,"/").concat(o,"/").concat(l)).then((function(e){var t=e.data;s.setState({projectComments:t})})).catch((function(e){alert(e)}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.Auth.loggedIn()){console.log("redirecting to login page");var e=this.props.match.params,t=e.username,a=e.orgName,n=e.teamName,o=e.projName;this.props.history.push({pathname:"/login",state:{redirectUrl:"/projects/".concat(t,"/").concat(a,"/").concat(n,"/").concat(o)}})}return r.a.createElement("div",null,r.a.createElement(U,null),this.renderProjectData())}}]),t}(n.Component),ge=Object(s.f)(he),fe=(a(93),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleUserInput=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;console.log("output: ".concat(t," ").concat(n)),a.setState(Object(i.a)({},t,n))},a.redirectToHome=function(){console.log("redirecting to home"),a.props.history.push("/")},a.deleteProject=function(e){f.a.delete("http://localhost:3003/api/v1/project/".concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname)).then((function(e){alert("Project deleted. Redirecting you to the home page"),a.redirectToHome()})).catch((function(e){alert(e)}))},a.editProject=function(){var e=a.state.projectData,t={username:e.username,orgname:e.orgname,teamname:e.teamname,projname:e.projname,about:a.state.about};f.a.post("http://localhost:3003/api/v1/editProject",t).then((function(t){console.log("updated!"),alert("Project edited. Redirecting you to the project details page"),a.props.history.push("/projects/".concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname))})).catch((function(e){alert(e)}))},a.state={projectData:null,isValidAbout:!1,about:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.username,a=e.orgname,n=e.teamname,r=e.projname;console.log(this.props.match.params);var o={username:t,orgname:a,teamname:n,projname:r};this.setState({projectData:o})}},{key:"componentDidUpdate",value:function(e,t){if(console.log(this.state),JSON.stringify(t)!==JSON.stringify(this.state)){var a=!(""===this.state.about);this.setState({isValidAbout:a})}}},{key:"render",value:function(){var e=this,t=this.state.projectData;return null===t?null:r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("h2",{style:{marginTop:"2%",textAlign:"center",fontFamily:"courier"}}," Edit '",this.state.projectData.projname,"'"),r.a.createElement(Q.a,null,r.a.createElement(X.a,null,r.a.createElement(Z.a,null),r.a.createElement(Z.a,{xs:7},r.a.createElement(E.a,null,r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"About"),r.a.createElement(E.a.Control,{as:"textarea",rows:"5",name:"about",onChange:function(t){return e.handleUserInput(t)},placeholder:"Talk more about your project (eg. the inspiration, the obstacles, and the novel idea)"})),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(y.a,{style:{justifyItems:"center"},variant:"success",onClick:this.editProject,disabled:!this.state.isValidAbout},"Edit Project"),r.a.createElement(y.a,{style:{justifyItems:"center",marginLeft:"2%"},variant:"danger",onClick:function(){return e.deleteProject(t)}},"Delete Project"))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(y.a,{style:{justifyItems:"center",marginTop:"5%"},variant:"link",onClick:function(){return e.redirectToHome()}},"Back to Home"))),r.a.createElement(Z.a,null))))}}]),t}(n.Component)),ve=Object(s.f)(fe),Ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).Auth=new I,a.handleUserInput=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;console.log("output: ".concat(t," ").concat(n)),a.setState(Object(i.a)({},t,n))},a.backProject=function(){var e={amount:parseInt(a.state.amount),backer:a.state.projectData.backerUsername,creator:a.state.projectData.username,orgname:a.state.projectData.orgname,teamname:a.state.projectData.teamname,projname:a.state.projectData.projname};f.a.post("http://localhost:3003/api/v1/fund",e).then((function(e){var t=a.state.projectData;console.log(e),console.log("success!!"),a.setState({pledgeSuccessful:!0}),setTimeout((function(){a.props.history.push({pathname:"/projects/".concat(t.username,"/").concat(t.orgname,"/").concat(t.teamname,"/").concat(t.projname)})}),3e3)})).catch((function(e){console.log(e),console.log("error!!")}))},a.renderOptionOrText=function(e){return a.state.pledgeSuccessful?r.a.createElement("div",{style:{marginTop:"2%",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("h5",null,"Thank you for your generosity, ",e.backerName,"!")),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("p",null,"Redirecting you to the ",e.projname," project page..."))):r.a.createElement("div",{style:{marginTop:"2%",display:"flex",justifyContent:"center"}},r.a.createElement(E.a,null,r.a.createElement(H.a,{role:"form"},r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Control,{type:"number",placeholder:"Pledge Amount (S$)",name:"amount",onChange:a.handleUserInput})))),r.a.createElement(y.a,{style:{marginLeft:"1%",height:"40%"},variant:"success",disabled:a.state.disabled,onClick:a.backProject},"Pledge"))},a.renderFundProjectPage=function(e){return r.a.createElement("div",{style:{marginTop:"1%"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,e.projname),r.a.createElement("h5",null,e.description)),a.renderOptionOrText(e))},a.state={projectData:null,amount:0,disabled:!0,pledgeSuccessful:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state.data;console.log("at the funding page!!"),console.log(e),this.setState({projectData:e})}},{key:"componentDidUpdate",value:function(e,t){if(JSON.stringify(t)!==JSON.stringify(this.state)){var a=this.state.amount,n=parseInt(a)>0;this.setState({disabled:!n})}}},{key:"render",value:function(){if(!this.Auth.loggedIn()&&(null!==this.state.projectData||void 0!==this.state.projectData)){var e=this.state.projectData;this.props.history.push({pathname:"/login",state:{redirectUrl:"/fund/".concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname)}})}var t=this.state.projectData;return r.a.createElement("div",null,r.a.createElement(U,null),null==t||0==Object.keys(t).length?null:this.renderFundProjectPage(t))}}]),t}(n.Component),je=Object(s.f)(Ee),ye=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).renderProjects=function(e,t){if(null!==e)return 0===e[t].length?r.a.createElement("div",{style:{textAlign:"center",marginTop:"2%"}},r.a.createElement("h5",null,"This user hasn't ".concat(t," any projects."))):r.a.createElement("div",{style:{marginTop:"2%"}},r.a.createElement("ol",null,e[t].map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(c.b,{to:"/projects/".concat(e.creator,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname)},e.projname))}))))},a.state={username:"",data:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted");var t=this.props.match.params.username;f.a.get("http://localhost:3003/api/v1/user/".concat(t)).then((function(t){console.log(t.data),e.setState({data:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.data;return null===e?null:r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("div",{style:{marginTop:"2%",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("h2",null,e.name)),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("p",null,"@",e.username))),r.a.createElement(Q.a,null,r.a.createElement(X.a,null,r.a.createElement(Z.a,null),r.a.createElement(Z.a,{xs:7},r.a.createElement("div",{style:{alignContent:"center"}},r.a.createElement(se.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example"},r.a.createElement(ie.a,{eventKey:"created",title:"Created"},this.renderProjects(e,"created")),r.a.createElement(ie.a,{eventKey:"backed",title:"Backed"},this.renderProjects(e,"backed")),r.a.createElement(ie.a,{eventKey:"following",title:"Following"},this.renderProjects(e,"followed"))))),r.a.createElement(Z.a,null))))}}]),t}(n.Component),be=Object(s.f)(ye),ke=a(176),we=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).renderProjectList=function(e){var t="There are no projects to see.";if(0===e.length&&a.state.hasSearchedSomething&&(t="We couldn't find any projects containing the keyphrase \"".concat(a.state.searchString,'".')),0===e.length){var n=r.a.createElement("a",{href:"/start"},"here");return r.a.createElement("div",{style:{textAlign:"center",marginTop:"5%"}},r.a.createElement("div",null,r.a.createElement("h4",null,t," ")),r.a.createElement("div",null,r.a.createElement("h4",null,"Click ",n," to start a new project!")))}return r.a.createElement("div",{style:{marginTop:"3%"}},r.a.createElement("div",{style:{marginLeft:"20px"}},r.a.createElement("h3",null,"Projects: ")),r.a.createElement(ke.a,null,e.map((function(e,t){return r.a.createElement(ke.a.Item,{key:t},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/projects/".concat(e.username,"/").concat(e.orgname,"/").concat(e.teamname,"/").concat(e.projname)},e.projname),r.a.createElement("h6",null,e.description),r.a.createElement("h6",null,"Creator: @",e.username," "),r.a.createElement("h6",null,"Org: ","$Independent$"===e.orgname?"Independent":e.orgname," "),r.a.createElement("h6",null,"Category: ",e.categories)))}))))},a.state={projectData:[],hasSearchedSomething:!1,searchString:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state,a=null;void 0!==t&&(a=t.searchString,console.log("search for projects containing ".concat(a))),void 0===a||null===a?f.a.get("http://localhost:3003/api/v1/allProjects").then((function(t){console.log(t.data),e.setState({projectData:t.data})})).catch((function(e){alert(e)})):f.a.get("http://localhost:3003/api/v1/searchProjects/".concat(a)).then((function(t){console.log(t.data),e.setState({projectData:t.data,hasSearchedSomething:!0,searchString:a})})).catch((function(e){alert(e)}))}},{key:"render",value:function(){var e=this.state.projectData;return r.a.createElement("div",null,r.a.createElement(U,null),this.renderProjectList(e))}}]),t}(n.Component),Oe=Object(s.f)(we);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(161);var Ce=r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:W}),r.a.createElement(s.a,{exact:!0,path:"/login",component:z}),r.a.createElement(s.a,{path:"/signup",component:q}),r.a.createElement(s.a,{path:"/start",component:ae}),r.a.createElement(s.a,{path:"/editproject/:username/:orgname/:teamname/:projname",component:ve}),r.a.createElement(s.a,{path:"/projects/:username/:orgName/:teamName/:projName",component:ge}),r.a.createElement(s.a,{path:"/explore",component:Oe}),r.a.createElement(s.a,{path:"/fund/:username/:orgName/:teamName/:projName",component:je}),r.a.createElement(s.a,{path:"/profile/:username",component:be})))),De=document.getElementById("root");De.hasChildNodes()?l.a.hydrate(Ce,De):l.a.render(Ce,De),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t,a){e.exports=a.p+"static/media/books.889937b3.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/game.17cb381f.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/movie.4a2a39c8.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/fundit.377c1788.png"}},[[108,1,2]]]);
//# sourceMappingURL=main.48a71536.chunk.js.map