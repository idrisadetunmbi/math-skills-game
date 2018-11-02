import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Star = () => (
  <i className="small material-icons">star</i>
);

const Stars = ({ value }) => (
  <Fragment>
    { new Array(value).fill().map(() => <Star />) }
  </Fragment>
);

Stars.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Stars;
