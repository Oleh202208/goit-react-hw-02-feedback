import React, {Component} from 'react';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  render() {
    return (
    <div className="Section">
      <h2 className="title">Please leave feedback</h2>
    <button className="Btn" type="button">Good</button>
    <button className="Btn" type="button">Neutral</button>
    <button className="Btn" type="button">Bad</button>
<h2 className="title">Statistics</h2>
<ul className="List">
  <li className="item">Good</li>
  <li className="item">Neutral</li>
  <li className="item">Bad</li>
  <li className="item">Total</li>
  <li className="item">Positive feedback</li>
</ul>
</div>
)};
    };

    export {App};