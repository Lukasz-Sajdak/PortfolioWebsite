let currentSkill = null;

function displaySkill(skill) {
    const newSkill = document.getElementById(skill);
    if (currentSkill === newSkill) return;
  
    if (currentSkill) {
        setTimeout(() => {
            currentSkill.classList.remove('visible');
          }, 100);
    }
  
    setTimeout(() => {
      if (newSkill) {
        newSkill.classList.add('visible');
        currentSkill = newSkill;
      }
    
      const jumpElem = document.getElementById("jump_here");
    
      if (jumpElem) {
        const rect = jumpElem.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    
        if (!isVisible) {
          jumpElem.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
        }
      }
    }, 100);
  }