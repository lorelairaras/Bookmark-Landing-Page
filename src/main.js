document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  function switchTab(tabId) {
    tabButtons.forEach((button) => {
      button.classList.add("text-gray-500", "border-b-2");
    });

    tabContents.forEach((content) => {
      content.classList.remove("active");
      content.style.display = "none";
    });

    const activeButton = document.getElementById(tabId);
    activeButton.classList.add("active", "font-medium");
    activeButton.classList.remove("text-gray-500");

    const contentId = tabId.replace("tab", "content");
    const activeContent = document.getElementById(contentId);
    activeContent.classList.add("active");
    activeContent.style.display = "flex";
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchTab(button.id);
    });
  });

  // Initialize first tab as active
  switchTab("tab1");

  const faqButtons = document.querySelectorAll(".border-b button");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const arrow = button.querySelector("img");
      const isOpen = !content.classList.contains("hidden");

      document.querySelectorAll(".border-b img").forEach((img) => {
        img.classList.remove("rotate-180");
      });

      if (!isOpen) {
        content.classList.remove("hidden");
        arrow.classList.add("rotate-180");
      }
    });
  });
});
