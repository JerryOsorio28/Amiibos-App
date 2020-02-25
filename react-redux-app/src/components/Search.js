import React, { useState } from 'react';

const Search = props => {

    const [search, setSearch] = useState({
        name: ''
    })
    console.log('search state', search)


    const updateSearch = (e) => {
        // console.log('from change handler', e.target.value)
        setSearch({...search, [e.target.name]: e.target.value})

    }

    const filteredAmiibos = props.amiiboList.data.filter(
        (amiibo) => {
            if(amiibo){
                return amiibo.name.toLowerCase().indexOf(search.name.toLowerCase()) !== -1;
            } else {
                return <p>Una</p>
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
            </div>
            <div className='cardContainer'>
                {filteredAmiibos.map(amiibo => (
                    <div className='amiiboCard'>
                        <h1>{amiibo.character}</h1>
                        <img src={amiibo.image} />
                        <h4>Amiibo Series: {amiibo.amiiboSeries}</h4>
                        <p>Game Series: {amiibo.gameSeries}</p>
                        <p>Type: {amiibo.type}</p>
                    </div>
                ))}
            </div>
      
        </>
    )
};

export default Search;