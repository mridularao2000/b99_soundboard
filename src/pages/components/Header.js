'use client'
import { Fragment, useState } from "react";
// import { useDebounce } from "use-debounce";
import style from './Header.module.css'
import { useAudioContext } from "../../utils/SoundBoardContext";

const Header = () => {
    const { searchAudio } = useAudioContext();
    const [ query, setQuery ] = useState('')
    // const [debouncedQuery] = useDebounce(query, 300);
    const handleChange = (event) => {
        // console.log(debouncedQuery);
        const { value } = event.target;
        setQuery(value); 
        if(value.length > 1){
            searchAudio(value);
        } else {
            if(value.length === 0) searchAudio(value);
        }
    }
    const reloadPage = () => {
        location.reload();
    }
    const filterByChar = (event) => {
        let charName = event.target.getAttribute('src');
        console.log("charName--->", charName);
        searchAudio(charName.split('/').pop().split('.')[0], true);
    }
    return (
        <Fragment>
            <div className={style.header}>
                <button className={style.headerBtn} onClick={reloadPage}><img className={style.image} src='/images/header_pic.png' /></button>

                <div className={style.darksoulSearchBar} id="searchbar">
                    <input id="searchbarinput" className={style.darksoulSearchBarInput} onChange={handleChange} type="text" value={query} name="search" placeholder="Search sound" />
                    <img id={style.searchicon} width="22" height="22" src="/images/search.png" alt="search" />
                </div>
            </div>
            <div className={style.castNavContainer}>
                <div className={style.castNavbar}>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/jake.jpg" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/amy.png" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/charles.jpeg" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/terry.jpg" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/holt.jpg" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/gina.jpg" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/rosa.png" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/scully.jpg" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/hitchcock.jpg" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/dougjudy.jpg" /></button>
                    <button className={style.castNavbarBtn} onClick={filterByChar}><img className={style.castImg} src="/images/navbar/cj.jpg" /></button>
                </div>
            </div>
        </Fragment>
    )
}
export default Header;




// document.querySelector('.container').addEventListener('click', function(event) {
//     // Check if the clicked element is an image inside a raster item
//     if (event.target.matches('.raster-item img')) {
//       // Log the src attribute of the image
//       console.log(event.target.getAttribute('src'));
//     }
//   });