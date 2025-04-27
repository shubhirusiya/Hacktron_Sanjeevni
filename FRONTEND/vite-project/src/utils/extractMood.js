export const extractMood = (input) => {
  const moods = ['happy', 'sad', 'angry', 'depressed', 'anxiety'];
  const lowerCaseInput = input.toLowerCase();

  // Check if any mood exists in the input string
  for (const mood of moods) {
    if (lowerCaseInput.includes(mood)) {
      return mood; // Return the first matched mood
    }
  }

  return null; // Return null if no mood is found
};

// Map moods to YouTube video links
export const moodToPlaylist = {
  happy: [
    'https://www.youtube.com/watch?v=Cc_cNEjAh_Y&list=PL8U7gDbfLksNOQ-IbN_jfC9DVQYt4xXTo',
    'https://www.youtube.com/watch?v=WxtJqyIyThU',
    'https://www.youtube.com/watch?v=Jy5o66NXgVs',
    'https://www.youtube.com/watch?v=GEVvyIrQZnA',
    'https://www.youtube.com/watch?v=FGtaw55iq1o',
    'https://www.youtube.com/watch?v=Hx8c50vUi4I',
    'https://www.youtube.com/watch?v=LGPv0JAuW-U',
    'https://www.youtube.com/watch?v=wEELNLOIOPs',
    'https://www.youtube.com/watch?v=dx4Teh-nv3A&list=PL406sb8c3_OkjFTgwKb8SX-ul1tChD6Hr',
    'https://www.youtube.com/watch?v=WjAPDofGg28&list=PL406sb8c3_OkjFTgwKb8SX-ul1tChD6Hr&index=4',
  ],
  sad: [
    'https://www.youtube.com/watch?v=gXdMyhGX5Fs',
    'https://www.youtube.com/watch?v=dB19Fwijoj8&t=157s',
    'https://www.youtube.com/watch?v=bP9gMpl1gyQ',
    'https://www.youtube.com/watch?v=6ZwwapPikyQ',
    'https://www.youtube.com/watch?v=Feoea8FQTI0',
  ],
  angry: [
    'https://www.youtube.com/watch?v=6m2Ma8uX74s',
    'https://www.youtube.com/watch?v=rbE_AdI0j4Q',
    'https://www.youtube.com/watch?v=Onb6_bRJ0Bw',
    'https://www.youtube.com/watch?v=iLHPzVbuClA',
    'https://www.youtube.com/watch?v=FmQwji-ufQE',
    'https://www.youtube.com/watch?v=CD56-HALP-8',
    'https://www.youtube.com/watch?v=XruN0n7DCIA'
  ],
  depressed: [
    'https://www.youtube.com/watch?v=dB19Fwijoj8&t=157s',
    'https://www.youtube.com/watch?v=VgdAcENXy84',
    'https://www.youtube.com/watch?v=5aqvW1SCO7I',
    'https://www.youtube.com/watch?v=_PUtlPGC2bY',
    'https://www.youtube.com/watch?v=X-i---Fmg2Y',
    'https://www.youtube.com/watch?v=Rb-ODN9tkgY'
  ],
  anxiety: [
    'https://www.youtube.com/watch?v=VgdAcENXy84',
    'https://www.youtube.com/watch?v=dB19Fwijoj8&t=157s',
    'https://www.youtube.com/watch?v=0aW2fCCqjlY',
    'https://www.youtube.com/watch?v=mGC-S7n_HkE',
    'https://www.youtube.com/watch?v=eAir5h-Z8eA',
    'https://www.youtube.com/watch?v=Rb-ODN9tkgY',
    'https://www.youtube.com/watch?v=GgfmLuUGETc',
  ],
};
