"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staffController_1 = require("../controllers/staffController");
const staffRouter = (0, express_1.Router)();
staffRouter.get('/getAllStaff', staffController_1.getAllStaff);
staffRouter.post('/addStaff', staffController_1.AddStaff);
exports.default = staffRouter;
