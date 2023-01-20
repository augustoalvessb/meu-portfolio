window.alert("Este Site ainda está em Desenvolvimento!!");

const firstProject = document.querySelector(".first");
const secondProject = document.querySelector(".second");
const thirdProject = document.querySelector(".third");
const fourthProject = document.querySelector(".fourth");
const contact = document.querySelector(".contact");

firstProject.addEventListener("click", () => {
  window.location.href = "./calculadora/index.html";
});
secondProject.addEventListener("click", () => {
  window.location.href = "./fogo-doom/index.html";
});
thirdProject.addEventListener("click", () => {
  window.location.href = "./codigoDaLiberdade/index.html";
});
fourthProject.addEventListener("click", () => {
  window.location.href = "./calculadora-TMB/index.html";
});
contact.addEventListener("click", () => {
  window.open("https://wa.me/5534988170214");
});
