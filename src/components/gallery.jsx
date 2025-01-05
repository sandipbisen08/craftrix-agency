import { Image } from "./image";
import React from "react";

export const Stories = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Satisfied Clients</h2>
          <p>
          Join our growing list of satisfied clients who trust us to deliver innovative and impactful digital solutions.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      // largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      link={d.link}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
