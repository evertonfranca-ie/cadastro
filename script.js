const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
   
    //verificar se o nome está vazio

    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome")
        return;
    }

    //verificar se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail!");
        return;
    }

    // Verificar se está preenchido
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 digitos.");
        return;
    }

    // verificar se a situação foi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione a sua situação.");
        return;
    }

    // verificar se a mensagem está preenchida
    if(messageTextArea.value === ""){
        alert("Por favor, escreva uma mensagem.");
    }

    // se todos os campos estiverem corretamente preenchidos , envie o formulario

    form.submit();
});

    //função que valida e-mail
    function isEmailValid(email){
        //criar uma regex para validar email
        const emailRegex = new RegExp(
            // usuario12@host.com.br
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if(emailRegex.test(email)){
            return true;
        }

        return false;
    }

    function validatePassword(password, minDigits){
        if(password.length >= minDigits){ 
            return true;
        }

        //senha inválida
        return false;
    }