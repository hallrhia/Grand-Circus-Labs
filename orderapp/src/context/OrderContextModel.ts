import { Item } from "../models/Item";

//in interface can put function signature: name, what it requires and what it returns (addItem, removeItem)
export interface OrderContextModel {
    order: Item[],
    addItem: (item:Item) => void,
    removeItem: (id:string) => void,
}