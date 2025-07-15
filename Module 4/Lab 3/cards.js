function addCard(title, text, parentSelector = "#card-list") {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  document.querySelector(parentSelector).appendChild(template);
}

// Exercise 2: Generate cards from the provided data array
const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];
data.forEach((person) => addCard(person.name, `Age: ${person.age}`));

// Exercise 3: Artist portfolio with images
const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
    },
  ],
};

// Artist profile card
addCard(artist.name, "Portfolio");
// Portfolio cards with images
artist.portfolio.forEach((item) => {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = item.title;
  const cardText = template.querySelector(".card-text");
  const img = document.createElement("img");
  img.src = item.url;
  img.alt = item.title;
  img.style.maxWidth = "300px";
  cardText.appendChild(img);
  document.querySelector("#card-list").appendChild(template);
});
