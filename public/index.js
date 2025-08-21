document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

// Get modal elements
  const modal = document.getElementById("messageModal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.querySelector(".close");

  // Open modal
  openModal.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // Close modal
  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
