import React from 'react';
import { MovieProvider } from './components/MovieContext';
import { NewMovie } from './components/NewMovie';
import { AddMovie } from './components/AddMovie';
import { MoviesList } from './components/MoviesList';
import { HomeBanner } from './components/HomeBanner';
import { HomeIntro } from './components/HomeIntro';
import { GameListProvider } from './components/GameListContext';

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