import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import a from '../icons/magnifying-glass.png'

const AmiiboList = () => {

    const [search, setSearch] = useState()

    const searching = () => {
        
    }

    const changeHandler = (e) => {

    }

    return(
        <> 
            <div className='searchContainer'>
                <input 
                    id='searchAmiiboBar'
                    name='name'
                    onChange={changeHandler} 
                    type='text' 
                />
                <img id='searchIcon' src='https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png'/>
            </div>
            <div className='gameSeries'>
                <Link to ='super-mario-bros' id= 'superMarioBros'>Super Mario Bros.</Link>
                <Link to ='8-bit-mario' id= 'eightBitMario'>8-Bit Mario</Link>
                <Link to ='super-smash-bros' id= 'superSmashBros'>Super Smash Bros.</Link>
                <Link to ='yoshi-woolly-world' id= 'yoshiWoollyWorld'>Yoshi's Woolly World</Link>
                <Link to ='skylanders' id= 'skylanders'>Skylanders</Link>
                <Link to ='legend-of-zelda' id= 'legendOfZelda'>Legend of Zelda</Link>
                <Link to ='animal-crossing' id= 'animalCrossing'>Animal Crossing</Link>
                <Link to ='metroid' id= 'metroid'>Metroid</Link>
                <Link to ='splatoon' id= 'splatoon'>Splatoon</Link>
                <Link to ='mario-sports-superstars' id= 'marioSportsSuperstars'>Mario Sports Superstars</Link>
                <Link to ='pokemon' id= 'pokemon'>Pokemon</Link>
                <Link to ='kirby' id= 'kirby'>Kirby</Link>
                <Link to ='BoxBoy' id= 'boxBoy'>BoxBoy!</Link>
                <Link to ='fire-emblem' id= 'fireEmblem'>Fire Emblem</Link>
                <Link to ='chibi-robo!' id= 'chibiRobo'>Chibi-Robo!</Link>
                <Link to ='mega-man' id= 'megaMan'>Mega Man</Link>
                <Link to ='monster-hunter' id= 'monsterHunter'>Monster Hunter</Link>
                <Link to ='shovel-knight' id= 'shovelKnight'>Shovel Knight</Link>
                <Link to ='pikmin' id= 'pikmin'>Pikmin</Link>
                <Link to ='power-pros' id= 'mblPowerPros'>MBL Power Pros</Link>
                <Link to ='diablo' id= 'diablo'>Diablo</Link>
                <Link to ='others' id= 'others'>Others</Link>
            </div>
        </>
    )
}

export default AmiiboList;