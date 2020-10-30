const ENDPOINT_URL = 'TODO: Add API key here' // TODO: Add URL here
const API_KEY = 'TODO: Add API key here' // TODO: Add API key here

/**
 * Note: Below method for sending events is janky, and will not work in browsers with CORS enabled (all of them probably)
 * See README for more info
 */
const sendStartEvent = (metadata, payload) => {
  const data = {
    'event_name': 'start_session',
    metadata,
    payload
  }

  try {
    const encodedBody = window.btoa(JSON.stringify(data));
    const invocation = new XMLHttpRequest();
    invocation.open('GET', `${ENDPOINT_URL}send_data?data=${encodedBody}`, true)
    invocation.setRequestHeader('x-api-key', API_KEY)
    invocation.onreadystatechange = function () {
      if(invocation.readyState === XMLHttpRequest.DONE) {
        var status = invocation.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // Handle event - in this case, just log it to console
          console.log(invocation.responseText);
        } else {
          // Oh no! There has been an error with the request!
        }
      }
    };
    invocation.send()
  } catch (error) {
    throw Error(`Failed to send start event`);
  }
}

/**
 * Note: Below method for sending events is janky, and will not work in browsers with CORS enabled (all of them probably)
 * See README for more info
 */
const sendTestEvent = (metadata, payload) => {
  const data = {
    'event_name': 'test_event',
    metadata,
    payload
  }

  try {
    const encodedBody = window.btoa(JSON.stringify(data));
    const invocation = new XMLHttpRequest();
    invocation.open('GET', `${ENDPOINT_URL}send_data?data=${encodedBody}`, true)
    invocation.setRequestHeader('x-api-key', API_KEY)
    invocation.onreadystatechange = function () {
      // In local files, status is 0 upon success in Mozilla Firefox
      if(invocation.readyState === XMLHttpRequest.DONE) {
        var status = invocation.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // Handle event - in this case, just log it to console
          console.log(invocation.responseText);
        } else {
          // Oh no! There has been an error with the request!
        }
      }
    };
    invocation.send()
  } catch (error) {
    throw Error(`Failed to send test event`);
  }
}

const eventSender = {
  sendStartEvent,
  sendTestEvent
}

export default eventSender;