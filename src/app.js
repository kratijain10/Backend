import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}
))

app.use(express.json({limit: "20kb"}))// lmit lagai ki kitna data bhej skte h log server pr 
app.use(express.urlencoded({extended: true, limit: "20kb"}))// urls ko read krne k liye kyuki url encoded hote h
app.use(express.static("public"))//public folder ko access krne k liye configuration
app.use(cookieParser())// mere server se user ke browser ki cokkies ko access and crud kr pau unke upar




export {app}