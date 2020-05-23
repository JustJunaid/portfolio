export const initialState = {
  darkTheme: true,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleDarkTheme':
      // localStorage.setItem('darkTheme', action.darkTheme)
      return {
        ...state,
        darkTheme: action.darkTheme,
      }

    default:
      return state
  }
}
