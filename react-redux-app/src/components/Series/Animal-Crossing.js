import React, { useState } from 'react';
import ACLogo from './images/Animal-Crossing/AC-logo.png'

const AnimalCrossing = props => {

    let [array, setArray] = useState([])

    console.log('from AnimalCrossing', array)

    const cards = () => {
        let cards = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === 'Animal Crossing' && amiibos.type === 'Card'){
                array = [];
                cards.push(amiibos)
            } 
        })
        setArray(cards)

        console.log('from AnimalCrossing', cards)
    }

    const figures = () => {
        let figures = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === 'Animal Crossing' && amiibos.type === 'Figure'){
                array = [];
                figures.push(amiibos)
                
            } 
        })
        setArray(figures)
        console.log('from AnimalCrossing', figures)
    }

    return (
        <>
        <div className='categoryScene'>
            <div className='categoryHeader'>
                <img id='cardTitle' src ={ACLogo} alt='Animal Crossing Title'/>
            </div>
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
                ))}
            </div>
        </div>
        </>
    )
}

export default AnimalCrossing;