(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5954],{88385:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/&/[_]/[owner]",function(){return n(18560)}])},18560:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSP:function(){return B},default:function(){return x}});var t=n(82729),i=n(35944),a=n(18872),l=n(67294),o=n(86204),s=n(83329),c=n(10342),u=n(72812),d=n(3941),f=n(63417),w=n(97047),h=n(76260),v=n(64217),g=n(77942),Z=n(77518),_=n(71146),m=n(57842),p=n(31367),S=n(57606);function P(){let e=(0,t._)(["\n              min-height: 100%;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            "]);return P=function(){return e},e}function N(){let e=(0,t._)(["\n              min-height: 100%;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            "]);return N=function(){return e},e}function O(){let e=(0,t._)(["\n            min-height: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          "]);return O=function(){return e},e}function E(){let e=(0,t._)(["\n        overflow: hidden;\n\n        @media (max-width: 768px) {\n          overflow: unset;\n        }\n      "]);return E=function(){return e},e}function y(){let e=(0,t._)(["\n                flex-grow: 1;\n              "]);return y=function(){return e},e}function k(){let e=(0,t._)(["\n                display: block;\n                display: flex;\n                flex-direction: column;\n                gap: 6px;\n                text-align: center;\n                align-items: center;\n              "]);return k=function(){return e},e}async function b(e,r){return(await (0,s.jU)("/FEATURE_WORKER",void 0)({feature:"auto_wiki_list",access_token:null!=e?e:"wiki_public_access_only",owner:r})).map(e=>JSON.parse(e.github_repo_metadata)).sort((e,r)=>e.full_name.localeCompare(r.full_name))}var B=!0;function x(e){return(0,i.BX)(p.Z,{serializedRouteState:e.serializedRouteState,routeParamNames:["owner"],remoteItemType:"owner",children:[(0,i.tZ)(_.Z,{}),(0,i.tZ)(z,{...e})]})}function z(e){let r=(0,S.H)({hasOwner:!0});e.ssrError&&console.warn("Error during SSR:",e.ssrError);let n=(0,c.E)(),[t,s]=(0,l.useState)(e.repoMetadatas),[_,p]=(0,l.useState)(e.ssrUsedAuth),B=(0,u.Y)(),x=!!(B.values.forceOwnerPageServerState&&B.values.forceOwnerPageBrowserState),z="loaded"===B.values.forceOwnerPageServerState||"loaded-public-only"===B.values.forceOwnerPageServerState||"loaded"===B.values.forceOwnerPageBrowserState,A="loaded"===B.values.forceOwnerPageServerState||"loaded"===B.values.forceOwnerPageBrowserState,X="loaded-public-only"===B.values.forceOwnerPageServerState?"loaded":B.values.forceOwnerPageServerState,R=t?t.filter(e=>!e.private):[],T=t?t.filter(e=>e.private):[];x&&!z&&(R=[]),x&&!A&&(T=[]);let W=null!=X?X:e.ssrError?"error":e.repoMetadatas?"loaded":"not-loaded",[j,H]=(0,l.useState)("loaded");(0,l.useEffect)(()=>{!async function(){if(B.values.forceOwnerPageBrowserState){H(B.values.forceOwnerPageBrowserState);return}if(null==n?void 0:n.isLoading)return;let t=(null==n?void 0:n.credentials)!=null,i=t!==_;if(!e.repoMetadatas||e.ssrError||i)try{H("loading");let e=await b(null==n?void 0:n.credentials,r.ownerName);s(e),p(t),H("loaded")}catch(e){console.warn("Error fetching wiki list:",e),H("error")}}()},[r.ownerName,null==n?void 0:n.isLoading,null==n?void 0:n.credentials,e,_,B.values.forceOwnerPageBrowserState]);let M=(0,l.useMemo)(()=>{let e={Public:R,Private:T};return 0===R.length&&(T.length>0?delete e.Public:"loaded"===W||"loaded"===j?e.Public=(0,i.tZ)("div",{className:(0,a.iv)(P()),children:(0,i.tZ)(g.Z,{size:"16-14",children:"No Auto Wikis have been generated for this owner."})}):("error"===W||"error"===j)&&(e.Public=(0,i.tZ)("div",{className:(0,a.iv)(N()),children:(0,i.tZ)(g.Z,{size:"16-14",children:"An error occurred while fetching the list of public Auto Wikis."})}))),"error"===j?e.Private=(0,i.tZ)("div",{className:(0,a.iv)(O()),children:(0,i.tZ)(g.Z,{size:"16-14",children:"An error occurred while fetching the list of private Auto Wikis."})}):0===T.length&&delete e.Private,e},[t,B.values.forceOwnerPageServerState,B.values.forceOwnerPageBrowserState,j]);return(0,i.tZ)(m.Z,{v2Banner:"show",width:"1000px",className:(0,a.iv)(E()),children:(0,i.tZ)(v.Z,{categoriesText:(0,i.BX)(i.HY,{children:[(0,i.BX)(g.Z,{size:"16-14",inline:!0,children:["Auto Wikis for"," ",(0,i.tZ)(f.Z,{inline:!0,repoId:r.ownerName,href:r.ownerUrl})]}),(0,i.tZ)(g.Z,{size:"12-12",inline:!0,children:(0,i.tZ)(Z.Z,{href:"/","data-no-decoration":!0,className:"cursor-pointer",children:(0,i.tZ)(g.Z,{size:"12-12",inline:!0,children:(0,i.tZ)(o._0w,{})})})}),(0,i.tZ)("div",{className:(0,a.iv)(y())}),"loading"===j&&(0,i.tZ)(g.Z,{size:"20-12",inline:!0,children:(0,i.tZ)(o.koH,{className:"animate-spin"})})]}),repos:M,lhs:(0,i.BX)(i.HY,{children:[(0,i.tZ)(w.Z,{}),(0,i.BX)(g.Z,{size:"18-16",className:(0,a.iv)(k()),children:[(0,i.tZ)(h.Z,{}),(0,i.tZ)(d.Z,{defaultInputValue:"".concat(r.ownerName,"/")})]})]})})})}}},function(e){e.O(0,[4838,4738,4396,8089,2444,7242,2100,8479,2656,2888,9774,179],function(){return e(e.s=88385)}),_N_E=e.O()}]);