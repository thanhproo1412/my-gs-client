import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Phantasy Star Online 2 New Genesis - Great', itemCardUrl: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/38551250/7adcdb549abfe51a1ebfc5934a039625bb2fb588_400x225.png',
            ngayPhatHanh: 'Fri, July 2, 2021', gioPhatHanh: '9:11 AM', muiGioPhatHanh: '+07',
            itemCardHoverInfo: 'In the AC Scratch Ticket “Wedding Celebration”, we’re bringing you wedding dresses and tuxedos associated with June Brides, detective themed outfits, the “Deep Bow” Emote, and more! As a Countdown Bonus Prize, there will be an item for changing the Glide Motion!',
            itemCardHoverLink: 'https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/'
        },
        {
            name: 'Phantasy Star Online 2 New Genesis - Great', itemCardUrl: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/38551250/7adcdb549abfe51a1ebfc5934a039625bb2fb588_400x225.png',
            ngayPhatHanh: 'Fri, December 4, 2021', gioPhatHanh: '2:29 PM', muiGioPhatHanh: '+07',
            itemCardHoverInfo: 'SUBSCRIBE PLEASE and LIKE PLEASE LEAVE A " [ OwO ] " IN THE COMMENTS! ▼ expand me ▼',
            itemCardHoverLink: 'https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/'
        },
        {
            name: 'Phantasy Star Online 2 New Genesis - Great', itemCardUrl: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/38551250/7adcdb549abfe51a1ebfc5934a039625bb2fb588_400x225.png',
            ngayPhatHanh: 'Fri, December 4, 2021', gioPhatHanh: '2:29 PM', muiGioPhatHanh: '+07',
            itemCardHoverInfo: 'SUBSCRIBE PLEASE and LIKE PLEASE LEAVE A " [ OwO ] " IN THE COMMENTS! ▼ expand me ▼',
            itemCardHoverLink: 'https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/'
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}