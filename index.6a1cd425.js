document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=document.querySelector(this.getAttribute("href"));t&&window.scrollTo({top:t.offsetTop,behavior:"smooth"})})});
//# sourceMappingURL=index.6a1cd425.js.map
