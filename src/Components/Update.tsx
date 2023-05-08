import { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Update(){
    

        const [menu, setMenu] = useState({
            menuId: "",
            menuName: "",
            menuDescription: "",
            menuImage: "",
        });
    
        const [category, setCategory] = useState({
            categoryId: "",
            categoryName: "",
            categoryDescription: "",
            categoryImage: "",
        });
    
        const [dish, setDish] = useState({
            dishId: "",
            dishName: "",
            dishDescription: "",
            dishPrice: "",
            dishImage: "",
            dishNature: "",
        });
    
        const handleMenuSubmit = (event: any) => {
            event.preventDefault();
            console.log(menu);
            setMenu({
                menuId: "",
                menuName: "",
                menuDescription: "",
                menuImage: "",
            });
        };
    
        const handleCategorySubmit = (event: any) => {
            event.preventDefault();
            console.log(category);
            setCategory({
                categoryId: "",
                categoryName: "",
                categoryDescription: "",
                categoryImage: "",
            });
        };
    
        const handleDishSubmit = (event: any) => {
            event.preventDefault();
            console.log(dish);
            setDish({
                dishId: "",
                dishName: "",
                dishDescription: "",
                dishPrice: "",
                dishImage: "",
                dishNature: "",
            });
        };
    
        const handleMenuChange = (event: any) => {
            const { name, value } = event.target;
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
                <h2>Update Menu Details:</h2>
                <Form onSubmit={handleMenuSubmit}>
                    <Form.Group controlId="menuId">
                        <Form.Label>Menu ID</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter menu ID"
                            name="menuId"
                            value={menu.menuId}
                            onChange={handleMenuChange}
                        />
                    </Form.Group>
    
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
                <h2>Update Category Details:</h2>
                <Form onSubmit={handleCategorySubmit}>
                    <Form.Group controlId="categoryId">
                        <Form.Label>category ID</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter category ID"
                            name="categoryId"
                            value={category.categoryId}
                            onChange={handleCategoryChange}
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
                <h2>Update Dish Details:</h2>
                <Form onSubmit={handleDishSubmit}>
                    <Form.Group controlId="dishId">
                        <Form.Label>dish ID</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter dish ID"
                            name="dishId"
                            value={dish.dishId}
                            onChange={handleDishChange}
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
    )
}

export default Update