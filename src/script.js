function displayResults(response) {
  console.log("recomendations generated ");
  new Typewriter("#output-div", {
    strings: `<h3>My recommendations for you:</h3>` + response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
  let typewriterCursor = document.querySelector(".Typewriter__cursor");
  typewriterCursor.style.marginLeft = "0px";
}

function getOutput(event) {
  event.preventDefault();
  console.log(inputButton.value);

  let buttonOption = inputButton.value;
  let userInput = document.querySelector("#input-user");
  let apiKey = "ba3t92f6af6b8204143cbo1c5a032ba3";
  let prompt = `give-me 3 options of ${buttonOption} that follow the next parameters: ${userInput.value}`;
  console.log(prompt);
  let context =
    "you're well informed about all movis and series, and you know the best to recommend. You never explain your reasons or introduce your answers. You only give the name of the production and the year which it was realeased. You give all your answers formated in HTML using a <ul> element and without using <b> or <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recomendations");
  let outputDiv = document.querySelector("#output-div");
  outputDiv.classList.remove("disabled");
  new Typewriter("#output-div", {
    strings: `Generating recomendations...`,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
  axios.get(apiUrl).then(displayResults);
}

function changeOptionButon() {
  inputButton.classList.toggle("change-option");
  if (inputButton.getAttribute("class") === "change-option") {
    inputButton.value = "TV Series";
  } else {
    inputButton.value = "Movies";
  }
}

let inputButton = document.querySelector("#button");
inputButton.addEventListener("click", changeOptionButon);

let formSubmit = document.querySelector("#form-submit");
formSubmit.addEventListener("click", getOutput);
