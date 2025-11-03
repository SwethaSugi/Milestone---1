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
