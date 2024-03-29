const express = require('express');
const dotenv = require('dotenv');
const { chats, messages } = require('./data/data');


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api/chat", (req, res) => {
    res.send(chats);
}
)

app.get("/api/chat/:id", (req, res) => {
    const chat = messages.find((c) => c._id === req.params.id);
    res.send(chat);
}
)

