const chats = [
    {
        isGroupChat: false,
        users: [
            {
                name: "John Doe",
                email: "john@example.com",
            },
            {
                name: "Piyush",
                email: "piyush@example.com",
            },
        ],
        _id: "617a077e18c25468bc7c4dd4",
        chatName: "John Doe",
    },
    {
        isGroupChat: false,
        users: [
            {
                name: "Guest User",
                email: "guest@example.com",
            },
            {
                name: "Piyush",
                email: "piyush@example.com",
            },
        ],
        _id: "617a077e18c25468b27c4dd4",
        chatName: "Guest User",
    },
    {
        isGroupChat: false,
        users: [
            {
                name: "Anthony",
                email: "anthony@example.com",
            },
            {
                name: "Piyush",
                email: "piyush@example.com",
            },
        ],
        _id: "617a077e18c2d468bc7c4dd4",
        chatName: "Anthony",
    },
    {
        isGroupChat: true,
        users: [
            {
                name: "John Doe",
                email: "jon@example.com",
            },
            {
                name: "Piyush",
                email: "piyush@example.com",
            },
            {
                name: "Guest User",
                email: "guest@example.com",
            },
        ],
        _id: "617a518c4081150716472c78",
        chatName: "Friends",
        groupAdmin: {
            name: "Guest User",
            email: "guest@example.com",
        },
    },
    {
        isGroupChat: false,
        users: [
            {
                name: "Jane Doe",
                email: "jane@example.com",
            },
            {
                name: "Piyush",
                email: "piyush@example.com",
            },
        ],
        _id: "617a077e18c25468bc7cfdd4",
        chatName: "Jane Doe",
    },
    {
        isGroupChat: true,
        users: [
            {
                name: "John Doe",
                email: "jon@example.com",
            },
            {
                name: "Piyush",
                email: "piyush@example.com",
            },
            {
                name: "Guest User",
                email: "guest@example.com",
            },
        ],
        _id: "617a518c4081150016472c78",
        chatName: "Chill Zone",
        groupAdmin: {
            name: "Guest User",
            email: "guest@example.com",
        },
    },
];

const messages = [
    {
        content: "Hello",
        sender: {
            name: "John Doe",
            email: "",
        },
        receiver: {
            name: "Piyush",
            email: "",
        },
        chatId: "617a077e18c25468bc7c4dd4",
        _id: "617a077e18c25468bc7c4dd4",
        createdAt: "2021-10-28T13:35:26.000Z",
        updatedAt: "2021-10-28T13:35:26.000Z",
        __v: 0,
    },

    {
        content: "Hello",
        sender: {
            name: "Piyush",
            email: "",
        },
        receiver: {
            name: "John Doe",
            email: "",
        },
        chatId: "617a077e18c25468bc7c4dd4",
        _id: "617a077e18c25468bc7c4dd4",
        createdAt: "2021-10-28T13:35:26.000Z",
        updatedAt: "2021-10-28T13:35:26.000Z",
        __v: 0,
    },
    {
        content: "Hello",
        sender: {
            name: "Guest User",
            email: "",
        },
        receiver: {
            name: "Piyush",
            email: "",
        },
        chatId: "617a077e18c25468bc7c4dd4",
        _id: "617a077e18c25468bc7c4dd4",
        createdAt: "2021-10-28T13:35:26.000Z",
        updatedAt: "2021-10-28T13:35:26.000Z",
        __v: 0,
    },
    {
        content: "Hello",
        sender: {
            name: "Piyush",
            email: "",
        },
        receiver: {
            name: "Guest User",
            email: ""
        },
        chatId: "617a077e18c25468bc7c4dd4",
        _id: "617a077e18c25468bc7c4dd4",
        createdAt: "2021-10-28T13:35:26.000Z",
        updatedAt: "2021-10-28T13:35:26.000Z",
        __v: 0,
    },
    {
        content: "Hello",
        sender: {
            name: "Anthony",
            email: ""
        },
        receiver: {
            name: "Piyush",
            email: ""
        },
        chatId: "617a077e18c25468bc7c4dd4",
        _id: "617a077e18c25468bc7c4dd4",
        createdAt: "2021-10-28T13:35:26.000Z",
        updatedAt:
            "2021-10-28T13:35:26.000Z",
        __v: 0,
    }
];


module.exports = { chats, messages };