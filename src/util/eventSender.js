const fs = require('fs');
const readline = require('readline');


const getCredentials = () => {
  const fileStream = fs.createReadStream('api_creds.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const credentials = [];
  for (const line of rl) {
    credentials.append(line.split(' ')[1])
  }

  return credentials;
} 

const credentials = getCredentials();
const ENDPOINT_URL = credentials[0]
const API_KEY = credentials[1]

const sendStartEvent = (metadata, payload) => {
  const data = {
    'event_name': 'start_session',
    metadata,
    payload
  }

  try {
    const encodedBody = window.btoa(JSON.stringify(data));
    fetch(`${ENDPOINT_URL}/send_data?data=${encodedBody}`, {
      mode: 'no-cors',
      headers: {
        'x-api-key': API_KEY
      }
    });
  } catch (error) {
    throw Error(`Failed to send start event`);
  }
}

const sendTestEvent = (metadata, payload) => {
  const data = {
    'event_name': 'test_event',
    metadata,
    payload
  }

  try {
    const encodedBody = window.btoa(JSON.stringify(data));
    fetch(`${ENDPOINT_URL}/send_data?data=${encodedBody}`, {
      mode: 'no-cors',
      headers: {
        'x-api-key': API_KEY
      }
    });
  } catch (error) {
    throw Error(`Failed to send test event`);
  }
}

const eventSender = {
  sendStartEvent,
  sendTestEvent
}

export default eventSender;