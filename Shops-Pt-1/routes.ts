import { Router, Request, Response } from "express";
import { Shop } from "./shop";

let shops:Shop[] = [
    {id: 1, name: "Buddy's Pizza", rating: 5.0, isActive: true},
    {id: 2, name: "Antonio's", rating: 2.0, isActive: true},
    {id: 3, name: "New York City Depot Pizza", rating: 3.5, isActive: true},
    {id: 4, name: "Mr. Pizza", rating: 5.0, isActive: true},
    {id: 5, name: "Hungry Howie's", rating: 4.5, isActive: true},
];

export const shopRouter = Router();

shopRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
    if(req.query.minRating !== undefined){
        let minRating = shops.filter((x) => x.rating >= Number(req.query.minRating) && x.isActive);
        
        return res.status(200).json(minRating);
    }
    else {
        return res.status(200).json(shops.filter((x) => x.isActive));
    }
});

shopRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let findId = shops.find((x) => x.id === Number(req.params.id));
    if(findId === undefined){
        return res.status(404).json(`error : Shop not found: ${req.params.id}`);
    }
    else {
        return res.status(200).json(findId);
    }
});

shopRouter.post("/", async (req:Request, res:Response) :Promise<Response> => {
    let newShop:Shop = {
        id: GetNextID(),
        name: req.body.name,
        rating: Number(req.body.rating),
        isActive: req.body.isActive
    }

    shops.push(newShop);
    return res.status(200).send("New shop added");
})

shopRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> =>{
    let itemToUpdate = shops.find((x) => x.id === Number(req.params.id));
    if(itemToUpdate !== undefined){
        itemToUpdate.rating = Number(req.body.rating)
        
        return res.status(200).send("Updated");
    }
    else {
        return res.status(400).send("Could not update")
    }
})

shopRouter.delete("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let findItem = shops.find((x) => x.id === Number(req.params.id));

    if(findItem === undefined){
        return res.status(400);
    }
    else {
        shops = shops.filter((x) => x.id !== Number(req.params.id));
        return res.status(204).send("Deleted")
    }
})
//add soft delete

function GetNextID(){
    return Math.max(...shops.map((x) => x.id)) + 1;
}
