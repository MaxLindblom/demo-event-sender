import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class DisconnectButton extends Component {

  render() {
    return <Button variant="danger" size="lg" onClick={this.props.clickDisconnect}>Disconnect</Button>;
  }
}

export default DisconnectButton;
