// Book Now button functionality
const bookNowButton = document.querySelector('.book-now form button');

bookNowButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(bookNowButton.closest('form'));
    const bikeType = formData.get('bike-type'); // Assuming there's an input/select with name 'bike-type'
    const rentalDate = formData.get('rental-date'); // Assuming there's an input with name 'rental-date'
    
    if (bikeType && rentalDate) {
        alert(`Booking ${bikeType} on ${rentalDate}`);
        // You can add the actual booking functionality here
    } else {
        alert('Please fill in all required fields.');
    }
});

// Testimonials carousel (optional)
const testimonials = document.querySelector('.testimonial-container');
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const testimonialsList = testimonials.children;
    Array.from(testimonialsList).forEach((testimonial, i) => {
        testimonial.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.children.length;
    showTestimonial(currentTestimonialIndex);
}

setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
showTestimonial(currentTestimonialIndex);
