// Select elements
const messageInput = document.getElementById("messageInput");
const showBtn = document.getElementById("showBtn");
const colorBtn = document.getElementById("colorBtn");
const addNoteBtn = document.getElementById("addNoteBtn");
const removeNoteBtn = document.getElementById("removeNoteBtn");
const resetBtn = document.getElementById("resetBtn");
const card = document.getElementById("card");
const cardText = document.getElementById("cardText");

let note = null; // to track the note

// Part 1: Show Message
showBtn.addEventListener("click", function() {
    cardText.textContent = messageInput.value;
    card.style.display = "block";
});

// Part 2: Change Card Color
colorBtn.addEventListener("click", function() {
    card.style.backgroundColor = "darkblue";
    card.style.color = "white";
});

// Part 3: Add Note
addNoteBtn.addEventListener("click", function() {
    if (!note) {
        note = document.createElement("p");
        note.textContent = "This is a dynamic note.";
        card.appendChild(note);
    }
});

// Part 4: Remove Note
removeNoteBtn.addEventListener("click", function() {
    if (note) {
        note.remove();
        note = null;
    }
});

// Part 5: Reset
resetBtn.addEventListener("click", function() {
    cardText.textContent = "";
    messageInput.value = "";
    card.style.backgroundColor = "lightgray";
    card.style.color = "black";
    
    if (note) {
        note.remove();
        note = null;
    }

    card.style.display = "none";
});