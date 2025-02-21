import {Router} from "express";
import {
    AddStaff,
    deleteStaff,
    getAllStaff,
    getStaffbyEmail,
    updateStaff
} from "../controllers/staffController";

const staffRouter = Router ()

staffRouter.get('/getAllStaff',getAllStaff)
staffRouter.post('/addStaff',AddStaff)
staffRouter.get("/:email", getStaffbyEmail);
staffRouter.put("/:email", updateStaff);
staffRouter.delete("/:email", deleteStaff);


export default staffRouter;