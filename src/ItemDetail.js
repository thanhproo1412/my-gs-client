import React, { useEffect, useState } from 'react';
import "./App.css";

function ItemDetail( { match } ) {

    const APP_ID = '67844c6d';
    const APP_KEY = '08e7958e5474ed04af9bc444b59c1600';

    const [rescipe, setRescipe] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getRecipe = async () => {
            // const response = await fetch(`https://api.edamam.com/api/recipes/v2/${match.params.id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const items = await response.json();
            setRescipe(items.hits.rescipe.label);
            console.log(rescipe);
        }
        getRecipe();
    }, []);    // khi 'query' thay đổi thì sẽ getRecipes()


    return (
        <div>
            <div className='myRow'>
                <h1> Chi tiet san pham</h1>
                {rescipe.map(recipe => (
                    <h1>{item}</h1>
                ))}
            </div>
        </div>
    );
}
export default ItemDetail;