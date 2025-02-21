import {Request,Response} from "express";
import prisma from "../database/prisma";


export async function getAllItems(req: Request, res: Response) {
    const item = await prisma.item.findMany();
    res.status(200).json(item);
}

export async function AddItem(req: Request, res: Response) {
    try {
        const item = await prisma.item.create({ data: req.body });
        console.log(item);
        res.status(201).json(item);
    } catch (error) {
        console.error("Error creating Item:", error); // Logs the full error details
        res.status(500).json({ error:  "An unexpected error occurred" });
    }



}

export async function updateItem(req: Request, res: Response) {

    try{
        const updateItem = await prisma.item.update({
            where:{id:req.params.id}, data :req.body,
        });
        res.json(updateItem);

    }catch(error){
        res.status(500).json({message:"Error occurred while updating Item"})

    }
}

export async function deleteItem(req: Request, res: Response) {
    try{
        await prisma.item.delete({where:{ id: req.params.id}})
        res.json(
            {message:"Item deleted successfully"}
        );
    }catch (error){
        console.log("error"+error)
        res.status(500).json({ error: "Item deleting customer" });
    }
}

export async function getItemById(req: Request, res: Response) {

    const item = await prisma.item.findUnique({where :{ id: req.params.id}})
    item ? res.json(item) : res.status(404).json({error:"Item not Found"})

}




