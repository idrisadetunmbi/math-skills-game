import React from 'react';
import PropTypes from 'prop-types';

const DoneStatus = ({ doneStatus, resetGameState }) => (
  <div>
    <h3 style={{ fontWeight: 100, fontFamily: 'Lato' }}>
      {doneStatus}
    </h3>
    <button type="button" onClick={resetGameState}>
      Play Again
    </button>
  </div>
);

DoneStatus.propTypes = {
  doneStatus: PropTypes.string,
  resetGameState: PropTypes.func.isRequired,
};

DoneStatus.defaultProps = {
  doneStatus: null,
};

export default DoneStatus;
