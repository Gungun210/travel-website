// Booking alert
function bookTrip(destination) {
  alert("You have booked a trip to " + destination + "! We will contact you soon.");
}

// Contact form submission
document.getElementById("contactForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
  this.reset();
});

// Booking form submission
document.getElementById("bookingForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Your booking request has been received! We will contact you shortly.");
  this.reset();
});

// Destination filter
function filterDest(type) {
  const cards = document.querySelectorAll("#destinationsGrid .card");
  cards.forEach(card => {
    if(type === "all") card.style.display = "block";
    else card.style.display = card.classList.contains(type) ? "block" : "none";
  });
}

// Testimonials slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
}
setInterval(() => { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); }, 4000);
