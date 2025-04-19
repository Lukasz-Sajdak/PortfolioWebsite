let currentSection = null;

document.addEventListener('DOMContentLoaded', () => {
  changePage('home');
});

function changePage(page) {
    const newSection = document.getElementById(page);
    if (currentSection === newSection) return;
  
    if (currentSection) {
      currentSection.classList.remove('visible');
    }
  
    setTimeout(() => {
      newSection.classList.add('visible');
      currentSection = newSection;
    }, 100);
  
    const header = document.getElementById("main-header");
    const home = document.getElementById("home");
    const bio = document.getElementById("intro");
    const footer = document.getElementsByTagName("FOOTER")[0];
    const code = document.getElementsByClassName("code")[0];
    if (page === 'home') {
      header.classList.remove('small');
      home.style.display = "none";
      bio.style.display = "block";
      footer.style.display = "block";
      code.style.display = "block";
    } else {
      header.classList.add('small');
      home.style.display = "block";
      bio.style.display = "none";
      footer.style.display = "none";
      code.style.display = "none";
    }
  }