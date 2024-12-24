
const ratings = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("btn");
const ratingState = document.getElementById("Rating-State");
const thankYouState = document.getElementById("Thank-you-state");
const numSelected = document.getElementById("num-selected");
let selectedRating = null;

// Handle rating selection
ratings.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    selectedRating = button.getAttribute("data-rating");
  });
});

// Handle form submission
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
  if (selectedRating) {
    // Update selected rating in thank you state
    numSelected.textContent = selectedRating;
    // Hide rating state and show thank you state
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  } else {
    Swal.fire({
        icon: "error",
        title: "Please select a rating before submitting!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    
  }
});