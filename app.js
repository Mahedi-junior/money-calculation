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

    const finalBalance = totalIncome - totalCost;
    const balance = document.getElementById('final-balance');
    balance.innerText = parseFloat(finalBalance);

});