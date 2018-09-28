import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Number from './Number';

const Answers = ({ values, onSelectAnswer }) => (
  <Fragment>
    {
      values.map(num => <Number onClick={onSelectAnswer} value={num} />)
    }
  </Fragment>
);

Answers.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
};

export default Answers;
