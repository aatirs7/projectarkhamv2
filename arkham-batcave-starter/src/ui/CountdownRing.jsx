import React from 'react'
export default function CountdownRing({ seconds, total=120, size=160 }) {
  const r = 70
  const c = 2 * Math.PI * r
  const progress = c - (seconds/total) * c
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" className="block mx-auto">
      <circle cx="80" cy="80" r={r} fill="none" stroke="#1f2937" strokeWidth="6" />
      <circle cx="80" cy="80" r={r} fill="none" stroke="#2dd4bf" strokeWidth="6" strokeDasharray={c} strokeDashoffset={progress} transform="rotate(-90 80 80)" />
      <text x="80" y="86" textAnchor="middle" fill="#e5e7eb" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace">{Math.floor(seconds/60)}:{String(seconds%60).padStart(2,'0')}</text>
    </svg>
  )
}
