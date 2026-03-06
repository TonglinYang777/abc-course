let timer;

// Fixed product prices stored as constants.
// Using constants prevents accidental changes during execution
// and keeps pricing logic organized in one place.
const PRICE_MILK = 3.50;
const PRICE_BREAD = 2.25;
const PRICE_EGGS = 4.10;
const PRICE_RICE = 6.00;
const PRICE_APPLES = 2.80;
const PRICE_CHICKEN = 9.50;

/*
This function starts or restarts the inactivity timer.
If the user does nothing for 15 seconds,
the shopping cart will automatically reset.
*/
function startTimer() {
  // Clear any existing timer first
  clearTimeout(timer);

  // Start a new timer
  timer = setTimeout(function () {

    // If no activity occurs, reset the cart
    resetCart("Cart reset due to inactivity.");
  }, 15000);
}

/*
This function reads the quantity entered by the user
from the input field.
It ensures:
empty inputs become 0
negative numbers become 0
invalid values are corrected
*/

function readQty(id) {

  // Convert input value to number
  let v = Number(document.getElementById(id).value);

  // If the field is empty, treat it as 0
  if (!document.getElementById(id).value) v = 0;

  // Prevent invalid or negative numbers
  if (isNaN(v) || v < 0) v = 0;

  // Update the input field with corrected value
  document.getElementById(id).value = v;
  return v;
}

/*
This function updates the Total price
shown on the page.
*/
function setTotal(amount) {

  // Convert number to currency format with 2 decimals
  document.getElementById("total").textContent = "$" + amount.toFixed(2);
}

/*
This function calculates the total cost
of all items currently in the shopping cart.
*/
function calculateTotal() {
  // Reset inactivity timer whenever user interacts
  startTimer();

  // Read quantities for each product
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

  // Calculate total price using quantity × product price
  let total =
    milk * PRICE_MILK +
    bread * PRICE_BREAD +
    eggs * PRICE_EGGS +
    rice * PRICE_RICE +
    apples * PRICE_APPLES +
    chicken * PRICE_CHICKEN;

  // Update total display
  setTotal(total);

  if (milk + bread + eggs + rice + apples + chicken === 0) {
    document.getElementById("receipt").textContent = "Cart is empty.";
  } else {

    // Inform user total is calculated
    document.getElementById("receipt").textContent = "Total calculated. Click Print Receipt.";
  }
}

/*This function formats the current date and time
to appear on the receipt.*/
function formatDateTime(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  let h = d.getHours();
  const ampm = h >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour format
  h = h % 12;
  if (h === 0) h = 12;

  const hh = String(h).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd} ${hh}:${min} ${ampm}`;
}

/*
This function generates a full receipt
showing each item purchased and the total cost.
*/
function printReceipt() {
  startTimer();

  // Read quantities
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

  // If no items are selected
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    setTotal(0);
    document.getElementById("receipt").textContent = "Cart is empty.";
    return;
  }

  // Calculate individual line totals
  let milkLine = milk * PRICE_MILK;
  let breadLine = bread * PRICE_BREAD;
  let eggsLine = eggs * PRICE_EGGS;
  let riceLine = rice * PRICE_RICE;
  let applesLine = apples * PRICE_APPLES;
  let chickenLine = chicken * PRICE_CHICKEN;

  // Calculate final total
  let total = milkLine + breadLine + eggsLine + riceLine + applesLine + chickenLine;
  setTotal(total);

  // Get current time for receipt
  const now = new Date();
  const when = formatDateTime(now);
// Build receipt text step by step
  let text = "";
  text += "Green Basket Grocery\n";
  text += "Date/Time: " + when + "\n";
  text += "-----------------------------\n";

  // Only print items that were purchased
  if (milk > 0) text += "Milk x" + milk + " = $" + milkLine.toFixed(2) + "\n";
  if (bread > 0) text += "Bread x" + bread + " = $" + breadLine.toFixed(2) + "\n";
  if (eggs > 0) text += "Eggs x" + eggs + " = $" + eggsLine.toFixed(2) + "\n";
  if (rice > 0) text += "Rice x" + rice + " = $" + riceLine.toFixed(2) + "\n";
  if (apples > 0) text += "Apples x" + apples + " = $" + applesLine.toFixed(2) + "\n";
  if (chicken > 0) text += "Chicken x" + chicken + " = $" + chickenLine.toFixed(2) + "\n";

  
  text += "-----------------------------\n";
  text += "FINAL TOTAL: $" + total.toFixed(2) + "\n";
  text += "Thank you for shopping!\n";

  // Display receipt in the receipt box
  document.getElementById("receipt").textContent = text;
}

/*
This function clears all cart values
and resets the interface to default state.
*/
function resetCart(message) {

  // Reset all product quantities
  document.getElementById("milk").value = 0;
  document.getElementById("bread").value = 0;
  document.getElementById("eggs").value = 0;
  document.getElementById("rice").value = 0;
  document.getElementById("apples").value = 0;
  document.getElementById("chicken").value = 0;

  // Reset total display
  setTotal(0);

  // Show reset message
  document.getElementById("receipt").textContent = message;

  // Restart inactivity timer
  startTimer();
}
