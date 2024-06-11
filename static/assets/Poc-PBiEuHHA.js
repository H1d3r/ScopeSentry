import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-F13nrP2r.js";import{d as t,r as a,s as l,e as o,I as i,G as n,F as s,o as r,c as p,w as u,a as c,y as m,t as d,J as g,z as f,f as v,K as y,L as _,l as j}from"./index-KWTKF9N9.js";import{E as b,a as h}from"./el-col-t_F-vIr3.js";import{E as x}from"./el-text-bFj0OZ8x.js";import{_ as w}from"./Table.vue_vue_type_script_lang-iUd8q4UT.js";import{u as S}from"./useTable-CuwOU5m7.js";import{u as k}from"./useIcon-Ry17CHl2.js";import{g as z,d as C,a as U}from"./index-kUGlyjnD.js";import{_ as E}from"./Detail.vue_vue_type_script_setup_true_lang-DOkoS0QD.js";import{_ as P}from"./Dialog.vue_vue_type_style_index_0_lang-T5U2It3I.js";import"./el-card-9F69xyLv.js";import"./el-tooltip-w40geAFS.js";import"./el-popper-pnFa2Ecw.js";import"./el-checkbox-U1iRgEY7.js";import"./useInput-CGBP5_dt.js";import"./debounce-QvfGQs-0.js";import"./el-tag-MzjVikBY.js";import"./el-pagination-ooblyvhx.js";import"./el-image-viewer-S1bd3VyN.js";import"./tsxHelper-NOZkKkVH.js";import"./el-dropdown-item-bjCsATwt.js";import"./castArray-9Ouy5Ghy.js";import"./refs-WVQk01D0.js";import"./index-BS1c_xid.js";import"./raf-kE1zktlZ.js";import"./index-XFn6QxJu.js";import"./el-form-item-i8ZQhvu8.js";import"./el-divider-685xvbVJ.js";import"./el-select-v2-0dTEd5GK.js";import"./index-5Sd4HUcw.js";const A={class:"mb-10px"},D={class:"mb-10px"};function F(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_(e)}const I=t({__name:"Poc",setup(t){const _=k({icon:"iconoir:search"}),{t:I}=j(),L=a(!1),R=a(""),T=()=>{$()},V=l([{field:"selection",type:"selection",width:"55"},{field:"name",label:I("poc.pocName"),minWidth:70},{field:"level",label:I("poc.level"),minWidth:50,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",n="";return 6===a?(l="red",n=I("poc.critical")):5===a?(l="orange",n=I("poc.high")):4===a?(l="yellow",n=I("poc.medium")):3===a?(l="blue",n=I("poc.low")):2===a?(l="green",n=I("poc.info")):1===a&&(l="gray",n=I("poc.unknown")),o(h,{gutter:20,style:"width: 80%"},{default:()=>[o(b,{span:1},{default:()=>[o(i,{icon:"clarity:circle-solid",color:l,size:10},null)]}),o(b,{span:5},{default:()=>[o(x,{type:"info"},F(n)?n:{default:()=>[n]})]})]})}},{field:"time",label:I("node.createTime"),minWidth:50},{field:"action",label:I("tableDemo.action"),minWidth:30,formatter:(e,t,a)=>{let l,i;return o(s,null,[o(n,{type:"primary",onClick:()=>Y(e)},F(l=I("common.edit"))?l:{default:()=>[l]}),o(n,{type:"danger",onClick:()=>te(e)},F(i=I("common.delete"))?i:{default:()=>[i]})])}}]),{tableRegister:N,tableState:W,tableMethods:H}=S({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=W,a=await U(R.value,e.value,t.value);return{list:a.data.list,total:a.data.total}}}),{loading:G,dataList:J,total:K,currentPage:M,pageSize:O}=W,{getList:$,getElTableExpose:q}=H;function B(){return{background:"var(--el-fill-color-light)"}}let Q=l({id:"",name:"",level:0,content:""});const X=async()=>{Q.id="",Q.name="",Q.level=1,Q.content="",L.value=!0},Y=async e=>{Q.id=e.id,Q.name=e.name,Q.level=e.level;const t=await z(Q.id);Q.content=t.data.content,L.value=!0},Z=()=>{L.value=!1},ee=a(!1),te=async e=>{ee.value=!0;try{await C([e.id]);ee.value=!1,$()}catch(t){ee.value=!1,$()}},ae=a([]),le=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await q(),t=(null==e?void 0:e.getSelectionRows())||[];ae.value=t.map((e=>e.id)),ee.value=!0;try{await C(ae.value),ee.value=!1,$()}catch(a){ee.value=!1,$()}})()};return(t,a)=>(r(),p(s,null,[o(c(e),null,{default:u((()=>[o(c(h),{gutter:20,style:{"margin-bottom":"15px"}},{default:u((()=>[o(c(b),{span:1.5},{default:u((()=>[o(c(x),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:u((()=>[m(d(c(I)("poc.pocName"))+":",1)])),_:1})])),_:1}),o(c(b),{span:5},{default:u((()=>[o(c(g),{modelValue:R.value,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value=e),placeholder:c(I)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(c(b),{span:5,style:{position:"relative",left:"16px"}},{default:u((()=>[o(c(f),{type:"primary",icon:c(_),style:{height:"100%"},onClick:T},{default:u((()=>[m("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(c(h),{gutter:60},{default:u((()=>[o(c(b),{span:1},{default:u((()=>[v("div",A,[o(c(f),{type:"primary",onClick:X},{default:u((()=>[m(d(c(I)("common.new")),1)])),_:1})])])),_:1}),o(c(b),{span:1},{default:u((()=>[v("div",D,[o(c(n),{type:"danger",loading:ee.value,onClick:le},{default:u((()=>[m(d(c(I)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),o(c(w),{pageSize:c(O),"onUpdate:pageSize":a[1]||(a[1]=e=>y(O)?O.value=e:null),currentPage:c(M),"onUpdate:currentPage":a[2]||(a[2]=e=>y(M)?M.value=e:null),columns:V,data:c(J),stripe:"",border:!0,loading:c(G),resizable:!0,pagination:{total:c(K),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:c(N),headerCellStyle:B,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(c(P),{modelValue:L.value,"onUpdate:modelValue":a[3]||(a[3]=e=>L.value=e),title:c(Q).id?t.$t("common.edit"):t.$t("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:800},{default:u((()=>[o(E,{closeDialog:Z,pocForm:c(Q),getList:c($)},null,8,["pocForm","getList"])])),_:1},8,["modelValue","title"])],64))}});export{I as default};