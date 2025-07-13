function facebook(){
    alert("Service non disponible pour le moment!")
}
function submitLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (!email ){
        alert("Vous n'avez pas entrer votre email");
    }
    else if (!pass){
        alert("Vous n'avez pas entrer votre mot de passe");
    }
    else if (isValidEmail(email)){
        alert("Votre email n'existe pas")
    }
    else{
        alert("Bienvenue!")
        window.location.href = "../INDEX.html";
    }
}
function isValidEmail(email) {
    var parts = email.split("@");
    if (parts.length !== 2) {
        return false;
    }
    if (parts[0].length === 0) {
        return false;
    }
    if (parts[1].indexOf(".") === -1) {
        return false;
    }

    return true;
}