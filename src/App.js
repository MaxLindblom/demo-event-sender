import './App.css';
import ConnectButton from './buttons/ConnectButton';
import SendEventButton from './buttons/SendEventButton';
import DisconnectButton from './buttons/DisconnectButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Use buttons below to control Events
        </p>
        <ConnectButton></ConnectButton>
        <SendEventButton></SendEventButton>
        <DisconnectButton></DisconnectButton>
      </header>
    </div>
  );
}

export default App;
