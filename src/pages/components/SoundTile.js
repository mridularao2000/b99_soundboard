import { useRef } from 'react';
import style from './SoundTile.module.css'

const SoundTile = ({ data = {} }) => {
    const audioRef = useRef(null);
    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
    }
    return (
        <div className={`${style.gridItem} ${style.soundboardTile}`}>
            <button className={style.playButton} onClick={() => playAudio()}>
                <img className={style.image} src={data.image} />
                <p className={style.audioTitle}>{data.audioTitle}</p>
                <audio ref={audioRef} src={data.audio} />
            </button>
        </div>
    )
}

export default SoundTile