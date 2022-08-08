const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  const userName = loginInput.value;

  localStorage.setItem("USERNAME_KEY", userName);
  paintGreetings(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}!`;
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
} else {
  // shwo the greetings
  paintGreetings(savedUsername);
}
