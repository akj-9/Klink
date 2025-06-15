document.getElementById('menu-icon').addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('active');
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Grab form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Simulate success (you could replace this with EmailJS or fetch API call)
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      this.reset(); // Clear form fields
    } else {
      alert('Please fill in all fields.');
    }
  });


  window.addEventListener("load", () => {
    // After rotation (2s), zoom in
    setTimeout(() => {
      document.getElementById("loader").classList.add("zoom-out");
    }, 1000);

    // After zoom (0.5s more), remove loader
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 1000);
  });

 const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });

  // Optional: Add click effect
  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });

