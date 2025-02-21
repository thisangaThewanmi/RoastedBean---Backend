
import express, { Request, Response } from "express";
import staffRouter from "./src/routes/staffRouter";
import itemRouter from "./src/routes/itemRouter";
const app = express();
const PORT = 3001;

//to fetch req bodies tht comes with content type - application.json
app.use(express.json())
app.use('/api/v1/staff',staffRouter)
app.use('/api/v1/item',itemRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


