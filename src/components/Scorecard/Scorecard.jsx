import React from 'react';
import barca from "../../assets/BARCA.png";
import MU from "../../assets/MU.png";
import RM from "../../assets/RM.png";

function App() {
  const scores = [
    {
      match1: [
        {
          team1: {
            title: "barca",
            img: barca,
            score: 1
          },
          team2: {
            title: "RM",
            img: RM,
            score: 1
          }
        }
      ],
      match2: [
        {
          team1: {
            title: "MU",
            img: MU,
            score: 1
          },
          team2: {
            title: "barca",
            img: barca,
            score: 1
          }
        }
      ],
      match3: [
        {
          team1: {
            title: "MU",
            img: MU,
            score: 1
          },
          team2: {
            title: "RM",
            img: RM,
            score: 1
          }
        }
      ]
    }
  ];

  return (
    <>
      <h1 className="text-xl text-center font-bold text-black shadow-md bg-yellow-300 font-mono">
        Score Cards
      </h1>
      <div className="grid mt-20">
        {scores.map((match, index) => (
          <div key={index}>
            {Object.values(match).map((matches, idx) => (
              <div key={idx} className="flex flex-col p-5 md:p-5 w-full mb-20 bg-white border border-black-300 rounded-lg shadow-md md:w-1/2 mx-auto items-center transition-transform transform hover:scale-105">
                {matches.map((teamData, teamIdx) => (
                  <div key={teamIdx} className="flex items-center gap-5">
                    <div className="flex items-center">
                      <div>{teamData.team1.title}</div>
                      <img src={teamData.team1.img} className="w-10 h-auto md:w-32 md:h-auto" alt="" />
                    </div>
                    <div className="flex items-center">
                      <h1 className="text-lg md:text-xl">{teamData.team1.score}-{teamData.team2.score}</h1>
                    </div>
                    <div className="flex items-center">
                      <img src={teamData.team2.img} className="w-10 h-auto md:w-32 md:h-auto" alt="" />
                      <div>{teamData.team2.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
