import { useParams } from "react-router-dom"
import menu from "../data/menu";

export function DetailsRoute(){
    //under routes in app.tsx we called the route path :id so the variable below is id
    let { id } = useParams();

    let item = menu.find((item) => item.id === id);

    return (
        <div className="DetailsRoute">
            { item !== undefined &&
            <ul>
                <li className="name">{item.name}</li>
                <li>{item.description}</li>
                </ul>
                }
        </div>
    )
}