import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class ConnectButton extends Component {

  onClick() {
    console.log('Connect');
  }

  render() {
    return <Button variant="success" size="lg" onClick={this.onClick}>Connect</Button>;
  }
}

export default ConnectButton;
