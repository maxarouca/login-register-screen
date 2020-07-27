import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';

import './styles.sass';

const Slider: React.FC = () => {
  const carousel = useRef(null);

  return (
    <div className="slider-container">
      <Carousel
        itemsToShow={1}
        showArrows={false}
        enableAutoPlay
        autoPlaySpeed={2000}
        ref={carousel}
      >
        <div className="slide">
          <img src="/images/image.png" alt="" />
          <h2>Marcenas mattis egestas</h2>
          <p>
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </div>
        <div className="slide">
          <img src="/images/image.png" alt="" />
          <h2>Marcenas mattis egestas</h2>
          <p>
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </div>
        <div className="slide">
          <img src="/images/image.png" alt="" />
          <h2>Marcenas mattis egestas</h2>
          <p>
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </div>
      </Carousel>

      {/* <div className="dots-wrapper">
        <div className="dots active" />
        <div className="dots" />
        <div className="dots" />
        <div className="dots" />
      </div> */}
    </div>
  );
};

export default Slider;
