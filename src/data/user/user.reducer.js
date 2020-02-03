export function userReducer(state, action) {
  switch (action.type) {
    case 'set-user-loading':
      return { ...state, loading: action.isLoading }
    case 'set-user-data':
      return { ...state, ...action.data }
    case 'set-username':
      return { ...state, username: action.username }
    case 'set-has-seen-tutorial':
      return { ...state, hasSeenTutorial: action.hasSeenTutorial }
    case 'set-dark-mode':
      return { ...state, darkMode: action.darkMode }
    case 'set-is-loggedin':
      return { ...state, isLoggedin: action.loggedIn }
  }
}
