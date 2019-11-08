import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Power0, TimelineMax } from "gsap";

const Circles = () => {
  const [play, setPlay] = useState(false);
  const refs = useRef({});
  const strokeColor = "#0f0f48";

  const onClick = () => tl1.restart();

  const tl1 = new TimelineMax({ pause: true });
  const tl2 = new TimelineMax({ repeat: -1 });
  const tl3 = new TimelineMax({ repeat: -1 });

  useEffect(() => {
    const r = refs.current;

    tl1
      .set(r.group, { opacity: 1 })
      .addLabel("circles", "+=2")
      .from(r.circleSm, 0.5, { opacity: 0 }, "circles-=0.2")
      .from(r.circleBlue, 0.9, { opacity: 0 }, "circles")
      .from(r.circleGreen, 0.9, { opacity: 0 }, "circles+=0.15")
      .from(r.circleRed, 0.9, { opacity: 0 }, "circles+=0.3")
      .addLabel("crossLines")
      .fromTo(
        r.lineCross2,
        0.5,
        { opacity: 0, rotation: 30 },
        { opacity: 1, rotation: 0 },
        "crossLines+=0.8"
      )
      .fromTo(
        r.lineCross1,
        0.5,
        { opacity: 0, rotation: 30 },
        { opacity: 1, rotation: 0 },
        "crossLines+=0.9"
      )
      .fromTo(
        r.lineCross3,
        0.5,
        { opacity: 0, rotation: -30 },
        { opacity: 1, rotation: 0 },
        "crossLines+=0.8"
      )
      .addLabel("vertLines", "+=0.8")
      .fromTo(
        r.lineVert3,
        0.7,
        { opacity: 1, strokeDasharray: 1300, strokeDashoffset: 1300 },
        { opacity: 1, strokeDashoffset: 0 },
        "vertLines"
      )
      .fromTo(
        r.lineVert2,
        0.7,
        { opacity: 1, strokeDasharray: 1300, strokeDashoffset: 1300 },
        { opacity: 1, strokeDashoffset: 0 },
        "vertLines+=0.2"
      )
      .fromTo(
        r.lineVert1,
        0.7,
        { opacity: 1, strokeDasharray: 1300, strokeDashoffset: 1300 },
        { opacity: 1, strokeDashoffset: 0 },
        "vertLines+=0.4"
      )
      .play();

    tl2.to(r.spiral, 15, {
      transformOrigin: "center center",
      rotation: 360,
      ease: Power0.easeNone
    });

    tl3.to(r.dot, 3, { scale: 0.6 }).to(r.dot, 3, { scale: 1 });
  });
  return (
    <>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.99 434.1">
        <defs>
          <radialGradient
            id="gradient_27"
            cx="152.18"
            cy="118.25"
            r="59.53"
            gradientTransform="translate(115.23 -67.9) rotate(39.11)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="0.48" stopColor="#a5afc5" stopOpacity="0.8" />
            <stop offset="0.83" stopColor="#6d7ca0" stopOpacity="0.8" />
            <stop offset="1" stopColor="#576992" stopOpacity="0.8" />
          </radialGradient>

          <radialGradient
            id="gradient_14"
            cx="76.5"
            cy="166.85"
            r="67.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="1" stopColor="#8c9077" stopOpacity="0.8" />
          </radialGradient>

          <radialGradient
            id="gradient_8"
            cx="154.79"
            cy="228.8"
            fx="199.05897758069125"
            fy="293.0239999033866"
            r="78"
            gradientTransform="translate(1.38 29.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="0.42" stopColor="#cdbbc2" stopOpacity="0.8" />
            <stop offset="0.8" stopColor="#a3838f" stopOpacity="0.8" />
            <stop offset="1" stopColor="#936d7c" stopOpacity="0.8" />
          </radialGradient>

          <radialGradient
            id="gradient_20"
            cx="223.75"
            cy="68.6"
            r="20.77"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="0.08" stopColor="#f0eef1" stopOpacity="0.79" />
            <stop offset="0.52" stopColor="#a399aa" stopOpacity="0.74" />
            <stop offset="0.84" stopColor="#73637e" stopOpacity="0.71" />
            <stop offset="1" stopColor="#614f6d" stopOpacity="0.7" />
          </radialGradient>
        </defs>

        <CirclesDT
          id="CirclesDT"
          ref={el => (refs.current.group = el)}
          onClick={onClick}
        >
          <circle
            ref={el => (refs.current.circleBlue = el)}
            id="CircleBlue"
            cx="153.18"
            cy="128.25"
            r="41"
            transform="translate(-46.58 125.38) rotate(-39.11)"
            fill="url(#gradient_27)"
          />
          <circle
            ref={el => (refs.current.circleGreen = el)}
            id="CircleGreen"
            cx="90.5"
            cy="189.5"
            r="71"
            fill="url(#gradient_14)"
          />
          <circle
            ref={el => (refs.current.circleRed = el)}
            id="CircleRed"
            cx="155.17"
            cy="232.3"
            r="78"
            transform="translate(-111.77 149.95) rotate(-39.11)"
            fill="url(#gradient_8)"
          />
          <circle
            ref={el => (refs.current.circleSm = el)}
            id="CircleSm"
            cx="230"
            cy="64.35"
            r="16.5"
            fill="url(#gradient_20)"
          />
          <g id="LineCross3" ref={el => (refs.current.lineCross3 = el)}>
            <line
              x1="212.67"
              y1="83.38"
              x2="36.74"
              y2="274.82"
              fill="none"
              stroke={strokeColor}
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </g>
          <g id="LineCross2" ref={el => (refs.current.lineCross2 = el)}>
            <line
              x1="0.34"
              y1="216.8"
              x2="244.65"
              y2="305.75"
              fill="none"
              stroke={strokeColor}
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </g>
          <g id="LineCross1" ref={el => (refs.current.lineCross1 = el)}>
            <line
              x1="46.34"
              y1="240.8"
              x2="290.65"
              y2="329.75"
              fill="none"
              stroke={strokeColor}
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
          <g id="LineVert3" ref={el => (refs.current.lineVert3 = el)}>
            <line
              x1="121.99"
              y1="0.06"
              x2="100.93"
              y2="347.45"
              fill="none"
              stroke={strokeColor}
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </g>
          <g id="LineVert2" ref={el => (refs.current.lineVert2 = el)}>
            <line
              x1="110.94"
              y1="55.71"
              x2="89.88"
              y2="403.11"
              fill="none"
              stroke={strokeColor}
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
          <g id="LineVert1" ref={el => (refs.current.lineVert1 = el)}>
            <line
              x1="101.38"
              y1="86.65"
              x2="80.32"
              y2="434.04"
              fill="none"
              stroke={strokeColor}
              strokeMiterlimit="10"
              strokeWidth="3"
            />
          </g>
          <g id="Dot" ref={el => (refs.current.dot = el)}>
            <circle cx="11" cy="255.35" r="10.5" fill={strokeColor} />
          </g>
          <g
            id="Spiral"
            ref={el => (refs.current.spiral = el)}
            fill={strokeColor}
          >
            <path d="M278.56,188.05a69.83,69.83,0,0,1-53.48,66.35,69.17,69.17,0,0,1-15.17,1.9,74.7,74.7,0,0,1-7.66-.35,13.71,13.71,0,0,1-1.9-.26l-1.89-.33a28.1,28.1,0,0,1-3.75-.79l-3.7-1c-1.22-.4-2.39-.91-3.59-1.36l-1.79-.7c-.58-.27-1.14-.58-1.72-.86-1.14-.59-2.29-1.14-3.41-1.76a60.68,60.68,0,0,1-6.34-4.33l-1.51-1.18-.76-.59-.7-.66-2.79-2.65a56.16,56.16,0,0,1-14.55-26.67,57.65,57.65,0,0,1-1.25-7.59c-.14-1.28-.1-2.56-.16-3.85a27.23,27.23,0,0,1,0-3.85l.14-1.93a14.12,14.12,0,0,1,.21-1.92l.67-3.81,1-3.72c.36-1.24.91-2.41,1.35-3.62A45.15,45.15,0,0,1,191,155.18l1.92-.25a12.73,12.73,0,0,1,1.93-.17l3.88-.11c1.29.1,2.6.16,3.89.3s2.57.4,3.83.72a36.92,36.92,0,0,1,23.86,18.7,36.48,36.48,0,0,1,4,15,29.37,29.37,0,0,1-28.48,31.3,23.76,23.76,0,0,1-14.89-4.49A24.11,24.11,0,0,1,182,203.45a24.56,24.56,0,0,1-.8-7.82,19,19,0,0,1,7.2-13.64,18.77,18.77,0,0,1,7.06-3.44,18.1,18.1,0,0,1,7.84-.24,15.19,15.19,0,0,1,7,3.54,14.93,14.93,0,0,1,4.66,14.31,12.16,12.16,0,0,1-4.23,6.49,11.92,11.92,0,0,1-7.24,2.56,9.55,9.55,0,0,1-7-2.82,9.45,9.45,0,0,1-2.75-7h.2a9.14,9.14,0,0,0,9.57,9.26,11.27,11.27,0,0,0,10.6-8.7,13.93,13.93,0,0,0-11-16.38,16.78,16.78,0,0,0-7.24.34,17.47,17.47,0,0,0-13,15.84,22.89,22.89,0,0,0,.81,7.24A22.32,22.32,0,0,0,192,214.68a21.81,21.81,0,0,0,13.74,4,27.43,27.43,0,0,0,13.88-4.23,27.58,27.58,0,0,0,12.68-25,34.49,34.49,0,0,0-3.75-14.2A35,35,0,0,0,206,157.41c-1.2-.31-2.43-.46-3.64-.7s-2.47-.2-3.7-.31l-3.73.08a11.92,11.92,0,0,0-1.86.15l-1.85.23a43.46,43.46,0,0,0-34,26.17c-.43,1.17-1,2.3-1.33,3.5l-1,3.6-.66,3.69a13.4,13.4,0,0,0-.21,1.86l-.14,1.87a26.19,26.19,0,0,0-.05,3.75c.05,1.25,0,2.51.14,3.76a56.34,56.34,0,0,0,1.18,7.42,54.93,54.93,0,0,0,14.11,26.16l2.72,2.61.68.65.74.58,1.48,1.17a59.6,59.6,0,0,0,6.2,4.28c1.1.61,2.23,1.16,3.34,1.74.56.28,1.11.58,1.68.86l1.75.69c1.17.45,2.33,1,3.52,1.36l3.63,1a27.35,27.35,0,0,0,3.68.8l1.86.34a13.3,13.3,0,0,0,1.87.27,73.81,73.81,0,0,0,7.54.39,68.32,68.32,0,0,0,15-1.77A69.28,69.28,0,0,0,278.36,188Z" />
          </g>
        </CirclesDT>
      </Svg>
    </>
  );
};

const Svg = styled.svg`
  width: 100%;
  margin: 0 auto;
  display: block;
  max-width: 300px;
`;
const CirclesDT = styled.g`
  opacity: 0;
  cursor: pointer;
`;

export default Circles;
