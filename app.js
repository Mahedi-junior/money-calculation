//Function Declaration for input value

function getValue(inputValue) {
    let amount = document.getElementById(inputValue);
    let inputAmount = parseFloat(amount.value);

    // Error handling for Negative & String value
    if (isNaN(inputAmount) || inputAmount < 0) {
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

    const totalExpense = foodAmount + rentAmount + clothAmount;
    const currentBalance = incomeInput - totalExpense;

    // Error handling Expanse less than Income

    if (incomeInput < totalExpense) {
        return alert("Expense cann't more than Income");
    }
    // Show Expanse & Current Balance

    document.getElementById("total-expense").innerText = totalExpense;
    document.getElementById("final-balance").innerText = currentBalance;
});

// Calling the function
// document.getElementById("calculate").addEventListener("click", function () {});
//saving calculation

// document.getElementById("save-btn").addEventListener("click", function () {
// const currentbalance = parseFloat(
// document.getElementById("final-balance").innerText
// );
// //saving balance
// const saveInput = document.getElementById("save-input").value;
// const saving = currentbalance * (saveInput / 100);
// //saving amount
// savingText = document.getElementById("saving");
// savingText.innerText = parseInt(saving);
// const remainigbalance = currentbalance - saving;
// console.log(remainigbalance);
// const remainigText = document.getElementById("remaining-blance");
// remainigText.innerText = parseFloat(remainigbalance);
// });