import React from 'react';
import PropTypes from 'prop-types';

const ResetStarsBtn = ({ onClick, value, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="btn orange"
    style={{
      margin: '0 auto',
      marginTop: '1em',
      display: 'block',
      padding: '0 9px',
    }}
  >
    {value}
    <i
      style={{ marginRight: '2px' }}
      className="small left material-icons"
    >
      sync
    </i>
  </button>
);

ResetStarsBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ResetStarsBtn;
