function scrollWithOffset(el, offset) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

function burgerDisplay() {
    const liste = document.querySelector('.itemss');
    if (!liste.style.display) {
        liste.style.display = 'flex';
    } else {
        liste.style.display = '';
    }
}