import React, { useState } from 'react';
import Background from './Series/images/Home/amiibo.png'

const Search = props => {

    const [search, setSearch] = useState({
        name: '',
        error: 'Amiibo not found'
    })
    console.log('search state', search)


    const updateSearch = (e) => {
        // console.log('from change handler', e.target.value)
        setSearch({...search, [e.target.name]: e.target.value})

    }

    const filteredAmiibos = props.amiiboList.data === undefined ? null : props.amiiboList.data.filter(
        (amiibo) => {
            if(amiibo){
                return amiibo.name.toLowerCase().indexOf(search.name.toLowerCase()) !== -1;
            }
        }
        );

    return (
        <>
            <div className='searchContainer'>
                <input 
                    id='searchAmiiboBar'
                    name='name'
                    onChange={updateSearch} 
                    type='text'
                    value={search.name}
                    placeholder='Search Amiibo'
                />
                <img src={Background} id='amiiboListBackground'/>
            </div>
            <div className='cardContainer'>
                {filteredAmiibos === null ? null : filteredAmiibos.map(amiibo => (
                    amiibo.character.toLowerCase() === search.name.toLowerCase() ?
                    <div className='amiiboCard'>
                        <h1>{amiibo.character}</h1>
                        <img src={amiibo.image} />
                        <h4>Amiibo Series: {amiibo.amiiboSeries}</h4>
                        <p>Game Series: {amiibo.gameSeries}</p>
                        <p>Type: {amiibo.type}</p>
                    </div>
                : null
                ))
                }
            </div>
      
        </>
    )
};

export default Search;