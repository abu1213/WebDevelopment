import { useContext } from "react"
import { MealItemForm } from "./MealItemForm"
import { CartContext } from "./store/CartContext"

export const MealItems =(props) =>{
    const cartctx = useContext(CartContext);
    const Price = `$${props.price.toFixed(2)}`

    const addToCart = (amount) =>{
        cartctx.addItem({
            id:props.id,
            name:props.name,
            amount: amount,
            price:props.price,
        })
    }
    return(
        <ul>
        <li style={{borderBottom: '1px solid #ccc'}} className="list-group-item">
            <div className="d-flex">
        <div className="flex-grow-1">
            <h3>{props.name}</h3>
        
        <p className="fst-italic">{props.description}</p>
        <div className="fw-bold fs-5 text-danger">{Price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCart}/>
        </div>
        </div>
        </li>
        </ul>
    )
}