import React, { useState } from 'react';
import Background from './Series/images/Home/amiibo.png'
import SearchIcon from '../icons/magnifying-glass.png'
import Loader from 'react-loader-spinner'

// STYLES
import './AmiiboList.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

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
            if(search.name.length === 0){
                return amiibo.name.toLowerCase().indexOf(search.name.toLowerCase()) !== -1;
            } else {
                for(let letter in search.name){
                    if(search.name[letter] === amiibo.character[letter]) {
                        return amiibo.name.toLowerCase().indexOf(search.name.toLowerCase()) !== -1;
                    }
                }
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
                <img src={SearchIcon} id='magnifyingGlass'/>
            </div>
            <div className='cardContainer'>
                {filteredAmiibos === null ? 
                    <Loader
                        type="TailSpin"
                        color="#00AAEB"
                        height={100}
                        width={100}
                        style={{position: 'relative', top: '200px'}}
                    />
                    :
                    filteredAmiibos.map(amiibo => (
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div className='amiiboCard'>
                                    <h1 id='cardTitle'>{amiibo.character}</h1>
                                    <img src={amiibo.image} id='amiiboImage'/>
                                    <p id='amiiboSeries'>Amiibo Series: {amiibo.amiiboSeries}</p>
                                </div>
                                <div class="flip-card-back">
                                    <div id='amiibosDates'>
                                        <p style={{textAlign: 'left', paddingLeft: '10px'}} >Release Dates:</p>
                                        <p>Au: {amiibo.release.au}</p>
                                        <p>Eu: {amiibo.release.eu}</p>
                                        <p>Jp: {amiibo.release.jp}</p>
                                        <p>Na: {amiibo.release.na}</p>
                                    </div>
                                    <p style={{margin: '30px 0px 0px'}}>Game Series: {amiibo.gameSeries}</p>
                                    <p style={{marginTop: '10px 0px 0px'}}>Type: {amiibo.type}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
      
        </>
    )
};

export default Search;