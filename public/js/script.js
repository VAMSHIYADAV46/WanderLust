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
document.addEventListener("DOMContentLoaded", function () {
  const previewBtn = document.getElementById("previewBtn");
  if (!previewBtn) {
      console.error("Error: previewBtn not found in the document!");
      return;
  }

  previewBtn.addEventListener("click", function () {
      const imageContainer = document.getElementById("imageContainer");
      if (!imageContainer) {
          console.error("Error: imageContainer not found!");
          return;
      }

      if (imageContainer.style.display === "none") {
          imageContainer.style.display = "block";
          previewBtn.textContent = "Hide Preview";
      } else {
          imageContainer.style.display = "none";
          previewBtn.textContent = "Preview";
      }
  });
});





//-------------------------------------------------------------------------------------------------------------------//
//map


 
//  let map;
//  let autocomplete;

//  function initMap() {
//      // Create the map centered on a default location
//      map = new google.maps.Map(document.getElementById('map'), {
//          center: { lat: 17.3850, lng: 78.4867 } ,// Hyderabad, India
//          zoom: 13
//      });

//      // const input = document.getElementById('pac-input');

//      // Create the autocomplete object and bind it to the input field
//      autocomplete = new google.maps.places.Autocomplete(input);
//      autocomplete.bindTo('bounds', map);

//      // Set up the event listener for when the user selects a place
//      autocomplete.addListener('place_changed', () => {
//          const place = autocomplete.getPlace();
//          if (!place.geometry) {
//              console.log("No details available for the input: '" + place.name + "'");
//              return;
//          }

//          if (place.geometry.viewport) {
//              map.fitBounds(place.geometry.viewport);
//          } else {
//              map.setCenter(place.geometry.location);
//              map.setZoom(17); // Zoom to 17 if the place has no viewport
//          }

//          // Place a marker on the selected location
//          new google.maps.Marker({
//              position: place.geometry.location,
//              map: map
//          });
//      });
//  }



//-------------------------------------------------------------------------------------------------------------------//
//Search Script //

document.addEventListener("DOMContentLoaded", function() {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  
  // Basic form validation
  searchForm.addEventListener("submit", function(e) {
    if (searchInput.value.trim() === "") {
      e.preventDefault();
      
      // Show error message
      const errorMsg = document.createElement("div");
      errorMsg.className = "alert alert-danger mt-2";
      errorMsg.textContent = "Please enter a search term";
      
      // Remove any existing error messages
      const existingError = searchForm.querySelector(".alert");
      if (existingError) {
        existingError.remove();
      }
      
      searchForm.appendChild(errorMsg);
      
      // Remove error after 3 seconds
      setTimeout(() => {
        errorMsg.remove();
      }, 3000);
    }
  });
  
  // Clear error message when user starts typing
  searchInput.addEventListener("input", function() {
    const existingError = searchForm.querySelector(".alert");
    if (existingError) {
      existingError.remove();
    }
  });
  
  // Optional: Update URL with search params when form submitted
  searchForm.addEventListener("submit", function() {
    // This will happen before the form submission
    // We're just letting the normal form submission handle the navigation
    console.log("Searching for:", searchInput.value);
  });
});