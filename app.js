document.getElementById('enter-button').addEventListener('click', function ()
{
    document.getElementById('logIn-Area').style.display = 'none';
    document.getElementById('transaction-Area').style.display = 'block';
})

const getAmount = (id) =>
{
    let userInput = document.getElementById(id + '-Amount').value;

    if(userInput != "")
    {
         userAmount = parseFloat(userInput);
    }
    else if (userInput == "")
    {
         userAmount = 0;
    }

    document.getElementById(id+'-Amount').value = "";

    return (userAmount);
}

// deposite Button handler

const depositeButton = document.getElementById('deposite-update').addEventListener('click', function()
{
    const currentAmount = getAmount('deposite');
    console.log(currentAmount);

    amountUpdate('deposite-Balance', currentAmount);
    amountUpdate('grand-Balance', currentAmount);
}
)


// withdraw buttton handler

const withdrawbutton = document.getElementById('withdraw-update').addEventListener('click', function()
{
    const currentAmount = getAmount('withdraw');
    console.log(currentAmount);

    amountUpdate('withdraw-Balance', currentAmount);
    amountUpdate('grand-Balance', -1* currentAmount);
}
)

const amountUpdate = (id,currentAmount) =>
{
    const previousUpdate = document.getElementById(id).innerText;
    const previousAmount = parseFloat(previousUpdate);
    const grandTotal = currentAmount + previousAmount;
    document.getElementById(id).innerText = grandTotal;
}