import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class DisconnectButton extends Component {

  onClick() {
    console.log('Disconnect');
  }

  render() {
    return <Button variant="danger" size="lg" onClick={this.onClick}>Disconnect</Button>;
  }
}

export default DisconnectButton;
