import { createContext, useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
})

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)
  
  useEffect(() => {
    netlifyIdentity.on('login', user => {
      setUser(user)
      netlifyIdentity.close()
    })
    
    netlifyIdentity.on('logout', () => {
      setUser(null)
    })
    
    netlifyIdentity.on('init', user => {
      setUser(user)
      setAuthReady(true)
    })
    
    // init netlify identity connection
    netlifyIdentity.init()

    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
      netlifyIdentity.off('init')
    }
  }, []) 
  
  const login = () => {
    netlifyIdentity.open()
  }
  
  const logout = () => {
    netlifyIdentity.logout()
  }
  
  const context = { user, login, logout, authReady }
  
  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
