const lastUpdated = new Date(document.lastModified);
const options = { day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById("lastUpdated").textContent =
  lastUpdated.toLocaleDateString("en-MY", options);
