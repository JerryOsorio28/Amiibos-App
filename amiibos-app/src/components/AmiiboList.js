import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../icons/magnifying-glass.png'

//Icons
// import SpeakerOn from '../icons/speaker-on.svg'
// import SpeakerOff from '../icons/speaker-off.svg'
import Back from '../icons/back.png'

// STYLES
import './AmiiboList.scss'
import Background from './Series/images/Home/amiibo.png'

const AmiiboList = props => {
    // console.log('From the AmiiboList', props.amiiboList.data)

        console.log('sound from amiiboList', props.music)
    // const muteSound = () => {
    //     if(props.music.muted === true){
    //         props.setMusic({...props.music, muted: false})
    //     } else {
    //         props.setMusic({...props.music, muted: true})
    //         props.playThemeSong()
    //     }
    // }
    

    return(
        <div id='amiiboListContainer'>
            <img src={Background} id='listBackground'/> 
            <div className='searchContainer'>
                <Link to='/search'>
                    <input 
                        id='searchAmiiboBar'
                        name='name'
                        type='text'
                        placeholder="Search Amiibos!"
                        // onClick={() => props.history.push('/search')}
                    />
                </Link>
            <img src={SearchIcon} id='magnifyingGlass'/>
            </div>
            <Link to='/'><img src={Back} id='backButton'/></Link>
            {/* {props.music.muted === true ? 
                <img src={SpeakerOff} id='speakerOff' onClick={muteSound}/>
                : 
                <img src={SpeakerOn} id='speakerOn' onClick={muteSound}/>
            } */}
            <div className='gameSeries'>
                <Link to ='super-mario-bros' id= 'superMarioBros' onClick={() => props.playButtonSound()}>Super Mario Bros.</Link>
                <Link to ='8-bit-mario' id= 'eightBitMario' onClick={() => props.playButtonSound()}>8-Bit Mario</Link>
                <Link to ='super-smash-bros' id= 'superSmashBros' onClick={() => props.playButtonSound()}>Super Smash Bros.</Link>
                <Link to ='yoshi-woolly-world' id= 'yoshiWoollyWorld' onClick={() => props.playButtonSound()}>Yoshi's Woolly World</Link>
                <Link to ='skylanders' id= 'skylanders' onClick={() => props.playButtonSound()}>Skylanders</Link>
                <Link to ='legend-of-zelda' id= 'legendOfZelda' onClick={() => props.playButtonSound()}>Legend of Zelda</Link>
                <Link to ='animal-crossing' id= 'animalCrossing' onClick={() => props.playButtonSound()}>Animal Crossing</Link>
                <Link to ='metroid' id= 'metroid' onClick={() => props.playButtonSound()}>Metroid</Link>
                <Link to ='splatoon' id= 'splatoon' onClick={() => props.playButtonSound()}>Splatoon</Link>
                <Link to ='mario-sports-superstars' id= 'marioSportsSuperstars' onClick={() => props.playButtonSound()}>Mario Sports Superstars</Link>
                <Link to ='pokemon' id= 'pokemon' onClick={() => props.playButtonSound()}>Pokemon</Link>
                <Link to ='kirby' id= 'kirby' onClick={() => props.playButtonSound()}>Kirby</Link>
                <Link to ='BoxBoy' id= 'boxBoy' onClick={() => props.playButtonSound()}>BoxBoy!</Link>
                <Link to ='fire-emblem' id= 'fireEmblem' onClick={() => props.playButtonSound()}>Fire Emblem</Link>
                <Link to ='chibi-robo!' id= 'chibiRobo' onClick={() => props.playButtonSound()}>Chibi-Robo!</Link>
                <Link to ='mega-man' id= 'megaMan' onClick={() => props.playButtonSound()}>Mega Man</Link>
                <Link to ='monster-hunter' id= 'monsterHunter' onClick={() => props.playButtonSound()}>Monster Hunter</Link>
                <Link to ='shovel-knight' id= 'shovelKnight' onClick={() => props.playButtonSound()}>Shovel Knight</Link>
                <Link to ='pikmin' id= 'pikmin' onClick={() => props.playButtonSound()}>Pikmin</Link>
                <Link to ='power-pros' id= 'mblPowerPros' onClick={() => props.playButtonSound()}>MBL Power Pros</Link>
                <Link to ='diablo' id= 'diablo' onClick={() => props.playButtonSound()}>Diablo</Link>
                <Link to ='others' id= 'others' onClick={() => props.playButtonSound()}>Others</Link>
            </div>
            <p id='footer' style={{margin: '0px'}}>© 2019 Jerry Osorio</p>
            <p style={{padding: '0px 0px 10px', margin: '0px'}}>Harvest5 by PeriTune | http://peritune.com
Music promoted by https://www.free-stock-music.com
Attribution 4.0 International (CC BY 4.0)
https://creativecommons.org/licenses/by/4.0/</p>
        </div>
    )
}

export default AmiiboList;