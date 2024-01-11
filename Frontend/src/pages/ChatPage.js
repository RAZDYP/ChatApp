import React, { useState, useEffect } from 'react'

function ChatPage() {

    const [chats, setChats] = useState([])

    const fetchChats = async () => {
        const res = await fetch('/api/chat', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        setChats(data)
        console.log(data)
    }


    useEffect(() => {
        fetchChats()
    }, [])

    return (
        <div>
            <h1>ChatPage</h1>
            {chats.map((chat) => (
                <div key={chat._id} >
                    <h1>{chat.chatName}</h1>
                </div>
            ))}
        </div>
    )
}

export default ChatPage