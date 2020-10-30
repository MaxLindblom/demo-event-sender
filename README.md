# demo-event-sender
A simple demo application for a javascript event sender

_NOTE_: This solution has not been properly tested or verified. Logical bugs may occur, but this should nonetheless serve as a valid example implementation of an event sender.

## Running application
### Setup
- Add endpoint url and api key to [eventSender](https://github.com/MaxLindblom/demo-event-sender/blob/main/src/util/eventSender.js)
- Install dependencies:
`npm install`
- Start application:
`npm start`
- To get requests working properly for testing purposes, [run Chrome without CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- App should now be running on http://localhost:3000/

### Using the application
- Connect button will start session and enable event sending. Also sends a start event
- Send Event button will send a test event. If session has expired (more than 30 seconds since last interaction) it will restart the session and also send a new start event
- Disconnect button will end session and disable event sending. Send Event button will now do nothing. Click Connect to enable again
