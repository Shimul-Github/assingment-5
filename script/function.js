//alert(); // js connected to html

// first click

function goToTicketSection() {
    // console.log('clicked');
    const ticketPurchase = document.getElementById('ticket-purchase');
    ticketPurchase.scrollIntoView({behavior:'smooth'});
};

/**
 * paste this function to every seat and check console for message clicked
 * function selectRandomSeats() {
    const randomSeat = document.getElementsByClassName('seat');
    console.log('clicked')
}; */
const allSeats = document.getElementsByClassName('seat');
//console.log('clicked',allSeats);

let seatCount = 0;

for(const seat of allSeats){
    // 1:Now we get the all single seat
    // console.log(seat.innerText);
    //2: UPDATE THE SEAT COUNT NUMBER BY CLICK SEAT
    seat.addEventListener('click', function (eventName) {
        seatCount = seatCount + 1;
        // 3:TO TAKE THE SEAT INFO AND PASTE INTO SEAT INFO
        const seatName = eventName.target.parentNode.childNodes[3].innerText;
        console.log(seatName);
        const perSeatPrice = document.getElementById('ticket-price').innerText;
        console.log(perSeatPrice);
        const bookingTable = document.getElementById('booking-table');
        console.log(bookingTable);
        const className = 'Economy';
        
        const tr = document.createElement('tr');

        const td = document.createElement('td');
        td.innerText = seatName;
        const td0 = document.createElement('td');
        td0.innerText = className;
        const td1 = document.createElement('td');
        td1.innerText = perSeatPrice;
        tr.appendChild(td);
        tr.appendChild(td1);
        bookingTable.appendChild(tr);

        setInnerTextValue('selected-seats',seatCount);
        
       
        
        
        
        


       
       

    

        
        
        
    });
}



