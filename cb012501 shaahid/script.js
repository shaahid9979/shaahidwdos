const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('show');
});

document.getElementById('search-icon').addEventListener('click', function () {
     const searchBarInput = document.querySelector('.search-bar input');
     searchBarInput.style.display = searchBarInput.style.display === 'block' ? 'none' : 'block';
});

