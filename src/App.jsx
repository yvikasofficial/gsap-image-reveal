import CSSRulePlugin from "gsap/CSSRulePlugin";
import React, { useEffect, useRef } from "react";
import { TimelineLite, Power2 } from "gsap";

import "./App.scss";
import People from "./images/image.jpeg";

function App() {
  let container = useRef(null);
  let img = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container.current, 1, {
      css: { visibility: "visible" },
    }).to(imageReveal, 1.4, { css: { width: "0%" }, ease: Power2.easeInOut });
  }, []);

  return (
    <section className="main">
      <div ref={container} className="container">
        <>
          <div className="img-container">
            <img ref={img} src={People} alt="People" />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
