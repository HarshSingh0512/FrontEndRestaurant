import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function Delete() {

    const [menuId, setmenuId] = useState("");
    const [categoryId, setcategoryId] = useState("");
    const [dishId, setdishId] = useState("");

    const handleMenuSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await axios.delete('https://localhost:7237/api/MenuTables/' + menuId,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });

        } catch (error) {
            console.log(error);
            alert("Error in deleting menu")
        }
    }

    const handleCategorySubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await axios.delete('https://localhost:7237/api/CategoryTables/' + categoryId,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });

        } catch (error) {
            console.log(error);
            alert("Error in deleting category")
        }
    }

    const handleDishSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await axios.delete('https://localhost:7237/api/DishTables/' + dishId,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });

        } catch (error) {
            console.log(error);
            alert("Error in deleting menu")
        }
    }


    return (
        <div>
            <h1>Enter the respective IDs that you want to delete.</h1>
            <Form onSubmit={handleMenuSubmit}>
                <Form.Group controlId="menuId">
                    <Form.Label>Menu ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter menu ID you wanna delete"
                        name="menuId"
                        value={menuId}
                        onChange={(e) => setmenuId(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />
            <Form onSubmit={handleCategorySubmit}>
                <Form.Group controlId="categoryId">
                    <Form.Label>Category ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Category ID you wanna delete"
                        name="categoryId"
                        value={categoryId}
                        onChange={(e) => setcategoryId(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <hr />
            <Form onSubmit={handleDishSubmit}>
                <Form.Group controlId="dishId">
                    <Form.Label>Dish ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter dish ID you wanna delete"
                        name="dishId"
                        value={dishId}
                        onChange={(e) => setdishId(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Delete;