import React, { createContext, useContext, useEffect, useState } from 'react'

const Ctx = createContext(null)
export const useAuth = () => useContext(Ctx)

const STORAGE_KEY = 'arkham_authed'

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(false)
  useEffect(() => { setAuthed(localStorage.getItem(STORAGE_KEY) === '1') }, [])
  const login = () => { localStorage.setItem(STORAGE_KEY, '1'); setAuthed(true) }
  const logout = () => { localStorage.removeItem(STORAGE_KEY); setAuthed(false) }
  return <Ctx.Provider value={{ authed, login, logout }}>{children}</Ctx.Provider>
}
