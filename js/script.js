const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.querySelector(".question").addEventListener("click", () => {

    faqs.forEach(item => {
      if(item !== faq){
        item.classList.remove("active");
        item.querySelector(".toggle").src = "images/icon-plus.svg";
      }
    });

    faq.classList.toggle("active");

    const icon = faq.querySelector(".toggle");
    icon.src = faq.classList.contains("active")
      ? "images/icon-minus.svg"
      : "images/icon-plus.svg";
  });
});
