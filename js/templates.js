export const templates = {
    home: `
        <h1>Bem-vindo</h1>
        <p>Escolha uma página no menu.</p>
    `,

    cadastro: `
        <h1>Cadastro</h1>
        <form id="cadForm">
            <input type="text" id="nome" placeholder="Nome">
            <input type="email" id="email" placeholder="Email">
            <button type="submit">Enviar</button>
        </form>
        <div id="msg"></div>
    `,

    projetos: `
        <h1>Projetos</h1>
        <p>Lista de projetos cadastrados futuramente…</p>
    `
};
