// This file is obselete, replaced it with the websocket connection 
// in the table.jsx. Keeping it for reference though.

// const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
// const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// socket.onopen = (event) => {
//     appendMsg('system', 'websocket', 'connected');
// };

// // Display messages in the chat window 
// socket.onmessage = async (event) => {
//     const text = await event.data.text();
//     const chat = JSON.parse(text);
//     appendMsg('user', chat.name, chat.msg);
// };

// // If websocket is closed, disables the interface 
// socket.onclose = (event) => {
//     appendMsg('system', 'websocket', 'disconnected');
//     document.querySelector('#name-controls').disabled = true;
//     document.querySelector('#chat-controls').disabled = true;
// };

// // Send a message over websocket 
// function sendMessage() {
//     const msgEl = document.querySelector('#new-msg');
//     const msg = msgEl.value;
//     if (!!msg) {
//         appendMsg('me', 'me', msg);
//         const name = document.querySelector('#my-name').value;
//         socket.send(`{"name":"${name}", "msg":"${msg}"}`);
//         msgEl.value = '';
//     }
// }

// function appendMsg(cls, from, msg) {
//     const chatText = document.querySelector('#chat-text');
//     chatText.innerHTML =
//     `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
// }

// const input = document.querySelector('#new-msg');
// input.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         sendMessage();
//     }
// });
