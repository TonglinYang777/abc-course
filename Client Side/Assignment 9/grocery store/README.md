# Store Code Review

## Project Description
This project is a simple grocery store webpage called **Green Basket Grocery**.  
It allows users to enter quantities for products and calculate the total cost.  
The system can also generate a receipt and automatically reset after 15 seconds of inactivity.

## Technologies Used
HTML  
CSS  
JavaScript  

## Professional Improvement Suggestion

### Problem
The current JavaScript code manually reads each product quantity and calculates totals separately. This approach works but becomes difficult to maintain if more products are added.

### Why It Matters
Using arrays or objects to store product data would make the code more scalable and easier to maintain in real-world applications.

### Example Improvement

Instead of repeating code like:

```javascript
let milk = readQty("milk");
let bread = readQty("bread");