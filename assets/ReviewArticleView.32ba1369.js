import{s as p,e as i,I as h,f as A,o as r,c,a as n,q as e,k as l,F as v}from"./index.92b76dbd.js";const m=["innerHTML"],y={class:"flex mt-8 flex-row justify-start items-center"},_=["isdisabled"],w=["isdisabled"],k=["isdisabled"],g=["isdisabled"],C={__name:"ReviewArticleView",props:{id:{type:String,required:!0}},setup(o){const a=o,{getArticle:s}=p(i());var t=h(!1);A(async()=>{twttr.widgets.load()});const d=async()=>{this.isDisabled=!0,await i().approveArticle(a.id),this.isDisabled=!1},u=async()=>{this.isDisabled=!0,await i().unApproveArticle(a.id),this.isDisabled=!1},f=async()=>{this.isDisabled=!0,await i().archiveArticle(a.id),t=!1},b=async()=>{this.isDisabled=!0,await i().unArchiveArticle(a.id),this.isDisabled=!1};return(x,D)=>(r(),c(v,null,[n("div",{class:"flex flex-col items-center justify-center",innerHTML:e(s).bodyHTML},null,8,m),n("div",y,[e(s).isReviewed?l("",!0):(r(),c("button",{key:0,isdisabled:e(t),onClick:d,class:"p-1 m-2 flex items-center justify-center bg-green-500"}," Approve ",8,_)),e(s).isReviewed?(r(),c("button",{key:1,isdisabled:e(t),onClick:u,class:"p-1 m-2 flex items-center justify-center bg-green-300"}," Un-Approve ",8,w)):l("",!0),e(s).isArchived?l("",!0):(r(),c("button",{key:2,isdisabled:e(t),onClick:f,class:"p-1 m-2 flex items-center justify-center bg-yellow-500"}," Archive ",8,k)),e(s).isArchived?(r(),c("button",{key:3,isdisabled:e(t),onClick:b,class:"p-1 m-2 flex items-center justify-center bg-yellow-300"}," Un-Archive ",8,g)):l("",!0)])],64))}};export{C as default};
