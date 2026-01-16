// function deleteCard() {
//   const allCardDelete = document.querySelector(".content div");
//     allCardDelete.remove()
// }

function deleteCard() {
  const allCardDelete = document.querySelectorAll(".content div");
  allCardDelete.forEach((cardDelete) => {
    cardDelete.remove();
  });
}

function createcard() {
  const content = document.querySelector(".content");

  const newCard = document.createElement("div");
  content.appendChild(newCard);

  newCard.style.width = "400px";
  newCard.style.height = "400px";
  newCard.style.backgroundColor = "tomato";
  newCard.style.border = "5px solid black";

  newCard.addEventListener("click", () => {
    newCard.style.backgroundColor = "red";
  });
}
