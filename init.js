//run this file ony for add sample data
const mongoose = require('mongoose');//db
const chat = require("./models/chat.js");


main().then(() => {//mongoose
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),//creats date
    },
    {
    from: "neha2",
    to: "priya2",
    msg: "send me your exam sheets",
    created_at: new Date(),//creats date
    },
    {
    from: "neha3",
    to: "priya3",
    msg: "send me your exam sheets",
    created_at: new Date(),//creats date
    },
    {
    from: "neha4",
    to: "priya4",
    msg: "send me your exam sheets",
    created_at: new Date(),//creats date
    },
    {
    from: "neha5",
    to: "priya5",
    msg: "send me your exam sheets",
    created_at: new Date(),//creats date
    },
    {
    from: "neha6",
    to: "priya6",
    msg: "send me your exam sheets",
    created_at: new Date(),//creats date
    },
    {
    from: "neha7",
    to: "priya7",
    msg: "send me your exam sheets",
    created_at: new Date(),//creats date
    },
    {
    from: "neha8",
    to: "priya8",
    msg: "send me your exam sheets",
    created_at: new Date(),//creats date
    },

];

chat.insertMany(allChats);