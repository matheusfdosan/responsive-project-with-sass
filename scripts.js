/* 
  Script que cria os cards, baseados em um clone de um card já existente no HTML, o script cria cards e muda os seus valores conforme uma lista de objetos com seus títulos, duração do vídeo, thumbnails e IDs.

  Além de também, criar um modal para cada um desses cards, e dentro desse modal, tem um iframe que incorpora o video de acordo com o link passado, entretanto o link passado é feito com a url do youtube (https://www.youtube.com/embed/) seguido do ID do elemento, que é o completemento para incorporar o respectivo vídeo.
*/

// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    video_id: "GykTLqODQuU",
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
    video_id: "HN1UjzRSdBk",
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
    video_id: "rAzHvYnQ8DY",
  },
  {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
    video_id: "ghTrp1x_1As",
  },
  {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
    video_id: "GSqR2i-Pq6o",
  },
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
    video_id: "2alg7MQ6_sI",
  },
];

videos.map((video) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});

let showMenu = true;

const menuSection = document.querySelector(".menu-section");

menuSection.addEventListener("click", () => {
  document.body.style.overflow = showMenu ? "hidden" : "initial";

  menuSection.classList.toggle("on");
  showMenu = !showMenu;
});
