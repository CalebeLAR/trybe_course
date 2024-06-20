import React from 'react';
import Title from './Title';
import Component from './Component';
import RandleNumber from './components';

type AppState = {
  showRandomNumber: boolean
}

class App extends React.Component<object, AppState> {
  state = {
    showRandomNumber: true
  }
  handleClick = () => {
    this.setState((prevState) => ({ showRandomNumber: !prevState.showRandomNumber }))
  }

  render() {
    const { showRandomNumber } = this.state;
    return (
      <>
        <Title titleMessage="Hello World" />

        { !showRandomNumber || <RandleNumber max={100}/>}

        <button
          onClick={this.handleClick}
        >
          {showRandomNumber ? 'hide' : 'show'}
        </button>
        <Component />
      </>
    );
  }
}

export default App;
