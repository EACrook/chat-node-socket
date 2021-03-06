const socket = io();

const chat = document.querySelector('.chat-form');
const Input = document.querySelector('.chat-input');
const chatWindow = document.querySelector('.chat-window');

chat.addEventListener('submit', event => {
    // this will avoid a page reload whenever the event(new message is sent) is triggered
    event.preventDefault();
    // socket.emit() is the method responsible for sending data from the client
    // this funciton takes the name of the event(chat) as the first parameter and associated value(value of input field) as the second parameter
    socket.emit('chat', Input.value);
    Input.value = '';
});

const renderMessage = message => {
    const div = document.createElement('div');
    div.classList.add('render-message');
    div.innerText = message;
    chatWindow.appendChild(div);
}

socket.on('chat', message => {
    // console.log('From server: ', message);
    renderMessage(message);
});