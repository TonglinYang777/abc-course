// Select the canvas element from the HTML
const canvas = document.getElementById("matrixCanvas");

// Get the drawing context from the canvas
// The context allows us to draw shapes and text
const ctx = canvas.getContext("2d");

// Set canvas width and height to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Letters used in the Matrix rain
// These characters will randomly appear on screen
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Convert letters into an array
const lettersArray = letters.split("");

// Size of each character
const fontSize = 16;

// Number of columns based on screen width
// Each column will contain falling characters
const columns = canvas.width / fontSize;

// Create an array to store the drop position of each column
const drops = [];

// Initialize each column drop position
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Animation function
function animate() {

    // Draw a slightly transparent black rectangle
    // This creates the fading trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color and font
    ctx.fillStyle = "#ff69b4";
    ctx.font = fontSize + "px monospace";

    // Loop through each column
    for (let i = 0; i < drops.length; i++) {

        // Choose a random letter
        const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // If the drop reaches the bottom, randomly restart it
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move the drop down
        drops[i]++;
    }

    // requestAnimationFrame creates smooth animation
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// If the browser window is resized,
// update the canvas size
window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});