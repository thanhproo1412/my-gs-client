import React, { useState, createContext } from 'react';

export const GameListContext = createContext();



export const GameListProvider = props => {

  const [gameList, setGameList] = useState([
    {
      name: 'battlefield',
      gamePlaform: 'pc, ps4, Xbox',
      itemCardUrl: 'https://amthucdocdao.com/wp-content/uploads/2021/04/3432b5c5beb44a6aa934a9bafc056c0f.jpeg',
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "battlefield",
      gamePlaform: "pc, ps4, Xbox",
      itemCardUrl: "https://amthucdocdao.com/wp-content/uploads/2021/04/3-cong-thuc-uop-thi-bo-nuong-thom-ngon-va-de-lam-4-min.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "Black Myth: Wukong",
      gamePlaform: "pc, ps4, mobile",
      itemCardUrl: "https://amthucdocdao.com/wp-content/uploads/2021/04/suon-bo-nuong-sa-te-1.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "PlayerUnknown's Battlegrounds",
      gamePlaform: "pc, ps4, mobile",
      itemCardUrl: "https://amthucdocdao.com/wp-content/uploads/2021/04/thit-bo-nuong-han-quoc.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      gamePlaform: 'pc, ps4, Xbox',
      itemCardUrl: 'https://amthucdocdao.com/wp-content/uploads/2018/06/670px-Bake-Breakfast-Cereal-Bars-Final-1.jpg',
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "Monster Hunter Stories 2: Wings of Ruin",
      gamePlaform: "pc, ps4, Xbox",
      itemCardUrl: "https://amthucdocdao.com/wp-content/uploads/2021/04/cach-lam-mon-ca-hoi-bo-lo-sot-phomai-2.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "Hell Let Loose",
      gamePlaform: "pc, ps4, mobile",
      itemCardUrl: "https://amthucdocdao.com/wp-content/uploads/2021/04/cach-lam-mon-ca-hoi-bo-lo-sot-phomai-11.jpg",
      itemCardHoverInfo: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus",
      itemCardHoverLink: "/ListSanPham"
    },
    {
      name: "GrandChase",
      gamePlaform: "pc, ps4, mobile",
      itemCardUrl: "https://amthucdocdao.com/wp-content/uploads/2018/06/6.jpg",
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