import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class SendEventButton extends Component {

  onClick() {
    console.log('SendEvent');
  }

  render() {
    return <Button variant="secondary" size="lg" onClick={this.onClick}>Send Event</Button>;
  }
}

export default SendEventButton;
