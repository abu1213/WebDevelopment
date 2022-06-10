import { useContext } from "react";
import {Modal,Button} from "react-bootstrap"
import { CartContext } from "./store/CartContext";
import { ApplicationContext } from "./store/ModalProvider";
import {CartItem} from "./CartItem"

export const Cart = () =>{
    const cartctx  = useContext(CartContext);

    const cartItemAdd = (item) => {
      cartctx.addItem({...item,amount:1})
    }
    const cartItemRemove = (id) => {}

    const totalAmount = `$${cartctx.totalamount.toFixed(2)}`;

    const CartItems = cartctx.items.map(item=>
        <CartItem className="list-group-item" key={item.id} 
        name={item.name} amount={item.amount} price={item.price}
        onRemove={() => cartItemRemove()} onAdd={cartItemAdd.bind(null,item)}
        />

    )

            
    const {show,handleClose} = useContext(ApplicationContext)
          
            return (
              <>         
                <Modal show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title>{CartItems}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="h4 text-danger">Total Amount</span>
          <span className="position-absolute h5" style={{right:50}}>{totalAmount}</span>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
              </>
            );
          }
