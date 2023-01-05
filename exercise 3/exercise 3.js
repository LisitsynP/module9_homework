const btn = document.querySelector("#btn");
const div = document.querySelector(".res");

btn.addEventListener("click", function () {
  document.forms.publish.onsubmit = function () {
    let number;
    number = Number(this.numbers.value);
    if (number >= 0 && number <= 10) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", `https://picsum.photos/v2/list?limit=${number}`);

      xhr.onload = function () {
        if (xhr.status != 200) {
          console.log("Статус ответа: ", xhr.status);
        } else {
          let fullResponse = JSON.parse(xhr.response);
          showDisplay(fullResponse);
        }
      };
      xhr.send();
    } else {
      div.innerHTML = "число вне диапазона от 1 до 10";
    }

    return false;
  };
});
function showDisplay(resp) {
  let cards = "";

  resp.forEach((item) => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  div.innerHTML = cards;
}
