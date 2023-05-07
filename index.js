const express = require("express")
const mongose = require("mongoose")
const mongoURI = "mongodb://localhost:27017"
app = express()
app.use(express.json())
app.get("/",(req, res)=> {
    return res.send("testing")
})

const port = 3000
app.listen(port, async ()=>{
    await mongose.connect(mongoURI, {dbName: "service"})
    .catch((er) => {
        console.log(er)
    })
    console.log("Server is running")
})
