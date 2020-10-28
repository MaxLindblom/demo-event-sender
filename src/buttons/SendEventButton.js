import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class SendEventButton extends Component {

  render() {
    return <Button variant="secondary" size="lg" onClick={this.props.clickSendEvent}>Send Event</Button>;
  }
}

export default SendEventButton;
