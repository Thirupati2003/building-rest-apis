const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express();
const port = 8000;

app.get("/api/usersdata",(req,res)=>{
    return res.json(users);
});

app.get("/api/users/:userid",(req,res)=>{
    const id = Number(req.params.userid);
    const user = users.find(user=>user.id===id);
    return res.json(user);
    });


app.listen(port,() => {
    console.log(`Port started at ${port}`)
})
