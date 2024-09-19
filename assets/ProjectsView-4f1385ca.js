import{o,c as r,t as a,a as e,b as d,s as p,d as _,u as l,F as u,r as m,e as h}from"./index-158be7ea.js";import{u as x}from"./ProjectStore-2ec6d0f3.js";const f={class:"w-fit rounded-2xl px-2 text-sm outline outline-1"},j={__name:"Badge",props:{name:String},setup(s){const t=s;return(c,n)=>(o(),r("span",f,a(t.name),1))}},g={class:"w-96"},b=["src"],$={class:"flex flex-col gap-2 rounded-b-2xl bg-transparent p-8 shadow-2xl shadow-black backdrop-blur-[1px]"},k={class:"text-xl font-bold"},v={class:"text-sm"},P={class:"flex items-center justify-end gap-3"},y=["href"],w=["href"],B={class:"mt-2 flex justify-end"},V="http://api.bigmath.dev/storage/images/",S={__name:"ProjectPresentationCard",props:{project:Object},setup(s){const t=s;return(c,n)=>(o(),r("div",g,[e("figure",null,[e("img",{class:"rounded-t-2xl",src:`${V}${s.project.imagem}`,alt:""},null,8,b)]),e("main",$,[e("h2",k,a(t.project.nome),1),e("p",v,a(t.project.descricao),1),e("div",P,[e("a",{href:t.project.repositorio,class:"rounded-md p-2 outline outline-1"},"Repositorio",8,y),e("a",{href:t.project.deploy,class:"rounded-md p-2 outline outline-1"},"Projeto online",8,w)]),e("div",B,[d(j,{name:"Vue.js"})])])]))}},N={class:"flex flex-col gap-10"},R=e("h1",{class:"text-center text-xl font-bold lg:text-4xl"},"Projetos",-1),C={class:"flex gap-3"},D={__name:"ProjectsView",props:{darkMode:{type:Boolean,required:!0}},setup(s){const t=x(),{projects:c}=p(t),{getProjects:n}=t;return _(n),(F,L)=>(o(),r("div",N,[R,e("div",C,[l(c)?(o(!0),r(u,{key:0},m(l(c).data,i=>(o(),r("div",null,[d(S,{project:i},null,8,["project"])]))),256)):h("",!0)])]))}};export{D as default};
