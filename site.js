window.tr=function(s){return s};
(function(){
var d=document,h=d.documentElement,top=d.querySelector(".top"),mn=d.getElementById("mn");
function mk(t,c,html){var e=d.createElement(t);e.className=c;if(html)e.innerHTML=html;d.body.appendChild(e);return e}
var bar=mk("div","pbar");
var wa=mk("a","wafab",'<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.7-5.1A8.5 8.5 0 1 1 21 12z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.6-2-1-.8.7a4 4 0 0 1-1.9-1.9l.7-.8-1-2z"/></svg>');
wa.href="https://wa.me/919053155257?text="+encodeURIComponent("Hello, I would like to know more about BizLedger.");
wa.target="_blank";wa.rel="noopener";wa.setAttribute("aria-label","Chat on WhatsApp");
var up=mk("button","upfab",'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>');
up.setAttribute("aria-label","Back to top");
up.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};
var tick=false;
function on(){var y=window.scrollY||h.scrollTop,m=h.scrollHeight-h.clientHeight;
bar.style.transform="scaleX("+(m>0?y/m:0)+")";
if(top)top.classList.toggle("sc",y>8);
up.classList.toggle("show",y>500);tick=false}
window.addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(on)}},{passive:true});on();
if(mn){
d.querySelectorAll(".nav a").forEach(function(a){a.addEventListener("click",function(){mn.checked=false})});
d.addEventListener("keydown",function(e){if(e.key==="Escape")mn.checked=false});
window.addEventListener("resize",function(){if(window.innerWidth>820)mn.checked=false});
}
})();
