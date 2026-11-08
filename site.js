/* EDIT YOUR SOCIAL LINKS HERE (only place to change) */
var SOCIAL={instagram:"https://instagram.com/YOUR_INSTAGRAM_HANDLE",youtube:"https://youtube.com/@YOUR_YOUTUBE_HANDLE"};
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("a[data-s]").forEach(function(a){var u=SOCIAL[a.getAttribute("data-s")];if(u)a.href=u})});
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

(function(){var d=document,h=d.documentElement,bar=d.querySelector(".bar");
try{var t=localStorage.getItem("bl_theme");if(t)h.setAttribute("data-theme",t)}catch(e){}
var b=d.createElement("button");b.type="button";b.className="thm";b.setAttribute("aria-label","Toggle dark mode");
function ic(){b.textContent=h.getAttribute("data-theme")==="dark"?"\u2600":"\u263E"}ic();
b.onclick=function(){var n=h.getAttribute("data-theme")==="dark"?"light":"dark";h.setAttribute("data-theme",n);try{localStorage.setItem("bl_theme",n)}catch(e){}ic()};
if(bar)bar.insertBefore(b,d.querySelector(".mn-b"));
var s=d.querySelectorAll(".slides img");if(s.length>1&&!matchMedia("(prefers-reduced-motion:reduce)").matches){var i=0;setInterval(function(){s[i].classList.remove("on");i=(i+1)%s.length;s[i].classList.add("on")},3200)}
d.querySelectorAll(".bill button").forEach(function(x){x.onclick=function(){var k=x.getAttribute("data-b");d.querySelectorAll(".bill button").forEach(function(y){y.classList.toggle("on",y===x)});d.querySelectorAll(".price[data-m],.yr[data-m]").forEach(function(e){e.innerHTML=e.getAttribute("data-"+k)})}});
if(!/contact/.test(location.pathname)){var m=d.createElement("a");m.className="mbar";m.href="contact.html";m.textContent="Get early access";d.body.appendChild(m);
addEventListener("scroll",function(){m.classList.toggle("show",(window.scrollY||0)>420)},{passive:true})}
})();

(function(){var b=document.body;addEventListener("pageshow",function(){b.classList.remove("leaving")});
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");
if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.button||a.target==="_blank"||a.hasAttribute("download"))return;
var u=new URL(a.href,location.href);if(u.origin!==location.origin||u.pathname===location.pathname||!/\.html$|\/$/.test(u.pathname))return;
e.preventDefault();b.classList.add("leaving");setTimeout(function(){location.href=a.href},220)})})();
