import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-4BKB8u1e.js";import{d as t,r as a,s as l,e as o,S as i,C as s,F as n,M as r,o as p,c as u,w as c,a as m,y as d,t as g,G as f,z as v,f as y,H as _,I as j,l as h,L as b}from"./index-uu-sb1xd.js";import{E as x,a as w}from"./el-col-WgK5lZ8C.js";import{E as S}from"./el-text-NlJ9zSH3.js";import{E as k}from"./el-upload-TVk7RwuA.js";import"./el-progress-B2ZtwFCy.js";import"./el-tooltip-l0sNRNKZ.js";import{E as C}from"./el-popper-Q1oSUg9s.js";import{_ as z}from"./Table.vue_vue_type_script_lang-DR1NSdjE.js";import{u as E}from"./useTable-DMMi3sga.js";import{u as F}from"./useIcon-D1SBaDFU.js";import{g as I,d as U,a as A}from"./index-CRiorcdL.js";import{_ as D}from"./Detail.vue_vue_type_script_setup_true_lang-D2KwrPOB.js";import{_ as P}from"./Dialog.vue_vue_type_style_index_0_lang-CGAs61e8.js";import"./el-card-C9jj0kus.js";import"./index-BCiLOhqr.js";import"./el-table-column-B1k3mfGa.js";import"./debounce-lsqC8295.js";import"./el-checkbox--BT0mwB_.js";import"./isArrayLikeObject-CYjxtax4.js";import"./raf-D1egjexT.js";import"./el-tag-DNcAhGYG.js";import"./el-pagination-CDDD20a2.js";import"./el-select-Cy5vHOir.js";import"./strings-DlngudI4.js";import"./useInput-CDx1l06s.js";import"./el-image-viewer-BokRXDKf.js";import"./el-empty-iWt115hX.js";import"./tsxHelper-zo-x7Wbp.js";import"./el-dropdown-item-4FW6tlcv.js";import"./castArray-rIphTaLC.js";import"./refs-BPcd29qY.js";import"./index-DmBPbhxn.js";import"./index-C0gm2Z3K.js";import"./el-form-FbaxIhwc.js";import"./el-divider-B8qt-fQU.js";import"./el-virtual-list-DI5kRPrC.js";import"./el-select-v2-BcsVTjJZ.js";import"./index-Dv0kgatP.js";const V={class:"mb-10px"},L={class:"mb-10px"};function N(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const T=t({__name:"Poc",setup(t){const j=F({icon:"iconoir:search"}),{t:T}=h(),W=a(!1),H=a(""),R=()=>{K()},M=l([{field:"selection",type:"selection",width:"55"},{field:"name",label:T("poc.pocName"),minWidth:70},{field:"level",label:T("poc.level"),minWidth:50,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",s="";return"critical"===a?(l="red",s=T("poc.critical")):"high"===a?(l="orange",s=T("poc.high")):"medium"===a?(l="yellow",s=T("poc.medium")):"low"===a?(l="blue",s=T("poc.low")):"info"===a?(l="green",s=T("poc.info")):"unknown"===a&&(l="gray",s=T("poc.unknown")),o(w,{gutter:20,style:"width: 80%"},{default:()=>[o(x,{span:1},{default:()=>[o(i,{icon:"clarity:circle-solid",color:l,size:10},null)]}),o(x,{span:5},{default:()=>[o(S,{type:"info"},N(s)?s:{default:()=>[s]})]})]})}},{field:"time",label:T("node.createTime"),minWidth:50},{field:"action",label:T("tableDemo.action"),minWidth:30,formatter:(e,t,a)=>{let l,i;return o(n,null,[o(s,{type:"primary",onClick:()=>ae(e)},N(l=T("common.edit"))?l:{default:()=>[l]}),o(s,{type:"danger",onClick:()=>ie(e)},N(i=T("common.delete"))?i:{default:()=>[i]})])}}]),{tableRegister:O,tableState:$,tableMethods:G}=E({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=$,a=await A(H.value,e.value,t.value);return{list:a.data.list,total:a.data.total}}}),{loading:q,dataList:B,total:J,currentPage:X,pageSize:Z}=$,{getList:K,getElTableExpose:Q}=G;function Y(){return{background:"var(--el-fill-color-light)"}}let ee=l({id:"",name:"",level:"",content:""});const te=async()=>{ee.id="",ee.name="",ee.level="",ee.content="",W.value=!0},ae=async e=>{ee.id=e.id,ee.name=e.name,ee.level=e.level;const t=await I(ee.id);ee.content=t.data.content,W.value=!0},le=()=>{W.value=!1},oe=a(!1),ie=async e=>{oe.value=!0;try{await U([e.id]);oe.value=!1,K()}catch(t){oe.value=!1,K()}},se=a([]),ne=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await Q(),t=(null==e?void 0:e.getSelectionRows())||[];se.value=t.map((e=>e.id)),oe.value=!0;try{await U(se.value),oe.value=!1,K()}catch(a){oe.value=!1,K()}})()},re=r(),pe=a({Authorization:`${re.getToken}`}),ue=a(),ce=e=>{ue.value.clearFiles();const t=e[0];ue.value.handleStart(t)},me=e=>{var t;200===e.code?b.success("Upload succes"):b.error(e.message),505==e.code&&localStorage.removeItem("plugin_key"),K(),null==(t=ue.value)||t.clearFiles()},de=(e,t)=>{t.length>0&&ue.value.submit()};return(t,a)=>(p(),u(n,null,[o(m(e),null,{default:c((()=>[o(m(w),{gutter:20,style:{"margin-bottom":"15px"}},{default:c((()=>[o(m(x),{span:1.5},{default:c((()=>[o(m(S),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:c((()=>[d(g(m(T)("poc.pocName"))+":",1)])),_:1})])),_:1}),o(m(x),{span:5},{default:c((()=>[o(m(f),{modelValue:H.value,"onUpdate:modelValue":a[0]||(a[0]=e=>H.value=e),placeholder:m(T)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(m(x),{span:5,style:{position:"relative",left:"16px"}},{default:c((()=>[o(m(v),{type:"primary",icon:m(j),style:{height:"100%"},onClick:R},{default:c((()=>[d("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(m(w),{gutter:60},{default:c((()=>[o(m(x),{span:1},{default:c((()=>[y("div",V,[o(m(v),{type:"primary",onClick:te},{default:c((()=>[d(g(m(T)("common.new")),1)])),_:1})])])),_:1}),o(m(x),{span:1},{default:c((()=>[y("div",L,[o(m(s),{type:"danger",loading:oe.value,onClick:ne},{default:c((()=>[d(g(m(T)("common.delete")),1)])),_:1},8,["loading"])])])),_:1}),o(m(x),{span:3},{default:c((()=>[o(m(C),{content:m(T)("common.uploadMsg"),placement:"top"},{default:c((()=>[o(m(k),{ref_key:"upload",ref:ue,class:"flex items-center",action:"/api/poc/data/import",headers:pe.value,"on-success":me,limit:1,"on-exceed":ce,"auto-upload":!1,onChange:de},{trigger:c((()=>[o(m(s),null,{icon:c((()=>[o(m(i),{icon:"iconoir:upload"})])),default:c((()=>[d(" "+g(m(T)("plugin.import")),1)])),_:1})])),_:1},8,["headers"])])),_:1},8,["content"])])),_:1})])),_:1}),o(m(z),{pageSize:m(Z),"onUpdate:pageSize":a[1]||(a[1]=e=>_(Z)?Z.value=e:null),currentPage:m(X),"onUpdate:currentPage":a[2]||(a[2]=e=>_(X)?X.value=e:null),columns:M,data:m(B),stripe:"",border:!0,loading:m(q),resizable:!0,pagination:{total:m(J),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:m(O),headerCellStyle:Y,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(m(P),{modelValue:W.value,"onUpdate:modelValue":a[3]||(a[3]=e=>W.value=e),title:m(ee).id?t.$t("common.edit"):t.$t("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:800},{default:c((()=>[o(D,{closeDialog:le,pocForm:m(ee),getList:m(K)},null,8,["pocForm","getList"])])),_:1},8,["modelValue","title"])],64))}});export{T as default};