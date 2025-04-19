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
  