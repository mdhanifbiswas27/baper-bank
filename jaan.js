document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('users-email');
    const email = emailField.value;

    const passwordField = document.getElementById('users-password');
    const password = passwordField.value;
    console.log(email,password);

    if(email === 'baperbank@gmail.com' && password === 'BaperTk'){
       window.location.href='bank.html'
    }
    else {
        alert('Tuy password vhule gesos toke ami tejjo sontan korlam');
    }
}) 

