import React, { useContext } from 'react';
import { GlobalContext } from "../../global";
import Social from './Social.svg';

function Header() {
    const {country, city} = useContext(GlobalContext);
    return (
        <>
            <h1 className='page-title'>Top Twitter Trends - {city === undefined ? country : city}</h1>
        <div id='header-container'>
            <h2 className='tag-line'>Know<span>What's</span><span>Trending?</span></h2>
            <img src={Social} width='726' height='494' alt='Social' className='head-image' />
        </div>
        </>
    )
}

export default Header
