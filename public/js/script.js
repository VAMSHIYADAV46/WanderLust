// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()



//-----------------------------------------------------------------------------------------------------------//

//preview button

document.getElementById("previewBtn").addEventListener("click", function () {
  const imageContainer = document.getElementById("imageContainer");
  const button = document.getElementById("previewBtn");

  if (imageContainer.style.display === "none") {
      imageContainer.style.display = "block";
      button.textContent = "Hide Preview"; // Change button text
  } else {
      imageContainer.style.display = "none";
      button.textContent = "Preview"; // Reset button text
  }
});