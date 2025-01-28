"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8208],{46464:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"type":"api","id":"upload-file","title":"Upload File","description":"","slug":"/upload-file","frontMatter":{},"api":{"tags":["Flows"],"description":"Upload flows from a file.","operationId":"upload_file_api_v1_flows_upload__post","security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"parameters":[{"name":"folder_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string","format":"uuid"}],"title":"Folder Id","nullable":true}}],"requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"properties":{"file":{"type":"string","format":"binary","title":"File"}},"type":"object","required":["file"],"title":"Body_upload_file_api_v1_flows_upload__post"}}}},"responses":{"201":{"description":"Successful Response","content":{"application/json":{"schema":{"type":"array","items":{"properties":{"name":{"type":"string","title":"Name"},"description":{"anyOf":[{"type":"string"}],"title":"Description","nullable":true},"icon":{"anyOf":[{"type":"string"}],"title":"Icon","nullable":true},"icon_bg_color":{"anyOf":[{"type":"string"}],"title":"Icon Bg Color","nullable":true},"gradient":{"anyOf":[{"type":"string"}],"title":"Gradient","nullable":true},"data":{"anyOf":[{"type":"object"}],"title":"Data","nullable":true},"is_component":{"anyOf":[{"type":"boolean"}],"title":"Is Component","default":false,"nullable":true},"updated_at":{"anyOf":[{"type":"string","format":"date-time"}],"title":"Updated At","nullable":true},"webhook":{"anyOf":[{"type":"boolean"}],"title":"Webhook","description":"Can be used on the webhook endpoint","default":false,"nullable":true},"endpoint_name":{"anyOf":[{"type":"string"}],"title":"Endpoint Name","nullable":true},"tags":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Tags","nullable":true},"locked":{"anyOf":[{"type":"boolean"}],"title":"Locked","default":false,"nullable":true},"id":{"type":"string","format":"uuid","title":"Id"},"user_id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"User Id","nullable":true},"folder_id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"Folder Id","nullable":true}},"type":"object","required":["name","id","user_id","folder_id"],"title":"FlowRead"},"title":"Response Upload File Api V1 Flows Upload  Post"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"method":"post","path":"/api/v1/flows/upload/","securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Upload File","description":{"content":"Upload flows from a file.","type":"text/plain"},"url":{"path":["api","v1","flows","upload",""],"host":["{{baseUrl}}"],"query":[{"disabled":false,"key":"folder_id","value":"<uuid>"}],"variable":[]},"header":[{"key":"Content-Type","value":"multipart/form-data"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"formdata","formdata":[{"description":{"content":"(Required) ","type":"text/plain"},"key":"file","type":"file"}]},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/upload-file","previous":{"title":"Create Flows","permalink":"/api/create-flows"},"next":{"title":"Download Multiple File","permalink":"/api/download-multiple-file"}}');var n=i(74848),s=i(28453);const r={},o="Upload File",a=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"upload-file",children:"Upload File"})}),"\n",(0,n.jsx)(t.p,{children:"Upload flows from a file."}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"folder_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Request Body "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"file"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" binary"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"201"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"icon"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Icon"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"icon_bg_color"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Icon Bg Color"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"gradient"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Gradient"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"data"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Data"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"is_component"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"webhook"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Webhook"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Can be used on the webhook endpoint"})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"endpoint_name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"tags"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Tags"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"locked"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Locked"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"user_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"folder_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})]})})]})})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"422"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Validation Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"detail"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"loc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"msg"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var l=i(96540);const n={},s=l.createContext(n);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);