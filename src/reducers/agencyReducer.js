export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_AGENCY":
      return action.payload;
    default:
      return state;
  }
};
