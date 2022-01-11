import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function BubbleNav({ children }) {
  const navigate = useNavigate();

  const navs = [
    {
      name: "ABOUT ME",
      route: "/about",
    },
    {
      name: "MY SKILLS",
      route: "/skills",
    },
    {
      name: "EXPERIENCES",
      route: "/experience",
    },
    {
      name: "PROJECTS",
      route: "/projects",
    },
  ];

  const [positions, setPositions] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  function openBubble(position) {
    const pos = {
      1: false,
      2: false,
      3: false,
      4: false,
    };
    pos[position] = true;
    setPositions(pos);
  }

  function changePage(nav, index) {
    openBubble(index);
    setTimeout(() => {
      navigate(nav.route);
    }, 600);
  }

  return (
    <>
      {children}
      {navs.map((nav, index) => {
        return (
          <button
            key={index}
            className={`bubble-nav__bubble position ${
              positions[index] ? `open` : null
            }`}
            onClick={() => changePage(nav, index)}
          >
            <p
              className={`bubble-nav__bubble__item${index + 1} ${
                positions[index] && "hide"
              }`}
            >
              {nav.name}
            </p>
          </button>
        );
      })}
    </>
  );
}
