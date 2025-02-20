import {Router} from "express";
import {AddStaff, deleteStaff, getAllStaff, getStaffbyName, updateStaff} from "../controllers/staffController";

const staffRouter = Router ()

staffRouter.get('/getAllStaff',getAllStaff)
staffRouter.post('/addStaff',AddStaff)
staffRouter.get("/:id", getStaffbyName);
staffRouter.put("/:id", updateStaff);
staffRouter.delete("/:id", deleteStaff);

export default staffRouter;