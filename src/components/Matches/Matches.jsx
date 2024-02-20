import React from "react";
import barca from "../../assets/BARCA.png";
import MU from "../../assets/MU.png";
import RM from "../../assets/RM.png";
import "./Matches.css"; // Import CSS file

export const Matches = () => {
  return (
    <div className="matches-container">
      <div className="match">
        <div className="team">
          <img
            className="team-logo"
            src={barca}
            alt="Barcelona Logo"
          />
          <h5 className="team-name">FC Barcelona</h5>
        </div>
        <p className="versus">VS</p>
        <div className="team">
          <img
            className="team-logo"
            src={RM}
            alt="Real Madrid Logo"
          />
          <h5 className="team-name">Real Madrid CF</h5>
        </div>
      </div>
      <div className="match">
        <div className="team">
          <img
            className="team-logo"
            src={MU}
            alt="Manchester United Logo"
          />
          <h5 className="team-name">Manchester United F.C.</h5>
        </div>
        <p className="versus">VS</p>
        <div className="team">
          <img
            className="team-logo"
            src={barca}
            alt="Barcelona Logo"
          />
          <h5 className="team-name">FC Barcelona</h5>
        </div>
      </div>
    </div>
  );
};
