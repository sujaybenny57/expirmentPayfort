const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()
app.use(express.json())
app.use(cors())

// app.use("/payment",)

app.listen(port, (err) => {
    if (err) console.error("Failed to start server :", err)
    console.log("Server is up at port :", port)
})