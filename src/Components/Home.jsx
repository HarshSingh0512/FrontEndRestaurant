import Col from 'react-bootstrap/esm/Col';
import './style.css'
import { Card, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import DishCard from './DishCard';
function Home() {

  function useFetchAllDishes() {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {

      console.log("hey");

      fetch("https://localhost:7237/api/DishTables").then(response => response.json()).then(data => {

        setDishes(prev => {

          const currDishes = [];

          data.forEach(dish => {

            const currDish = {};

            currDish.dishId = dish.dishId;

            currDish.dishPrice = dish.dishPrice;

            currDish.dishName = dish.dishName;

            currDish.dishDescription = dish.dishDescription;

            currDish.dishNature = dish.dishNature;

            currDish.dishImage = dish.dishImage;

            currDishes.push(currDish);

          });

          return currDishes;

        })

      },)

    }, [])

    return dishes;

  }

  const data = useFetchAllDishes();
    return <div>
    {
      data.map(dish => 
        <DishCard
        name = {dish.dishName}
        description = {dish.dishDescription}
        image = {dish.dishImage}
        price = {dish.dishPrice}
        nature = {dish.dishNature}
        />
      )
    }
  </div>


    // return (


    //     <div className="container d-flex align-items-center justify-content-center">

    //         <Row md={2} className="g-4">

    //             {data.map((Item) => (

    //                 <Col key={Item.menuId}>

    //                     <Card className="mx-auto">

    //                         <Card.Img variant="top" src={Item.menuImage} />

    //                         <Card.Body style={{ height: '30%' }}>

    //                             <Card.Title>{Item.menuId}. {Item.menuName}</Card.Title>

    //                             <Card.Text>{Item.menuDescription}</Card.Text>

    //                         </Card.Body>

    //                     </Card>

    //                 </Col>

    //             ))}

    //         </Row>
    //     </div>
    // )
}

export default Home;