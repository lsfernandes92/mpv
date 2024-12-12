const inputPassword = document.querySelector(".password")
const buttonLogin = document.querySelector(".login")

buttonLogin.addEventListener("click", () => {
  if (inputPassword.value === ""){
    alert("Favor preencher a senha!")
  } else if (inputPassword.value !== "leaozinho") {
    alert("Senha incorreta favor tentar novamente :)")
  } else {
    window.location.replace("show.html")
  }

  inputPassword.value = ""
  inputPassword.focus()
})
