import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CountdownRing from '../ui/CountdownRing.jsx'
import { randomDua, sampleAyat } from '../util/content'

const STEPS = ['silence','dua','quran','complete']

export default function FajrProtocol() {
  const [step, setStep] = useState('silence')
  const [seconds, setSeconds] = useState(120) // 2 minutes
  const [dua, setDua] = useState(randomDua())
  const [ayat] = useState(()=>sampleAyat())
  const nav = useNavigate()
  const isMorning = useMemo(() => new Date().getHours() < 12, [])

  useEffect(() => {
    if (!isMorning) {
      nav('/', { replace: true })
    }
  }, [isMorning, nav])

  useEffect(() => {
    if (!isMorning) return
    if (step !== 'silence') return
    const t = setInterval(()=> setSeconds(s=> (s>0? s-1:0)), 1000)
    return ()=> clearInterval(t)
  },[isMorning, step])

  useEffect(() => {
    if (!isMorning) return
    if (step==='silence' && seconds===0) setStep('dua')
  },[isMorning, seconds, step])

  function override() {
    setStep('dua')
  }

  if (!isMorning) {
    return null
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
          <div className="text-gotham-accent italic">{dua.translit}</div>
          <div className="text-zinc-400 mt-4">{dua.en}</div>
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
          <div className="text-center text-xs uppercase tracking-[0.3em] text-zinc-500">{ayat.surah}</div>
          <div className="space-y-6 mt-6">
            {ayat.verses.map((v, i)=> (
              <div key={i}>
                <div className="text-xl leading-relaxed">{v.ar}</div>
                <div className="text-gotham-accent italic mt-2">{v.translit}</div>
                <div className="text-zinc-400 text-sm mt-2">{v.en}</div>
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
