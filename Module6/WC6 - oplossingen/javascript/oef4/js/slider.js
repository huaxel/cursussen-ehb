let slider = document.getElementById("slider");
let output = document.getElementById("waarde");
output.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider.addEventListener('input', function () {
  output.textContent = slider.value;  // of this.value is hetzelfde
})
