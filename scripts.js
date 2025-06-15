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

