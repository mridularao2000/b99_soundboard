import { useRef } from 'react';
import style from './SoundTile.module.css'

const SoundTile = ({ data = {} }) => {
    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
            <div className={`${style.gridItem} ${style.soundboardTile}`}>
                <button className={style.playButton} onClick={() => playAudio()}>
                    <img className={style.image} src={data.image} />
                    <p className={style.audioTitle}>{data.audioTitle}</p>
                </button>
                <audio ref={audioRef} src={data.audio} />
            </div>
    )
}

export default SoundTile