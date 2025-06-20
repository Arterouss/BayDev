function orderWhatsApp() {
    window.open("https://wa.me/628xxxxxxxxxx", "_blank");
  }
  function openTutorial() {
    window.open("https://www.youtube.com/", "_blank");
  }

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

// Navigation

function navigateToPage(direction) {
  if (direction === 1) {
    window.location.href = "halaman-berikutnya.html"; // halaman berikutnya
  } else if (direction === -1) {
    window.location.href = "halaman-sebelumnya.html"; //  halaman sebelumnya
  }
}

