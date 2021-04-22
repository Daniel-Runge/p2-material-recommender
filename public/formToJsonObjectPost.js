function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());

  console.log({ value });
  console.log("THIS COMMENT IS FOR THE EVENT " + event);

  fetch("/signup", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ value }),
  })
    .then(function (res) {
      return res.text();
    })
    .then(function (html) {
      document.body.innerHTML = html;
    })
    .catch(function (res) {
      console.log(res);
    });
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
