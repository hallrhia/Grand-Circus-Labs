import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../models/Item";

interface IMenuItemProps {
    item: Item
}
export function MenuItem(props:IMenuItemProps) {
    let {item} = props;

    const { addItem, removeItem } = useContext(OrderContext);

    function displayBoolean(value:boolean) : string {
        return value ? "Vegetarian" : "Not Vegetarian";
    }

    return (
        <div className="MenuItem">
            <h3><b>{item.name}</b></h3>
            <ul>
                <li>Price: ${item.price}</li>
                <li>Description: {item.description}</li>
                <li>Calories: {item.calories}</li>
                <li>{displayBoolean(item.vegetarian)}</li>
            </ul>
            <button onClick={() => addItem(item)}>Add to Order</button>
            <button className="remove" onClick={() => removeItem(item.id)}>Remove from Order</button>
        </div>
    )
}