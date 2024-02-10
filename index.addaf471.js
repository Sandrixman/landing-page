document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".animateElement");function n(){e.forEach(e=>{(function(e){let n=e.getBoundingClientRect();return n.top-n.height<window.innerHeight})(e)&&e.classList.add("slide-up")})}n(),window.addEventListener("scroll",n)});
//# sourceMappingURL=index.addaf471.js.map
