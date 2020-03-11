export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_AGENCIES":
      return action.payload;
    default:
      return state;
  }
};
