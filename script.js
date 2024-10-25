const messages = [
    "Hello, World!",
    "Have a great day!",
    "Keep smiling!",
    "You're doing amazing!",
    "Stay positive!"
];

function generateMessage() {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = ""; // Clear previous messages

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    let messageToDisplay;

    // Switch statement to select a message based on the random index
    switch (randomIndex) {
        case 0:
            messageToDisplay = messages[0];
            break;
        case 1:
            messageToDisplay = messages[1];
            break;
        case 2:
            messageToDisplay = messages[2];
            break;
        case 3:
            messageToDisplay = messages[3];
            break;
        case 4:
            messageToDisplay = messages[4];
            break;
        default:
            messageToDisplay = "No message available"; // Fallback message
            break;
    }

    // Create a paragraph for the selected message and append it
    const p = document.createElement("p");
    p.innerText = messageToDisplay;
    messageElement.appendChild(p);
}
