//this function help in to use 'Enter' key by using the 'Event'
function enterKey()
{
    if(Event.key==='Enter')
    {
        calTotal();
    }
}

//this function will add the $10 if cost is less then 40 and return as it is if greater then 40
function calTotal()
{
    const inputEle = document.querySelector('.js-cost');
    //here 'Number' is used to convert string value from DOM into integer value
    let cost = Number(inputEle.value);
    if(cost < 40)
    {
        cost = cost+10;
    }
    document.querySelector('.js-total').innerHTML = `$${cost}`;
}

function SubscribeButtton()
{
    const buttonEle = document.querySelector('.js-button');

    if(buttonEle.innerText === 'Subscribe')
    {
        buttonEle.innerHTML = 'Subscribed';
        //this will add an extra class when button is clicked and help in styling
        buttonEle.classList.add('is-subscribed');
    }
    else
    {
        buttonEle.innerHTML = 'Subscribe';
        //this Will remove this class when it is used 
        buttonEle.classList.remove('is-subscribed');
    }
}