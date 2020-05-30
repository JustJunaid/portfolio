export const initialState = {
  darkTheme:
    localStorage.getItem('darkTheme') === null
      ? true
      : JSON.parse(localStorage.getItem('darkTheme')),
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleDarkTheme':
      localStorage.setItem('darkTheme', action.darkTheme)
      return {
        ...state,
        darkTheme: action.darkTheme,
      }

    default:
      return state
  }
}
