let currentSection = null;
let currentLang = 'pl'; // domyślny język


function toggleTheme() {
  const themeButton = document.querySelector(".theme-toggle");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.classList.remove("sun");
    themeButton.classList.add("moon");
  } else {
    themeButton.classList.remove("moon");
    themeButton.classList.add("sun");
  }
}

function changePage(page) {
  const newSection = document.getElementById(page);
  if (currentSection === newSection) return;

  // Ukryj poprzednią sekcję
  if (currentSection) {
    currentSection.classList.remove('visible');
  }

  // Pokaż nową po krótkim opóźnieniu
  setTimeout(() => {
    newSection.classList.add('visible');
    currentSection = newSection;
  }, 100);

  // Zmieniamy wygląd headera w zależności od strony
  const header = document.getElementById("main-header");
  const home = document.getElementById("home");
  const bio = document.getElementById("intro");
  const footer = document.getElementsByTagName("FOOTER")[0];
  if (page === 'home') {
    header.classList.remove('small');
    home.style.display = "none";
    bio.style.display = "block";
    footer.style.display = "block";
  } else {
    header.classList.add('small');
    home.style.display = "block";
    bio.style.display = "none";
    footer.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  changePage('home');
});

// Poprawiona funkcja toggleLanguage
async function toggleLanguage() {
  const newLang = currentLang === 'pl' ? 'en' : 'pl';
  try {
    await loadLanguage(newLang); // Załaduj odpowiedni język
    currentLang = newLang; // Zaktualizuj bieżący język

    const lanButton = document.querySelector(".lan-toggle");
    lanButton.classList.remove('pl', 'gb'); // Usuń wszystkie klasy
    lanButton.classList.add(newLang === 'pl' ? 'pl' : 'gb'); // Dodaj odpowiednią klasę
  } catch (error) {
    console.error("Błąd podczas ładowania języka:", error);
  }
}

// Załaduj język domyślny przy starcie strony
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLang);
});

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
