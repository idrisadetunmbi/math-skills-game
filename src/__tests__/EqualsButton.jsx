import React from 'react';
import { shallow, mount } from 'enzyme';
import { EqualsBtn } from '../components';

describe('DoneStatus component', () => {
  it('renders without crashing', () => {
    shallow(<EqualsBtn {...{ state: 'clickable' }} />);
  });

  it('renders the expected icon when "state" props is "wrong"', () => {
    const wrapper = mount(<EqualsBtn {...{ state: 'wrong' }} />);
    expect(wrapper.find('i').text()).toEqual('cancel');
  });

  it('calls the "onClick" props function when button is clicked', () => {
    const props = { state: 'clickable', onClick: jest.fn() };
    const wrapper = mount(<EqualsBtn {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('does not call the "onClick" props function when button is disabled', () => {
    const props = { state: 'clickable', onClick: jest.fn(), disabled: true };
    const wrapper = mount(<EqualsBtn {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClick).not.toHaveBeenCalled();
  });

  // it('calls "resetGameState" props function when button is clicked', () => {
  //   const props = { resetGameState: jest.fn() };
  //   const wrapper = mount(<DoneStatus {...props} />);
  //   const resetGameBtn = wrapper.find('button');
  //   resetGameBtn.simulate('click');
  //   expect(props.resetGameState).toHaveBeenCalled();
  // });
});
