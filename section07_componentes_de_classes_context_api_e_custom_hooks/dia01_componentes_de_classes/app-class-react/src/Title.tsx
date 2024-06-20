import React from 'react'
import './App.css'

type TitleProps = {
  titleMessage: string;
}

export default class App extends React.Component<TitleProps> {
  render(): React.ReactNode {
    const { titleMessage } = this.props;

    return <h1>{titleMessage}</h1>
  }
}