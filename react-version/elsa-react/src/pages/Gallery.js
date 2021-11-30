import React, { useState, useRef, useEffect } from "react";
import {
  container,
  slider_container,
  left_slide,
  right_slide,
  down_button,
  up_button,
  home_color,
  action_buttons,
  view_more
} from "../styles/gallery.module.scss";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import imageOne from "../images/hero.jpg";
import imageTwo from "../images/imageOne.jpg";
import imageThree from "../images/imageTwo.jpg";
import imageFour from "../images/imageThree.jpg";
import { Link } from "react-router-dom";

function Gallery() {
  const homes = [
    { title: "home one", image: imageOne, price: "10,000", theme: "#caa472" },
    { title: "home two", image: imageTwo, price: "10,000", theme: "#a9a9a9" },
    {
      title: "home three",
      image: imageThree,
      price: "10,000",
      theme: "#caa472",
    },
    { title: "home four", image: imageFour, price: "10,000", theme: "#dfaf37" },
  ];
  const titles = homes
    .map((home) => {
      return { title: home.title, price: home.price, theme: home.theme };
    })
    .reverse();
  const ref = useRef(null);

  const [right, setright] = useState({});
  const [left, setleft] = useState({});

  const [height, setheight] = useState(0);

  const [current, setcurrent] = useState(0);
  const timeout = useRef(null);

  useEffect(() => {
    setheight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    const changeSlide = () => {
      setcurrent((current) => (current === homes.length - 1 ? 0 : current + 1));
      setright({ transform: `translateY(-${current * height}px)` });
      setleft({ transform: `translateY(${current * height}px)` });
    };

    timeout.current = setTimeout(changeSlide, 3000);
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, homes.length, height]);

  const changeSlide = (direction) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (direction === "up") {
      setcurrent((prev) => prev + 1);
      if (current > homes.length - 2) {
        setcurrent(0);
      }
    } else if (direction === "down") {
      setcurrent((prev) => prev - 1);
      if (current < 1) {
        setcurrent(homes.length - 1);
      }
    }
    setright({ transform: `translateY(-${current * height}px)` });
    setleft({ transform: `translateY(${current * height}px)` });
  };

  const handleUpMovement = () => {
    changeSlide("up");
  };
  const handleDownMovement = () => {
    changeSlide("down");
  };

  return (
    <div className={container}>
      <div className={slider_container} ref={ref}>
        <div
          className={left_slide}
          style={{ top: `-${(homes.length - 1) * 100}vh`, ...left }}
        >
          {titles.map((title, i) => (
            <div
              className={home_color}
              style={{ backgroundColor: title.theme }}
            >
              <h1>{title.title}</h1>
              <p>Get this appartment at the flat rate of:</p>
              <p>
                {"\u20A6"}
                {title.price}
              </p>
              <p style={{ cursor: "pointer" }} className={view_more}>
                <Link to={`/home/${title.title}`}>
                View More <AiOutlineArrowRight />
                </Link>
              </p>
            </div>
          ))}
        </div>
        <div className={right_slide} style={right}>
          {homes.map((image, i) => (
            <>
              <div
                style={{
                  background: `url(${image.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
            </>
          ))}
        </div>
        <div className={action_buttons}>
          <button className={down_button}>
            <AiOutlineArrowDown onClick={handleDownMovement} />
          </button>
          <button className={up_button}>
            <AiOutlineArrowUp onClick={handleUpMovement} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
