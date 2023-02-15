require('dotenv').config()
require("./config/database").connect()
const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
// var cookieParser = require('cookie-parser')



//import model - User
const user = require("./model/user")


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello auth system")
})

module.exports = app