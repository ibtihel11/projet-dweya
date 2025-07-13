function facebook(){
    alert("Service non disponible pour le moment!")
}
function submitSignUp(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const passconf = document.getElementById("passconfirm").value;

    if (!nom || !prenom || !email || !pass || !passconf){
        alert("Veuillez remplir tous les champs");
    }
    else if (nom.length < 3 || !isAlphabetic(nom)) {
        alert("le nom doit contenir au moins 3 caracteres alphabetiques!")
    }
    else if (prenom.length < 3 || !isAlphabetic(prenom)) {
        alert("le prenom doit contenir au moins 3 caracteres alphabetiques!")
    }
    else if (!isValidEmail(email)){
        alert("l'email est invalid!")
    }
    else if (pass.length < 8 || !checkPassword(pass)){
        alert("votre mot de passe est faible!")
    }
    else if (passconf != pass){
        alert("la confirmation du mot de passe n'est pas correcte!")
    }
    else{
        let confirmed=window.confirm(nom+" Sera le nom de votre compte, voulez vous Continuer?")
        if (confirmed){
            alert("merci, votre compte est pret!")
            window.location.href = "../INDEX.html";
        }
    }
}

function isAlphabetic(str) {
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
            return false;
        }
    }
    return true;
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

function checkPassword(password) {
    if (password.length < 8) {
        return false;
    }

    var hasUppercase = false;
    var hasLowercase = false;
    var hasDigit = false;

    for (var i = 0; i < password.length; i++) {
        var char = password.charAt(i);

        if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
    }

    return hasUppercase && hasLowercase && hasDigit;
}
