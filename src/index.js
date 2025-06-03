import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();  // default is '.env' file in the root

connectDB().then(
    () => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
})// you don’t want your server to start unless the database connection is successful.
// This avoids serving requests that might fail because the database isn’t connected