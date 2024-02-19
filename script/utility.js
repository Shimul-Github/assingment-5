// to update innerText value of html ID
function setInnerTextValue(elementId, value) {
    document.getElementById(elementId).innerText = value;  
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
    
};

function totalPrice(id,value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const totalAmount = convertedTotalCost + parseInt(value);
    setInnerTextValue(id,totalAmount);
    
};
function showConfirmation() {
    const confirmMessage = document.getElementById('modal');
    confirmMessage.classList.remove('hidden');
    
};
function GrandTotalPrice(category) {

    const totalCost = document.getElementById('total-cost').innerText;
    const convertedGrandTotalCost = parseInt(totalCost);

    if(category == 'new-15'){
        setInnerTextValue('grand-total-price',convertedGrandTotalCost - convertedGrandTotalCost*15/100);

    } else if(category == 'couple-20'){
        setInnerTextValue('grand-total-price',convertedGrandTotalCost - convertedGrandTotalCost*20/100);


    }else{
        setInnerTextValue('grand-total-price',convertedGrandTotalCost);
        const phoneNumber = document.getElementById('phone-number').innerText;
        if(phoneNumber.length < 11){
            // showConfirmation();

        }
    };  
};


function hideElementById(elementId) {
    const element = document.getElementById('elementId');
    element.classList.add('hidden');
    
}
function showElementById(elementId) {
    const element = document.getElementById('elementId');
    element.classList.remove('hidden');
    
}
let modal = document.getElementById('modal');
let getConfirmMessage = document.getElementById('next-btn');
// let closeBtn = document.getElementById('closeBtn');
getConfirmMessage.addEventListener('click',openModal);
function openModal() {
    modal.style.display = 'block';
}