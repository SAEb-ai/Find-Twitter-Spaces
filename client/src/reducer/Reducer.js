export const initialTopic = null;
export const reducer = (topic, action) => {
  if (action.type === "SEARCH") {
    return action.payload;
  }
  return topic;
};
