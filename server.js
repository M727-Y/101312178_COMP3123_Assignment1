const express = require("express")
const userRoutes = require("./routes/userRoutes")
const employeeRoutes = require("./routes/employeeRoutes")
const mongoose = require("mongoose")

const app = express()

const SERVER_PORT = 3001
const DB_URL = "mongodb+srv://M727-Y:M727-Y@cluster0.fbvfjtf.mongodb.net/AssignmentDb?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded())


app.use("/api/user/", userRoutes)
app.use("/api/emp/", employeeRoutes)
app.route("/")
    .get((req, res) => {
        res.send("<h1>Assignment1</h1>")
    })
app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})