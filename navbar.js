
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    const article = this.previousElementSibling; // Cible l'élément article précédent le bouton cliqué
    article.classList.toggle('expanded');
    
    if (article.classList.contains('expanded')) {
      button.textContent = 'Lire moins';
    } else {
      button.textContent = 'Lire plus';
    }
  });
});