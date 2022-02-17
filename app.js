document.getElementById('calculate').addEventListener('click', function() {
    //income value
    const income = document.getElementById('income');
    totalIncome = parseFloat(income.value);
    //expenses value
    const food = document.getElementById('food-cost');
    foodResult = parseFloat(food.value);

    const rent = document.getElementById('rent-cost');
    rentResult = parseFloat(rent.value);

    const colth = document.getElementById('cloth-cost');
    clothResult = parseFloat(colth.value);
    //total expens
    const totalCost = foodResult + rentResult + clothResult;
    console.log(totalCost);
    const expens = document.getElementById('total-expens');
    expens.innerText = totalCost;
    //current balance
    const finalBalance = totalIncome - totalCost;
    const balance = document.getElementById('final-balance');
    balance.innerText = parseFloat(finalBalance);
});

//saving calculation
document.getElementById('save-btn').addEventListener('click', function() {
    const currentbalance = parseFloat(document.getElementById('final-balance').innerText);
    //saving balance
    const saveInput = document.getElementById('save-input').value;
    const saving = currentbalance * (saveInput / 100);
    //saving amount
    savingText = document.getElementById('saving');
    savingText.innerText = parseInt(saving);
    const remainigbalance = currentbalance - saving;
    console.log(remainigbalance);
    const remainigText = document.getElementById('remaining-blance');
    remainigText.innerText = parseFloat(remainigbalance);


})