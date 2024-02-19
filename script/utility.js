// to update innerText value of html ID
function setInnerTextValue(elementId, value) {
    document.getElementById(elementId).innerText = value;  
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
    
}