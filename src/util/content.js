// Placeholder content; replace with your own curated set.
const DUAS = [
  {
    ar: 'رَبِّ اشْرَحْ لِي صَدْرِي',
    translit: 'Rabbi ishrah lī ṣadrī',
    en: 'My Lord, expand for me my chest.',
  },
  {
    ar: 'اللَّهُمَّ اهْدِنَا وَاهْدِ بِنَا',
    translit: 'Allāhumma ihdinā wahdi binā',
    en: 'O Allah, guide us and guide others through us.',
  },
  {
    ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ',
    translit: 'Allāhumma innī asʾalukal-ʿāfiyah',
    en: 'O Allah, I ask You for well-being.',
  },
]
export function randomDua(){ return DUAS[Math.floor(Math.random()*DUAS.length)] }
const QURAN_SEQUENCES = [
  {
    surah: 'Ash-Sharh (94:1-8)',
    verses: [
      {
        ar: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ',
        translit: 'Alam nashraḥ laka ṣadrak',
        en: 'Did We not expand for you your breast? (94:1)',
      },
      {
        ar: 'وَوَضَعْنَا عَنكَ وِزْرَكَ',
        translit: 'Wa waḍaʿnā ʿanka wizrak',
        en: 'And We removed from you your burden (94:2)',
      },
      {
        ar: 'الَّذِي أَنقَضَ ظَهْرَكَ',
        translit: 'Allaḏī anqaḍa ẓahrak',
        en: 'Which had weighed upon your back (94:3)',
      },
      {
        ar: 'وَرَفَعْنَا لَكَ ذِكْرَكَ',
        translit: 'Wa rafaʿnā laka dhikrak',
        en: 'And raised high for you your repute (94:4)',
      },
      {
        ar: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translit: 'Fa-inna maʿal-ʿusri yusrā',
        en: 'For indeed, with hardship comes ease. (94:5)',
      },
      {
        ar: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translit: 'Inna maʿal-ʿusri yusrā',
        en: 'Indeed, with hardship comes ease. (94:6)',
      },
      {
        ar: 'فَإِذَا فَرَغْتَ فَانصَبْ',
        translit: 'Fa-idhā faraghta fanṣab',
        en: 'So when you have finished [your duties], stand up [for worship]. (94:7)',
      },
      {
        ar: 'وَإِلَىٰ رَبِّكَ فَارْغَبْ',
        translit: 'Wa ilā rabbika farghab',
        en: 'And to your Lord direct [your] longing. (94:8)',
      },
    ],
  },
  {
    surah: "Al-A'la (87:1-5)",
    verses: [
      {
        ar: 'سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى',
        translit: "Sabbihi isma rabbika al-aʿlā",
        en: 'Exalt the name of your Lord, the Most High, (87:1)',
      },
      {
        ar: 'الَّذِي خَلَقَ فَسَوَّىٰ',
        translit: 'Allaḏī khalaqa fasawwā',
        en: 'Who created and proportioned, (87:2)',
      },
      {
        ar: 'وَالَّذِي قَدَّرَ فَهَدَىٰ',
        translit: 'Wa-llaḏī qaddara fahadā',
        en: 'And Who destined and [then] guided, (87:3)',
      },
      {
        ar: 'وَالَّذِي أَخْرَجَ الْمَرْعَىٰ',
        translit: 'Wa-llaḏī akhraja al-marʿā',
        en: 'And Who brings out the pasture, (87:4)',
      },
      {
        ar: 'فَجَعَلَهُ غُثَاءً أَحْوَىٰ',
        translit: 'Fajaʿalahu ghuthāʾan aḥwā',
        en: 'Then makes it black stubble. (87:5)',
      },
    ],
  },
  {
    surah: 'Al-Ikhlāṣ (112:1-4)',
    verses: [
      {
        ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        translit: 'Qul huwa llāhu aḥad',
        en: 'Say, "He is Allah, [Who is] One, (112:1)',
      },
      {
        ar: 'اللَّهُ الصَّمَدُ',
        translit: 'Allāhu ṣ-ṣamad',
        en: 'Allah, the Eternal Refuge. (112:2)',
      },
      {
        ar: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        translit: 'Lam yalid wa lam yūlad',
        en: 'He neither begets nor is born, (112:3)',
      },
      {
        ar: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        translit: 'Wa lam yakun lahu kufuwan aḥad',
        en: 'Nor is there to Him any equivalent." (112:4)',
      },
    ],
  },
]

export function sampleAyat(){
  const sequence = QURAN_SEQUENCES[Math.floor(Math.random()*QURAN_SEQUENCES.length)]
  return {
    surah: sequence.surah,
    verses: sequence.verses.map(v => ({ ...v })),
  }
}
