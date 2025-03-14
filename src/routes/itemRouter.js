"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemController_1 = require("../controllers/itemController");
const itemRouter = (0, express_1.Router)();
itemRouter.get('/getAllItems', itemController_1.getAllItems);
itemRouter.post('/addItem', itemController_1.AddItem);
itemRouter.get("/:id", itemController_1.getItemById);
itemRouter.put("/:id", itemController_1.updateItem);
itemRouter.delete("/:id", itemController_1.deleteItem);
exports.default = itemRouter;
