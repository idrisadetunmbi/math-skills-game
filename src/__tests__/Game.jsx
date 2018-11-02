import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from '../Game';
import { Number, Answers, Numbers } from '../components';

describe('Answers component', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });

  test('clicking a number updates the expected state values', () => {
    const wrapper = mount(<Game />);
    const numbers = wrapper.find(Number);
    numbers.at(5).childAt(0).simulate('click');
    const state = wrapper.state();
    expect(state.selectedNumbers).toEqual([6]);
    expect(state.answerButton).toEqual({ state: 'clickable' });
  });

  test('clicking an answer number removes it from the state [selectedNumbers]', () => {
    const wrapper = mount(<Game />);
    wrapper.setState({ selectedNumbers: [6] });

    const answerNumbers = wrapper.find(Answers);
    const selectedNumber = answerNumbers.childAt(0);
    expect(selectedNumber.text()).toEqual('6');
    selectedNumber.simulate('click');

    const state = wrapper.state();
    expect(state.selectedNumbers).toEqual([]);
  });

  test('number is disabled when selected', () => {
    const wrapper = mount(<Game />);
    wrapper.setState({ selectedNumbers: [6] });
    const selectedNumber = wrapper.find(Numbers).find(Number).at(5);
    expect(selectedNumber.props().disabled).toEqual(true);
  });
});
