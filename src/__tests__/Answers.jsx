import React from 'react';
import { shallow } from 'enzyme';
import { Answers } from '../components';

describe('Answers component', () => {
  it('renders without crashing', () => {
    shallow(<Answers {...{ values: [] }} />);
  });
});
