import { Router, Request, Response } from "express";
import { Item } from "./item";

let itemArray:Item[] = [
    {id: 1, quantity: 20, price: 10, product: "Eggs"},
    {id: 2, quantity: 5, price: 15, product: "Quinoa"},
    {id: 3, quantity: 2, price: 9.75, product: "Tofu"},
    {id: 4, quantity: 200, price: 12.95, product: "Dates"}
];

export const itemRouter = Router();

itemRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
    if (req.query.maxPrice !== undefined){
        let underArray = itemArray.filter((x) => x.price <= Number(req.query.maxPrice));
        return res.status(200).json(underArray);
    }
    else if (req.query.prefix !== undefined){
        let startsWithArray = itemArray.filter((x) => x.product.startsWith(String(req.query.prefix)));
        return res.status(200).json(startsWithArray);
    }
    else if (req.query.pageSize !== undefined){
        let itemsPageSizeArray = itemArray.slice(0, Number(req.query.pageSize));
        return res.status(200).json(itemsPageSizeArray);
    }
    else {
        return res.status(200).json(itemArray);
    }
});

itemRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let itemToFind = itemArray.find((x) => x.id === Number(req.params.id));
    if(itemToFind === undefined){
        return res.status(404).send("ID not found")
    }
    else {
        return res.status(200).json(itemToFind);
    }
});

itemRouter.post("/", async (req:Request, res:Response) : Promise<Response> => {
    let newItem:Item = {
        id: GetNextId(),
        product: String(req.body.product),
        price: Number(req.body.price),
        quantity: Number(req.body.quantity),
    };

    itemArray.push(newItem);

    return res.status(201).json(newItem);
});

itemRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> => {

    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));

    if (itemFound !== undefined){
        itemFound.price = Number(req.body.price);
        itemFound.product = String(req.body.product);
        itemFound.quantity = Number(req.body.quantity);

        return res.status(200).json(itemFound);
    }
    else {
        return res.status(404).send("Item not found");
    }
});

itemRouter.delete("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));
    
    if(itemFound === undefined){
        return res.status(404).send("No");
    }
    else {
        itemArray = itemArray.filter((x) => x.id !== Number(req.params.id));
        return res.status(204).send("Deleted");
    }
});

function GetNextId(){
    return Math.max(...itemArray.map((x) => x.id)) + 1;
 }
