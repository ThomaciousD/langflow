"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5425],{74715:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"type":"api","id":"update-folder","title":"Update Folder","description":"","slug":"/update-folder","frontMatter":{},"api":{"tags":["Folders"],"operationId":"update_folder_api_v1_folders__folder_id__patch","security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"parameters":[{"name":"folder_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Folder Id"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"name":{"anyOf":[{"type":"string"}],"title":"Name","nullable":true},"description":{"anyOf":[{"type":"string"}],"title":"Description","nullable":true},"parent_id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"Parent Id","nullable":true},"components":{"items":{"type":"string","format":"uuid"},"type":"array","title":"Components"},"flows":{"items":{"type":"string","format":"uuid"},"type":"array","title":"Flows"}},"type":"object","title":"FolderUpdate"}}}},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"name":{"type":"string","title":"Name"},"description":{"anyOf":[{"type":"string"}],"title":"Description","nullable":true},"id":{"type":"string","format":"uuid","title":"Id"},"parent_id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"Parent Id","nullable":true}},"type":"object","required":["name","id","parent_id"],"title":"FolderRead"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"description":"Update Folder","method":"patch","path":"/api/v1/folders/{folder_id}","securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"components":["3fa85f64-5717-4562-b3fc-2c963f66afa6"],"flows":["3fa85f64-5717-4562-b3fc-2c963f66afa6"]},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Update Folder","description":{"type":"text/plain"},"url":{"path":["api","v1","folders",":folder_id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<uuid>","key":"folder_id"}]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"{\\n  \\"name\\": \\"<string>\\",\\n  \\"description\\": \\"<string>\\",\\n  \\"parent_id\\": \\"<uuid>\\",\\n  \\"components\\": [\\n    \\"<uuid>\\",\\n    \\"<uuid>\\"\\n  ],\\n  \\"flows\\": [\\n    \\"<uuid>\\",\\n    \\"<uuid>\\"\\n  ]\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/update-folder","previous":{"title":"Read Folder","permalink":"/api/read-folder"},"next":{"title":"Delete Folder","permalink":"/api/delete-folder"}}');var r=i(74848),s=i(28453);const l={},d="Update Folder",a=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"update-folder",children:"Update Folder"})}),"\n",(0,r.jsx)(t.p,{children:"Update Folder"}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"folder_id"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Request Body "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"description"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Description"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"parent_id"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Parent Id"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"components"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" uuid[]"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"flows"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" uuid[]"})]})})]})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("div",{children:(0,r.jsx)(t.p,{children:"Successful Response"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"description"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Description"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"id"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"parent_id"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Parent Id"})]})})]})]})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"422"})}),(0,r.jsx)("div",{children:(0,r.jsx)(t.p,{children:"Validation Error"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"detail"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"loc"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"msg"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"type"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>d});var n=i(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);