import eventSender from './eventSender';
const SESSION_ID_KEY = 'session_id';
const LONG_TERM_ID_KEY = 'long_term_id';
const KEYS = [SESSION_ID_KEY, LONG_TERM_ID_KEY];

const createId = (key) => {
  const id = this.idGenerator.uuidV4();
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
  const sessionId = this.getId(SESSION_ID_KEY);
  let longTermId = this.getId(LONG_TERM_ID_KEY);

  if (!longTermId) {
    longTermId = this.createId(LONG_TERM_ID_KEY);
  }

  if (!sessionId) {
    this.createId(SESSION_ID_KEY);
    const payload = {
      'long_term_id_created': longTermId.time
    };
    eventSender.sendStartEvent(payload);
  } else if (Date.now() - sessionId.time > 30 * 1000) {
    // No interaction the past 30 seconds. Create a new session, but leave the long term id as is.
    this.createId(SESSION_ID_KEY);
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