import React, { useEffect, useState } from 'react';
import "./../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ItemCard from './components/ItemCard';
import { Container } from 'react-bootstrap';
import {MyButton1, MyButton2} from './components/CustomStyle';


function DanhSachSanPham() {

    const searchIcon = <FontAwesomeIcon icon={faSearch} />

    const APP_ID = '67844c6d';
    const APP_KEY = '08e7958e5474ed04af9bc444b59c1600';

    const [rescipes, setRescipes] = useState([]);
    const [search, setSearch] = useState(['']);
    const updateSearch = e => {
        setSearch(e.target.value);  // gán giá trị cho search
        console.log(search);
    }
    const [query, setQuery] = useState(['chicken']);
    const [item, setItem] = useState([]);

    useEffect(() => {
        getRecipes();
    }, [query]);    // khi 'query' thay đổi thì sẽ getRecipes()

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const items = await response.json();
        setRescipes(items.hits);
        console.log(rescipes);
        setItem(items.label);
    }
    const getSearch = e => {
        e.preventDefault(); // ngăn không cho trang refresh
        setQuery(search);   // gán query = search
    }

    return (
        <Container>
             <MyButton1 className='btn btn-primary btn-sm'>All Game</MyButton1>
            <MyButton2 className='btn btn-primary btn-sm'>All Game</MyButton2>
            <div>
            <div>
                <form className="search-form" onSubmit={getSearch}>
                    <input className="search-input" type="text" placeholder="Search" value={search}
                        onChange={updateSearch}
                    />
                    <button className="search-button" type="submit">{searchIcon}</button>
                </form>
            </div>
            <div className='myRow'>
                {rescipes.map(recipe => (
                    <ItemCard
                        key={recipe.recipe.label} itemLink={`/ListSanPham/${recipe.recipe.cautions}`}
                        name={recipe.recipe.label} itemCardUrl={recipe.recipe.image}
                        ngayPhatHanh='Fri, July 2, 2021' gioPhatHanh='9:11 AM' muiGioPhatHanh='+07'
                        itemCardHoverInfo={recipe.recipe.ingredientLines}
                        itemCardHoverLink={recipe.recipe.uri}
                    />
                ))}
            </div>
        </div>
        </Container>
    );
}
export default DanhSachSanPham;