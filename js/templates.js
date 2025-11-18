export const templates = {
  home: `
    <section aria-labelledby="homeTitle">
      <h1 id="homeTitle">Bem-vinda</h1>
      <p>Projeto final com acessibilidade e otimização para produção.</p>
    </section>
  `,
  cadastro: `
    <section aria-labelledby="cadTitle">
      <h1 id="cadTitle">Cadastro</h1>
      <form id="cadForm" novalidate>
        <div class="form-field">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" required>
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-field">
          <label for="bio">Biografia</label>
          <textarea id="bio" rows="4"></textarea>
        </div>
        <button type="submit" id="submitBtn">Enviar</button>
        <div id="errorMsg" role="status" aria-live="assertive"></div>
      </form>
    </section>
  `,
  projetos: `
    <section aria-labelledby="projTitle">
      <h1 id="projTitle">Projetos</h1>
      <ul id="projectsList" class="projects-list" role="list"></ul>
    </section>
  `
};
