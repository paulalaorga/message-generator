// Function to generate a random message
function generateMessage() {
    const messages = [
        "Hello, world!",
        "Welcome to the message generator.",
        "Have a great day!",
        "Keep up the good work!",
        "Stay positive and happy coding!"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Display the generated message
console.log(generateMessage());