import React from 'react';
import { shallow, mount } from 'enzyme';
import { ResetStarsBtn } from '../components';

describe('Answers component', () => {
  it('renders without crashing', () => {
    shallow(<ResetStarsBtn />);
  });

  it('calls the [onClick] props function when button is clicked', () => {
    const props = { onClick: jest.fn() };
    const wrapper = mount(<ResetStarsBtn {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('does not call the [onClick] props function when props [disabled] is true', () => {
    const props = { onClick: jest.fn(), disabled: true };
    const wrapper = mount(<ResetStarsBtn {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
