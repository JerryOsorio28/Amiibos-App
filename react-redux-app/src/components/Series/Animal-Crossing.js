import React, { useState } from 'react';

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
            <div className='categoryHeader'>
                <img id='cardTitle' src ='https://animal-crossing.com/assets/img/home/logo.png' alt='Animal Crossing Title'/>
            </div>
                <div className='buttonsContainter'>
                    <button className='defaultButtons' onClick={cards}>Cards Collection</button>
                    <button className='defaultButtons' onClick={figures}>Figure Collection</button>
                </div>
            <div className='cardContainer'>
                {array.map(amiibo => (
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
}

export default AnimalCrossing;