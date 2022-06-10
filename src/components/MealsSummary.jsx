import {Card} from 'react-bootstrap'

export const MealsSummary = () =>{
    return(
        <section style={{margin:'auto',marginTop: '-6rem'}}>
            <div className="container">
        <Card className='p-2 bg-secondary text-light d-none d-md-block' style={{width:"60%",marginLeft:"20%"}}>
        <Card.Body>
        <Card.Title>Lorem ipsum dolor sit amet consectetur!</Card.Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, optio odio. Eligendi aperiam quidem ratione dolore, aspernatur est magni? Quos.
       Lorem ipsum dol quisquam modi laboriosam veniam quasi, facere corrupti necessitatibus earum repellendus incidunt corporis a, dolores reprehenderit pariatur officiis debitis.</p>
       
       </Card.Body>
       </Card>
       </div>
        </section>
    )
}