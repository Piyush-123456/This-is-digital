
var flag = 0;
var nav = document.querySelector("#right-side")
var menu = document.querySelector("#menu-icon")
document.querySelector("#menu-icon").addEventListener("click",function () {
      if (flag===0) {
        nav.style.display = "block";
        menu.innerHTML = `<i class="ri-close-line"></i>`
        flag = 1
        
      } 
      else {
        nav.style.display = "none";
        menu.innerHTML = `<i class="ri-menu-3-line"></i>`
        flag = 0
      }
})  