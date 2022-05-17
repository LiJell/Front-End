const h1 = document.querySelector("div.hello:first-child h1");
// properties를 찾을 땐 console.dir 를 이용하고 browser console에서 확인하는 방법이 좋음

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }
// 위 코드는 toggle로 대체

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
