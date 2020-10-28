const ENDPOINT_URL = 'TODO: Add URL here' // TODO: Add URL here
const API_KEY = 'TODO: Add API key here' // TODO: Add API key here

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