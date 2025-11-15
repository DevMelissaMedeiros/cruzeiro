export function setupValidation() {
    const form = document.getElementById("cadForm");
    if (!form) return;

    form.onsubmit = e => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const msg = document.getElementById("msg");

        if (nome === "" || email === "" || !email.includes("@")) {
            msg.innerText = "Dados inválidos. Preencha corretamente.";
            return;
        }

        msg.innerText = "Cadastro enviado com sucesso!";
        localStorage.setItem("cadastro", JSON.stringify({ nome, email }));
    };
}