import SoundTile from "../SoundTile";
import style from "./SoundBoard.style";

const { useAudioContext } = require("../SoundBoardContext")

const SoundBoard = () => {
    const { filteredData } = useAudioContext();
    return (
        <div className='grid-container'>
            {filteredData.map(data => {
                return (
                    <SoundTile data={data} />
                )
            })}
            <style jsx>{style}</style>
        </div>
    )
}

export default SoundBoard