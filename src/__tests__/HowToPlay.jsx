import React from 'react';
import { shallow } from 'enzyme';
import { HowToPlay } from '../components';

describe('Answers component', () => {
  it('renders without crashing', () => {
    shallow(<HowToPlay />);
  });
});
