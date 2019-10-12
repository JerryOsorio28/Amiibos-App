import React, { useState } from 'react';
import eightBitMario from './images/8-Bit-Mario/8BitMario.png'
import eightBitMarioCharacter from './images/8-Bit-Mario/8BitMarioCharacter.png'


const EightBitMario = props => {

    const [array, setArray] = useState([])

    // console.log('from EightBitMario', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "8-bit Mario"){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from EightBitMario', gameSeries)

        let object = document.getElementById('pressMe')
        object.style.display = 'none';
    }

    return (
        <>
            <div className='categoryHeader'>
                <img id='marioImg' src ={eightBitMarioCharacter}/>
                <img id='cardTitle' onClick={dataSorter} src={eightBitMario}/>
                <div id='pressMe'>
                    <h1>Press Me!</h1>
                </div>
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

export default EightBitMario;