function adicionarPerfil(event) {
  event.preventDefault() // evitar que a página seja recarregada após o envio do formulário

  const nome = document.getElementsByName("nome")[0].value
  const email = document.getElementsByName("email")[0].value
  const area = document.getElementsByName("area")[0].value
  const senha = document.getElementsByName("senha")[0].value

  const perfil = {
    nome: nome,
    email: email,
    area: area,
    senha: senha,
  }


  console.log(perfil) // Exemplo de como você pode usar os dados armazenados

  // Outras ações que você pode querer realizar com os dados inseridos
}
