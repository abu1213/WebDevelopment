export const CartItem = (props) =>{
    const Price = `$${props.price.toFixed(2)}`
    return(
        <div className="list-group mb-2 " style={{width:"470px"}}>
            <div className=" d-flex list-group-item bg-success justify-content-between align-items-center">
                <h2 className="">{props.name}</h2>
                <div className="justify-content-center">
                    {props.amount}
                    
                </div>
                <div className="">
                    <button onClick={props.onRemove}>-</button>
                    <span style={{margin:' 0 10px'}}>{Price}</span>
                    <button onClick={props.onAdd}>+</button>
                </div>
            </div>
        </div>
    )
}