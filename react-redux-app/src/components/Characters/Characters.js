import React from 'react';

//Only the best hook to grab state
import { useSelector } from 'react-redux'

//importing Amiibo component
import Amiibo from '../Amiibo';

const Characters = (amiiboList) => {

    // const mario = useSelector(state => state.amiiboList)
    console.log('from Characters', amiiboList)

 
        


    return (
        <div className='Characters'>
        {amiiboList.amiiboList.map(amiibo => {
                if (amiibo.character === 'Mario'){
                    return <Amiibo key={amiibo.tail} amiibo={amiibo} />
                }})}
        </div>
    )
};

export default Characters;