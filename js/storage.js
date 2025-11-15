// ----- SALVAR DADOS NO LOCALSTORAGE -----
function salvarDadosLocal(nome, email, tipo, mensagem) {
  const dados = {
    nome,
    email,
    tipo,
    mensagem,
    data: new Date().toLocaleString()
  };

  // Recupera dados antigos
  let registros = JSON.parse(localStorage.getItem('cadastros')) || [];

  // Adiciona novo
  registros.push(dados);

  // Salva novamente
  localStorage.setItem('cadastros', JSON.stringify(registros));
  console.log('Dados salvos:', registros);
}
