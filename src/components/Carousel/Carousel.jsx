import React, { useState } from 'react';
import { useSpring, animated as a } from '@react-spring/web';
import imagesForeground from './imagesForeground';
import imagesBackground from './imagesBackground.jsx';
import { Container } from '../../styles/StylesCarousel';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';

const imagesback = imagesBackground.map((item) => item.css);
const imagesfront = imagesForeground.map((item) => item.css);


export default function Carousel() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [times, setTimes] = useState(0);
  const [Clicked, setClicked] = useState(false);
  const [Clicked2, setClicked2] = useState(false);
  const iconScale = Clicked ? 3 : 4;
  const iconScale2 = Clicked2 ? 3 : 4;
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    // Record the initial touch position
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX !== null) {
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;

      // Check if the horizontal movement is significant
      if (Math.abs(deltaX) >= 40) {
        // You can trigger your action here based on the direction of deltaX
        if (deltaX > 0) {
          handlePrevClick();
          setFlipped(state => !state);
          prevClickAnimation();
          // Swiped right (positive deltaX)
          // Perform your action for right swipe
        } else {
          handleNextClick();
          setFlipped(state => !state);
          nextClickAnimation();
          // Swiped left (negative deltaX)
          // Perform your action for left swipe
        }

        // Reset startX to null to prevent further processing
        setStartX(null);
      }
    }
  };

  const handleTouchEnd = () => {
    // Reset startX when the touch ends
    setStartX(null);
  };

  const { transform, opacity } = useSpring({
    transform: `perspective(10000000px) rotateY(${times}deg)`,
    opacity: flipped ? 1 : 0
  });

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesback.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentImageIndex2((prevIndex) =>
      prevIndex === imagesfront.length - 1 ? 0 : prevIndex + 1
    );
    setTimes((prevTimes) => prevTimes + 180);
  };

  const handlePrevClick = () => {
    setTimes((prevTimes) => prevTimes - 180);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesback.length - 1 : prevIndex - 1
    );
    setCurrentImageIndex2((prevIndex) =>
      prevIndex === 0 ? imagesfront.length - 1 : prevIndex - 1
    );
  };

  const prevClickAnimation = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 250);
  }

  const nextClickAnimation = () => {
    setClicked2(true);
    setTimeout(() => {
      setClicked2(false);
    }, 250);
  }

  return (
    <>
      {mobileScreen ? (
        <Container>
          <div style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 1,
            touchAction: 'pan-x',
          }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
          </div>
          <a.div
            style={{
              opacity: opacity.to(o => 1 - o),
              transform,
              backgroundImage: imagesback[currentImageIndex],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 310,
              width: '100%',
              position: 'absolute',
            }}
          />
          <a.div
            style={{
              transform: transform,
              opacity,
              backgroundImage: imagesfront[currentImageIndex2],
              height: 310,
              width: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              rotateY: '180deg',
            }}
          />
        </Container>
      ) : (
        <Container>
          <div style={{ position: 'absolute', top: '45%', left: '5vw', zIndex: 1 }}>
            <ArrowBackIos
              sx={{ color: '#198bd2', transform: `scale(${iconScale})`, cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }}
              onClick={() => { handlePrevClick(); setFlipped(state => !state); prevClickAnimation(); }}
            />
          </div>
          <div style={{ position: 'absolute', top: '45%', right: '4vw', zIndex: 1 }}>
            <ArrowForwardIos
              sx={{ color: '#198bd2', transform: `scale(${iconScale2})`, cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }}
              onClick={() => { handleNextClick(); setFlipped(state => !state); nextClickAnimation(); }}
            />
          </div>
          <a.div
            style={{
              opacity: opacity.to(o => 1 - o),
              transform,
              backgroundImage: imagesback[currentImageIndex],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 580,
              width: '100%',
              position: 'absolute',
            }}
          />
          <a.div
            style={{
              transform: transform,
              opacity,
              backgroundImage: imagesfront[currentImageIndex2],
              height: 580,
              width: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              rotateY: '180deg',
            }}
          />
        </Container>
      )};
    </>
  );
}