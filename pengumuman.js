window.onload = function() {
  const container = document.getElementById("judul");

  // fallback teks jika tidak ada variabel di index.html
  const teks = typeof teksJudul !== "undefined" ? teksJudul : "katahari";

  // potong teks 2 huruf per bagian
  const parts = [];
  for (let i = 0; i < teks.length; i += 2) {
    parts.push(teks.slice(i, i + 2));
  }

  // daftar animasi
  const animations = ["fromLeftTop", "fromLeftBottom", "fromRightTop", "fromRightBottom"];

  // buat span + kasih animasi
  parts.forEach((part, i) => {
    const span = document.createElement("span");
    span.textContent = part;
    span.style.animation = '${animations[i % animations.length]} 0.8s ease forwards';
    span.style.animationDelay = (i * 0.5) + "s";
    container.appendChild(span);
  });
};