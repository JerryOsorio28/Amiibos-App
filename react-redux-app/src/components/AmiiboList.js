import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import a from '../icons/magnifying-glass.png'

const AmiiboList = props => {
    // console.log('From the AmiiboList', props.amiiboList.data)

    const [search, setSearch] = useState({
        name: ''
    })

    console.log('search state', search)

    
    const updateSearch = (e) => {
        // console.log('from change handler', e.target.value)
        setSearch({...search, [e.target.name]: e.target.value})

        let object = document.getElementsByClassName('gameSeries')
            object.style.display = 'none';
    }
        
    const removeCategories = () => {
        let object = document.getElementsByClassName('gameSeries')
            object[0].style.display = 'none';
    }


    // let filteredAmiibos = props.amiiboList.data.filter(
    //     (amiibo) => {
    //         return amiibo.name.indexOf(search.name) !== -1;
    //     }
    //     );

    return(
        <> 
            <div className='searchContainer'>
                <input 
                    id='searchAmiiboBar'
                    name='name'
                    onChange={updateSearch} 
                    type='text'
                    value={search.name}
                    onClick={removeCategories}
                />
                <img id='searchIcon' src='https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png'/>
            </div>
                {/* {filteredAmiibos.map(amiibo => {
                    return  <div>
                                <div className='amiiboCard'>
                                    <h1>{amiibo.character}</h1>
                                    <img src={amiibo.image} />
                                    <h4>Amiibo Series: {amiibo.amiiboSeries}</h4>
                                    <p>Game Series: {amiibo.gameSeries}</p>
                                    <p>Type: {amiibo.type}</p>
                                </div>
                            </div> 
                })} */}
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