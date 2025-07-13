function handleSearchClick(event) {
    event.preventDefault();

    const data = document.getElementById("input-box").value;

    if (!data){
        alert("Vous n'avez pas entrer un nom de produit a rechercher!")
    }
    else {
        let conf=window.confirm(data+" est non disponible pour le moment. vous pouvez chercher des produits similaires dans notre page de produits!");
        if (conf){
            window.location.href = "../PRODUITS.html";
        }
        else{
            alert("Merci pour votre compréhension")
        }
    }
}