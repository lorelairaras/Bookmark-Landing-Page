document.querySelectorAll(".border-b button").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const arrow = button.querySelector("img");

    answer.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
  });
});
