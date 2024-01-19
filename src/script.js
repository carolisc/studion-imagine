$(document).ready(() => { //não precisa de aspas quando é do javascript, do html precisa
// MENU -------------------------------------

$(".nav__menu-btn").on("click", function () {
    $('#menu').toggleClass("mobile");
    $('#menu').toggleClass("desktop");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times"); // this é o nav menu btn, tá buscando o elemento html i, quando clicar vai remover o fa-bars e add o fa-times e vice versa (de tres linhas pra X no menu mobile)
});

// ------------------------------------------

// EMAIL -------------------------------------
$("#newsletter-form").submit(function (e) {
    e.preventDefault(); // botão submit por padrão dá reload na página, isso faz não dar
    const email = $("#email").val(); // val de valor
    const emailOptions = {
        Host: "smtp.elasticemail.com",
        Username: "carolinaalcar@gmail.com",
        Password: "87EE545599A92B72DF981439415568A72976",
        To: "contato@studion.com",
        From: "email",
        Subject: "Por favor me adicione na newsletter",
        Body: ` 
        Olá,

        Eu gostaria de ser adicionado na newsletter do site. Meu email é ${email}.

        Obrigado!
        ` // colocar texto entre crases pra poder colocar variável dentro
    };
    try {
        Email.send(emailOptions)
        .then(() => {
            alert('Email enviado com sucesso!');
            location.replace(location.pathname) // aí vai dar reload mas continuar na pag
        });
    } catch (error) {
        console.log(error.message) // pra mostrar no console do browser se tiver algum erro
    }
})


// ------------------------------------------


});


