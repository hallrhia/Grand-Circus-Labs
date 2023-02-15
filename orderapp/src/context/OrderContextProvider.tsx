import { ReactNode, useState } from "react";
import { Item } from "../models/Item";
import OrderContext from "./OrderContext";

interface IOrderContextProviderProps {
  children: ReactNode;
}
//provider of context is to give the consumers (components) the context (the values)
const OrderContextProvider = ({ children }: IOrderContextProviderProps) => {
  const [order, setOrder] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setOrder([...order, item]);
  };

  const removeItem = (id: string) => {
    setOrder(order.filter((x) => x.id !== id));
  };

  return (
    <OrderContext.Provider
    //value is what the ordercontext component needs to do it's job
    //providers have values
      value={{
        order: order,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
//the {children} is the catch all prop for all the components that are wrapped in this provider

export default OrderContextProvider;
