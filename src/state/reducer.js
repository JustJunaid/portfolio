export const initialState = {
  darkTheme:
    typeof window !== 'undefined' && localStorage.getItem('darkTheme') === null
      ? true
      : typeof window !== 'undefined' &&
        JSON.parse(localStorage.getItem('darkTheme')),
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleDarkTheme':
      typeof window !== 'undefined' &&
        localStorage.setItem('darkTheme', action.darkTheme)
      return {
        ...state,
        darkTheme: action.darkTheme,
      }

    default:
      return state
  }
}
