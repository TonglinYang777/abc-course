// Prices stored in an object
const prices = {
    milk: 3.50,
    bread: 2.00,
    eggs: 4.00,
    rice: 5.00,
    apples: 1.50,
    chicken: 8.00
};

let inactivityTimer;

// Start timer when page loads
window.onload = function () {
    resetInactivityTimer();
};

// Reset inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(function () {
        document.getElementById("receipt").textContent =
            "Cart reset due to inactivity.";
        resetCart();
    }, 15000); // 15 seconds
}

// Calculate total
function calculateTotal() {
    resetInactivityTimer();

    let total = 0;

    for (let item in prices) {
        let quantity = parseInt(document.getElementById(item).value) || 0;

        if (quantity < 0) {
            alert("Quantity cannot be negative!");
            return;
        }

        total += quantity * prices[item];
    }

    document.getElementById("total").textContent = total.toFixed(2);

    if (total === 0) {
        document.getElementById("receipt").textContent =
            "Cart is empty.";
    }
}

// Print receipt
function printReceipt() {
    resetInactivityTimer();

    let receipt = "Simple Grocery Store\n";

    let now = new Date();

    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let day = String(now.getDate()).padStart(2, "0");
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    receipt += `${year}-${month}-${day} ${hours}:${minutes} ${ampm}\n\n`;

    let total = 0;

    for (let item in prices) {
        let quantity = parseInt(document.getElementById(item).value) || 0;

        if (quantity > 0) {
            let lineTotal = quantity * prices[item];
            total += lineTotal;

            receipt += `${item} x${quantity} = $${lineTotal.toFixed(2)}\n`;
        }
    }

    if (total === 0) {
        receipt += "Cart is empty.";
    } else {
        receipt += `\nTotal: $${total.toFixed(2)}`;
    }

    document.getElementById("receipt").textContent = receipt;
}

// Reset cart
function resetCart() {
    for (let item in prices) {
        document.getElementById(item).value = "";
    }

    document.getElementById("total").textContent = "0.00";
}
