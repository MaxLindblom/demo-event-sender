import eventSender from './eventSender';
const SESSION_ID_KEY = 'session_id';
const LONG_TERM_ID_KEY = 'long_term_id';
const KEYS = [SESSION_ID_KEY, LONG_TERM_ID_KEY];

const createId = (key) => {
  let d = Date.now(); // Start with now as a seed
  const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, xy => {
    const r = (d + Math.random() * 16) % 16 | 0; // Generate a new random number
    const c = xy === 'x' ? r : (r & 0x3) | 0x8; // Make sure it's  RFC4122 version 4 compliant
    d = Math.floor(d / 16); // Update the seed
    return c.toString(16); // Return the hex digit
  });
  const newIdProps = {
    time: Date.now(),
    id
  };
  localStorage.setItem(key, JSON.stringify(newIdProps));
  return newIdProps;
}

const getId = (key) => {
  const idProps = localStorage.getItem(key);
  return idProps ? JSON.parse(idProps) : null;
}

const clearSessions = () => {
  KEYS.forEach(key => localStorage.removeItem(key));
}

const updateIds = () => {
  const sessionId = getId(SESSION_ID_KEY);
  let longTermId = getId(LONG_TERM_ID_KEY);

  if (!longTermId) {
    longTermId = createId(LONG_TERM_ID_KEY);
  }

  if (!sessionId) {
    createId(SESSION_ID_KEY);
    const payload = {
      'long_term_id_created': longTermId.time
    };
    eventSender.sendStartEvent(payload);
  } else if (Date.now() - sessionId.time > 30 * 1000) {
    // No interaction the past 30 seconds. Create a new session, but leave the long term id as is.
    createId(SESSION_ID_KEY);
    const payload = {
      'expired_session_id': sessionId.id,
      'old_session_expired': sessionId.time,
      'long_term_id_created': longTermId.time
    };
    eventSender.sendStartEvent(payload);
  } else {
    // Sessions are active, but session time should be updated
		const newIdProps = {
			time: Date.now(),
			id: sessionId.id
		};
		localStorage.setItem(SESSION_ID_KEY, JSON.stringify(newIdProps));
  }
}

const sessionManager = {
  createId,
  getId,
  clearSessions,
  updateIds
}

export default sessionManager;