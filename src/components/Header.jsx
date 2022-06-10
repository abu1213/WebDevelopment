import {Navbar,Container, Badge} from 'react-bootstrap'
import {BsCart4} from 'react-icons/bs'
import { Link } from "react-router-dom"
import { useContext } from "react";

import { Cart } from './Cart';

import { ApplicationContext } from "./store/ModalProvider";
import { CartContext } from './store/CartContext';

export const Header = () =>{
    const cartctx = useContext(CartContext);
    const numberOfCartItems = cartctx.items.reduce((x,y)=>
    {
       return x+y.amount;
    },0);

    const {show,handleShow} = useContext(ApplicationContext)
    return(
        <>
            <header>
            {show &&  <Cart/>}
            <Navbar bg="dark" expand="lg">
            <Container>
            <Navbar.Brand className='text-light fw-bold'>
                <Link to="/" className='navbar-brand text-danger'>
                React Meals
                </Link>
                </Navbar.Brand>
                <button className="btn btn-info btn-sm px-3 fw-bold" onClick={handleShow}>
                    <BsCart4   fontSize="23" style={{marginRight:10}}/>Cart
                <Badge style={{marginLeft:6}}>{numberOfCartItems}</Badge>
                </button>
            </Container>
            </Navbar>
            </header>
            <div style={{height:"300px"}}>
                <img className="img-fluid h-100 w-100" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="" />
            </div>
            </>
    )
}