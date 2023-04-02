const initialState = (id) => {
  return {
    currentChapter: localStorage.getItem(`currentChapter_${id}`) || 0,
    currentVideo: localStorage.getItem(`currentVideo_${id}`) || null,
    isChecked: JSON.parse(localStorage.getItem(`isChecked_${id}`)) || [],
    isSeek: JSON.parse(localStorage.getItem(`isSeek_${id}`)) || [],
  };
};

export default initialState;