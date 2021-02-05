/**
 *
 * play audio melody
 *
 */

const playAudioMelody = (url) => {
  const audio = new Audio(url)

  audio.play()
}

export default playAudioMelody
