import css from 'styled-jsx/css'

const style = css`
    .header {
        width: 100%;
        display: flex;
        margin: 30px 50px 10px 50px;
    }
    .header-btn {
        background: transparent;
        border: none;
    }
    .image {
        width: 207px;
        height: 125px;
        cursor: pointer;
    }
    .darksoul-search-bar {
        position: relative;
        margin-left: 30px;
        margin-top: 20px;
    }
    #searchicon {
        position: absolute;
        top: 12%;
        left: 3%
    }
    .darksoul-search-bar .darksoul-search-bar-input
    {
        width: 700px;
        height: 50px;
        border-radius: 23px;
        outline: none;
        border: none;
        padding: 0px 15px 0px 50px;
        font-size: 14px;
        background-color: #27292a;
        color: #ffffff;
        font-weight: 500;
    }
    .darksoul-search-bar .darksoul-search-bar-input::placeholder
    {
        opacity: 50%;
        font-size: 16px; 
        font-weight: 400;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .cast-nav-container {
        background-color: #27292a;
        width: 100%;
        display: grid;
        justify-content: center;
    }
    .cast-img {
        height: 70px;
        width: 75px;
        border-radius: 3px;
    }
    .cast-navbar {
        display: flex;
        gap: 10px;
    }
    .cast-navbar-btn {
        border: transparent;
        border-bottom: 3px solid transparent;
        background-color: #27292a;
        height: 90px;
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px 10px 0 0; 
        transition: background-color 0.3s ease;
    }
    .cast-navbar-btn:hover {
        background-color: #414a4f;
        border-bottom: 3px solid #FFD700;
    }
`

export default style;