const btn = document.querySelector("#btn");
const div = document.querySelector(".res");

const useRequest = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch(() => {
      console.log("error");
    });
};

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

function checkInput(input1, input2) {
  if (input1 < 1 || input1 > 10 || isNaN(input1)) {
    if (input2 < 1 || input2 > 10 || isNaN(input2)) {
      div.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else {
      div.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    }
  } else if (input2 < 1 || input2 > 10 || isNaN(input2)) {
    div.innerHTML = "Лимит вне диапазона от 1 до 10";
  } else {
    return true
  }
}

btn.addEventListener("click", async () => {
  let firstNum = Number(document.querySelector("#input_1").value);
  let secondNum = Number(document.querySelector("#input_2").value);
  let resultCheck = await checkInput(firstNum, secondNum);
  if (resultCheck == true) {
    let newUrl = `https://picsum.photos/v2/list?page=${firstNum}&limit=${secondNum}`;
    const resultRequest = await useRequest(newUrl);
    showDisplay(resultRequest);
    localStorage.setItem('pic', JSON.stringify(resultRequest))
  }
});

showDisplay(JSON.parse(localStorage.getItem('pic')))