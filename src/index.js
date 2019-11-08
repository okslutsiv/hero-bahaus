import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

import Circles from "./circlesDT";
import MyName from "./okslutsiv";
import AppBar from "./navigation";

function App() {
  return (
    <Main>
      <Container className="App">
        <Col6>
          <MyName />
        </Col6>
        <Col6>
          <Circles />
        </Col6>
        <AppBar />
      </Container>
    </Main>
  );
}
const Main = styled.div`
  width: 100%;
  background-image: radial-gradient(circle at left center, white, transparent);
  background-color: #c1ccc8;
  @media (max-width: 600px) {
    background-image: radial-gradient(circle at left top, white, transparent);
  }
`;
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  min-height: calc(70vh - 4rem);
  padding: 2rem;
`;
const Col6 = styled.div`
  width: 80%;
  @media (min-width: 600px) {
    width: 40%;
  }
`;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
