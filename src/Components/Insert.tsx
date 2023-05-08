import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";



function Insert() {

    const [menuId, setMenuId] = useState("");
    const [catId, setCatId] = useState("");
    const [menu, setMenu] = useState({
        menuName: "",
        menuDescription: "",
        menuImage: "",
        isDeleted: false
    });

    const [category, setCategory] = useState({
        categoryId: "0",
        categoryName: "",
        categoryDescription: "",
        categoryImage: ""
    });

    const [dish, setDish] = useState({
        dishId: "0",
        dishName: "",
        dishDescription: "",
        dishPrice: "",
        dishImage: "",
        dishNature: ""
    });

    const handleMenuSubmit = async (event: any) => {
        event.preventDefault();
        console.log(menu);

            try{
                const response = await axios.post('https://localhost:7237/api/MenuTables',  menu , 
                {
        headers: {
            'Content-Type': 'application/json'
        }
       
    });

}catch (error) {
    console.log(error);
    alert("Error in inserting menu")
}
    };

const handleCategorySubmit = async (event: any) => {
    event.preventDefault();
    console.log(category);
   

    try {
        const response = await axios.post('https://localhost:7237/api/CategoryTables/'+menuId , category,  {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
        alert("error in inserting category")
    }
};

const handleDishSubmit = async (event: any) => {
    event.preventDefault();
    console.log(dish);
    try {
        const response = await axios.post('https://localhost:7237/api/DishTables/'+catId, dish,  {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
        alert("Error in inserting dish")
    }
};

const handleMenuChange = (event: any) => {
    const { name, value } = event.target;
    console.log(menu);
    setMenu((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};

const handleCategoryChange = (event: any) => {
    const { name, value } = event.target;
    setCategory((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};

const handleDishChange = (event: any) => {
    const { name, value } = event.target;
    setDish((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};

return (
    <div>
        <h2>Insert Menu Details:</h2>
        <Form onSubmit={handleMenuSubmit}>

            <Form.Group controlId="menuName">
                <Form.Label>Menu Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter menu name"
                    name="menuName"
                    value={menu.menuName}
                    onChange={handleMenuChange}
                />
            </Form.Group>

            <Form.Group controlId="menuDescription">
                <Form.Label>Menu Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter menu description"
                    name="menuDescription"
                    value={menu.menuDescription}
                    onChange={handleMenuChange}
                />
            </Form.Group>

            <Form.Group controlId="menuImage">
                <Form.Label>Menu Image</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter menu image URL"
                    name="menuImage"
                    value={menu.menuImage}
                    onChange={handleMenuChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <hr />
        <h2>Insert Category Details:</h2>
        <Form onSubmit={handleCategorySubmit}>
            <Form.Group controlId="menuId">
                <Form.Label>Menu ID</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter Menu ID"
                    name="MenuId"
                    value = {menuId}
                    onChange={(e) => setMenuId(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="categoryName">
                <Form.Label>category Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter category name"
                    name="categoryName"
                    value={category.categoryName}
                    onChange={handleCategoryChange}
                />
            </Form.Group>

            <Form.Group controlId="categoryDescription">
                <Form.Label>category Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter category description"
                    name="categoryDescription"
                    value={category.categoryDescription}
                    onChange={handleCategoryChange}
                />
            </Form.Group>

            <Form.Group controlId="categoryImage">
                <Form.Label>category Image</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter category image URL"
                    name="categoryImage"
                    value={category.categoryImage}
                    onChange={handleCategoryChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <hr />
        <h2>Insert Dish Details:</h2>
        <Form onSubmit={handleDishSubmit}>
        <Form.Group controlId="catId">
                    <Form.Label>Category id</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Category ID"
                        name="catId"
                        value={catId}
                        onChange={(e) => setCatId(e.target.value)}
                    />
                </Form.Group>

            <Form.Group controlId="dishName">
                <Form.Label>dish Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter dish name"
                    name="dishName"
                    value={dish.dishName}
                    onChange={handleDishChange}
                />
            </Form.Group>

            <Form.Group controlId="dishDescription">
                <Form.Label>dish Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter dish description"
                    name="dishDescription"
                    value={dish.dishDescription}
                    onChange={handleDishChange}
                />
            </Form.Group>

            <Form.Group controlId="dishPrice">
                <Form.Label>dish Prince</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter dish Price"
                    name="dishPrice"
                    value={dish.dishPrice}
                    onChange={handleDishChange}
                />
            </Form.Group>

            <Form.Group controlId="dishImage">
                <Form.Label>dish Image</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter dish image URL"
                    name="dishImage"
                    value={dish.dishImage}
                    onChange={handleDishChange}
                />
            </Form.Group>

            <Form.Group controlId="dishNature">
                <Form.Label>dish Image</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter dish Nature"
                    name="dishNature"
                    value={dish.dishNature}
                    onChange={handleDishChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
);

}


export default Insert;