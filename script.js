document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("langToggleBtn");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("lang-en")) {
      // Switch to German
      body.classList.remove("lang-en");
      body.classList.add("lang-de");
      document.documentElement.lang = "de";
    } else {
      // Switch to English
      body.classList.remove("lang-de");
      body.classList.add("lang-en");
      document.documentElement.lang = "en";
    }
  });
});