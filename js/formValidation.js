// Seleciona o formulário
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // impede envio se tiver erro

    const nome = form.querySelector('input[name="nome"]');
    const email = form.querySelector('input[name="email"]');
    const tipo = form.querySelector('select[name="tipoCadastro"]');
    const mensagem = form.querySelector('textarea');

    let valid = true;
    let erros = [];

    if (nome.value.trim() === '') {
      valid = false;
      erros.push('Por favor, preencha o nome.');
    }

    if (!email.value.includes('@')) {
      valid = false;
      erros.push('Digite um e-mail válido.');
    }

    if (tipo && tipo.value === '') {
      valid = false;
      erros.push('Selecione o tipo de cadastro.');
    }

    if (mensagem && mensagem.value.trim() === '') {
      valid = false;
      erros.push('Escreva uma mensagem.');
    }

    if (!valid) {
      alert(erros.join('\n'));
    } else {
      alert('Cadastro enviado com sucesso!');
      salvarDadosLocal(nome.value, email.value, tipo.value, mensagem.value);
      form.reset();
    }
  });
}
