import { useRef } from 'react';
const { default: style } = require("./SoundTile.style")

const SoundTile = ({ data }) => {
    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
            <div className="grid-item soundboard-tile">
                <button className='play-button' onClick={() => playAudio()}>
                    <img className='image' src={data.image} />
                    <p className='audio-title'>{data.audioTitle}</p>
                </button>
                <audio ref={audioRef} src={data.audio} />
                <style jsx>{style}</style>
            </div>
    )
}

export default SoundTile