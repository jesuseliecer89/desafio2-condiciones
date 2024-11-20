// Ejercicio 1: Agregar o quitar borde rojo en la imagen de Mewtwo V
const mewtwoImg = document.querySelectorAll("#mewtwo-v, #Deb, #Reti, #Res");

mewtwoImg.forEach(img =>{
  img.addEventListener("click", () =>{
    img.classList.toggle("borde-rojo");
  });
});

// Ejercicio 2: Verificar la cantidad total de cartas seleccionadas
const input1 = document.querySelector("#poke1");
const input2 = document.querySelector("#poke2");
const input3 = document.querySelector("#poke3");
const checkButton = document.querySelector("#check-poke-cards");
const totalItems = document.querySelector("#total-items");
const itemNotice = document.querySelector("#item-notice");

checkButton.addEventListener("click", () => {
  const total =
    (Number(input1.value) || 0) +
    (Number(input2.value) || 0) +
    (Number(input3.value) || 0);

  if (total <= 10) {
    totalItems.textContent = total;
    itemNotice.style.color = "blue"; // Restablece el color normal
  } else {
    totalItems.textContent = 0;
    itemNotice.textContent = "¡Has agregado demasiadas cartas!";
    itemNotice.style.color = "red"; // Resalta el mensaje de error
  }
});

// Ejercicio 3: Validar combinación de números en la Pokedex
const digit1 = document.querySelector("#digit1");
const digit2 = document.querySelector("#digit2");
const digit3 = document.querySelector("#digit3");
const submitCodeButton = document.querySelector("#submit-code");
const pokeStatus = document.querySelector("#poke-status");

submitCodeButton.addEventListener("click", () => {
  const code = digit1.value + digit2.value + digit3.value;

  if (code === "911") {
    pokeStatus.textContent = "Codigo 1 Correcto: Skeledirge";
    pokeStatus.style.color = "green";
  } else if (code === "714") {
    pokeStatus.textContent = "Codigo 2 Correcto: Noibat";
    pokeStatus.style.color = "green";
  } else {
    pokeStatus.textContent = "Codigo Incorrecto";
    pokeStatus.style.color = "red";
  }
});