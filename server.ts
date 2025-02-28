import express, { Request, Response } from "express";
import cors from "cors"; 
import staffRouter from "./src/routes/staffRouter";
import itemRouter from "./src/routes/itemRouter";
const app = express();
const PORT = 3001;


app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin
  methods: 'GET,POST,PUT,DELETE', // Allow only these methods
  credentials:true,
};

// Use the cors middleware with custom options
app.use(cors(corsOptions));


app.use('/api/v1/staff',staffRouter)
app.use('/api/v1/item',itemRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})