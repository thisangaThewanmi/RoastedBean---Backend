import {Request,Response} from "express";

// Get All Customers
export async function getAllStaff(req: Request, res: Response) {
    console.log("getAllStaff");
    res.status(200).json({ message: "List of all staff" }); // Sends a response
}

export async function AddStaff(req: Request, res: Response) {
    console.log("Add Staff");
    res.status(200).json({ message: "Staff added successfully" }); // Sends a response
}

export async function updateStaff(req: Request, res: Response) {
    console.log("Add Staff");
    res.status(200).json({ message: "Update staff" }); // Sends a response
}

export async function deleteStaff(req: Request, res: Response) {
    console.log("deleteStaff");
    res.status(200).json({ message: "StaffDeleted" }); // Sends a response
}

export async function getStaffbyName(req: Request, res: Response) {
    console.log("getStaffByName");
    res.status(200).json({ message: "Staff gained by name" }); // Sends a response
}
