export default store => next => action => {
  console.log('before dispatching', store.getState());
  console.log('dispatching', action);
  next(action)
  console.log('after dispatch', store.getState());
}