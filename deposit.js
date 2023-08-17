// deposit part

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositString = depositField.value;
    const deposit =parseFloat(depositString);

    
    const totalDeposit = document.getElementById('total-deposit');
    const currentDepositString = totalDeposit.innerText;
    const currentDeposit =parseFloat(currentDepositString);
    totalDeposit.innerText = currentDeposit + deposit;
    depositField.value = '';

    const totalBalance = document.getElementById('total-balance');
    const currentBalanceString = totalBalance.innerText;
    const currentBalance = parseFloat(currentBalanceString);
    totalBalance.innerText =currentBalance + deposit;
    
})