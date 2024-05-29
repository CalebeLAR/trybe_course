import React from "react";

type RandleNumberProps = {
  max: number
}

type RandleNumberState = {
  randomNumber: number
}

export default class RandleNumber extends React.Component<RandleNumberProps, RandleNumberState> {
  state = {
    randomNumber: 0,
  }

  gerRandomNumber = () => Math.floor((Math.random() * this.props.max) + 1)

  handleClick = () => this.setState({ randomNumber: this.gerRandomNumber() })


  componentDidMount(): void {
    this.setState({ randomNumber: this.gerRandomNumber() })
  }

  componentDidUpdate(): void {
    document.title = `Numero ${this.state.randomNumber}`
  }

  componentWillUnmount(): void {
    document.title = 'Numero oculto';
  }
  render() {
    const { randomNumber } = this.state
    return (
      <>
        <h1>{`Number: ${randomNumber}`}</h1>
        <button
          onClick={this.handleClick}
        >generate</button>
      </>
    )
  }
}