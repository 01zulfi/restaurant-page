(()=>{"use strict";const t=(()=>{const t=document.querySelector("#content"),e=document.createElement("h1"),n=document.createElement("div"),o=document.createElement("button"),c=document.createElement("button"),u=document.createElement("button"),d=document.createElement("div"),m=document.createElement("p");return e.textContent="The Restaurant",n.id="navButtons",o.id="homeButton",o.textContent="Home",c.id="menuButton",c.textContent="Menu",u.id="contactButton",u.textContent="Contact",d.id="homeContent",m.textContent="The most succulent experience in town.",{appendContent:function(){n.append(o,c,u),d.append(m),t.append(e,n,d)}}})();console.log("working"),t.appendContent()})();