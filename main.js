(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var c=r.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p,e.p,function(){function e(e){e.stopPropagation();var t=e.target.closest(".card");return null!==t&&!t.querySelector(".card__frame").classList.contains("card__frame_absent")&&void(t.querySelector(".card__frame").classList.contains("card__frame_selected")?(t.querySelector(".card__frame").style.background="",t.querySelector(".card__weight").style.background="",t.querySelector(".card__text_selected").style.color=""):(t.querySelector(".card__frame").style.background="#2EA8E6",t.querySelector(".card__weight").style.background="#2EA8E6",t.querySelector(".card__footer-text_span").style.color="#22A7E9"))}!function(e){for(var t=0;t<e.length;t++)r=e[t],c=void 0,a=void 0,c=document.querySelector(".container"),a=function(e){var t=document.querySelector("#card__template").content.cloneNode(!0);return t.querySelector(".card__text").innerText=e.text,t.querySelector(".card__title").innerText=e.title,t.querySelector(".card__subtitle").innerText=e.subtitle,t.querySelector(".card__consist-item_pouches").innerText=e.pouches,t.querySelector(".card__consist-item_mouse").innerText=e.mouse,t.querySelector(".card__consist-item_satisfaction").innerText=e.satisfaction,t.querySelector(".card__weight__text").innerText=e.weight,t.querySelector(".card__weight__kg").innerText=e.kg,t.querySelector(".card__footer_selected").innerText=e.textSelected,t}(r),r.quantity<=0&&function(e,t){e.querySelector(".card__block").classList.add("card__block_absent"),e.querySelector(".card__frame").classList.add("card__frame_absent"),e.querySelector(".card__weight").classList.add("card__weight_absent"),e.querySelector(".card__footer-text").classList.add("card__footer_absent"),e.querySelector(".card__footer_absent").textContent="Печалька, "+t.subtitle+" закончился."}(a,r),c.appendChild(a);var r,c,a}([{text:"Сказочное заморское яство",title:"Нямушка",subtitle:"с курой",pouches:"100 порций",mouse:"5 мышей в подарок",satisfaction:"заказчик доволен",weight:5,kg:"кг",quantity:1,textSelected:"Филе из цыплят с трюфелями в бульоне."},{text:"Сказочное заморское яство",title:"Нямушка",subtitle:"с рыбой",pouches:"40 порций",mouse:"2 мыши в подарок",satisfaction:"",weight:2,kg:"кг",quantity:0,textSelected:"Головы щучьи с чесноком да свежайшая сёмгушка."},{text:"Сказочное заморское яство",title:"Нямушка",subtitle:"с фуа-гра",pouches:"10 порций",mouse:"мышь в подарок",satisfaction:"",weight:.5,kg:"кг",quantity:1,textSelected:"Печень утки разварная с артишоками."}]),document.querySelector(".container").addEventListener("click",(function(t){var r=t.target.closest(".card");return null!==r&&!r.querySelector(".card__frame").classList.contains("card__frame_absent")&&!t.target.classList.contains("card__footer-text")&&!t.target.classList.contains("card__footer_selected")&&(r.querySelector(".card__frame").classList.toggle("card__frame_selected"),r.querySelector(".card__weight").classList.toggle("card__weight_selected"),function(e){e.querySelector(".card__frame").classList.contains("card__frame_selected")?(e.querySelector(".card__text").style.display="none",e.querySelector(".card__text_selected").style.display="block",e.querySelector(".card__footer-text").style.display="none",e.querySelector(".card__footer_selected").style.display="block"):(e.querySelector(".card__text").style.display="block",e.querySelector(".card__text_selected").style.display="none",e.querySelector(".card__footer_selected").style.display="none",e.querySelector(".card__footer-text").style.display="block")}(r),void e(t))})),document.querySelector(".container").addEventListener("mouseover",e),document.querySelector(".container").addEventListener("mouseout",(function(e){e.stopPropagation();var t=e.target.closest(".card");return null!==t&&!t.querySelector(".card__frame").classList.contains("card__frame_absent")&&void(t.querySelector(".card__frame").classList.contains("card__frame_selected")?(t.querySelector(".card__frame").style.background="#E52E7A",t.querySelector(".card__weight").style.background="#E52E7A",t.querySelector(".card__text_selected").style.color="#E52E7A"):(t.querySelector(".card__frame").style.background="",t.querySelector(".card__weight").style.background="",t.querySelector(".card__footer-text_span").style.color=""))}))}()})();