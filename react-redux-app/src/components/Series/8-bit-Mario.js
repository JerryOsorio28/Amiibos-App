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
        <div className='categoryScene' onClick={dataSorter}>
            <div className='categoryHeader'>
                <img id='marioImg' src ={eightBitMarioCharacter}/>
                <img id='cardTitle'  src={eightBitMario}/>
                <div id='pressMe'>
                    <h1 className='clickMe'>Click anywhere on the screen!</h1>
                </div>
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

export default EightBitMario;