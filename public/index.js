const inputPassword = document.querySelector(".password")
const buttonLogin = document.querySelector(".login")

inputPassword.addEventListener("input", () => {
  buttonLogin.style.color = "black"

  if (inputPassword.value.trim() === "") buttonLogin.style.color = "#BABABA"
})

buttonLogin.addEventListener("click", () => {
  if (inputPassword.value === ""){
    alert("Favor preencher a senha!")
  } else if (inputPassword.value !== "acab") {
    alert("Senha incorreta favor tentar novamente :)")
  } else {
    window.location.replace("show.html")
  }

  inputPassword.value = ""
  buttonLogin.style.color = "#BABABA"
  inputPassword.focus()
})
