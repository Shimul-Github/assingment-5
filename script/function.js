//alert(); // js connected to html

// first click

function goToTicketSection() {
    // console.log('clicked');
    const ticketPurchase = document.getElementById('ticket-purchase');
    ticketPurchase.scrollIntoView({behavior:'smooth'});
};
if()
function showConfirmation() {
    const modalDisplay = document.getElementById('modal');
    modalDisplay.classList.remove('hidden');
    
};

/**
 * paste this function to every seat and check console for message clicked
 * function selectRandomSeats() {
    const randomSeat = document.getElementsByClassName('seat');
    console.log('clicked')
}; */
const allSeats = document.getElementsByClassName('seat');
// console.log(allSeats);
//console.log('clicked',allSeats);

let seatCount = 0;

for(const seat of allSeats){
    // 1:Now we get the all single seat
    // console.log(seat.innerText);
   
    //2: UPDATE THE SEAT COUNT NUMBER BY CLICK SEAT
    seat.addEventListener('click', function (e) {
        seatCount = seatCount + 1;
        // 3:TO TAKE THE SEAT INFO AND PASTE INTO SEAT INFO
        const seatName = e.target.innerText;
        
        
        const perSeatPrice = document.getElementById('ticket-price').innerText;
        console.log(perSeatPrice);
        const bookingTable = document.getElementById('booking-table');
        // console.log(bookingTable);
        const className = 'Economy';
        
        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = className;
        const p3 = document.createElement('p');
        p3.innerText = perSeatPrice;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        const totalSeatNumber = document.getElementById('total-seats-number').innerText;
        const convertedTotalSeatNumber = parseInt(totalSeatNumber);
        document.getElementById('total-seats-number').innerText = convertedTotalSeatNumber - 1;

        bookingTable.appendChild(li);


        
        const totalCost = document.getElementById('total-cost').innerText;
        const convertedTotalCost = parseInt(totalCost);
        document.getElementById('total-cost').innerText = convertedTotalCost + parseInt(perSeatPrice);
        const grandTotalCost = document.getElementById('grand-total-price').innerText; 
        const convertedGrandTotalCost = parseInt(grandTotalCost);
        document.getElementById('grand-total-price').innerText = convertedGrandTotalCost + parseInt(perSeatPrice);

        
        setInnerTextValue('selected-seats',seatCount);

        
        
       
        
        
        
        


       
       

    

        
        
        
    });
}



