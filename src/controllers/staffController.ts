import {Request,Response} from "express";
import prisma from "../database/prisma";

// Get All Customers
export async function getAllStaff(req: Request, res: Response) {
  const staff = await prisma.staff.findMany();
  res.status(200).json(staff);
}

export async function AddStaff(req: Request, res: Response) {
    try {
        const staff = await prisma.staff.create({ data: req.body });
        console.log(staff);
        res.status(201).json(staff);
    } catch (error) {
        console.error("Error creating staff:", error); // Logs the full error details
        res.status(500).json({ error:  "An unexpected error occurred" });
    }



}

export async function updateStaff(req: Request, res: Response) {

    try{
        const updateStaff = await prisma.staff.update({
            where:{email:req.params.email}, data :req.body,
        });
        res.json(updateStaff);

    }catch(error){
        res.status(500).json({message:"Error occurred while updating"})

    }
}

export async function deleteStaff(req: Request, res: Response) {
    try{
        await prisma.staff.delete({where:{ email: req.params.email}})
         res.json(
             {message:"Staff deleted successfully"}
         );
    }catch (error){
     console.log("error"+error)
        res.status(500).json({ error: "Error deleting customer" });
    }
}

export async function getStaffbyEmail(req: Request, res: Response) {

        const staff = await prisma.staff.findUnique({where :{ email: req.params.email}})
        staff ? res.json(staff) : res.status(404).json({error:"Staff not Found"})

    }




