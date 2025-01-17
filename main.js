document.addEventListener("DOMContentLoaded", () => {
  // Navigation hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Contact form handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      console.log("Form submitted:", data);
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("clearBtn");
  const recommendationCards = document.querySelectorAll(".recommendation-card");

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    recommendationCards.forEach((card) => {
      const cardText = card.textContent.toLowerCase();
      const cardImages = card.querySelectorAll("img");
      let matchFound = false;

      // Check text content
      if (cardText.includes(searchTerm)) {
        matchFound = true;
      }

      // Check image alt text
      cardImages.forEach((img) => {
        if (img.alt.toLowerCase().includes(searchTerm)) {
          matchFound = true;
        }
      });

      card.style.display = matchFound ? "flex" : "none";
    });
  }

  if (searchBtn && clearBtn && searchInput) {
    searchBtn.addEventListener("click", performSearch);

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      recommendationCards.forEach((card) => {
        card.style.display = "flex";
      });
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch();
      }
    });
  }
});
