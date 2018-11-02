import React from 'react';
import { shallow, mount } from 'enzyme';
import { Stars, Star } from '../components';

describe('Answers component', () => {
  it('renders without crashing', () => {
    const props = { value: 9 };
    shallow(<Stars {...props} />);
  });

  it('renders stars count equivalent to [value] props', () => {
    const props = { value: 9 };
    const wrapper = shallow(<Stars {...props} />);
    const starsCount = wrapper.find(Star).length;
    expect(starsCount).toEqual(props.value);
  });
});
