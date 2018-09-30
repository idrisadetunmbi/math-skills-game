import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <a className="waves-effect waves-light btn modal-trigger" href="#how-to-play">How To Play</a>

    <div style={{ color: 'black' }} id="how-to-play" className="modal">
      <div className="modal-content">
        <h5 style={{ textAlign: 'left', fontWeight: '100' }}>How To Play</h5>
        <div className="divider" />
        <ul className="how-to-play-list">
          <li><p>Choose from the Numbers (1-9) pane a sum equal to the number of stars</p></li>
          <li><p>Press the equal button to confirm the equality between the number of stars and the chosen sum</p></li>
          <li><p>The equal button changes to green (with a check) if the sum and number of stars are equal</p></li>
          <li><p>Click the check button to confirm the answer</p></li>
          <li><p>The equal button changes to red if the equality is wrong</p></li>
          <li><p>You can use the orange button (5 times) to randomise the stars</p></li>
          <li><p>If there are numbers left after randomizing the stars 5 times, you lose the game</p></li>
          <li><p>If you are able to choose all the numbers before exhausting the chances to randomise the stars, you win the game</p></li>
        </ul>
      </div>
    </div>
  </Fragment>
);
