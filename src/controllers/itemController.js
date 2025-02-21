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
exports.getAllItems = getAllItems;
exports.AddItem = AddItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
exports.getItemById = getItemById;
const prisma_1 = __importDefault(require("../database/prisma"));
function getAllItems(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const item = yield prisma_1.default.item.findMany();
        res.status(200).json(item);
    });
}
function AddItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const item = yield prisma_1.default.item.create({ data: req.body });
            console.log(item);
            res.status(201).json(item);
        }
        catch (error) {
            console.error("Error creating Item:", error); // Logs the full error details
            res.status(500).json({ error: "An unexpected error occurred" });
        }
    });
}
function updateItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateItem = yield prisma_1.default.item.update({
                where: { id: req.params.id }, data: req.body,
            });
            res.json(updateItem);
        }
        catch (error) {
            res.status(500).json({ message: "Error occurred while updating Item" });
        }
    });
}
function deleteItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma_1.default.item.delete({ where: { id: req.params.id } });
            res.json({ message: "Item deleted successfully" });
        }
        catch (error) {
            console.log("error" + error);
            res.status(500).json({ error: "Item deleting customer" });
        }
    });
}
function getItemById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const item = yield prisma_1.default.item.findUnique({ where: { id: req.params.id } });
        item ? res.json(item) : res.status(404).json({ error: "Item not Found" });
    });
}
