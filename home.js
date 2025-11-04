document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting Fogg Perfume! We'll get back to you soon.");
  this.reset(); // Clears the form
});
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form refresh

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const rating = document.querySelector('input[name="rating"]:checked');

  if (!rating) {
    alert("Please select a star rating.");
    return;
  }

  // Show success message
  document.getElementById("feedbackSuccess").style.display = "block";

  // Optionally log the feedback to console
  console.log(`Name: ${name}, Mobile: ${mobile}, Rating: ${rating.value} stars`);

  // Reset form
  this.reset();
});
// Slider logic: uniform slides, prev/next, dots, and autoplay
(function() {
  const track = document.querySelector('.slider-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const btnPrev = document.querySelector('.slider-btn.prev');
  const btnNext = document.querySelector('.slider-btn.next');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!track || slides.length === 0) return;

  let index = 0;
  const total = slides.length;
  let autoPlayId = null;
  const AUTO_DELAY = 4000;

  // create dots
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => { goTo(i); resetAutoplay(); });
    dotsContainer.appendChild(b);
  });
  const dots = Array.from(dotsContainer.children);

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + total) % total;
    update();
  }

  btnNext.addEventListener('click', () => { goTo(index + 1); resetAutoplay(); });
  btnPrev.addEventListener('click', () => { goTo(index - 1); resetAutoplay(); });

  // keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { goTo(index + 1); resetAutoplay(); }
    if (e.key === 'ArrowLeft') { goTo(index - 1); resetAutoplay(); }
  });

  // autoplay
  function startAutoplay() {
    autoPlayId = setInterval(() => goTo(index + 1), AUTO_DELAY);
  }
  function stopAutoplay() { clearInterval(autoPlayId); autoPlayId = null; }
  function resetAutoplay() { stopAutoplay(); startAutoplay(); }

  // pause on hover
  document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoplay);
  document.querySelector('.slider-container').addEventListener('mouseleave', startAutoplay);

  // init
  update();
  startAutoplay();
})();


