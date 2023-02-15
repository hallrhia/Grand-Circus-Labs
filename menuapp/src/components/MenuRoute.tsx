import { useState } from "react";
import menu from "../data/menu";
import { Item } from "../models/item";
import { BasicItem } from "./BasicItem";

export function MenuRoute(){
    const [items] = useState<Item[]>(menu);

    return (
        <div className="MenuRoute">
            { items.map((item) => <BasicItem item={item} />) }
        </div>
    )
}