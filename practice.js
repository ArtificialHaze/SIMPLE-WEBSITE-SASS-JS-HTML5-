const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header .navbar");
const yearElement = document.querySelector(".price .price-toggler .year");
const monthElement = document.querySelector(".price .price-toggler .month");
const yearAmount = document.querySelectorAll(".price .price .month");
const monthAmount = document.querySelectorAll(".price .price .month");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.replace("fa-bars", "fa-times");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
});

yearElement.addEventListener("click", () => {
  yearElement.classList.add("active");
  monthElement.classList.remove("active");
  yearAmount.forEach((year) => {
    year.style.display = "block";
  });

  monthAmount.forEach((month) => {
    month.style.display = "block";
  });
});

monthElement.addEventListener("click", () => {
  monthElement.classList.add("active");
  yearElement.classList.remove("active");
  yearAmount.forEach((year) => {
    year.style.display = "block";
  });

  monthAmount.forEach((month) => {
    month.style.display = "block";
  });
});

const faqElements = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);

faqElements.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
