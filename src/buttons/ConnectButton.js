import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class ConnectButton extends Component {

  render() {
    return <Button variant="success" size="lg" onClick={this.props.clickConnect}>Connect</Button>;
  }
}

export default ConnectButton;
