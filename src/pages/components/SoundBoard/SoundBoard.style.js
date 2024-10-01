import css from 'styled-jsx/css';

const style = css`
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(153px, 1fr));
        gap: 35px;
        padding: 16px 50px;
    }
`

export default style;