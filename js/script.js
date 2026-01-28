const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.querySelector(".question").addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
        item.querySelector(".icon").textContent = "+";
      }
    });

    faq.classList.toggle("active");

    const icon = faq.querySelector(".icon");
    icon.textContent = faq.classList.contains("active") ? "−" : "+";
  });
});
