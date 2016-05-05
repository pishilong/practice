export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const clientId = store.getState().get('clientId');
    socket.emit('action', Object.assign({}, action, {clientId}));
  }
  return next(action);
}
