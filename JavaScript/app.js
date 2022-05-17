const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// js 기능 사용할때
// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("Please write your name");
//   } else if (username.length > 15) {
//     alert("Your name is too long.");
//   }
// }
// loginButton.addEventListener("click", onLoginBtnClick);
// browser을 이용할 때 html에서 input을 form으로 감싸주고 input에 조건을 넣어주면 됨
function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}


