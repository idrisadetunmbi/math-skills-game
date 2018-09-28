import React, { Component } from 'react';

import {
  Stars,
  Answers,
  EqualsBtn,
  Numbers,
  ResetStarsBtn,
  DoneStatus,
  HowToPlay,
} from './components';

import { possibleCombinationSum, gameNumArray } from './utils';

class Game extends Component {
  initialState = {
    randomNumberOfStars: Game.getRandomNumStars(),
    selectedNumbers: [],
    answerButton: { state: 'clickable' },
    usedNumbers: [],
    resetBtnClickCount: 5,
    doneStatus: null,
  }

  state = this.initialState

  static getRandomNumStars = () => Math.ceil(Math.random() * 9)

  onSelectNumber = (value) => {
    const { selectedNumbers, usedNumbers } = this.state;
    if ([...selectedNumbers, ...usedNumbers].includes(value)) return;
    this.setState(prevState => ({
      selectedNumbers: [...prevState.selectedNumbers, value],
      answerButton: {
        ...prevState.answerButton,
        state: 'clickable',
      },
    }), this.updateDoneStatus);
  }

  onSelectAnswerNum = (value) => {
    const { selectedNumbers, answerButton } = this.state;
    this.setState({
      selectedNumbers: selectedNumbers.filter(num => num !== value),
      answerButton: { ...answerButton, state: 'clickable' },
    });
  }

  onClickResetStarsBtn = () => {
    const { resetBtnClickCount } = this.state;
    if (resetBtnClickCount === 0) return;
    this.setState({
      randomNumberOfStars: Game.getRandomNumStars(),
      resetBtnClickCount: resetBtnClickCount - 1,
    }, this.updateDoneStatus);
  }

  onClickAnswerBtn = () => {
    const {
      answerButton, selectedNumbers, randomNumberOfStars, usedNumbers,
    } = this.state;
    switch (answerButton.state) {
      case 'clickable': {
        const sumSelectedNumbers = selectedNumbers.reduce((a, b) => a + b, 0);
        if (sumSelectedNumbers === randomNumberOfStars) {
          this.setState({ answerButton: { state: 'confirm' } });
        } else {
          this.setState({ answerButton: { state: 'wrong' } });
        }
      }
        break;
      case 'confirm':
        this.setState({
          usedNumbers: [...selectedNumbers, ...usedNumbers],
          answerButton: {
            ...answerButton,
            state: 'clickable',
          },
          selectedNumbers: [],
          randomNumberOfStars: Game.getRandomNumStars(),
        }, this.updateDoneStatus);
        break;
      default:
        break;
    }
  }

  hasWonGame = () => {
    const { usedNumbers, selectedNumbers } = this.state;
    return !selectedNumbers.length && usedNumbers.length === 9;
  }

  hasLostGame = () => {
    const { usedNumbers, randomNumberOfStars } = this.state;
    const unselectedNums = gameNumArray().filter(num => !usedNumbers.includes(num));
    return !possibleCombinationSum(unselectedNums, randomNumberOfStars);
  }

  updateDoneStatus = () => {
    const { resetBtnClickCount } = this.state;
    if (this.hasWonGame()) this.setState({ doneStatus: 'Done. Nice!' });
    if (resetBtnClickCount === 0 && this.hasLostGame()) this.setState({ doneStatus: 'Game Over!' });
  }

  resetGameState = () => {
    this.setState(this.initialState);
  }

  render() {
    const {
      randomNumberOfStars,
      selectedNumbers,
      usedNumbers,
      resetBtnClickCount,
      answerButton,
      doneStatus,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Math Skills Game</h1>
          <HowToPlay />
        </header>

        <div className="container">
          <section className="row section">
            <div className="col s4">
              <Stars value={randomNumberOfStars} />
            </div>
            <div className="col s4">
              <EqualsBtn
                disabled={!selectedNumbers.length}
                onClick={this.onClickAnswerBtn}
                state={answerButton.state}
              />
              <ResetStarsBtn
                onClick={this.onClickResetStarsBtn}
                disabled={!resetBtnClickCount}
                value={resetBtnClickCount}
              />
            </div>
            <div className="col s4">
              <Answers
                values={selectedNumbers}
                onSelectAnswer={this.onSelectAnswerNum}
              />
            </div>
          </section>
          {
            doneStatus
              ? (<DoneStatus doneStatus={doneStatus} resetGameState={this.resetGameState} />)
              : (
                <Numbers
                  onSelectNumber={this.onSelectNumber}
                  selectedNumbers={[...selectedNumbers, ...usedNumbers]}
                />
              )
          }
        </div>
      </div>
    );
  }
}

export default Game;
