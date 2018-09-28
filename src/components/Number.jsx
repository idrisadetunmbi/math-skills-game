import React from 'react';
import PropTypes from 'prop-types';

const Number = ({ value, onClick, disabled }) => (
  <button
    type="button"
    style={{ marginLeft: '.5em' }}
    href
    disabled={disabled}
    onClick={() => onClick(value)}
    className="btn-floating waves-effect waves-light grey btn-small"
  >
    {value}
  </button>
);

Number.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Number.defaultProps = {
  disabled: false,
};

export default Number;
