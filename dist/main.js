(()=>{"use strict";const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("div"),c=document.createElement("button"),m=document.createElement("button"),a=document.createElement("button"),d=document.createElement("p");n.textContent="The Restaurant",o.id="navButtons",c.id="homeButton",c.textContent="Home",m.id="menuButton",m.textContent="Menu",a.id="contactButton",a.textContent="Contact",t.id="homeContent",d.textContent="The most succulent experience in town.";const u=document.querySelector("#content"),r=document.createElement("div"),l=document.createElement("div"),i=document.createElement("div"),p=document.createElement("div"),E=document.createElement("div"),s=document.createElement("div"),C=document.createElement("div");l.textContent="Section 1",i.textContent="Section 2",p.textContent="Item A",E.textContent="Item B",s.textContent="Item C",C.textContent="Item D";const x=document.querySelector("#content"),v=document.createElement("div"),b=document.createElement("form"),h=document.createElement("label"),f=document.createElement("input"),y=document.createElement("label"),B=document.createElement("input"),S=document.createElement("label"),q=document.createElement("textArea"),I=document.createElement("div"),g=document.createElement("p"),A=document.createElement("p");g.textContent="Contact us for queries, feedback and more at this number: 0123455",A.textContent="or reach us at my@restaurant.com",h.textContent="Enter Name: ",y.textContent="Enter Email: ",S.textContent="Your message: ",v.textContent="You can also send us a message by filling out this form: ";o.append(c,m,a),t.append(n,o,d),e.append(t),l.append(p,E),i.append(s,C),r.append(l,i),u.append(r),b.append(h,f,y,B,S,q),I.append(g,A),v.append(I,b),x.append(v)})();