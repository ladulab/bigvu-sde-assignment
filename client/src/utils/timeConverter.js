const timeConverter = (timestamp) => {
  const totalSeconds = timestamp.toFixed(0);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let result = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return result;
};

export default timeConverter;