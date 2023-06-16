const questions = document.querySelectorAll(".wrapper .question .title");

questions.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.classList.toggle("active");
    element.scrollIntoView({ behavior: "auto", block: "center" });
  });
});
