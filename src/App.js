import './App.css';
import ConnectButton from './buttons/ConnectButton';
import SendEventButton from './buttons/SendEventButton';
import DisconnectButton from './buttons/DisconnectButton';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEnabled: false,
    }

    this.clickConnect = this.clickConnect.bind(this)
    this.clickSendEvent = this.clickSendEvent.bind(this)
    this.clickDisconnect = this.clickDisconnect.bind(this)
  }

  clickConnect() {
    console.log('Connect');
    this.setState(() => {
      return {isEnabled: true}
    })
  }

  clickSendEvent() {
    if(this.state.isEnabled) {
      console.log('Send Event');
    }
  }

  clickDisconnect() {
    console.log('Disconnect');
    this.setState(() => {
      return {isEnabled: false}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Use buttons below to control Events
          </p>
          <ConnectButton clickConnect = {this.clickConnect}></ConnectButton>
          <SendEventButton clickSendEvent = {this.clickSendEvent}></SendEventButton>
          <DisconnectButton clickDisconnect = {this.clickDisconnect}></DisconnectButton>
        </header>
      </div>
    );
  }

}

export default App;
