//DESARROLLA AQUI TUS SOLUCIONES
let pokemonInfo = [];
let dogInfo = [];
let numAl = Math.floor(Math.random() * 1302);
//1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.

const getRandomPokemon = async () => {
  let num = Math.floor(Math.random() * 1302);
  try {
    // Realizar la solicitud a la API
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    // Si la respuesta es exitosa, procesar los datos
    const data = await response.json();
    return "Pokemon: ", data;
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error("Hubo un problema con la solicitud:", error.message);
  }
};

// Llamar a la función para hacer la solicitud
//console.log(getRandomPokemon());

//2.- Declara una funcion **getImageAndName** que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName(pokemon) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!response.ok) {
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    pokemonInfo.push(
      img,
      name
    );
    return { name, img };
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
getImageAndName("pikachu");

//3.- Declara una funcion **printImageAndName** que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM

async function printImageAndName() {
  const imgElement = document.createElement("img");
  const nameElement = document.createElement("h1");
  imgElement.src = pokemonInfo[0];
  nameElement.textContent = pokemonInfo[1];
  document.body.appendChild(imgElement);
  document.body.appendChild(nameElement);
  return `<section>
    <img src="${imgElement}" alt="${nameElement}">
    <h1>${nameElement}</h1>
</section>`;
}

//4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio

async function getRandomDogImage() {
  try {
    // Realizar la solicitud a la API
    let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    // Si la respuesta es exitosa, procesar los datos
    const data = await response.json();
    dogInfo.push(data.message)
    return data.message;
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
//console.log(getRandomDogImage());

//5.- Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {
  let num = Math.floor(Math.random() * 1302);
  try {
    // Realizar la solicitud a la API
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    // Si la respuesta es exitosa, procesar los datos
    const data = await response.json();
    return data.sprites.front_default;
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
//console.log(getRandomPokemonImage());

//6.- Declara una función **printPugVsPikachu** que pinte la batalla entre "Pug" y "Pikachu" (no se testea)

async function printPugVsPikachu() {
  printImageAndName()
  
}
printPugVsPikachu()

//7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.

async function getRandomCharacter() {
  let num = Math.floor(Math.random() * 826);
  try {
    // Realizar la solicitud a la API
    let response = await fetch(
      `https://rickandmortyapi.com/api/character/${num}`
    );
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    // Si la respuesta es exitosa, procesar los datos
    const data = await response.json();
    return data;
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
//console.log(getRandomCharacter());

//8.- Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno

async function getRandomCharacterInfo() {
  try {
    // Realizar la solicitud a la API
    let response = await fetch(
      `https://rickandmortyapi.com/api/character/${numAl}`
    );
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(
        `Error HTTP: ${response.status} - ${response.statusText}`
      );
    }

    // Si la respuesta es exitosa, procesar los datos
    let data = await response.json();
    let img = data.image;
    let name = data.name;
    let episodes = data.episode;

    let firstEpisodeUrl = data.episode[0];
    let firstEpisodeResponse = await fetch(firstEpisodeUrl);
    let firstEpisodeData = await firstEpisodeResponse.json();

    let firstEpisode = firstEpisodeData.name;
    let dateEpisode = firstEpisodeData.air_date;

    return { img, name, episodes, firstEpisode, dateEpisode };
  } catch (error) {
    // Manejar errores de red o del servidor
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
//getRandomCharacterInfo().then((data) => console.log(data));
