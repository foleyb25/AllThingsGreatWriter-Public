import{s as p,e as i,G as _,f as m,o as r,c,a as l,t as y,q as t,k as n,F as A}from"./index.533ef80a.js";const b={class:"mt-6 w-full flex flex-col items-center justify-center"},h={class:"w-[90%] bg-white flex flex-col justify-center items-center"},w=["innerHTML"],g={class:"flex mt-8 flex-row justify-start items-center"},x=["isdisabled"],k=["isdisabled"],j=["isdisabled"],C=["isdisabled"],B={__name:"ReviewArticleView",props:{id:{type:String,required:!0}},setup(o){const a=o,{getArticle:s}=p(i());var e=_(!1);m(async()=>{twttr.widgets.load()});const d=async()=>{e.value=!0,await i().approveArticle(a.id),e.value=!1},u=async()=>{e.value=!0,await i().unApproveArticle(a.id),e.value=!1},f=async()=>{e.value=!0,await i().archiveArticle(a.id),e.value=!1},v=async()=>{e.value=!0,await i().unArchiveArticle(a.id),e.value=!1};return(M,R)=>(r(),c(A,null,[l("div",b,[l("div",h,[l("h1",null,y(t(s).title),1),l("div",{innerHTML:t(s).bodyHTML},null,8,w)])]),l("div",g,[t(s).isReviewed?n("",!0):(r(),c("button",{key:0,isdisabled:t(e),onClick:d,class:"p-1 m-2 flex items-center justify-center bg-green-500"}," Approve ",8,x)),t(s).isReviewed?(r(),c("button",{key:1,isdisabled:t(e),onClick:u,class:"p-1 m-2 flex items-center justify-center bg-green-300"}," Un-Approve ",8,k)):n("",!0),t(s).isArchived?n("",!0):(r(),c("button",{key:2,isdisabled:t(e),onClick:f,class:"p-1 m-2 flex items-center justify-center bg-yellow-500"}," Archive ",8,j)),t(s).isArchived?(r(),c("button",{key:3,isdisabled:t(e),onClick:v,class:"p-1 m-2 flex items-center justify-center bg-yellow-300"}," Un-Archive ",8,C)):n("",!0)])],64))}};export{B as default};
