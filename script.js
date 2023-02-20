  const form = document.getElementById("#cadastro_form")

  form.addEventListener("submit", (event) => {
    // Impedir o envio do formulário
    event.preventDefault()

    // Obter os valores dos campos do formulário
    const nome = form.nome.value.trim()
    const email = form.email.value.trim()
    const senha =form.senha.value.trim()

    // Validar os valores dos campos
    if (nome === "") {
      alert("Por favor, preencha o campo Nome.")
      form.nome.focus()
      return false
    }

    if (email === "") {
      alert("Por favor, preencha o campo Email.")
      form.email.focus()
      return false
    }

    if (!validarEmail(email)) {
      alert("Por favor, preencha um endereço de email válido.")
      form.email.focus()
      return false
    }

    if (senha === "") {
      alert("Por favor, preencha o campo Senha.")
      form.senha.focus()
      return false
    }

    // Envie o formulário
    alert("O formulário foi enviado com sucesso!")
    form.reset()
  })

  function validarEmail(email) {
    // Expressão regular para validação de email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }


  



