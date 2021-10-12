import React from 'react';
import { MovieProvider } from './Components/MovieContext';
import { NewMovie } from './Components/NewMovie';
import { AddMovie } from './Components/AddMovie';
import { MoviesList } from './Components/MoviesList';
import { HomeBanner } from './Components/HomeBanner';
import { HomeIntro } from './Components/HomeIntro';
import { GameListProvider } from './Components/GameListContext';

const Home = () => {

    return (
        <MovieProvider style={{ margin: '0px', padding: '0px' }}>
            <GameListProvider>
                <HomeBanner />
                <HomeIntro />
                <NewMovie />
                <AddMovie />
                <MoviesList />
            </GameListProvider>
        </MovieProvider>
    );
};
export default Home;