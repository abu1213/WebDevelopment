import { Card, Container } from "react-bootstrap"
import { MealItems } from "./MealItems"
import "./MealItems.css"
export const AvailableMeals = () => {
    const DUMMY_MEALS = [{
        id:'m1',
        name:"Biriyani",
        description:"Made up in Hyderabad Style",
        price:22.34
    },
    {
        id:'m2',
        name:"FriedRice",
        description:"Made up in Malaysian Style",
        price:20.01
    },
    {
        id:'m3',
        name:"Noodles",
        description:"Made up in Chinese Style",
        price:16.1
    },
    {
        id:'m4',
        name:"Meals",
        description:"Made up in Indian Style",
        price:18.34
    }]
    
    const mealList = DUMMY_MEALS.map(items=>
        <MealItems key={items.id} id={items.id} name={items.name} description={items.description} price={items.price}></MealItems>
    )
    return(
        <section className="text-start" style={{width:"60%",marginLeft:"21%"}}>
            <Container>
           <Card>
           <Card.Body>
                {mealList}
            </Card.Body> 
            </Card>
            </Container>
        </section>
    )
}