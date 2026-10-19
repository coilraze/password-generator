const btnE1 = document.querySelector(".btn");

const inputE1 = document.getElementById("input");

const copyIconE1 = document.querySelector(".copy-btn");

const alertContainerE1 = document.querySelector(".alert-container");

copyIconE1.addEventListener("click", () => {
  copyPassword();
  if (inputE1.value) {
    alertContainerE1.classList.remove("active");
    setTimeout(() => {
      alertContainerE1.classList.add("active");
    }, 2000);
  }
});

btnE1.addEventListener("click", () => {
  createPassword();
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLenght = 14;
  const randomValues = new Uint32Array(1);
  const range = 2 ** 32;
  const limit = Math.floor(range / chars.length) * chars.length;
  let password = "";
  for (let index = 0; index < passwordLenght; index++) {
    do {
      crypto.getRandomValues(randomValues);
    } while (randomValues[0] >= limit);
    const randomNum = randomValues[0] % chars.length;
    password += chars.substring(randomNum, randomNum + 1);
    // const randomNum = Math.floor(Math.random() * chars.length);
    // password += chars.substring(randomNum, randomNum + 1);
    // console.log(randomNum, password);
  }
  inputE1.value = password;
  alertContainerE1.innerText = password + " copied!";
}

function copyPassword() {
  inputE1.select();
  inputE1.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputE1.value);
}
