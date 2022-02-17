//Function Declaration for input value

function getValue(inputValue) {
    let amount = document.getElementById(inputValue);
    let inputAmount = parseFloat(amount.value);

    // Error handling for Negative & String value

    if (isNaN(inputAmount)) {
        return alert("Please input valid amount");
    }

    return inputAmount;
}
// Calling Calculate Button

document.getElementById("calculate").addEventListener("click", function() {
    let incomeInput = getValue("income");
    let foodAmount = getValue("food-cost");
    let rentAmount = getValue("rent-cost");
    let clothAmount = getValue("cloth-cost");
    if (foodAmount < 0 || rentAmount < 0 || clothAmount < 0 || incomeInput < 0) {
        return alert("Input positive value");
    }

    const totalExpense = foodAmount + rentAmount + clothAmount;
    const currentBalance = incomeInput - totalExpense;

    // Error handling Expanse less than Income

    if (incomeInput < totalExpense) {
        return alert("Expense cann't more than Income");
    }
    // Show Expanse & Current Balance
    const balance = document.getElementById("final-balance").innerText;

    document.getElementById("total-expense").innerText = totalExpense;

    document.getElementById("final-balance").innerText = currentBalance;
});

// Saving calculation

function getSaving(percent) {
    let inputDiscount = document.getElementById(percent);
    let discount = parseFloat(inputDiscount.value);
    if (discount < 0 || isNaN(discount)) {
        return alert("please input a valid discount");
    }

    return discount;
}

document.getElementById("save-btn").addEventListener("click", function() {
    let currentBalance = parseFloat(
        document.getElementById("final-balance").innerText
    );
    let getDiscount = getSaving("save-input");
    let saveAmount = (getDiscount * currentBalance) / 100;
    if (saveAmount > currentBalance) {
        return alert("Saving Amount cann't more than Current Balance");
    }
    let remainingBalance = currentBalance - saveAmount;
    // Show Saving & Remaining Balance
    document.getElementById("saving").innerText = parseFloat(saveAmount);
    document.getElementById("remaining-balance").innerText =
        parseFloat(remainingBalance);
});