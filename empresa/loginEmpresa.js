const BASE_URL = "http://localhost:8081";

function login() {
    event.preventDefault();
    const errorLabel = document.getElementById("error-label");
    const emailEmpresa = document.getElementById("emailEmpresa");
    const senhaEmpresa = document.getElementById("senhaEmpresa");

    if (!emailEmpresa.value || !senhaEmpresa.value) {
        errorLabel.innerText = "Preencha todos os campos obrigatorios";
        return;
    }

    axios.post(BASE_URL + '/loginEmpresa', {
            email_empresa: emailEmpresa.value,
            senha_empresa: senhaEmpresa.value
        })
        .then(function(response) {
            alert(response)
            window.localStorage.setItem('logado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "/telaTodosDesafios.html";
        })
        .catch(function(error) {
            errorLabel.innerText = "Usuario e senha incorretos";
        });
}