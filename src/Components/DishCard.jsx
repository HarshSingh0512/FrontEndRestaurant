import React from "react";

function DishCard(props)
{
    // return <h1>Ayush is best</h1>
    return <div className = "dishCard" style = {{
        height : "450px",
        width : "400px",
        border : "3px solid black",
        backgroundColor : "purple",
        marginTop : "10px",
        marginBottom : "10px",
        borderRadius : "10px",
        textAlign : "center",
        display : "inline-block",
        marginLeft : "20px"
    }}>
        <img className = "dishCard-img" src = {props.image} alt = {props.name} style = {{
            height : "300px",
            width : "395px"
        }}/>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.nature}</p>
        <p>{props.price} Rupees</p>
    </div>
}

export default DishCard;