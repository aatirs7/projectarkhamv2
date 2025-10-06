import React from 'react'
import { useAuth } from '../state/auth.jsx'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const { logout } = useAuth()
  return (
    <div className="min-h-dvh p-6 md:p-10 space-y-6 bg-black">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="panel p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Mission Overview</h2>
          <div className="text-sm text-zinc-400">Daily score, focus, quick stats — stub.</div>
        </div>
        <div className="panel p-6">
          <h2 className="text-xl font-semibold mb-4">System</h2>
          <div className="space-x-3">
            <Link className="text-gotham-accent underline" to="/protocol">Run Fajr Protocol</Link>
            <button className="text-zinc-400 underline" onClick={logout}>Log out</button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="panel p-6"><h3 className="font-semibold mb-2">Projects Console</h3></div>
        <div className="panel p-6"><h3 className="font-semibold mb-2">Finance Command</h3></div>
      </div>
    </div>
  )
}
