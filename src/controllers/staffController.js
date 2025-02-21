"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStaff = getAllStaff;
exports.AddStaff = AddStaff;
exports.updateStaff = updateStaff;
exports.deleteStaff = deleteStaff;
exports.getStaffbyEmail = getStaffbyEmail;
const prisma_1 = __importDefault(require("../database/prisma"));
// Get All Customers
function getAllStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const staff = yield prisma_1.default.staff.findMany();
        res.status(200).json(staff);
    });
}
function AddStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const staff = yield prisma_1.default.staff.create({ data: req.body });
            console.log(staff);
            res.status(201).json(staff);
        }
        catch (error) {
            console.error("Error creating customer:", error); // Logs the full error details
            res.status(500).json({ error: "An unexpected error occurred" });
        }
    });
}
function updateStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateStaff = yield prisma_1.default.staff.update({
                where: { email: req.params.email }, data: req.body,
            });
            res.json(updateStaff);
        }
        catch (error) {
            res.status(500).json({ message: "Error occurred while updating" });
        }
    });
}
function deleteStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma_1.default.staff.delete({ where: { email: req.params.email } });
            res.json({ message: "Staff deleted suessfully" });
        }
        catch (error) {
            console.log("error" + error);
            res.status(500).json({ error: "Error deleting customer" });
        }
    });
}
function getStaffbyEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const staff = yield prisma_1.default.staff.findUnique({ where: { email: req.params.email } });
        staff ? res.json(staff) : res.status(404).json({ error: "Staff not Found" });
    });
}
