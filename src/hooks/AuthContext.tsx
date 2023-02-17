import { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps {
  children: ReactNode
}

interface user {
  id: string,
  name: string,
  email: string,
  photo?: string
}

interface userAuthProps {
  user: user
}


const AuthContext = createContext({} as userAuthProps)

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: 'string',
    name: 'string',
    email: 'string',
    photo: 'string'
  }
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
