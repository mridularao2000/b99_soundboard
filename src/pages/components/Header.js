'use client'
import { Fragment, useState } from "react";
// import { useDebounce } from "use-debounce";
import style from "./Header.style";
import { useAudioContext } from "./SoundBoardContext";

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
        let charName = ''
        if(event.target.matches('.cast-img')){
            charName = event.target.getAttribute('src');
        }
        searchAudio(charName.split('/').pop().split('.')[0], true);
    }
    return (
        <Fragment>
            <div className="header">
                <button className="header-btn" onClick={reloadPage}><img className="image" src='/images/header_pic.png' /></button>

                <div className="darksoul-search-bar" id="searchbar">
                    <input id="searchbarinput" className="darksoul-search-bar-input" onChange={handleChange} type="text" value={query} name="search" placeholder="Search sound" />
                    <img id="searchicon" width="22" height="22" src="/images/search.png" alt="search" />
                </div>
            </div>
            <div className="cast-nav-container">
                <div className="cast-navbar">
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/jake.jpg" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/amy.png" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/charles.jpeg" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/terry.jpg" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/holt.jpg" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/gina.jpg" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/rosa.png" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/scully.jpg" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/hitchcock.jpg" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/dougjudy.jpg" /></button>
                    <button className="cast-navbar-btn" onClick={filterByChar}><img className="cast-img" src="/images/cj.jpg" /></button>
                </div>
            </div>
            <style jsx>{style}</style>
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