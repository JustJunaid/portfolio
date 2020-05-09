export const initialState = {
  showButton: true,
  darkTheme: true,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "toggleDownloadButton":
      return {
        ...state,
        showButton: action.showButton,
      }

    default:
      return state
  }
}
