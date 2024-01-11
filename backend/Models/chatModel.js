const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema(
    {
        chatName: {
            type: String, trim: true, required: true
        },
        isGroupChat: {
            type: Boolean, required: true, default: false
        },
        users: [{
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId, ref: "Message"
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        }
    },
    {
        timestamps: true
    }
)
const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;