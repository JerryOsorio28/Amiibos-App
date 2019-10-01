import React from 'react';
import { Link } from 'react-router-dom';

const AmiiboList = () => {

    return(
        <div className='gameSeries'>
            <Link to ='super-mario-bros'>SuperMarioBros</Link>
            <Link to ='8-bit-mario'>8-Bit Mario</Link>
            <Link to ='super-smash-bros'>Super Smash Bros.</Link>
        </div>
    )
}

export default AmiiboList;