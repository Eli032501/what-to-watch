function displayResults(response) {
  new Typewriter("#output-div", {
    strings:
      `<h3>My recommendations for you:</h3>` +
      response.data.answer +
      `<p class="signature">AI SheCodes</h3>`,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
  let typewriterCursor = document.querySelector(".Typewriter__cursor");
  typewriterCursor.style.marginLeft = "0px";
}

function getOutput(event) {
  event.preventDefault();

  let buttonOption = inputButton.value;
  let userInput = document.querySelector("#input-user");
  let apiKey = "ba3t92f6af6b8204143cbo1c5a032ba3";
  let prompt = `give-me 3 options of ${buttonOption} that follow the next parameters: ${userInput.value} `;

  let context =
    "you are well informed about all movies and series, and you know the best to recommend. You never explain your reasons or introduce your answers. You only enter the name of the production and the year it was released. You give all your responses formatted in HTML using a <ul> element and without using any elements with bold font weight, color or underlined text. Do not use links in the answers ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let outputDiv = document.querySelector("#output-div");
  outputDiv.classList.remove("disabled");
  outputDiv.innerHTML = `<p class="generating">Generating ${buttonOption} options - ${userInput.value}</p>`;

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
