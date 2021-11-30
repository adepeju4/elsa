import {useState, useRef, useEffect} from 'react';
import {
  Container,
  Wrapper,
  Slider,
  HomeSlide,
  HomeImg,
  ImgInfo,
  SliderHandler,
  HeroTitle,
  ButtonContainer,
  PrevButton,
  NextButton
} from "../../styles/homeslides.module.scss";
import { VscArrowSmallRight as RightArrow } from 'react-icons/vsc';
import { VscArrowSmallLeft as LeftArrow} from "react-icons/vsc";
import { Slides } from '../../data/slides.js'

function HomeSlides() {

    const [current, setCurrent] = useState(0);
    const length = Slides.length;
    const timeout = useRef(null);

    useEffect(() => {
      const nextSlide = () => {
        setCurrent((current) => (current === length - 1 ? 0 : current + 1));
      };

      timeout.current = setTimeout(nextSlide, 2500);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }, [current, length]);

    const nextSlide = () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(Slides) || Slides.length <= 0) {
      return null;
    }
    return (
      <>
        <div className={Container} id='slide'>
          <div className={Wrapper}>
            <div className={Slider}>
              {Slides.map((item, i) => (
                <div key={`home${i}`} className={HomeSlide}>
                  {i === current && (
                    <div className={SliderHandler}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className={HomeImg}
                      />
                      <div className={ImgInfo}>
                        <p className={HeroTitle}>{item.Title}</p>
                        <p>
                          {"\u20A6"}
                          {item.price}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={ButtonContainer}>
              <div className={PrevButton}>
                <LeftArrow onClick={prevSlide} />
              </div>
              <div className={NextButton}>
                <RightArrow onClick={nextSlide} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}



export default HomeSlides
