const BASE_URL = "http://localhost:8081";

function cadastrar(event) {
    event.preventDefault();

    const errorLabel = document.getElementById("error-label");
    const nomeEmpresa = document.getElementById("cadastrarNomeEmpresa");
    const emailEmpresa = document.getElementById("cadastrarEmailEmpresa");
    const senhaEmpresa = document.getElementById("cadastrarSenhaEmpresa");
    const cnpjEmpresa = document.getElementById("cadastrarCNPJEmpresa");

    if (!nomeEmpresa.value || !emailEmpresa.value || !senhaEmpresa.value || !cnpjEmpresa.value) {
        errorLabel.innerText = "Preencha todos os campos obrigatorios";
        return;
    }

    if (cnpjEmpresa.value.length < 14) {
        errorLabel.innerText = "CNPJ inválido padrão 14 caracteres";
        return;
    }

    axios.post(BASE_URL + '/empresa', {
            nome_empresa: nomeEmpresa.value,
            email_empresa: emailEmpresa.value,
            senha_empresa: senhaEmpresa.value,
            cnpj_empresa: cnpjEmpresa.value
        })
        .then(function(response) {
            window.localStorage.setItem('logado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "./loginEmpresa.html"
        })
        .catch(function(error) {
            errorLabel.innerText = "Não foi possivel efetuar o cadastro";
        });
}