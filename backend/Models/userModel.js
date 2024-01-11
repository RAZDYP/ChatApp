const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String, trim: true, required: true
        },
        email: {
            type: String, trim: true, required: true, unique: true
        },
        password: {
            type: String, required: true
        },
        profilePic: {
            type: String, default: "https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User;