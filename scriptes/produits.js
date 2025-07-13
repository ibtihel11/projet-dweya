function productAddedToCart(e, nomProduit) {
    e.preventDefault();

    let confirmed=window.confirm(nomProduit+" sera ajouté au panier.")
    
    if (confirmed){
        alert(nomProduit+" a été ajouté au panier");
    }
    else{
        alert(nomProduit+" a été retiré du panier");
    }
}
function search(e) {
    e.preventDefault();

    var searchTerm = document.getElementById("searchBar").value;

    if (!searchTerm){
        alert("Vous n'avez pas entrer un nom de produit a rechercher!")
    }
    else{
        alert(searchTerm+" n'est pas disponible, Reessayez de le rechercher ultérieurement");
    }
}
function addPrescription(e) {
    e.preventDefault();

    alert("service non disponible pour le moment!");
}