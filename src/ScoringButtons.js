import React from "react";

const ScoringButtons = props => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

        <button
          onClick={props.homeTouchDownScore}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          onClick={props.homeFieldGoalScore}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>

      <div className="buttons">
        <button onClick={props.resetScore} className="awayButtons__fieldGoal">
          Reset
        </button>
      </div>

      <div className="awayButtons">
        <button
          onClick={props.awayTouchDownScore}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={props.awayFieldGoalScore}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>
      </div>
    </section>
  );
};
export default ScoringButtons;
