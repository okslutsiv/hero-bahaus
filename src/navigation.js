import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap";

const AppBar = () => {
  const items = ["about", "skills", "work", "contact"];
  const navRef = useRef();
  const refs = useRef([]);
  const tl = new TimelineMax({ pause: true });
  useEffect(() => {
    const r = refs.current;
    const nav = navRef.current;
    tl.set(nav, { opacity: 1 })
      .staggerFrom(r, 0.5, { opacity: 0, x: 20 }, 0.2)
      .reverse()
      .play();
  });

  return (
    <Nav ref={el => (navRef.current = el)}>
      {items.map((item, i) => (
        <div
          key={item}
          ref={el => (refs.current[i] = el)}
          onClick={e => console.log(e.target)}
        >
          {item}
        </div>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  opacity: 0;
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
  font-size: 12px;
  color: #0f0f48;
  & :first-child {
    font-weight: bold;
    color: #9c0230;
  }

  & div {
    margin: 4px 4px;
    text-transform: uppercase;
    letter-spacing: -1px;
    cursor: pointer;
  }
`;
export default AppBar;
