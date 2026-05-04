const form = document.querySelector(".form");
const inputCash = document.querySelector(".input-cash");
const inputCard = document.querySelector(".input-card");
const button = document.querySelector(".form__button");
const text = document.querySelector(".text");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const cashValue = +inputCash.value;
  const cardValue = +inputCard.value;
  const totalValue = cashValue + cardValue;
  text.classList.add("text--open");
  text.innerHTML = `
  <p class="text__item">Наличка - ${cashValue} руб</p>
  <p class="text__item">На карте - ${cardValue} руб</p>
  <p class="text__item">Итого - ${totalValue} руб</p>`;

  inputCash.value = "";
  inputCard.value = "";
});
