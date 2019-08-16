import React from 'react';
import Loader from 'react-loader-spinner';
import Amiibo from './Amiibo';

//Only the best hook to grab state
import { useSelector, useDispatch } from 'react-redux'

import { getData } from '../actions';


const AmiiboList = () => {

    const amiiboList = useSelector(state => state.amiiboList)
    console.log(amiiboList)
    const dispatch = useDispatch()
    
    return(
        <>
            <h1>NINTENDO IS LIFE</h1>
            <p>A collection of Amiibos</p>
            <button onClick={() => dispatch(getData())}>
                {amiiboList.isLoading ? (
                <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={15}
                width={100}
                /> 
                ) : ('Open Awesomeness')}
             </button>
             <div>
            {amiiboList.map(amiibo => <Amiibo amiibo={amiibo} />)}
             </div>
        </>

    )
}

export default AmiiboList;