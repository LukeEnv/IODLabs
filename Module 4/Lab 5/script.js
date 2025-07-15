// script.js for Lab 5: Manage Data 1
let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

let intervalId;

function renderNews() {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
  news.forEach((item) => {
    const div = document.createElement("div");
    div.className = "card mb-3";
    div.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.content}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderNews();
  intervalId = setInterval(renderNews, 5000);

  // Handle form submission
  document.getElementById("news-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("news-title").value.trim();
    const content = document.getElementById("news-content").value.trim();
    if (title && content) {
      news.push({ id: Date.now(), title, content });
      renderNews();
      this.reset();
    }
  });

  // Stop interval button
  document.getElementById("stop-btn").addEventListener("click", function () {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      this.disabled = true;
      this.textContent = "Auto-Refresh Stopped";
    }
  });
});
