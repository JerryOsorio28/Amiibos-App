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
        </div>
    )
}

export default AmiiboList;