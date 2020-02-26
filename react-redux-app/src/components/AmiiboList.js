import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './AmiiboList.scss'
import Background from './Series/images/Home/amiibo.png'

const AmiiboList = props => {
    // console.log('From the AmiiboList', props.amiiboList.data)

    return(
        <div id='amiiboListContainer'>
            <img src={Background} id='listBackground'/> 
            <div className='searchContainer'>
                <input 
                    id='searchAmiiboBar'
                    name='name'
                    type='text'
                    placeholder='Search Amiibo'
                    onClick={() => props.history.push('/search')}
                />
            </div>
            <div className='gameSeries'>
                <Link to ='super-mario-bros' id= 'superMarioBros' onClick={() => props.playSound()}>Super Mario Bros.</Link>
                <Link to ='8-bit-mario' id= 'eightBitMario' onClick={() => props.playSound()}>8-Bit Mario</Link>
                <Link to ='super-smash-bros' id= 'superSmashBros' onClick={() => props.playSound()}>Super Smash Bros.</Link>
                <Link to ='yoshi-woolly-world' id= 'yoshiWoollyWorld' onClick={() => props.playSound()}>Yoshi's Woolly World</Link>
                <Link to ='skylanders' id= 'skylanders' onClick={() => props.playSound()}>Skylanders</Link>
                <Link to ='legend-of-zelda' id= 'legendOfZelda' onClick={() => props.playSound()}>Legend of Zelda</Link>
                <Link to ='animal-crossing' id= 'animalCrossing' onClick={() => props.playSound()}>Animal Crossing</Link>
                <Link to ='metroid' id= 'metroid' onClick={() => props.playSound()}>Metroid</Link>
                <Link to ='splatoon' id= 'splatoon' onClick={() => props.playSound()}>Splatoon</Link>
                <Link to ='mario-sports-superstars' id= 'marioSportsSuperstars' onClick={() => props.playSound()}>Mario Sports Superstars</Link>
                <Link to ='pokemon' id= 'pokemon' onClick={() => props.playSound()}>Pokemon</Link>
                <Link to ='kirby' id= 'kirby' onClick={() => props.playSound()}>Kirby</Link>
                <Link to ='BoxBoy' id= 'boxBoy' onClick={() => props.playSound()}>BoxBoy!</Link>
                <Link to ='fire-emblem' id= 'fireEmblem' onClick={() => props.playSound()}>Fire Emblem</Link>
                <Link to ='chibi-robo!' id= 'chibiRobo' onClick={() => props.playSound()}>Chibi-Robo!</Link>
                <Link to ='mega-man' id= 'megaMan' onClick={() => props.playSound()}>Mega Man</Link>
                <Link to ='monster-hunter' id= 'monsterHunter' onClick={() => props.playSound()}>Monster Hunter</Link>
                <Link to ='shovel-knight' id= 'shovelKnight' onClick={() => props.playSound()}>Shovel Knight</Link>
                <Link to ='pikmin' id= 'pikmin' onClick={() => props.playSound()}>Pikmin</Link>
                <Link to ='power-pros' id= 'mblPowerPros' onClick={() => props.playSound()}>MBL Power Pros</Link>
                <Link to ='diablo' id= 'diablo' onClick={() => props.playSound()}>Diablo</Link>
                <Link to ='others' id= 'others' onClick={() => props.playSound()}>Others</Link>
            </div>
            <p id='footer'>© 2019 Jerry Osorio</p>
        </div>
    )
}

export default AmiiboList;