const inputPassword = document.querySelector(".password")
const buttonLogin = document.querySelector(".login")

inputPassword.addEventListener("input", () => {
  buttonLogin.style.color = "black"
  if (inputPassword.value.trim() === "") buttonLogin.style.color = "#BABABA"
})

buttonLogin.addEventListener("click", () => {
  if (inputPassword.value === ""){
    alert("Por favor, digitar a senha informada.")
  } else if (inputPassword.value !== "zbya91") {
    alert("Senha incorreta! Por favor, tentar novamente.")
  } else {
    window.location.replace("show.html")
  }

  inputPassword.value = ""
  buttonLogin.style.color = "#BABABA"
  inputPassword.focus()
})
