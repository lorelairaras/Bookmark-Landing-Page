document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeMenuBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburgerBtn && closeMenuBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
      document.body.style.overflow = "hidden";
    });

    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
      document.body.style.overflow = "auto";
    });
  }

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll("#content1, #content2, #content3");

  // Initialize tabs - set first tab as active and hide others
  function initializeTabs() {
    // Hide all tab contents except the first one
    tabContents.forEach((content, index) => {
      if (index === 0) {
        content.classList.remove("hidden");
        if (window.innerWidth >= 768) {
          content.classList.add("md:flex");
        }
      } else {
        content.classList.add("hidden");
        content.classList.remove("md:flex");
      }
    });

    // Set first tab button as active
    tabButtons.forEach((button, index) => {
      if (index === 0) {
        button.classList.add("border-red-400", "border-b-2", "text-red-400");
        button.classList.remove("text-gray-500");
      } else {
        button.classList.remove("border-red-400", "border-b-2", "text-red-400");
        button.classList.add("text-gray-500");
      }
    });
  }

  function switchTab(tabIndex) {
    // Update button styles
    tabButtons.forEach((button) => {
      button.classList.remove("border-red-400", "border-b-2", "text-red-400");
      button.classList.add("text-gray-500");
    });

    // Update content visibility
    tabContents.forEach((content) => {
      content.classList.add("hidden");
      content.classList.remove("md:flex");
    });

    // Activate selected tab
    tabButtons[tabIndex].classList.add("border-red-400", "border-b-2", "text-red-400");
    tabButtons[tabIndex].classList.remove("text-gray-500");
    tabContents[tabIndex].classList.remove("hidden");

    if (window.innerWidth >= 768) {
      tabContents[tabIndex].classList.add("md:flex");
    }
  }

  // Initialize tabs on page load
  initializeTabs();

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      switchTab(index);
    });
  });

  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector("img");
      answer.classList.toggle("hidden");
      arrow.classList.toggle("rotate-180");
    });
  });

  // Email validation
  const contactForm = document.getElementById("contact-form");
  const emailInput = document.getElementById("email-input");
  const emailError = document.getElementById("email-error");

  if (contactForm && emailInput && emailError) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        emailError.textContent = "Email cannot be empty";
        emailError.classList.remove("hidden");
        emailInput.classList.add("border-2", "border-red-400");
      } else if (!emailRegex.test(email)) {
        emailError.textContent = "Whoops, make sure it's an email";
        emailError.classList.remove("hidden");
        emailInput.classList.add("border-2", "border-red-400");
      } else {
        emailError.classList.add("hidden");
        emailInput.classList.remove("border-2", "border-red-400");
        alert("Thank you for your submission!");
        contactForm.reset();
      }
    });
  }
});
