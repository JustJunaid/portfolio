export const LStorage = {
  get: (key) => {
    if (typeof window !== 'undefined' && localStorage.getItem(key))
      return JSON.parse(localStorage.getItem(key))
    else return null
  },
  set: (key, value) =>
    typeof window !== 'undefined' && localStorage.setItem(key, value),
}

export const initialState = {
  darkTheme:
    LStorage.get('darkTheme') === null
      ? true
      : JSON.parse(LStorage.get('darkTheme')),
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleDarkTheme':
      LStorage.set('darkTheme', action.darkTheme)
      return {
        ...state,
        darkTheme: action.darkTheme,
      }

    default:
      return state
  }
}
