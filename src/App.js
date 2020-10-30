import './App.css';
import ConnectButton from './buttons/ConnectButton';
import SendEventButton from './buttons/SendEventButton';
import DisconnectButton from './buttons/DisconnectButton';
import React, {Component} from 'react';
import eventSender from './util/eventSender';
import sessionManager from './util/sessionManager';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEnabled: false,
      currentSession: '',
      eventCounter: 0
    }

    this.clickConnect = this.clickConnect.bind(this)
    this.clickSendEvent = this.clickSendEvent.bind(this)
    this.clickDisconnect = this.clickDisconnect.bind(this)
  }

  clickConnect() {
    sessionManager.updateIds();
    const currentSession = sessionManager.getId('session_id').id
    if (currentSession !== this.state.currentSession) {
      this.setState({
        isEnabled: true,
        currentSession,
        eventCounter: 0
      })
    } else {
      this.setState({
        isEnabled: true
      })
    }
  }

  clickSendEvent() {
    if(this.state.isEnabled) {
      sessionManager.updateIds();
      const currentSession = sessionManager.getId('session_id').id
      if (currentSession !== this.state.currentSession) {
        this.setState({
          currentSession,
          eventCounter: 0
        })
      } else {
        this.setState({
          eventCounter: this.state.eventCounter + 1
        })
      }
      eventSender.sendTestEvent(
        {
          session: sessionManager.getId('session_id'),
          longTerm: sessionManager.getId('long_term_id')
        },
        {
          msg: 'This is a test event',
          eventNumber: this.state.eventCounter
        }
      )
    }
  }

  clickDisconnect() {
    sessionManager.clearSessions()
    this.setState({
      isEnabled: false, 
      currentSession: '', 
      eventCounter: 0})
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
