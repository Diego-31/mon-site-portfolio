document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');

  langToggle.addEventListener('click', () => {
    if (langToggle.alt === 'FR') {
      // Redirige vers la version anglaise
      window.location.href = 'index-en.html';  // remplace par ton fichier anglais
    } else {
      // Redirige vers la version française
      window.location.href = 'index.html';  // remplace par ton fichier français
    }
  });
});
