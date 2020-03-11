export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_AGENTS":
      return action.payload;
    default:
      return state;
  }
};
