import React, { useState, useEffect } from 'react';
import ACLogo from './images/Animal-Crossing/AC-logo.png'
import { Link } from 'react-router-dom';
import Back from '../../icons/back.png'

//STYLES
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const AnimalCrossing = props => {

    let [array, setArray] = useState([])

    console.log('from AnimalCrossing', array)

    const cards = () => {
        let cards = [];
        if (cards.length === 0){
            if (props.amiiboList.data !== undefined){
                props.amiiboList.data.forEach(amiibos => {
                    if(amiibos.amiiboSeries === 'Animal Crossing' && amiibos.type === 'Card'){
                        cards.push(amiibos)
                    } 
                })
            }
        }
        // console.log('from AnimalCrossing', cards)
        setArray(cards)

    }

    const figures = () => {
        let figures = [];
        if (figures.length === 0){
            if(props.amiiboList.data !== undefined){
                props.amiiboList.data.forEach(amiibos => {
                    if(amiibos.amiiboSeries === 'Animal Crossing' && amiibos.type === 'Figure'){
                        figures.push(amiibos)
                    } 
                })
            }
        }
            // console.log('from AnimalCrossing', figures)
            setArray(figures)
    }

    return (
        <>
        <div className='categoryScene'>
            <div className='categoryHeader'>
                <img id='cardTitle' src ={ACLogo} alt='Animal Crossing Title'/>
            </div>
            <Link to='/amiibo-list'><img src={Back} id='backButton'/></Link>
                <div className='buttonsContainter'>
                    <button className='defaultButtons' onClick={cards}>Cards Collection</button>
                    <button className='defaultButtons' onClick={figures}>Figure Collection</button>
                </div>
            <div className='cardContainer'>
                {array.map(amiibo => (
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
                                    <p>Au: {amiibo.release.au === null ? 'Not found' : amiibo.release.au}</p>
                                    <p>Eu: {amiibo.release.eu === null ? 'Not found' : amiibo.release.eu}</p>
                                    <p>Jp: {amiibo.release.jp === null ? 'Not found' : amiibo.release.jp}</p>
                                    <p>Na: {amiibo.release.na === null ? 'Not found' : amiibo.release.na}</p>
                                </div>
                                <p style={{margin: '30px 0px 0px'}}>Game Series: {amiibo.gameSeries}</p>
                                <p style={{marginTop: '10px 0px 0px'}}>Type: {amiibo.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default AnimalCrossing;