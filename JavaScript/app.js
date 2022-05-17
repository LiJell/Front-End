const title = document.querySelector("div.hello:first-child h1");
// properties를 찾을 땐 console.dir 를 이용하고 browser console에서 확인하는 방법이 좋음
function handleTitleClick() {
  title.style.color = "blue";
  console.log("title was clicked!");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
