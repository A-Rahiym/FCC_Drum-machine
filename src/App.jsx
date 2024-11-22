import { useState, useEffect } from 'react'
import AudioButton from './component/Button/AudioButton'
import { audioClips } from '../audio'
import './App.css'

const App = () => {
  const [displayText, setDisplayText] = useState('');

  const playAudio = (event) => {
    console.log('mounted')
    const key = event.key.toUpperCase();
    const audioClip = audioClips.find((clip) => clip.keyTrigger === key);
    if (audioClip) {
      const audioElement = document.getElementById(key); // Get audio element by id
      console.log(audioElement)
      if (audioElement) {
        audioElement.play(); // Play the audio
        setDisplayText(audioClip.description); // Update display text
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', playAudio); // Add keydown listener
    return () => {
      document.removeEventListener('keydown', playAudio); // Cleanup on unmount
    };
  }, []);


  return (
    <>
    <div className='container' id="drum-machine" onKeyDown={playAudio}>
      <h1>Drum machine</h1>
      {/* display */}
      <div id="display">{displayText}</div>
      {/* audio buttons */}
      {audioClips.map(audio =><AudioButton id={audio.keyTrigger} keyTrigger={audio.keyTrigger} url={audio.url} description={audio.description} key={audio.keyTrigger}/>)}
    </div>
    </>
  )
}

export default App
