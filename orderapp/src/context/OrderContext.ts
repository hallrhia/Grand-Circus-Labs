import { createContext } from "react";
import { OrderContextModel } from "./OrderContextModel";

//starting values for the context
const defaultValue:OrderContextModel = {
    order: [],
    addItem: () => {},
    removeItem: () => {}
}

//can have as many contexts as you like
const OrderContext = createContext(defaultValue);

export default OrderContext;