const btn = document.querySelector("#btn");
const div = document.querySelector(".res");

const useRequest = (url) => {
  return fetch(url)
    .then((response) => {
      return response;
    })
    .catch(() => {
      console.log("error");
    });
};

function showDisplay(resp) {
  let cards = `
      <div class="card">
        <img
          src="${resp.url}"
          class="card-image"
        />
      </div>
    `;
  div.innerHTML = cards;
}

btn.addEventListener("click", async () => {
  let firstNum = Number(document.querySelector("#input_1").value);
  let secondNum = Number(document.querySelector("#input_2").value);
  if (
    firstNum >= 100 &&
    firstNum <= 300 &&
    secondNum >= 100 &&
    secondNum <= 300
  ) {
    const inputUrl = `https://picsum.photos/${firstNum}/${secondNum}`;
    const resResponse = await useRequest(inputUrl);
    showDisplay(resResponse);
  } else {
    div.innerHTML = "одно из чисел вне диапазона от 100 до 300";
  }
});
