import {Router} from "express";
import {AddItem, deleteItem, getAllItems, getItemById, updateItem} from "../controllers/itemController";

const itemRouter = Router();


itemRouter.get('/getAllItems',getAllItems)
itemRouter.post('/addItem',AddItem)
itemRouter.get("/:id", getItemById);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);


export default itemRouter;