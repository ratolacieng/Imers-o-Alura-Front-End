//RESULTADOS
const resultArtist = document.getElementById("result-artists");
const playlistContainer = document.getElementById("result-playlist");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
        fetch(url)
        .then((response) => response.json())
        .then((results) => displayResults(results));
}

function hidePlaylists() {
    playlistContainer.classList.add("hidden");
  }

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});

// BOM DIA | BOA TARDE | BOA NOITE
const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

greetingElement.textContent = greetingMessage;
