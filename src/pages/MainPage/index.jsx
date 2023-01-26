import React, { useState, useEffect } from "react";
import CarouselComponent from "../../Component/CarouselComponent"
import { Row, Col, ProgressBar } from "react-bootstrap";
const MainPage = () => {
  const [state, setState] = useState({ v0: 0, v1: 0, v2: 0, v3: 0 });

  let [view, setView] = useState(0);

  useEffect(() => {
    let el = document.querySelector("#v0");

    el.click();
  }, []);

  let clickHandler = (e, idx) => {
    if (idx === 0) {
      setState((prev) => ({
        ...prev,

        [e.target.id]: 100,

        v3: 0,
      }));
    } else {
      setState((prev) => ({
        ...prev,

        [e.target.id]: 100,

        ["v" + (idx - 1)]: 0,
      }));
    }

    setView(idx);

    let el = document.querySelector("#v" + (idx + 1));

    if (!el) {
      el = document.querySelector("#v0");
    }

    setTimeout(() => {
      el.click();
    }, 2800);
  };

  let data = [
    {
      view: 0,

      heading: "Increase your Productivity",

      subheading: "Paraphrase more text at once to finish writing faster.",

      img: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
    },

    {
      view: 1,

      heading: "Access all modes",

      subheading: "Get maximum control on how you paraphase.",

      img: "https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg",
    },

    {
      view: 2,

      heading: "Scan for plagrism",

      subheading:
        "Unlock the Plagrism Checker to guarantee all sources are cited  and nothing is unintentionally plagiarized",

      img: "https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg",
    },

    {
      view: 3,

      heading: "Compare all mode  outputs at once.",

      subheading: "Paraphrase more text at once to finish writing faster.",

      img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
    },
  ];

  return (
    <div className="container">
      <div className="test">
        <div className="heading">
          <span>
            <h1>Save time and write with confidence</h1>
          </span>

          <a href="https://quillbot.com/upgrade">
            <button type="button" className="Upgrade-button">
              Upgrade to Quillbot Premium
            </button>
          </a>
        </div>

        <div className="carousel-container">
          <Row>
            <Col md={7}>
              <img src={data[view].img} />
            </Col>

            <Col md={5} className="content-wrapper">
              <ul>
                {data.map((itm, idx) => (
                  <li>
                    <div
                      className="text-container"
                      id={`v${idx}`}
                      onClick={(e) => clickHandler(e, idx)}
                    >
                      <h3 className={view === idx ? "active" : ""}>
                        {itm.heading}
                      </h3>

                      <p>{itm.subheading}</p>

                      <ProgressBar now={state["v" + idx]} />
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mob-view">
      <CarouselComponent/>
      </div>
    </div>
  );
};

export default MainPage;
