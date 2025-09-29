// Placeholder content; replace with your own curated set.
const DUAS = [
  { ar: 'رَبِّ اشْرَحْ لِي صَدْرِي', en: 'My Lord, expand for me my chest.' },
  { ar: 'اللَّهُمَّ اهْدِنَا وَاهْدِ بِنا', en: 'O Allah, guide us and guide others through us.' },
  { ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ', en: 'O Allah, I ask You for well-being.' },
]
export function randomDua(){ return DUAS[Math.floor(Math.random()*DUAS.length)] }
const AYAT = [
  { ar: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ', en: 'Allah is the Light of the heavens and the earth. (24:35)' },
  { ar: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', en: 'Indeed, with hardship [will be] ease. (94:6)' },
  { ar: 'وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', en: 'And He is over all things competent. (67:1)' },
  { ar: 'ادْعُونِي أَسْتَجِبْ لَكُمْ', en: 'Call upon Me; I will respond to you. (40:60)' }
]
export function sampleAyat(n=5){
  const shuffled = [...AYAT].sort(()=>Math.random()-0.5)
  return shuffled.slice(0, Math.min(n, shuffled.length))
}
