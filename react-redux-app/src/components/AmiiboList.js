import React from 'react';
import { Link } from 'react-router-dom';

const AmiiboList = props => {
    
    console.log(props.amiiboList)
    
    return(
        <>
        <Link to ='super-mario-bros'>SuperMarioBros</Link>
        </>
    )
}

export default AmiiboList;