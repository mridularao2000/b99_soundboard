import css from 'styled-jsx/css';

const style = css`
    .soundboard-tile {
        border: 1px solid #ccc;
        border-radius: 10px;
        text-align: center;
        background-color: #fff;
        transition: background-color 0.3s;
        position: relative;
    }
    .image {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        border: 5px solid #FFD700
    }
    .grid-item {
        border: none;
        background: transparent;
        height: fit-content;
    }
    .play-button {
        border: unset;
        background: transparent;
        cursor: pointer;
    }
    .audio-title {
        color: #FFD700;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        width: 100%;
        font-weight: 600;
        cursor: pointer;
        padding: 0 10px;
        font-size: small;
    }
`

export default style;
