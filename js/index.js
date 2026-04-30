const form = document.querySelector(".form");
const inputCash = document.querySelector(".input-cash");
const inputCard = document.querySelector(".input-card");
const button = document.querySelector(".form__button");
const textCash = document.querySelector(".text-cash");
const textCard = document.querySelector(".text-card");
const textTotal = document.querySelector(".text-total");

textCash.textContent = `Наличка`;
textCard.textContent = `Карта`; 
textTotal.textContent = `Итого`;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const cashValue = +inputCash.value;
  const cardValue = +inputCard.value;
  const totalValue = cashValue + cardValue;
  textCash.textContent = `Наличка - ${cashValue} руб`;
  textCard.textContent = `На карте - ${cardValue} руб`;
  textTotal.textContent = `Итого - ${totalValue} руб`;

  inputCash.value = "";
  inputCard.value = "";
});
