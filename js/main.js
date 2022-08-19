var elOpenBtn = document.querySelector(".site-button");
var elAddList = document.querySelector(".site-header__inner");

elOpenBtn.addEventListener("click", function(){
    elAddList.classList.toggle("show-block")
});