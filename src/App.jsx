import { TweenMax, Power3, TimelineMax } from "gsap";

import "./App.scss";
import arrow from "./images/arrow-right.svg";
import girl from "./images/girl.webp";
import boy from "./images/boy.webp";
import { useEffect, useRef } from "react";

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  const tl = new TimelineMax({ delay: 0.8 });

  useEffect(() => {
    //IMAGE VARS
    const girlImage = images.current.firstElementChild;
    const boyImage = images.current.lastElementChild;

    //CONTENT VARS
    const headlineFirst = content.current.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.current.children[1];
    const contentButton = content.current.children[2];

    //Image Animation
    TweenMax.to(app.current, 0, { css: { visibility: "visible" } });
    tl.from(
      girlImage,
      1.2,
      {
        y: 1280,
        ease: Power3.easeOut,
      },
      "Start"
    )
      .from(
        girlImage.firstElementChild,
        2,
        {
          scale: 1.6,
          ease: Power3.easeOut,
        },
        0.2
      )
      .from(
        boyImage,
        1.2,
        {
          y: 1280,
          ease: Power3.easeOut,
        },
        0.2
      )
      .from(
        boyImage.firstElementChild,
        2,
        {
          scale: 1.6,
          ease: Power3.easeOut,
        },
        0.2
      );

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      { y: 44, ease: Power3.easeOut, delay: 0.8 },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <div ref={app} className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={content}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Releving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behivaours.</div>
                </div>
              </h1>
              <p>
                {" "}
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="Arrow Icon" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={images} className="hero-images-inner">
              <div className="hero-image girl">
                <img src={girl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={boy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
