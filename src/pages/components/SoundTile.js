import { useEffect, useRef, useState } from 'react';
import style from './SoundTile.module.css'

const SoundTile = ({ data = {} }) => {
    const audioRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;

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
                <audio controls>
                    <source src={data.audio} type="audio/mpeg" />
                </audio>
            </button>
        </div>
    )
}

export default SoundTile