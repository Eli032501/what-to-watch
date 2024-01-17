function getOutput(event) {
  event.preventDefault();

  new Typewriter("#output-div", {
    strings: "Me before You",
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("click", getOutput);
