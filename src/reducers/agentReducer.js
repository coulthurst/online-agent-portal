export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_AGENT":
      return action.payload;
    default:
      return state;
  }
};
