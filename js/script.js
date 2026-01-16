document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;

    item.classList.toggle("active");

    const icon = question.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
