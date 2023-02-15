import { useContext } from "react"
import OrderContext from "../context/OrderContext"

export function Sidebar() {
    const { order } = useContext(OrderContext);

    return (
        <div className="Sidebar">
            <ol>
                { order.map((item) => <li key={item.id}>{item.name} ${item.price}</li>)}
            </ol>

            <p><b>Total: ${ order.reduce((prev, item) => prev + item.price, 0)} </b></p>
        </div>
    )
}