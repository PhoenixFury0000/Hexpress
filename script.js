document.addEventListener('DOMContentLoaded', function() {

    // Update time function

    function updateTime() {

        const now = new Date();

        const timeString = now.toLocaleTimeString('en-US', { 

            hour: '2-digit', 

            minute: '2-digit',

            hour12: true 

        }).toUpperCase();

        

        const dateString = now.toLocaleDateString('en-GB', {

            day: 'numeric',

            month: 'short',

            year: 'numeric'

        });

        

        // Update time elements

        document.getElementById('current-time').textContent = timeString;

        document.getElementById('side-time').textContent = timeString;

        

        // Update date elements

        document.getElementById('current-date').textContent = dateString;

        document.getElementById('side-date').textContent = dateString;

    }

    

    // Initial time update

    updateTime();

    

    // Update time every minute

    setInterval(updateTime, 60000);

    

    // Passenger name editing functionality

    const passengerName = document.getElementById('passenger-name');

    const passengerInput = document.getElementById('passenger-input');

    const updateButton = document.getElementById('update-btn');

    

    // Make passenger name editable on click

    passengerName.addEventListener('click', function() {

        passengerInput.value = passengerName.textContent;

        passengerInput.focus();

    });

    

    // Update passenger name when button is clicked

    updateButton.addEventListener('click', function() {

        const newName = passengerInput.value.trim();

        if (newName) {

            passengerName.textContent = newName;

            

            // Show confirmation

            this.textContent = 'Updated!';

            this.style.background = '#388e3c';

            

            setTimeout(() => {

                this.textContent = 'Update Ticket';

                this.style.background = '';

            }, 1500);

        } else {

            // Show error

            this.textContent = 'Name Required!';

            this.style.background = '#d32f2f';

            

            setTimeout(() => {

                this.textContent = 'Update Ticket';

                this.style.background = '';

            }, 1500);

        }

    });

    

    // Allow Enter key to update name

    passengerInput.addEventListener('keypress', function(e) {

        if (e.key === 'Enter') {

            updateButton.click();

        }

    });

    

    // Add hover effects to ticket

    const ticket = document.querySelector('.ticket');

    

    ticket.addEventListener('mouseenter', function() {

        this.style.transform = 'translateY(-5px)';

        this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';

    });

    

    ticket.addEventListener('mouseleave', function() {

        this.style.transform = 'translateY(0)';

        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';

    });

    

    // Make platform number more prominent

    const platformNumber = document.querySelector('.platform .number');

    platformNumber.style.textShadow = '2px 2px 3px rgba(0, 0, 0, 0.3)';

    

    // Add subtle animation to snack icon

    const snackIcon = document.querySelector('.snack svg');

    snackIcon.style.transition = 'transform 0.3s ease';

    

    snackIcon.addEventListener('mouseenter', function() {

        this.style.transform = 'scale(1.1)';

    });

    

    snackIcon.addEventListener('mouseleave', function() {

        this.style.transform = 'scale(1)';

    });

    

    // Handle window resize for better responsiveness

    function handleResize() {

        const width = window.innerWidth;

        const container = document.querySelector('.container');

        

        if (width < 480) {

            container.style.transform = 'scale(0.7)';

        } else if (width < 600) {

            container.style.transform = 'scale(0.8)';

        } else if (width < 768) {

            container.style.transform = 'scale(0.9)';

        } else {

            container.style.transform = 'scale(1)';

        }

    }

    

    // Initial resize handling

    handleResize();

    

    // Add resize listener

    window.addEventListener('resize', handleResize);

    

    // Add print functionality

    const style = document.createElement('style');

    style.textContent = `

        @media print {

            body * {

                visibility: hidden;

            }

            .ticket, .ticket * {

                visibility: visible;

            }

            .ticket {

                position: absolute;

                left: 0;

                top: 0;

                width: 100%;

                box-shadow: none;

            }

            .controls {

                display: none;

            }

        }

    `;

    document.head.appendChild(style);

});