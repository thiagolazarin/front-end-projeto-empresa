const BASE_URL = "http://localhost:8081";

function cadastrar(event) {
    event.preventDefault();

    const errorLabel = document.getElementById("error-label");
    const nomeUsuario = document.getElementById("cadastrarNomeUsuario");
    const emailUsuario = document.getElementById("cadastrarEmailUsuario");
    const senhaUsuario = document.getElementById("cadastrarSenhaUsuario");

    if (!nomeUsuario.value || !emailUsuario.value || !senhaUsuario.value) {
        errorLabel.innerText = "Preencha todos os campos obrigatorios";
        return;
    }

    axios.post(BASE_URL + '/usuario', {
            nome_usuario: nomeUsuario.value,
            senha_usuario: senhaUsuario.value,
            email_usuario: emailUsuario.value,
        })
        .then(function(response) {
            window.localStorage.setItem('logado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "./loginUsuario.html"
        })
        .catch(function(error) {
            errorLabel.innerText = "Não foi possivel efetuar o cadastro";
        });
}