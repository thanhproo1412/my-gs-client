import React, { useState, createContext } from 'react';

export const GameListContext = createContext();



export const GameListProvider = props => {

  const [gameList, setGameList] = useState([
    {
      name: 'battlefield',
      gamePlaform: 'pc, ps4, Xbox',
      itemCardUrl: '/imgs/game/home-game1.jpg',
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "battlefield",
      gamePlaform: "pc, ps4, Xbox",
      itemCardUrl: "/imgs/game/home-game2.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "Black Myth: Wukong",
      gamePlaform: "pc, ps4, mobile",
      itemCardUrl: "/imgs/game/home-game3.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "PlayerUnknown's Battlegrounds",
      gamePlaform: "pc, ps4, mobile",
      itemCardUrl: "/imgs/game/home-game4.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: 'Samurai Warriors 5',
      gamePlaform: 'pc, ps4, Xbox',
      itemCardUrl: '/imgs/game/home-game5.jpg',
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "Monster Hunter Stories 2: Wings of Ruin",
      gamePlaform: "pc, ps4, Xbox",
      itemCardUrl: "/imgs/game/home-game6.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "Hell Let Loose",
      gamePlaform: "pc, ps4, mobile",
      itemCardUrl: "/imgs/game/home-game7.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "GrandChase",
      gamePlaform: "pc, ps4, mobile",
      itemCardUrl: "/imgs/game/home-game8.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
  ]);

  // const getGame = async () => {
  //   const response = await fetch(`http://localhost:3001/api/games`);
  //   const items = await response.json();
  //   setGameList(items);
  // }

  return (
    <GameListContext.Provider value={[gameList, setGameList]}>
      {props.children}
    </GameListContext.Provider>
  );
}