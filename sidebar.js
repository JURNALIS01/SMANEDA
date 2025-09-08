const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

let isOpen = false;

if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    if (!isOpen) {
      // ==== BUKA ====
      sidebar.animate([
        { transform: "translateX(-250px)" },
        { transform: "translateX(0)" }
      ], { duration: 400, fill: "forwards", easing: "ease-out" });

      menuBtn.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(150px)" }
      ], { duration: 400, fill: "forwards", easing: "ease-out" });

      isOpen = true;
    } else {
      // ==== TUTUP ====
      sidebar.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(-250px)" }
      ], { duration: 530, fill: "forwards", easing: "cubic-bezier(1,1,1,1)" });
      // cepat di awal, lambat di akhir

      menuBtn.animate([
        { transform: "translateX(150px)" },
        { transform: "translateX(0px)" }
      ], { duration: 400, fill: "forwards", easing: "cubic-bezier(1,1,1,1)" });
      // lambat di awal, cepat di akhir

      isOpen = false;
    }
  });
}