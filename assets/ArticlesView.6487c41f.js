import{s as l,e as g,g as u,o as t,c as o,h as i,y as r,D as f,F as _,i as p,q as h}from"./index.c69d72d9.js";import{_ as v}from"./ArticleComponent.7f1ba9e1.js";import{g as x}from"./index.fad5f3ca.js";const y={class:"grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"},w=["data-index"],P={__name:"ArticlesView",setup(A){const{getWriterArticles:a}=l(g());function m(s,n){x.fromTo(s,{opacity:.01,scale:.01},{scale:1,opacity:1,delay:s.dataset.index*.15,onComplete:n})}return(s,n)=>{const d=u("router-link");return t(),o("div",y,[i(f,{css:!1,onEnter:m},{default:r(()=>[(t(!0),o(_,null,p(h(a),(e,c)=>(t(),o("div",{key:e._id,"data-index":c,class:"flex flex-col items-center justify-center"},[i(d,{to:"editArticle/"+e._id},{default:r(()=>[i(v,{title:e.title,numcomments:e.numComments,category:e.category,imageUrl:e.imageUrl,isPinned:e.isPinned,isArchived:e.isArchived,isReviewed:e.isReviewed,rating:e.rating,numberOfRatings:e.numberOfRatings,moods:e.moods,author:e.writer.nickName,authorProfileImage:e.writer.profileImageUrl},null,8,["title","numcomments","category","imageUrl","isPinned","isArchived","isReviewed","rating","numberOfRatings","moods","author","authorProfileImage"])]),_:2},1032,["to"])],8,w))),128))]),_:1})])}}};export{P as default};
