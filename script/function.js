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
// console.log(allSeats);
//console.log('clicked',allSeats);

let seatCount = 0;

for(const seat of allSeats){
    seat.addEventListener('click', function (e) {
        console.log('click',e.value);
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';
        seatCount = seatCount + 1;
        if(seatCount>4){
            alert('You can not select more than 4 seats at a time. Now write your info for booking confirmation');
            document.querySelector('.active').classList.remove('active');
            seat.classList.add('active')
            return;
        
        }
        

        // 3:TO TAKE THE SEAT INFO AND PASTE INTO SEAT INFO
        const seatName = e.target.innerText;
        
        const perSeatPrice = document.getElementById('ticket-price').innerText;
        // console.log(perSeatPrice);
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


        
        totalPrice('total-cost',parseInt(perSeatPrice));
        GrandTotalPrice('grand-total-price',parseInt(perSeatPrice));

        setInnerTextValue('selected-seats',seatCount);

        function showConfirmation() {
            const nextButton = document.getElementById('next-btn');
            hideElementById(nextButton);
            const confirmMessage = document.getElementById('modal');
            showElementById(confirmMessage);
            
            
        };
        
    });
}



