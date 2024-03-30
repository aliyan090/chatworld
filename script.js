// script.js
document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value.trim();
    if (message !== '') {
        displayMessage(message);
        // Send message to server or other clients
        // Example: using AJAX or WebSockets
        // AJAX: Send message to server
        // WebSockets: Send message to other clients in real-time
        // You'll need server-side code to handle this part
        messageInput.value = '';
    }
}

function displayMessage(message) {
    let chatBox = document.getElementById('chat-box');
    let messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
