import { Howl } from 'howler';
import { useAudioContext } from './SoundBoardContext';
const { default: style } = require("./SoundTile.style")

const SoundTile = () => {
    const CMS_URL = process.env.NEXT_PUBLIC_URL;
    const { filteredData } = useAudioContext();
    const playSound = (soundFile) => {
        const sound = new Howl({
            src: [`${CMS_URL}${soundFile}`],
            volume: 1.0,
        });
        sound.play();
    };

    return (
        <div className='grid-container'>
            {filteredData.map(data => {
                return (
                    <div className="grid-item soundboard-tile">
                        <button className='play-button' onClick={() => playSound(data.audio.url)}>
                            <img className='image' src={`${CMS_URL}${data.image.url}`} />
                            <p className='audio-title'>{data.audioTitle}</p>
                        </button>
                    </div>
                )
            })}
            <style jsx>{style}</style>
        </div>
    )
}

export default SoundTile