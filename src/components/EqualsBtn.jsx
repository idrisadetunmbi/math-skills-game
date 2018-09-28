import React from 'react';
import PropTypes from 'prop-types';

const EqualsBtn = ({ state, disabled, onClick }) => {
  const btnState = {
    wrong: { color: 'red', icon: 'cancel' },
    confirm: { color: 'teal', icon: 'check' },
    clickable: { color: 'grey', icon: 'drag_handle' },
  }[state];
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={`waves-effect waves ${btnState.color} btn-large`}
    >
      <i className="large material-icons">
        {btnState.icon}
      </i>
    </button>
  );
};

EqualsBtn.propTypes = {
  state: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EqualsBtn;
