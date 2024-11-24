const express = require("express");
const app = express();
const mongoose = require('mongoose');//db
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));//to parse data or use req.body
app.use(methodOverride("_method"));

main().then(() => {//mongoose
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index Route
app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    res.render("index.ejs", { chats });
});

// let chat1 = new chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date(),//creats date
// });

// chat1.save().then(res => {
//     console.log(res);
// });



//new

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});
//create
app.post("/chats", (req, res) => {
    let { from, msg, to} = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat
    .save()
    .then(res => {
        console.log("chat was saved");
    })
    .catch(err => {
        console.log(err);
    });
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("root is working");
});

//edit
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
   let chatm = await chat.findById(id);
    res.render("edit.ejs", { chatm });
});

//update
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg:newMsg} = req.body;
    let updatedchat = await chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
    console.log(updatedchat);
    res.redirect("/chats");
});

//delete
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let dchat = await chat.findByIdAndDelete(id);
    res.redirect("/chats");

});

app.listen(3000, () => {
    console.log("server is listning on port 8080");
});



