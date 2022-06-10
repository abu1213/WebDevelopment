import { createContext, useState } from 'react';
export const ApplicationContext = createContext(null)
export const ModalProvider= (props) =>{
    
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return(
<ApplicationContext.Provider value={{show,handleClose,handleShow}}>
{props.children}
</ApplicationContext.Provider>
)
}