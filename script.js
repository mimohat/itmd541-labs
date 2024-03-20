/**
 * This script calculates the tip amount and total bill with tip based on user input.
 * It listens for input events on the bill total and tip slider, and updates the
 * disabled inputs for tip amount and total with tip accordingly.
 */

document.addEventListener("DOMContentLoaded", function() {
    // Get the DOM elements for the bill total input and tip slider
    var billTotalInput = document.getElementById("billTotal");
    var tipSlider = document.getElementById("tipSlider");
    var tipPercentageOutput = document.getElementById("tipPercentage");
    var tipAmountInput = document.getElementById("tipAmount");
    var totalWithTipInput = document.getElementById("totalWithTip");
    
    // Function to calculate the tip and total bill with tip
    function calculateTip() {
        // Get the bill total from the input field
        var billTotal = parseFloat(billTotalInput.value);
        // Get the tip percentage from the slider
        var tipPercentage = parseFloat(tipSlider.value);
        // Validate the input
        if (isNaN(billTotal) || billTotal < 0) {
            alert("Please enter a valid bill total.");
            return;
        }

        // Calculate the tip amount and total bill with tip
        var tipAmount = billTotal * (tipPercentage / 100);
        var totalWithTip = billTotal + tipAmount;
        // Update the disabled input fields with the calculated values
        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
    }

    // Update the tip percentage output when the slider is changed
    tipSlider.addEventListener("input", function() {
        // Update the tip percentage output
        tipPercentageOutput.textContent = this.value + '%';
        // Calculate and update the tip
        calculateTip();
    });

    // Calculate tip when bill total is changed
    billTotalInput.addEventListener("input", calculateTip);
});
