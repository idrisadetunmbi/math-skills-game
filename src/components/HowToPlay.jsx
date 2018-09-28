import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <span className="collapsible how-to-play">
      <u className="collapsible-header">How to Play</u>
      <div className="collapsible-body">
        <ul>
          <li>1. Choose from the Numbers (1-9) pane a sum equal to the number of stars</li>
          <li>2. Press the equal button to confirm the equality between the number of stars and the chosen sum</li>
          <li>3. The equal button changes to green (with a check) if the sum and number of stars are equal</li>
          <li>4. The equal button changes to red if the equality is wrong</li>
          <li>5. You can use the orange button (5 times) to randomise the stars</li>
        </ul>
      </div>
    </span>
  </Fragment>
);
