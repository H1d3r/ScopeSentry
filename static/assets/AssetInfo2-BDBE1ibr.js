import{Y as e,Z as a,$ as t,a0 as l,a1 as s,a2 as i,a3 as o,a4 as n,r,O as u,a5 as d,a6 as p,a7 as c,d as m,o as f,c as v,a8 as h,n as b,a as g,a9 as y,aa as x,ab as _,f as j,y as k,t as C,e as w,w as S,ac as I,A as z,ad as H,ae as E,Q as V,af as A,ag as $,ah as N,u as K,s as P,S as W,v as L,G as O,z as T,E as U,C as F,F as R,P as D,i as B,R as M,H as Y,I as J,l as G,ai as Z,aj as q,_ as Q}from"./index-CLgjJy2L.js";import{u as X}from"./useTable-BBFhiX-d.js";import{_ as ee}from"./Dialog.vue_vue_type_style_index_0_lang-DjrQx5cp.js";import{E as ae,a as te}from"./el-col-CeS9FF_9.js";import{E as le}from"./el-card-CdvbZBex.js";import{E as se}from"./el-tag-D6hIb9V5.js";import"./el-tooltip-l0sNRNKZ.js";import{E as ie}from"./el-popper-CaFR7Cjt.js";import{E as oe}from"./el-pagination-uR_gQTrf.js";import"./el-select-CFiSjX0y.js";import{E as ne}from"./el-link-B6uLfNu7.js";import{E as re}from"./el-text-CilU8fZt.js";import{_ as ue}from"./Table.vue_vue_type_script_lang-DJc-YjoG.js";import{u as de}from"./useCrudSchemas-BNfnOYNF.js";import{a as pe,d as ce,g as me,b as fe,c as ve,e as he,f as be}from"./index-CvkfUjEv.js";import ge from"./Csearch-BKAzA99Y.js";import{c as ye}from"./index-CTDNbWJS.js";import{_ as xe}from"./AssetDetail2.vue_vue_type_script_setup_true_lang-1ik3SEkG.js";import{c as _e}from"./castArray-CcAiHetO.js";import{_ as je}from"./index-lC7y--4k.js";import"./refs-Dw-H7609.js";import"./index-Cu272xPu.js";import"./strings-BAPUa2fl.js";import"./useInput-DX4to9HK.js";import"./debounce-CIcVECfT.js";import"./el-table-column-DrBbA1UV.js";import"./el-checkbox-DbDCqMQu.js";import"./isArrayLikeObject-CRQFYJ_t.js";import"./raf-BLHXPmBe.js";import"./el-image-viewer-BF14MS9t.js";import"./el-empty-D1z8uu7s.js";import"./tsxHelper-Cn3mpvqc.js";import"./el-dropdown-item-Dcg5gyE9.js";import"./index-D38LGGz3.js";import"./tree-BfZhwLPs.js";import"./index-1Oi9uy0T.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-CTGngVvL.js";import"./el-divider-B2v5rJA4.js";import"./el-tree-select-DVbM0TDa.js";import"./el-switch-CUkbzPfV.js";import"./useIcon-_gcsYpvG.js";import"./exportData.vue_vue_type_script_setup_true_lang-DPbv2ffT.js";import"./el-tab-pane-Cs08tY8r.js";import"./el-form-CyQCNofw.js";import"./el-radio-group-BjW4huAo.js";import"./el-space-C7OHU1lt.js";import"./index-CKeViIeq.js";const ke=e=>i(e)||o(e)||n(e),Ce=e({accordion:Boolean,modelValue:{type:a([Array,String,Number]),default:()=>t([])}}),we={[l]:ke,[s]:ke},Se=Symbol("collapseContextKey"),Ie=m({name:"ElCollapse"});var ze=y(m({...Ie,props:Ce,emits:we,setup(e,{expose:a,emit:t}){const i=e,{activeNames:o,setActiveNames:n}=((e,a)=>{const t=r(_e(e.modelValue)),i=i=>{t.value=i;const o=e.accordion?t.value[0]:t.value;a(l,o),a(s,o)};return u((()=>e.modelValue),(()=>t.value=_e(e.modelValue)),{deep:!0}),d(Se,{activeNames:t,handleItemClick:a=>{if(e.accordion)i([t.value[0]===a?"":a]);else{const e=[...t.value],l=e.indexOf(a);l>-1?e.splice(l,1):e.push(a),i(e)}}}),{activeNames:t,setActiveNames:i}})(i,t),{rootKls:m}=(()=>{const e=p("collapse");return{rootKls:c((()=>e.b()))}})();return a({activeNames:o,setActiveNames:n}),(e,a)=>(f(),v("div",{class:b(g(m))},[h(e.$slots,"default")],2))}}),[["__file","collapse.vue"]]);const He=e({title:{type:String,default:""},name:{type:a([String,Number]),default:void 0},disabled:Boolean}),Ee=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],Ve=["id","aria-hidden","aria-labelledby"],Ae=m({name:"ElCollapseItem"});var $e=y(m({...Ae,props:He,setup(e,{expose:a}){const t=e,{focusing:l,id:s,isActive:i,handleFocus:o,handleHeaderClick:n,handleEnterClick:u}=(e=>{const a=x(Se),{namespace:t}=p("collapse"),l=r(!1),s=r(!1),i=_(),o=c((()=>i.current++)),n=c((()=>{var a;return null!=(a=e.name)?a:`${t.value}-id-${i.prefix}-${g(o)}`})),u=c((()=>null==a?void 0:a.activeNames.value.includes(g(n))));return{focusing:l,id:o,isActive:u,handleFocus:()=>{setTimeout((()=>{s.value?s.value=!1:l.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==a||a.handleItemClick(g(n)),l.value=!1,s.value=!0)},handleEnterClick:()=>{null==a||a.handleItemClick(g(n))}}})(t),{arrowKls:d,headKls:m,rootKls:y,itemWrapperKls:$,itemContentKls:N,scopedContentId:K,scopedHeadId:P}=((e,{focusing:a,isActive:t,id:l})=>{const s=p("collapse"),i=c((()=>[s.b("item"),s.is("active",g(t)),s.is("disabled",e.disabled)])),o=c((()=>[s.be("item","header"),s.is("active",g(t)),{focusing:g(a)&&!e.disabled}]));return{arrowKls:c((()=>[s.be("item","arrow"),s.is("active",g(t))])),headKls:o,rootKls:i,itemWrapperKls:c((()=>s.be("item","wrap"))),itemContentKls:c((()=>s.be("item","content"))),scopedContentId:c((()=>s.b(`content-${g(l)}`))),scopedHeadId:c((()=>s.b(`head-${g(l)}`)))}})(t,{focusing:l,isActive:i,id:s});return a({isActive:i}),(e,a)=>(f(),v("div",{class:b(g(y))},[j("button",{id:g(P),class:b(g(m)),"aria-expanded":g(i),"aria-controls":g(K),"aria-describedby":g(K),tabindex:e.disabled?-1:0,type:"button",onClick:a[0]||(a[0]=(...e)=>g(n)&&g(n)(...e)),onKeydown:a[1]||(a[1]=H(E(((...e)=>g(u)&&g(u)(...e)),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...e)=>g(o)&&g(o)(...e)),onBlur:a[3]||(a[3]=e=>l.value=!1)},[h(e.$slots,"title",{},(()=>[k(C(e.title),1)])),w(g(z),{class:b(g(d))},{default:S((()=>[w(g(I))])),_:1},8,["class"])],42,Ee),w(g(je),null,{default:S((()=>[V(j("div",{id:g(K),role:"region",class:b(g($)),"aria-hidden":!g(i),"aria-labelledby":g(P)},[j("div",{class:b(g(N))},[h(e.$slots,"default")],2)],10,Ve),[[A,g(i)]])])),_:3})],2))}}),[["__file","collapse-item.vue"]]);const Ne=$(ze,{CollapseItem:$e}),Ke=N($e),Pe=["onClick"],We=["onClick"],Le=["onClick"],Oe=["src","onClick"];function Te(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!J(e)}const Ue=Q(m({__name:"AssetInfo2",props:{projectList:{}},setup(e){K();const{t:a}=G(),t=[{keyword:"app",example:'app="Nginx"',explain:a("searchHelp.app")},{keyword:"body",example:'body="bootstrap.min.css"',explain:a("searchHelp.body")},{keyword:"header",example:'header="rememberMe"',explain:a("searchHelp.header")},{keyword:"title",example:'title="admin console"',explain:a("searchHelp.title")},{keyword:"statuscode",example:'statuscode=="403"',explain:a("searchHelp.statuscode")},{keyword:"icon",example:'icon="54256234"',explain:a("searchHelp.icon")},{keyword:"ip",example:'ip="192.168.2.1"',explain:a("searchHelp.ip")},{keyword:"port",example:'port="3306"',explain:a("searchHelp.port")},{keyword:"domain",example:'domain="example.com"',explain:a("searchHelp.domain")},{keyword:"service",example:'service="ssh"',explain:a("searchHelp.protocol")},{keyword:"banner",example:'banner="SSH-2.0-OpenSSH"',explain:a("searchHelp.banner")},{keyword:"project",example:'project="Hackerone"',explain:a("searchHelp.project")}],l=r(!0),s=r(""),i=e=>{s.value=e,l.value=!0,o.value.Icon=[],J(),l.value=!1};let o=r({Port:[],Service:[],Product:[],Icon:[]}),n=1;const u=P({});let d=P([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:a("tableDemo.index"),type:"index",minWidth:"15"},{field:"domain",label:a("asset.domain"),minWidth:"200",formatter:(e,a,t)=>w("div",{class:"flex"},[w(W,{icon:"material-symbols-light:bring-your-own-ip",style:"transform: translateY(35%)",size:16,color:"#409eff"},null),w(ne,{href:"http"===e.type?e.url:`${e.service}://${t}`,underline:!1,target:"_blank"},{default:()=>["http"===e.type?e.url:`${e.service}://${t}`]})])},{field:"ip",label:a("asset.IP"),minWidth:"130",formatter:(e,a,t)=>w("div",{class:"flex"},[w(W,{icon:"arcticons:ip-tools",style:"transform: translateY(30%)",size:15,color:"red"},null),w(ne,{href:e.url,underline:!1},Te(t)?t:{default:()=>[t]})])},{field:"port",label:a("asset.port")+"/"+a("asset.service"),minWidth:"110",formatter:(e,a,t)=>""==e.service?w("div",null,[t]):w("div",{class:"flex"},[w("div",null,[t]),w(se,{type:"info",effect:"dark",round:!0,size:"small",style:"top: 2px; left:6px; position:relative"},{default:()=>[e.service]})])},{field:"status",label:a("asset.status"),minWidth:"85",columnKey:"statuscode",formatter:(e,a,t)=>{if(null==t)return w("div",null,[k("-")]);let l="";return l=t<300?"#2eb98a":"#ff5252",w(te,{gutter:10},{default:()=>[w(ae,{span:2},{default:()=>[w(W,{icon:"clarity:circle-solid",color:l,size:6,style:"transform: translateY(-35%)"},null)]}),w(ae,{span:18},{default:()=>[w(re,null,Te(t)?t:{default:()=>[t]})]})]})},filters:[{text:"200",value:200},{text:"201",value:201},{text:"204",value:204},{text:"301",value:301},{text:"302",value:302},{text:"304",value:304},{text:"400",value:400},{text:"401",value:401},{text:"403",value:403},{text:"404",value:404},{text:"500",value:500},{text:"502",value:502},{text:"503",value:503},{text:"504",value:504}]},{field:"title",label:a("asset.title"),minWidth:"150",formatter:(e,a,t)=>{if(null!=t&&""!=t||(t=""),""==e.icon||null==e.icon)return w(te,{gutter:10},{default:()=>[w(ae,{span:24},{default:()=>[w(re,{size:"small",class:"w-200px mb-2",truncated:!0},Te(t)?t:{default:()=>[t]})]})]});const l="data:image/png;base64,"+e.icon;return w(te,{gutter:20},{default:()=>[w(ae,{span:2},{default:()=>[w("img",{src:l,alt:"Icon",style:"width: 20px; height: 20px"},null)]}),w(ae,{span:18},{default:()=>[w(re,{size:"small",class:"w-200px mb-2",truncated:!0},Te(t)?t:{default:()=>[t]})]})]})}},{field:"tags",label:"TAG",fit:"true",formatter:(e,a,t)=>{u[e.id]||(u[e.id]={inputVisible:!1,inputValue:"",inputRef:r(null)});const l=u[e.id],s=async()=>{l.inputValue&&(t.push(l.inputValue),pe(e.id,m,l.inputValue)),l.inputVisible=!1,l.inputValue=""};return L(te,{},(()=>[...t.map((a=>L(ae,{span:24,key:a},(()=>[L("div",{onClick:e=>((e,a)=>{e.target.classList.contains("el-tag__close")||Ie("tags",a)})(e,a)},[L(se,{closable:!0,onClose:()=>(async a=>{const l=t.indexOf(a);l>-1&&t.splice(l,1),ce(e.id,m,a)})(a)},(()=>a))])])))),L(ae,{span:24},l.inputVisible?()=>L(O,{ref:l.inputRef,modelValue:l.inputValue,"onUpdate:modelValue":e=>l.inputValue=e,class:"w-20",size:"small",onKeyup:e=>{"Enter"===e.key&&s()},onBlur:s}):()=>L(T,{class:"button-new-tag",size:"small",onClick:()=>(l.inputVisible=!0,void Z((()=>{})))},(()=>"+ New Tag")))]))},minWidth:"130"},{field:"banner",label:a("asset.banner"),fit:"true",formatter:(e,a,t)=>{const l=t.split("\n").map(((e,a)=>w("div",{key:a},[e])));return w(U,{height:"100px"},{default:()=>[w("div",{class:"scrollbar-demo-item"},[l])]})},minWidth:"190"},{field:"products",label:a("asset.products"),minWidth:"110",formatter:(e,a,t)=>{if(0!=t.length){let e;return w(te,{style:{flexWrap:"wrap"}},Te(e=t.map((e=>w(ae,{span:24,key:e},{default:()=>[w("div",{onClick:()=>Ie("app",e),style:"display: inline-block; cursor: pointer"},[w(se,{type:"success"},Te(e)?e:{default:()=>[e]})])]}))))?e:{default:()=>[e]})}}},{field:"screenshot",label:a("asset.screenshot"),minWidth:"170",formatter:e=>{if(null!=e.screenshot)return""!=e.screenshot?w("img",{src:`${e.screenshot}`,alt:"screenshot",style:{width:"100%",height:"auto"},onClick:()=>c(e.screenshot)},null):void 0}},{field:"time",label:a("asset.time"),minWidth:"170"},{field:"action",label:a("tableDemo.action"),fixed:"right",formatter:(e,t,l)=>{let s;return w(R,null,[w(F,{type:"primary",onClick:()=>Fe(e.id,e.service+"://"+e.domain,e.ip,e.port)},Te(s=a("asset.detail"))?s:{default:()=>[s]})])},minWidth:"100"}]);const p=async e=>{Object.assign(Ce,e),J()},c=e=>{ye({urlList:[e]})};let m="asset";d.forEach((e=>{e.hidden=e.hidden??!1}));let h=r(!1);const b=()=>{const e=d.reduce(((e,a)=>(e[a.field]=a.hidden,e)),{});e.statisticsHidden=h.value,localStorage.setItem(`columnConfig_${m}`,JSON.stringify(e))},y=({field:e,hidden:a})=>{const t=d.findIndex((a=>a.field===e));-1!==t&&(d[t].hidden=a),b()};(()=>{const e=JSON.parse(localStorage.getItem(`columnConfig_${m}`)||"{}");d.forEach((a=>{void 0!==e[a.field]&&"select"!=a.field&&(a.hidden=e[a.field])})),h.value=e.statisticsHidden})();const{allSchemas:x}=de(d),{tableRegister:_,tableState:I,tableMethods:z}=X({fetchDataApi:async()=>{(async()=>{o.value.Port=[],o.value.Service=[],o.value.Product=[],l.value=!0,o.value.Icon=[];const[e,a,t]=await Promise.all([ve(s.value,Ce),he(s.value,Ce),be(s.value,Ce)]);o.value.Port=e.data.Port,o.value.Service=a.data.Service,o.value.Product=t.data.Product,l.value=!1;let i=await fe(s.value,Ce,n,50);o.value.Icon=i.data.Icon})();const{currentPage:e,pageSize:a}=I,t=await me(s.value,e.value,a.value,Ce);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:H,dataList:E,total:A,currentPage:$,pageSize:N}=I,{getList:J,getElTableExpose:Q}=z;function _e(){return{background:"var(--el-fill-color-light)"}}function je(){return{maxheight:"10px"}}const ke=r(["1","2","3","4","5"]),Ce=P({}),we=(e,a)=>{Object.assign(Ce,a),s.value=e,J()},Se=r([]),Ie=(e,a)=>{const t=`${e}=${a}`;Se.value=[...Se.value,t]},ze=e=>{if(Se.value){const[a,t]=e.split("=");a in Ce&&Array.isArray(Ce[a])&&(Ce[a]=Ce[a].filter((e=>e!==t)),0===Ce[a].length&&delete Ce[a]),Se.value=Se.value.filter((a=>a!==e))}},He=e=>{h.value=e,b()},Ee=r(!1),Ve=r(""),Ae=r(""),$e=r(""),Ue=r(),Fe=(e,a,t,l)=>{Ae.value="",$e.value="",Ue.value=null,Ve.value=e,Ae.value=a,$e.value=t,Ue.value=l,Ee.value=!0},Re=r(!1),De=r(),Be=({scrollTop:e})=>{var a;const t=null==(a=De.value)?void 0:a.wrapRef;if(!t||Re.value)return;const{scrollHeight:l,clientHeight:s}=t;l-(e+s)<20&&Me()},Me=async()=>{var e;try{Re.value=!0,n++;const a=await fe(s.value,Ce,n,50);(null==(e=a.data.Icon)?void 0:e.length)&&o.value.Icon.push(...a.data.Icon)}finally{Re.value=!1}};return(e,s)=>{const n=D("loading");return f(),v(R,null,[w(ge,{getList:g(J),handleSearch:i,searchKeywordsData:t,index:"asset",getElTableExpose:g(Q),projectList:e.$props.projectList,handleFilterSearch:we,dynamicTags:Se.value,handleClose:ze,crudSchemas:g(d),onUpdateColumnVisibility:y,statisticsHidden:g(h),changeStatisticsHidden:He},null,8,["getList","getElTableExpose","projectList","dynamicTags","crudSchemas","statisticsHidden"]),w(g(te),{gutter:3},{default:S((()=>[w(g(ae),{span:g(h)?0:3},{default:S((()=>[V((f(),B(g(le),null,{default:S((()=>[j("div",null,[w(g(te),null,{default:S((()=>[w(g(ae),{span:12},{default:S((()=>[w(g(re),{tag:"b",size:"small"},{default:S((()=>[k(C(g(a)("asset.assetTotalNum"))+":",1)])),_:1})])),_:1}),w(g(ae),{span:12,style:{"text-align":"end"}},{default:S((()=>[w(g(re),{size:"small"},{default:S((()=>[k(C(g(A)),1)])),_:1})])),_:1})])),_:1})]),w(g(Ne),{modelValue:ke.value,"onUpdate:modelValue":s[0]||(s[0]=e=>ke.value=e),style:{position:"relative",top:"15px"}},{default:S((()=>[w(g(Ke),{name:"2"},{title:S((()=>[w(g(re),{tag:"b",size:"small"},{default:S((()=>[k(C(g(a)("asset.port")),1)])),_:1})])),default:S((()=>[w(g(U),{height:"20rem"},{default:S((()=>[(f(!0),v(R,null,M(g(o).Port,(e=>(f(),B(g(te),{key:e.value},{default:S((()=>[w(g(ae),{span:12},{default:S((()=>[j("div",{onClick:a=>Ie("port",e.value),style:{display:"inline-block",cursor:"pointer"}},[w(g(se),{effect:"light",round:"",size:"small"},{default:S((()=>[k(C(e.value),1)])),_:2},1024)],8,Pe)])),_:2},1024),w(g(ae),{span:12,style:{"text-align":"end"}},{default:S((()=>[w(g(re),{size:"small"},{default:S((()=>[k(C(e.number),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),w(g(Ke),{name:"3"},{title:S((()=>[w(g(re),{tag:"b",size:"small"},{default:S((()=>[k(C(g(a)("asset.service")),1)])),_:1})])),default:S((()=>[w(g(U),{height:"13rem"},{default:S((()=>[(f(!0),v(R,null,M(g(o).Service,(e=>(f(),B(g(te),{key:e.value},{default:S((()=>[w(g(ae),{span:12},{default:S((()=>[j("div",{onClick:a=>Ie("service",e.value),style:{display:"inline-block",cursor:"pointer"}},[w(g(se),{effect:"light",round:"",size:"small"},{default:S((()=>[k(C(e.value),1)])),_:2},1024)],8,We)])),_:2},1024),w(g(ae),{span:12,style:{"text-align":"end"}},{default:S((()=>[w(g(re),{size:"small"},{default:S((()=>[k(C(e.number),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),w(g(Ke),{name:"4"},{title:S((()=>[w(g(re),{tag:"b",size:"small"},{default:S((()=>[k(C(g(a)("asset.products")),1)])),_:1})])),default:S((()=>[w(g(U),{height:"20rem"},{default:S((()=>[(f(!0),v(R,null,M(g(o).Product,(e=>(f(),B(g(te),{key:e.value},{default:S((()=>[w(g(ae),{span:12},{default:S((()=>[j("div",{onClick:a=>Ie("app",e.value),style:{display:"inline-block",cursor:"pointer"}},[w(g(se),{effect:"light",round:"",size:"small"},{default:S((()=>[k(C(e.value),1)])),_:2},1024)],8,Le)])),_:2},1024),w(g(ae),{span:12,style:{"text-align":"end"}},{default:S((()=>[w(g(re),{size:"small"},{default:S((()=>[k(C(e.number),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),w(g(Ke),{name:"5"},{title:S((()=>[w(g(re),{tag:"b",size:"small"},{default:S((()=>[k("icon")])),_:1})])),default:S((()=>[w(g(U),{ref_key:"scrollbarRef",ref:De,height:"25rem",onScroll:Be},{default:S((()=>[w(g(te),{style:{"margin-top":"10px","margin-left":"10px"}},{default:S((()=>[(f(!0),v(R,null,M(g(o).Icon,(e=>(f(),B(g(ae),{span:8,key:e.value},{default:S((()=>[w(g(q),{value:e.number,max:99,style:{"font-size":"8px"}},{default:S((()=>[w(g(ie),{content:e.icon_hash,placement:"top-start"},{default:S((()=>[j("img",{src:"data:image/png;base64,"+e.value,alt:"Icon",style:{width:"30px",height:"30px"},onClick:a=>Ie("icon",e.icon_hash)},null,8,Oe)])),_:2},1032,["content"])])),_:2},1032,["value"])])),_:2},1024)))),128))])),_:1})])),_:1},512)])),_:1})])),_:1},8,["modelValue"])])),_:1})),[[n,l.value]])])),_:1},8,["span"]),w(g(ae),{span:g(h)?24:21},{default:S((()=>[w(g(te),null,{default:S((()=>[w(g(ae),{span:24},{default:S((()=>[w(g(le),null,{default:S((()=>[w(g(ue),{columns:g(x).tableColumns,data:g(E),stripe:"",border:!0,loading:g(H),onFilterChange:p,rowStyle:je,resizable:!0,onRegister:g(_),headerCellStyle:_e,"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!1},style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["columns","data","loading","onRegister"])])),_:1})])),_:1}),w(g(ae),{":span":24},{default:S((()=>[w(g(le),null,{default:S((()=>[w(g(oe),{pageSize:g(N),"onUpdate:pageSize":s[1]||(s[1]=e=>Y(N)?N.value=e:null),currentPage:g($),"onUpdate:currentPage":s[2]||(s[2]=e=>Y($)?$.value=e:null),"page-sizes":[10,20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:g(A)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1})])),_:1},8,["span"])])),_:1}),w(g(ee),{modelValue:Ee.value,"onUpdate:modelValue":s[3]||(s[3]=e=>Ee.value=e),title:g(a)("asset.detail"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"50%"},{default:S((()=>[w(xe,{id:Ve.value,host:Ae.value,ip:$e.value,port:Ue.value},null,8,["id","host","ip","port"])])),_:1},8,["modelValue","title"])],64)}}}),[["__scopeId","data-v-fbdbbe12"]]);export{Ue as default};