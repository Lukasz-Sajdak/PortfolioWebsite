let currentLang = 'pl';

document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLang);
});

async function toggleLanguage() {
    const newLang = currentLang === 'pl' ? 'en' : 'pl';
    try {
      await loadLanguage(newLang);
      currentLang = newLang;
  
      const lanButton = document.querySelector(".lan-toggle");
      lanButton.classList.remove('pl', 'gb');
      lanButton.classList.add(newLang === 'pl' ? 'pl' : 'gb');
    } catch (error) {
      console.error("Błąd podczas ładowania języka:", error);
    }
  }
  
  async function loadLanguage(lang) {
    try {
      const response = await fetch(`lang/${lang}.json`);
      if (!response.ok) throw new Error(`Błąd ładowania pliku ${lang}.json`);
  
      const translations = await response.json();
  
      document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translations[key]) {
          elem.textContent = translations[key];
        }
      });
  
    } catch (error) {
      console.error("Błąd podczas ładowania języka:", error);
    }
  }