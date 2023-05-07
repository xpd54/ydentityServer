const express = require("express")
const mongose = require("mongoose")
const { getServices, addService } = require("./service/service")
const mongoURI = "mongodb://mongo:27017"
app = express()
app.use(express.json())
app.get("/",(req, res)=> {
    return res.send("testing")
})

app.get("/getAllServices", async (req, res) => {
    const {id} = req.body
    const services = await getServices(1)
    return res.send(services)
})

app.post("/addService", async(req, res) => {
    const {title, email, auth, logo} = req.body
    await addService(title, email, auth, logo)
    res.send("done")
})

const port = 3000
app.listen(port, async ()=>{
    await mongose.connect(mongoURI, {dbName: "service"})
    .catch((er) => {
        console.log(er)
    })
    console.log("Server is running")
})
