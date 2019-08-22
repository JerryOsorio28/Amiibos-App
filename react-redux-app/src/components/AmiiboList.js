import React from 'react';

//Only the best hook to grab state
import { useSelector, useDispatch } from 'react-redux'

//importing Amiibo component
import Amiibo from './Amiibo';

//importing action creators
import { getData } from '../actions/';

//allows to add a spinner while retrieving data from API
import Loader from 'react-loader-spinner';


const AmiiboList = () => {

    const amiiboList = useSelector(state => state.amiiboList)
    console.log(amiiboList)

    const dispatch = useDispatch()

    
    return(
        <>
        <div className='superMarioBros'>
            <button onClick={() => dispatch(getData())}>
                {amiiboList.isLoading ? (
                <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={15}
                width={100}
                /> 
                ) : ("Get Amiibos")}
            </button>
            <div className='amiiboList'>
            {amiiboList.map(amiibo => <Amiibo amiibo={amiibo} />)}
            </div>
        </div>
        </>
    )
}

export default AmiiboList;