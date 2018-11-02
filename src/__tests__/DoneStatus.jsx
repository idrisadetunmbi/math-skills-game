import React from 'react';
import { shallow, mount } from 'enzyme';
import { DoneStatus } from '../components';

describe('DoneStatus component', () => {
  it('renders without crashing', () => {
    shallow(<DoneStatus {...{ values: [] }} />);
  });

  it('includes "Play Again" text', () => {
    const wrapper = mount(<DoneStatus />);
    expect(wrapper.find('button').text()).toEqual('Play Again');
  });

  it('calls "resetGameState" props function when button is clicked', () => {
    const props = { resetGameState: jest.fn() };
    const wrapper = mount(<DoneStatus {...props} />);
    const resetGameBtn = wrapper.find('button');
    resetGameBtn.simulate('click');
    expect(props.resetGameState).toHaveBeenCalled();
  });
});
