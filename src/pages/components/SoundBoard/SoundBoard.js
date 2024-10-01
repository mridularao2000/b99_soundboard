import SoundTile from "../SoundTile";
import style from './SoundBoard.module.css'

const { useAudioContext } = require("../../../utils/SoundBoardContext")

const SoundBoard = () => {
    const { filteredData = [] } = useAudioContext();
    return (
        <div className={style.gridContainer}>
            {filteredData.map((data, key) => {
                return (
                    <SoundTile key={key} data={data} />
                )
            })}
        </div>
    )
}

export default SoundBoard;