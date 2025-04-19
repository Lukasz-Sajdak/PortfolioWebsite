let currentTech = null;

function displayTech(tech) {
    const newTech = document.getElementById(tech);
    if (currentTech === newTech) return;
  
    if (currentTech) {
        setTimeout(() => {
            currentTech.classList.remove('visible');
          }, 100);
    }
  
    setTimeout(() => {
        newTech.classList.add('visible');
        currentTech = newTech;

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
  }