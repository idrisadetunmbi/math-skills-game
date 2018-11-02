import React from 'react';
import { shallow, mount } from 'enzyme';
import Number from '../components/Number';

describe('Answers component', () => {
  it('renders without crashing', () => {
    shallow(<Number />);
  });

  it('calls the "onClick" props function when button is clicked', () => {
    const props = { onClick: jest.fn() };
    const wrapper = mount(<Number {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('does not call the [onClick] props function when props [disabled] is true', () => {
    const props = { onClick: jest.fn(), disabled: true };
    const wrapper = mount(<Number {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
