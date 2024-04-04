document.addEventListener("DOMContentLoaded", function() {
    const articolo1 = document.querySelector(".articolo1espand");
    const content = document.querySelector(".contenuto");
    const arrow = document.querySelector(".arrow");
  
    document.querySelector(".toggle-button").addEventListener("click", function() {
      articolo1.classList.toggle("expanded");
      if (articolo1.classList.contains("expanded")) {
        arrow.textContent = "⬆️"; // freccia verso sinistra
        content.style.height = "auto";
      } else {
        arrow.textContent = "⬇️"; // freccia verso destra
        content.style.height = "0";
      }
    });
  });
  