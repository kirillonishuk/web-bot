(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={bot:{type:"web"},urlWs:{development:"wss://localhost:3015",production:"wss://193.124.114.63:3015"},urlHttp:{development:"https://localhost:3015",production:"https://193.124.114.63:3015"}}},36:function(e,t,a){e.exports=a(79)},41:function(e,t,a){},68:function(e,t){},71:function(e,t,a){},73:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(33),r=a.n(i),s=(a(41),a(9)),c=a(10),l=a(13),m=a(11),u=a(14),p=a(34),d=a.n(p),f=a(12),g=a.n(f),b=(a(71),a(73),a(35)),h=a.n(b),v=a(1),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).createFile=function(){var e=new Blob([a.props.file],{type:a.props.mime||h.a.lookup(a.props.name.split(".")[1])});return URL.createObjectURL(e)},a.renderButtons=function(){return a.props.buttons.map(function(e,t){return o.a.createElement("div",{className:"answer-button",key:t,onClick:function(t){return a.props.sendMessage(t,e.text)}},e.text.toUpperCase())})},a.linkify=function(e){return e.replace(/\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,'<a href="$&" target="_blank">$&</a>').replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim,'$1<a href="http://$2" target="_blank">$2</a>').replace(/[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim,'<a href="mailto:$&" target="_blank">$&</a>')},a.renderTime=function(){return o.a.createElement("div",{className:"message-time"},a.props.time.getHours()+":"+a.props.time.getMinutes())},a.renderMessage={message:function(e){return o.a.createElement("div",{className:e},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.linkify(a.props.text)}}),a.renderTime())},image:function(e){return o.a.createElement("div",{className:e},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(v.urlHttp.production,"/storage/").concat(a.props.filename)},o.a.createElement("img",{src:"data:image/png;base64,".concat(a.props.image),alt:"sending"})),a.renderTime())},file:function(e){return o.a.createElement("div",{className:e},o.a.createElement("a",{href:a.createFile(),download:a.props.name,className:"file-download"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442"),o.a.createElement("div",{className:"file-size"},"".concat(a.props.file.byteLength," \u0431\u0430\u0439\u0442")),a.renderTime())},audio:function(e){return o.a.createElement("div",{className:e},o.a.createElement("audio",{controls:!0,className:"voice-msg"},o.a.createElement("source",{src:a.createFile(),type:a.props.mime})),a.renderTime())},keyboard:function(e){return o.a.createElement("div",{className:e},a.renderButtons(),a.renderTime())}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=g()({"message-box":!this.props.buttons,"buttons-box":this.props.buttons,outgoing:"outgoing"===this.props.type,incoming:"incoming"===this.props.type,image:"image"===this.props.form});return this.renderMessage[this.props.form](e)}}]),t}(n.Component),w={"component-outgoing-message":function(e){return{text:e.text,type:"incoming",form:"message",time:new Date}},"component-ingoing-message":function(e){return{text:e.text,type:"outgoing",form:"message",time:new Date}},"component-keyboard":function(e){return{buttons:e.buttons,type:"incoming",form:"keyboard",time:new Date}},"component-outgoing-picture":function(e){return{image:e.image,filename:e.filename,type:"incoming",form:"image",time:new Date}},"component-ingoing-picture":function(e){return{image:e.image,filename:e.filename,type:"outgoing",form:"image",time:new Date}},"component-outgoing-audio":function(e){return{file:e.file,mime:e.mime,type:"incoming",form:"audio",time:new Date}},"component-outgoing-document":function(e){return{file:e.file,name:e.name,type:"incoming",form:"file",time:new Date}},"component-ingoing-document":function(e){return{file:e.file,name:e.name,type:"outgoing",form:"file",time:new Date}},default:function(e){return{text:e.text||"Error message!",type:"incoming",form:"message",time:new Date}}},E=function(e){return e.type in w?w[e.type](e):w.default(e)},I=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).scrollToBottom=function(){a.chatbox&&(a.chatbox.scrollTop=a.chatbox.scrollHeight)},a.changeMessage=function(e){a.setState({text:e.target.value})},a.sendMessage=function(e,t){if(e.preventDefault(),e.stopPropagation(),a.state.botIsActive){var n={bot:{type:v.bot.type,id:a.state.botId},user:a.state.userId,type:"message",text:t||a.state.text};a.socket.emit("web-chat",n),t||a.setState({text:""}),a.chat.disabled=!1,a.chat.focus()}},a.startChat=function(e){e&&(e.preventDefault(),e.stopPropagation()),a.socket.emit("web-chat",{bot:{type:v.bot.type,id:a.state.botId},user:a.state.userId,text:"/start",type:"message"}),a.setState({botIsActive:!0}),a.chat.disabled=!1,a.chat.focus()},a.loadImage=function(e){if(a.state.botIsActive){var t=e.target.files,n=t[0].name,o=t[0];if(FileReader&&t&&t.length){var i=new FileReader;i.onload=function(){var e={bot:{type:v.bot.type,id:a.state.botId},user:a.state.userId,image:i.result.split(",")[1],filename:n,type:"picture"};a.socket.emit("web-chat",e)},i.readAsDataURL(o),e.target.value="",a.chat.focus()}else alert("Error!")}},a.loadDoc=function(e){if(a.state.botIsActive){var t=e.target.files,n=t[0].name,o=t[0];if(FileReader&&t&&t.length){var i=new FileReader;i.onload=function(){var e={bot:{type:v.bot.type,id:a.state.botId},user:a.state.userId,file:i.result.split(",")[1],filename:n,type:"file"};a.socket.emit("web-chat",e)},i.readAsDataURL(o),e.target.value="",a.chat.focus()}else alert("Error!")}},a.renderMessage=function(){return a.state.box.map(function(e,t){return o.a.createElement(y,Object.assign({sendMessage:a.sendMessage,key:t},e))})},a.renderInitButton=function(){if(!a.state.botIsActive)return o.a.createElement("div",{className:"init-bot-btn"},o.a.createElement("button",{onClick:a.startChat,className:"start-chat-btn"},o.a.createElement("i",{className:"zmdi zmdi-arrow-right"})),o.a.createElement("div",{className:"start-chat-info"},a.state.infoMessage))},a.renderInput=function(){var e=g()({"blocker-hide":a.state.botIsActive,blocker:!0});return o.a.createElement("form",{className:"send-message-form",onSubmit:a.sendMessage},o.a.createElement("div",{className:e}),o.a.createElement("label",{htmlFor:"select-image",className:"custom-select-input-image"},o.a.createElement("i",{className:"zmdi zmdi-camera-add"})),o.a.createElement("input",{type:"file",id:"select-image",accept:"image/*",onChange:a.loadImage,disabled:!a.state.botIsActive}),o.a.createElement("label",{htmlFor:"select-doc",className:"custom-select-input-doc"},o.a.createElement("i",{className:"zmdi zmdi-attachment-alt"})),o.a.createElement("input",{type:"file",id:"select-doc",onChange:a.loadDoc,disabled:!a.state.botIsActive}),o.a.createElement("input",{ref:function(e){return a.chat=e},className:"message-input",value:a.state.text,onChange:a.changeMessage,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",disabled:!a.state.botIsActive}),o.a.createElement("div",{className:"send-message-button",onClick:a.sendMessage},o.a.createElement("i",{className:"zmdi zmdi-mail-send"})))},a.state={botId:"",userId:crypto.getRandomValues(new Uint32Array(1)).toString()+"-"+(new Date).getTime().toString(),text:"",box:[],botIsActive:!1,isIdInPath:!1,infoMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID \u0431\u043e\u0442\u0430 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441 \u043d\u0438\u043c."};var n=v.urlWs.production;return a.socket=d()(n,{path:"/ws",transports:["websocket"]}),a.socket.on("web-bot-message",function(e){var t=E(e);"/start"===t.text&&"outgoing"===t.type||a.setState({box:a.state.box.concat(t)})}),a.socket.on("web-bot-error",function(e){console.log(e)}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.location.pathname.slice(1);t&&this.setState({botId:t,isIdInPath:!0,infoMessage:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441 \u0431\u043e\u0442\u043e\u043c."},function(){"#start"===window.location.hash&&e.startChat()})}},{key:"componentDidUpdate",value:function(e,t){this.state.box.length!==t.box.length&&this.scrollToBottom()}},{key:"componentWillUnmount",value:function(){this.socket.close()}},{key:"render",value:function(){var e=this,t=o.a.createElement("form",{className:"bot-connection-container",onSubmit:this.startChat,autoComplete:"off"},o.a.createElement("label",{htmlFor:"bot-id-input"},"ID \u0411\u043e\u0442\u0430: "),o.a.createElement("input",{autoFocus:!0,type:"text",id:"bot-id-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID",value:this.state.botId,onChange:function(t){e.setState({botId:t.target.value})}}));return this.state.isIdInPath&&(t=o.a.createElement("form",{className:"bot-connection-container"},o.a.createElement("label",{htmlFor:"bot-id-input"},"ID \u0411\u043e\u0442\u0430: "),o.a.createElement("span",null,this.state.botId))),o.a.createElement("div",{className:"chat-container"},t,o.a.createElement("div",{className:"message-container",ref:function(t){e.chatbox=t}},o.a.createElement("div",{className:"scroll-fix"}),this.renderInitButton(),this.renderMessage()),this.renderInput())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.82ede3f1.chunk.js.map