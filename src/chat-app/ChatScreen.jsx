// import React from 'react'
// import '../styles/Chat.css'


// const ChatScreen = () => {


// const socket = io('http://localhost:3000')
// const messageContainer = document.getElementById('message-container')
// const messageForm = document.getElementById('send-container')
// const messageInput = document.getElementById('message-input')

// const name = prompt('What is your name?')
// appendMessage('You joined')
// socket.emit('new-user', name)

// socket.on('chat-message', data => {
//   appendMessage(`${data.name}: ${data.message}`)
// })

// socket.on('user-connected', name => {
//   appendMessage(`${name} connected`)
// })

// socket.on('user-disconnected', name => {
//   appendMessage(`${name} disconnected`)
// })

// messageForm.addEventListener('submit', e => {
//   e.preventDefault()
//   const message = messageInput.value
//   appendMessage(`You: ${message}`)
//   socket.emit('send-chat-message', message)
//   messageInput.value = ''
// })

// function appendMessage(message) {
//   const messageElement = document.createElement('div')
//   messageElement.innerText = message
//   messageContainer.append(messageElement)
// }
//   return (
//     <div className='chatBody'>
//         <div classname='message-container' id='message-container'></div>
//         <form classname='send-container' id='send-container'>
//             <input type="text" classname='message-input' id='message-input' />
//             <button type="submit" classname='send-button' id='send-button'>Send</button>
//         </form>
//     </div>
//   )
// }

// export default ChatScreen