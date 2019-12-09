import React, { useState } from "react";
import BottomRow from "./BottomRow";


const ScoreBoard = props => {
  const [quarter,setQuarter] = useState(1)
  
  const quarterPlus = () =>{

    setQuarter(quarter <= 4 ? quarter++ : setQuarter(0))
  }
  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>

          <div className="home__score">{props.homescore}</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{props.awayscore}</div>
        </div>
      </div>
      <BottomRow quarterScore = {quarterPlus}/>
    </section>
  );
};
export default ScoreBoard;
