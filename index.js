adviceId = document.querySelector(".advice__title");
adviceText = document.querySelector(".advice__paragraph");

const ADVICE_API = "https://api.adviceslip.com/advice";

async function fetchApi() {
  await fetch(ADVICE_API)
    .then((res) => {
      if (res.ok) {
        console.log("Fetch api successfully");
        return res.json();
      } else {
        console.log("Failed to fetch api");
        return;
      }
    })
    .then((data) => {
      adviceId.innerHTML = `Advice #${data.slip.id}`;
      adviceText.innerHTML = `"${data.slip.advice}"`;
    })
    .catch((err) => console.log("Error: ", err));
}

fetchApi();
