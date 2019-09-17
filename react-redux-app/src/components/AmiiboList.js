import React, {useState, useEffect} from 'react';
import axios from 'axios';

//importing Amiibo component
import Amiibo from './Amiibo';

//allows to add a spinner while retrieving data from API
import Loader from 'react-loader-spinner';


const AmiiboList = () => {

    const [amiiboList, setAmiiboList] = useState([]);

    console.log(amiiboList)

    useEffect(() => {
        
        axios.get('https://www.amiiboapi.com/api/amiibo/')
            .then(res => {
                // console.log(res.data.amiibo)
                const data = res.data.amiibo
                setAmiiboList({...amiiboList, data})
            })
            .catch(err => {
                console.log(err.response)
            })
    },[])

    
    return(
        <>
        <div className='superMarioBros'>
            <button>
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
            </div>
        </div>
        </>
    )
}

export default AmiiboList;