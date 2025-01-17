// Function to navigate between pages with rocket animation
function navigateTo(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Rocket animation logic
    const rocket = document.getElementById('rocket');
    rocket.classList.remove('hidden'); // Show the rocket
    rocket.style.animation = 'rocketFly 2s ease-out forwards'; // Start animation

    // Move to the next section after the rocket animation
    setTimeout(() => {
        rocket.classList.add('hidden'); // Hide the rocket after flying
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    }, 2000); // Timing for the rocket animation
}

// Handle room creation
document.getElementById('host-room-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const roomName = document.getElementById('room-name').value;
    const roomPassword = document.getElementById('room-password').value;
    const roomType = document.getElementById('room-type').value;

    console.log(`Room Name: ${roomName}, Password: ${roomPassword}, Type: ${roomType}`);

    alert('Room Created Successfully!');
    navigateTo('landing-page'); // Navigate back to home after creation
});

// Set landing page as active on load
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('landing-page');
});
//yo whas up


//b1


 
//b2


//b3

