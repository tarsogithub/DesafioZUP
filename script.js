const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");

geraValorAleatorio = () => {
  return Math.floor(Math.random() * 671);
};

pegarPersonagem = (section) => {
  let image = section.children[0];
  let paragrafo = section.children[1];
  let numeroaleatorio = geraValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroaleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((Response) => Response.json())
    .then((data) => {
      image.src = data.image;
      image.alt = data.name;
      paragrafo.innerHTML = data.name;
    });
};

iniciarPagina = () => {
  pegarPersonagem(section1);
  pegarPersonagem(section2);
  pegarPersonagem(section3);
  pegarPersonagem(section4);
};

window.onload = iniciarPagina();
