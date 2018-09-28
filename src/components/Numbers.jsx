import React from 'react';
import PropTypes from 'prop-types';

import Number from './Number';

const Numbers = ({ onSelectNumber, selectedNumbers }) => (
  <section style={{ border: '1px solid', borderRadius: '2px' }} className="row section">
    {
      new Array(9).fill().map((val, index) => {
        const value = index + 1;
        return (
          <Number
            disabled={selectedNumbers.includes(value)}
            onClick={onSelectNumber}
            value={value}
          />
        );
      })
    }
  </section>
);

Numbers.propTypes = {
  onSelectNumber: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Numbers;
