import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CountdownRing from '../ui/CountdownRing.jsx'
import { randomDua, sampleAyat } from '../util/content'

const STEPS = ['silence','dua','quran','complete']

export default function FajrProtocol() {
  const [step, setStep] = useState('silence')
  const [seconds, setSeconds] = useState(120) // 2 minutes
  const [dua, setDua] = useState(randomDua())
  const [verses] = useState(sampleAyat())
  const nav = useNavigate()

  useEffect(()=>{
    if (step !== 'silence') return
    const t = setInterval(()=> setSeconds(s=> (s>0? s-1:0)), 1000)
    return ()=> clearInterval(t)
  },[step])

  useEffect(()=>{
    if (step==='silence' && seconds===0) setStep('dua')
  },[seconds, step])

  function override() {
    setStep('dua')
  }

  return (
    <div className="h-dvh w-dvw bg-black text-gotham-text grid place-items-center p-6">
      {step==='silence' && (
        <div className="text-center">
          <div className="text-zinc-500 tracking-[0.25em] mb-6 uppercase">Sit in silence for 2 minutes</div>
          <CountdownRing seconds={seconds} total={120} />
          <button className="fixed bottom-6 right-6 text-zinc-500 text-xs" onClick={override}>Override</button>
        </div>
      )}
      {step==='dua' && (
        <div className="max-w-3xl text-center">
          <div className="text-2xl mb-4 leading-relaxed">{dua.ar}</div>
          <div className="text-zinc-400">{dua.en}</div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              className="px-3 py-1 border border-gotham-border rounded text-gotham-accent"
              onClick={() => setDua(randomDua())}
            >
              Generate another du'a
            </button>
            <button
              className="px-3 py-1 border border-gotham-border rounded"
              onClick={() => setStep('quran')}
            >
              Continue
            </button>
          </div>
        </div>
      )}
      {step==='quran' && (
        <div className="max-w-3xl">
          <div className="space-y-6">
            {verses.map((v, i)=> (
              <div key={i}>
                <div className="text-xl leading-relaxed">{v.ar}</div>
                <div className="text-zinc-400 text-sm">{v.en}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              className="px-4 py-2 border border-gotham-border rounded text-gotham-accent"
              onClick={() => setStep('complete')}
            >
              Complete Reading
            </button>
          </div>
        </div>
      )}
      {step==='complete' && (
        <div className="text-center">
          <div className="text-zinc-400 uppercase tracking-[0.25em]">Protocol Complete</div>
          <button className="mt-6 px-4 py-2 border border-gotham-border rounded" onClick={()=>nav('/')}>Proceed</button>
        </div>
      )}
    </div>
  )
}
