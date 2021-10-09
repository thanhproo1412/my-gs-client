import React, { useContext } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyButton1, MyButton2, MyButton1Active, YoutubeVideo169 } from "./components/CustomStyle";
import { ItemCard2 } from "./components/ItemCard2";
import { ItemCard3 } from "./components/ItemCard3";
import { Container, Row, Col } from "react-bootstrap";
import "./css/HomeIntro.css";
import { GameListContext } from "./GameListContext"

const Styles = styled.div``;

export const HomeIntro = () => {

  const [gameList, setGameList] = useContext(GameListContext);

  return (
    <Styles>
      <Container fluid className='pt-5 p-lg-5'>
        <Row >
          {gameList.slice(5, 8).map(game => (
            <Col className='mb-5' lg={4}>
              <ItemCard3
                name={game.name}
                gamePlaform={game.gamePlaform}
                itemCardUrl={game.itemCardUrl}
                itemCardHoverInfo={game.itemCardHoverInfo}
                itemCardHoverLink={game.itemCardHoverLink}
              />
            </Col>
          ))}

        </Row>
        <Container>
          <Row className="categories">
            <MyButton1Active>All</MyButton1Active>
            <MyButton1>PLAY STATION 4</MyButton1>
            <MyButton1>XBOX ONE</MyButton1>
            <MyButton1>IOS</MyButton1>
            <MyButton1>ANDROID</MyButton1>
          </Row>
        </Container>
        <Row>
          {gameList.map(game => (
            <Col lg={3} md={6} className='mb-4'>
              <ItemCard2
                name={game.name}
                gamePlaform={game.gamePlaform}
                itemCardUrl={game.itemCardUrl}
                itemCardHoverInfo={game.itemCardHoverInfo}
                itemCardHoverLink={game.itemCardHoverLink}
              />
            </Col>
          ))}
        </Row>
        <Row className="categories">
          <MyButton1>View More</MyButton1>
        </Row>
      </Container>
      <div fluid className="the-goty">
        {/* <img src='/imgs/background/the-goty.jpg' /> */}
        <Container>
          <Row>
            <Col lg='5'>
              <h1>Game Award 2020</h1>
              <p className='the-goty-info'>Amet nisl purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum
                a arcu cursus. Volutpat ac tincidunt vitae semper. Pellentesque diam volutpat commodo
                sed egestas egestas fringilla phasellus faucibus. Ante metus dictum at tempor fames ac</p>
                <div className='d-flex justify-content-center mt-5'>
                <MyButton2 className='pt-5'>Xem Thêm</MyButton2>
                </div>
            </Col>
            <Col lg='7' className='the-goty-video'>
              <YoutubeVideo169 youtubeLink='https://www.youtube.com/embed/1UbyOyTC2dM' />
            </Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
};
