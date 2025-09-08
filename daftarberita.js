const links = [
  { name: "Kemenangan tim voli putri", url: "berita1.html" },
  { name: "kemenangan tim basket putri", url: "berita2.html" },
  { name: "kemenangan tim futsal putri", url: "berita3.html" },
  { name: "Wikipedia", url: "https://wikipedia.org" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "OpenAI", url: "https://openai.com" },
  { name: "StackOverflow", url: "https://stackoverflow.com" },
  { name: "Reddit", url: "https://reddit.com" }
];

const box = document.querySelector(".scroll-box");

links.forEach(link => {
  let a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.name;
  a.target = "_blank"; // buka di tab baru
  box.appendChild(a);
});