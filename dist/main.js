(()=>{"use strict";const t=document.querySelector("body"),e=document.querySelector("#content"),n=document.createElement("div"),o=document.createElement("h1"),c=document.createElement("div"),i=document.createElement("button"),m=document.createElement("button"),s=document.createElement("button");o.textContent="The Restaurant",c.id="navButtons",i.id="homeButton",i.textContent="Home",m.id="menuButton",m.textContent="Menu",s.id="contactButton",s.textContent="Contact";const u=function(){c.append(i,m,s),n.append(o,c),t.insertBefore(n,e)},a=(()=>{const t={init:function(){this.cacheDom(),this.createElements(),this.setId(),this.setContent()},cacheDom:function(){this.pageContent=document.querySelector("#content")},createElements:function(){this.homeContent=document.createElement("div"),this.mottoDiv=document.createElement("div"),this.mottoText=document.createElement("p")},setId:function(){this.homeContent.id="homeContent",this.mottoDiv.id="mottoDiv",this.mottoText.id="mottoText"},setContent:function(){this.mottoText="The most succulent experience in town."}};return{attach:function(){t.init(),this.mottoDiv.append(this.mottoText),this.homeContent.append(this.mottoDiv),this.pageContent.append(this.homeContent)}.bind(t)}})(),d=(()=>{const t={init:function(){this.cacheDom(),this.createElements(),this.setId(),this.setContent()},cacheDom:function(){this.pageContent=document.querySelector("#content")},createElements:function(){this.menuContent=document.createElement("div"),this.section1=document.createElement("div"),this.section2=document.createElement("div"),this.itemA=document.createElement("div"),this.itemB=document.createElement("div"),this.itemC=document.createElement("div"),this.itemD=document.createElement("div")},setId:function(){},setContent:function(){this.section1.textContent="Section 1",this.section2.textContent="Section 2",this.itemA.textContent="Item A",this.itemB.textContent="Item B",this.itemC.textContent="Item C",this.itemD.textContent="Item D"}};return{attach:function(){t.init(),this.section1.append(this.itemA,this.itemB),this.section2.append(this.itemC,this.itemD),this.menuContent.append(this.section1,this.section2),this.pageContent.append(this.menuContent)}.bind(t)}})(),r=document.querySelector("#content"),h=document.createElement("div"),l=document.createElement("form"),C=document.createElement("label"),E=document.createElement("input"),p=document.createElement("label"),x=document.createElement("input"),v=document.createElement("label"),f=document.createElement("textArea"),D=document.createElement("div"),b=document.createElement("p"),y=document.createElement("p");b.textContent="Contact us for queries, feedback and more at this number: 0123455",y.textContent="or reach us at my@restaurant.com",C.textContent="Enter Name: ",p.textContent="Enter Email: ",v.textContent="Your message: ",h.textContent="You can also send us a message by filling out this form: ";(()=>{u(),a.attach();const t=document.querySelector("#content"),e=document.querySelector("#homeButton"),n=document.querySelector("#menuButton"),o=document.querySelector("#contactButton");function c(){t.textContent=""}e.addEventListener("click",(()=>{c(),a.attach()})),n.addEventListener("click",(()=>{c(),d.attach()})),o.addEventListener("click",(()=>{c(),l.append(C,E,p,x,v,f),D.append(b,y),h.append(D,l),r.append(h)}))})()})();