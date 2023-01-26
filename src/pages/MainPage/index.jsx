import React, { useState, useEffect } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
const MainPage = () => {
  const [state, setState] = useState(0);
  

  useEffect(() => {
    setState(100);
  });

  let data = [
    {
      view: 0,
      heading: "Increase your Productivity",
      subheading: "Paraphrase more text at once to finish writing faster.",
      img: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg"
    },
    {
      view: 1,
      heading: "Access all modes",
      subheading: "Get maximum control on how you paraphase.",
      img: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg"
    },
    {
      view: 2,
      heading: "Scan for plagrism",
      subheading: "Unlock the Plagrism Checker to guarantee all sources are cited  and nothing is unintentionally plagiarized",
      img: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg"
    },
    {
      view: 3,
      heading: "Compare all mode  outputs at once.",
      subheading: "Paraphrase more text at once to finish writing faster.",
      img: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg"
    },
  ];
  const [view,setView]=useState(data[0].view)
  console.log(view)
  return (
    <div className="container">
      <div className="test">
        <div className="heading">
          <span>
            <h1>Save time and write with confidence</h1>
          </span>
          <a href="https://quillbot.com/upgrade">
            <button type="button" className="button">
              Upgrade to Quillbot Premium
            </button>
          </a>
        </div>
        <div className="carousel-container">
          <Row>
            <Col md={7}>
           
              <img src={data[0].img} />
              
            </Col>
            <Col md={5} className="content-wrapper">
              <ul>
                
                  <li >
                    <div className="text-container ">
                      <h3 className={`view === index ? active : ""`}>{data[0].heading}</h3>
                      <p>{data[0].subheading}</p>
                      <ProgressBar now={state} />
                    </div>
                  </li>
                  <li >
                    <div className="text-container ">
                      <h3 className={`view === index ? active : ""`}>{data[1].heading}</h3>
                      <p>{data[1].subheading}</p>
                      <ProgressBar now={state} />
                    </div>
                  </li>
                  <li >
                    <div className="text-container ">
                      <h3 className={`view === index ? active : ""`}>{data[2].heading}</h3>
                      <p>{data[2].subheading}</p>
                      <ProgressBar now={state} />
                    </div>
                  </li>
                  <li >
                    <div className="text-container ">
                      <h3 className={`view === index ? active : ""`}>{data[3].heading}</h3>
                      <p>{data[3].subheading}</p>
                      <ProgressBar now={state} />
                    </div>
                  </li>
                
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
