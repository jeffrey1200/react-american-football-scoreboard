//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

import ScoreBoard from "./ScoreBoard";
import ScoringButtons from "./ScoringButtons";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setValue] = useState(0);
  const [awayScore, initialValue] = useState(0);

 // Event handlers
  const reset = () => {
    setValue(0);
    initialValue(0);
  };

  const home = () =>{
    setValue(homeScore +3)
  }



  return (
    <div className="container">
      <ScoreBoard homescore={homeScore} awayscore={awayScore} />

      <ScoringButtons
        homeFieldGoalScore={hello}
        homeTouchDownScore={() => setValue(homeScore + 7)}
        resetScore={reset}
        awayFieldGoalScore={() => initialValue(awayScore + 3)}
        awayTouchDownScore={() => initialValue(awayScore + 7)}
      />
    </div>
  );
}

export default App;

{
  /* <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section> */
}
{
  /* <section className="buttons">
        <div className="homeButtons">
          
          <button
            onClick={() => setValue(homeScore + 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => setValue(homeScore + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>

        <div className="buttons">
          <button className="awayButtons__fieldGoal" onClick={reset}>
            Reset
          </button>
        </div>

        <div className="awayButtons">
          <button
            onClick={() => initialValue(awayScore + 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => initialValue(awayScore + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section> */
}
