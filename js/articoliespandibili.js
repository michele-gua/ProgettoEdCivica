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

  document.addEventListener("DOMContentLoaded", function() {
    
    const articolo2 = document.querySelector(".articolo2espand");
    const content2 = document.querySelector(".contenuto2");
    const arrow2 = document.querySelector(".arrow2");
    
    document.querySelector(".toggle-button2").addEventListener("click", function() {
      articolo2.classList.toggle("expanded");
      if (articolo2.classList.contains("expanded")) {
        arrow2.textContent = "⬆️"; // freccia verso sinistra
        content2.style.height = "auto";
      } else {
        arrow2.textContent = "⬇️"; // freccia verso destra
        content2.style.height = "0";
      }
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    
    const articolo3 = document.querySelector(".articolo3espand");
    const content3 = document.querySelector(".contenuto3");
    const arrow3 = document.querySelector(".arrow3");
    
    document.querySelector(".toggle-button3").addEventListener("click", function() {
      articolo3.classList.toggle("expanded");
      if (articolo3.classList.contains("expanded")) {
        arrow3.textContent = "⬆️"; // freccia verso sinistra
        content3.style.height = "auto";
      } else {
        arrow3.textContent = "⬇️"; // freccia verso destra
        content3.style.height = "0";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    
    const articolo4 = document.querySelector(".articolo4espand");
    const content4 = document.querySelector(".contenuto4");
    const arrow4 = document.querySelector(".arrow4");
    
    document.querySelector(".toggle-button4").addEventListener("click", function() {
      articolo4.classList.toggle("expanded");
      if (articolo4.classList.contains("expanded")) {
        arrow4.textContent = "⬆️"; // freccia verso sinistra
        content4.style.height = "auto";
      } else {
        arrow4.textContent = "⬇️"; // freccia verso destra
        content4.style.height = "0";
      }
    });
  });