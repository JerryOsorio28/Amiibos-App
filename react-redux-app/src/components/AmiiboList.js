import React from 'react';
import { Link } from 'react-router-dom';

const AmiiboList = () => {

    return(
        <div className='gameSeries'>
            <Link to ='super-mario-bros'>SuperMarioBros</Link>
            <Link to ='8-bit-mario'>8-Bit Mario</Link>
            <Link to ='super-smash-bros'>Super Smash Bros.</Link>
            <Link to ='yoshi-woolly-world'>Yoshi's Woolly World</Link>
            <Link to ='skylanders'>Skylanders</Link>
            <Link to ='legend-of-zelda'>Legend of Zelda</Link>
            <Link to ='animal-crossing'>Animal Crossing</Link>
            <Link to ='metroid'>Metroid</Link>
            <Link to ='splatoon'>Splatoon</Link>
            <Link to ='mario-sports-superstars'>Mario Sports Superstars</Link>
            <Link to ='pokemon'>Pokemon</Link>
            <Link to ='kirby'>Kirby</Link>
            <Link to ='BoxBoy'>BoxBoy!</Link>
            <Link to ='fire-emblem'>Fire Emblem</Link>
            <Link to ='chibi-robo!'>Chibi-Robo!</Link>
            <Link to ='mega-man'>Mega Man</Link>
            <Link to ='monster-hunter'>Monster Hunter</Link>
            <Link to ='shovel-knight'>Shovel Knight</Link>
            <Link to ='pikmin'>Pikmin</Link>
            <Link to ='power-pros'>Power Pros</Link>
            <Link to ='diablo'>Diablo</Link>
            <Link to ='others'>Others</Link>
        </div>
    )
}

export default AmiiboList;