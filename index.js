function writeCards(names, eventName) {
    // Step 1: Create a new, empty array
    const messages = [];
    
    // Step 2: Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        // Step 3: Build the thank you message
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        
        // Add the message to the new array
        messages.push(message);
    }
    
    // Step 4: Return the new array
    return messages;
}

// Example usage
const names = ["Alice", "Bob", "Charlie"];
const eventName = "birthday";
console.log(writeCards(names, eventName));
function countDown(startNumber) {
    // Loop from startNumber down to 0
    for (let i = startNumber; i >= 0; i--) {
        // Log the current number
        console.log(i);
    }
}

// Example usage
countDown(5);


  