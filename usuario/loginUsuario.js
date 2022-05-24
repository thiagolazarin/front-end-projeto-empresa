const BASE_URL = "http://localhost:8081";

function login() {
    event.preventDefault();
    const errorLabel = document.getElementById("error-label");
    const emailUsuario = document.getElementById("emailUsuario");
    const senhaUsuario = document.getElementById("senhaUsuario");

    console.log(emailUsuario)
    console.log(senhaUsuario)

    if (!emailUsuario.value || !senhaUsuario.value) {
        errorLabel.innerText = "Preencha todos os campos obrigatorios";
        return;
    }

    axios.post(BASE_URL + '/loginUsuario', {
            email_usuario: emailUsuario.value,
            senha_usuario: senhaUsuario.value
        })
        .then(function(response) {
            window.localStorage.setItem('logado', 'true');
            window.localStorage.setItem('userID', response.data.ID);
            window.location.href = "/telaTodosDesafios.html";
        })
        .catch(function(error) {
            errorLabel.innerText = "Usuario e senha incorretos";
        });
}