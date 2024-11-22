import {useRef,React} from 'react'
import { audioClips } from '../../../audio';


const AudioButton = ({keyTrigger,url,description}) => {
  const audioRef = useRef(null);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      const displayElement = document.getElementById('display'); // Access the display element
      if (displayElement) {
        displayElement.innerText = description; // Update display text
      }
    }
  };

  
  return (
    <>
    <button  onClick={play} className='drum-pad' id={`drum-${keyTrigger}`}>
    <audio src={url} id={keyTrigger} ref={audioRef} className='clip'>{description}</audio>
    {keyTrigger}
    </button>
    </>
  )
}

export default AudioButton