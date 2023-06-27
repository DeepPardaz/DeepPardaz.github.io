document.addEventListener("DOMContentLoaded", function() {
  const animationContainer = document.querySelector(".animation-container");
  const animationElement = document.getElementById("animation");
  const text = "01010101010101010101010101010101";
  const word = "Deep Pardaz";
  const animationDuration = 3500; // Animation duration in milliseconds

  let currentText = "";
  let currentIndex = 0;

  // Function to update the animation text
  function updateAnimation() {
    if (currentIndex >= text.length) {
      animationElement.textContent = word;
      return;
    }

    currentText += text[currentIndex];
    animationElement.textContent = currentText;
    currentIndex++;

    // Scroll animation
    animationContainer.scrollTop = animationContainer.scrollHeight;

    setTimeout(updateAnimation, 100); // Delay between each character
  }

  // Start the animation
  setTimeout(updateAnimation, 1000); // Delay before animation starts
});
