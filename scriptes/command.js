function submitCommand(event) {
    event.preventDefault();

    const nom = document.getElementById("name1").value;
    const tel = document.getElementById("numero").value;
    const ville = document.getElementById("ville").value;
    const code = document.getElementById("codePostal").value;
    const adr = document.getElementById("adr").value;

    if (!nom || !tel || !ville || !code || !adr){
        alert("Veuillez remplir tous les champs");
    }
    else if (nom.length < 3 || !isAlphabetic(nom)) {
        alert("le nom doit contenir au moins 3 caracteres alphabetiques!")
    }
    else if (tel.length != 8 || !isNum(tel)) {
        alert("le numero de telephone doit contenir 8 caracteres numeriques!")
    }
    else if (code.length < 4 || !isNum(code)){
        alert("votre code postal est invalid!")
    }
    else{
        let confirmed=window.confirm("Voulez-vous confirmer votre commande?")
        if (confirmed){
            alert("Merci pour votre confiance ! Nous vous contacterons très prochainement.")
            window.location.href = "../PRODUITS.html";
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
function isNum(str) {
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode < 48 || charCode > 57) {
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
