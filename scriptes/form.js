function submitContactForm(event) {
    event.preventDefault();

    const nom = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sujet = document.getElementById("subject").value;
    const message = document.getElementById("msg").value;
    if (!nom || !email || !sujet || !message){
        alert("Veuillez remplir tous les champs");
    }
    else if (nom.length < 3 || !isAlphabetic(nom)) {
        alert("le nom doit contenir au moins 3 caracteres alphabetiques!")
    }
    else if (!isValidEmail(email)){
        alert("l'email est invalid!")
    }
    else if (sujet.length < 3){
        alert("le sujet doit contenir au moins 3 caracteres!")
    }
    else if (message.length < 8){
        alert("le message doit contenir au moins 8 caracteres!")
    }
    else{
        let confirmed=window.confirm(`
        nom: ${nom}
        email: ${email}
        sujet: ${sujet}
        message: ${message}
        Cliquez sur OK pour confirmer votre message
        `)
        if (confirmed){
            alert("merci, message reçu")
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
