import React, {useState} from 'react'
import io from 'socket.io-client'


const socket = io('http://localhost:8080')
socket.on('message', function(msg){
    console.log(msg)
})


const Chat = () => {

    const [message, setMessage] = useState("")

    const handleChange = (e) => [
          setMessage(e.target.value)
    ]
     
    const handleClick = () => {
        socket.emit('message', message)
    }
    return(
        <>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>send</button>
        </>
    )

}

export default Chat