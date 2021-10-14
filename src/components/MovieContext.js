import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Phantasy Star Online 2 New Genesis - Great', itemCardUrl: 'https://i.scdn.co/image/ab67616d0000b273016628faf21ab44430625a6e',
            ngayPhatHanh: 'Fri, July 2, 2021', gioPhatHanh: '9:11 AM', muiGioPhatHanh: '+07',
            itemCardHoverInfo: 'In the AC Scratch Ticket “Wedding Celebration”, we’re bringing you wedding dresses and tuxedos associated with June Brides, detective themed outfits, the “Deep Bow” Emote, and more! As a Countdown Bonus Prize, there will be an item for changing the Glide Motion!',
            itemCardHoverLink: 'https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/'
        },
        {
            name: 'Phantasy Star Online 2 New Genesis - Great', itemCardUrl: 'https://i.pinimg.com/originals/11/48/d9/1148d94277eaf955e4bf4aa64ef08cc6.png',
            ngayPhatHanh: 'Fri, December 4, 2021', gioPhatHanh: '2:29 PM', muiGioPhatHanh: '+07',
            itemCardHoverInfo: 'SUBSCRIBE PLEASE and LIKE PLEASE LEAVE A " [ OwO ] " IN THE COMMENTS! ▼ expand me ▼',
            itemCardHoverLink: 'https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/'
        },
        {
            name: 'Phantasy Star Online 2 New Genesis - Great', itemCardUrl: 'https://lh3.googleusercontent.com/proxy/ixkUzQrynkUGj33sKp0_skr4xRtWPzd4r4UZJ6tzv7uGlUpdzoYGLi4CK8urN5deJs8RmJ-5KbmtsU_X5mZdGUvBF58bfk3jrMndWIwJ6Q',
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