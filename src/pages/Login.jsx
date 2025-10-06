import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../state/auth.jsx'

const ACCESS_CODE = import.meta.env.VITE_ACCESS_CODE || '0000'

export default function Login() {
  const [val, setVal] = useState('')
  const [err, setErr] = useState('')
  const inputRef = useRef(null)
  const nav = useNavigate()
  const { login } = useAuth()

  useEffect(() => { inputRef.current?.focus() }, [])

  function submit(e) {
    e.preventDefault()
    if (val === ACCESS_CODE) {
      const nextPath = new Date().getHours() < 12 ? '/protocol' : '/'
      login()
      nav(nextPath)
    } else {
      setErr('ACCESS DENIED')
      setVal('')
    }
  }

  return (
    <div className="h-dvh w-dvw bg-black grid place-items-center">
      <form onSubmit={submit} className="text-center select-none">
        <div className="text-sm tracking-[0.25em] text-zinc-500 mb-6">ENTER ACCESS CODE</div>
        <div className="mx-auto text-gotham-text text-lg font-mono">
          <input
            ref={inputRef}
            value={val}
            autoComplete="one-time-code"
            onChange={(e)=>setVal(e.target.value)}
            className="bg-transparent outline-none border-b border-gotham-border caret-gotham-accent text-center"
            style={{width:'12ch'}}
          />
        </div>
        {err && <div className="mt-6 text-gotham-warn text-xs tracking-widest">{err}</div>}
      </form>
    </div>
  )
}
