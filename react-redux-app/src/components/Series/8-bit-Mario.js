import React, { useState, useEffect } from 'react';
import eightBitMario from './images/8-Bit-Mario/8BitMario.png'
import eightBitMarioCharacter from './images/8-Bit-Mario/8BitMarioCharacter.png'
import Loader from 'react-loader-spinner'

//STYLES
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



const EightBitMario = props => {

    const [array, setArray] = useState([])
    
    let gameSeries = [];

    useEffect(() => {
        if(props.amiiboList.data !== undefined){
            props.amiiboList.data.forEach(amiibos => {
                if(amiibos.amiiboSeries === "8-bit Mario"){
                    gameSeries.push(amiibos)
                }
            })
        }
        setArray(gameSeries)
    }, [])

    // 8-bit Mario

    return (
        <>
        <div className='categoryScene'>
            <div className='categoryHeader'>
                <img id='marioImg' src ={eightBitMarioCharacter}/>
                <img id='cardTitle'  src={eightBitMario}/>
            </div>
            <div className='cardContainer'>
                {array.length === 0 ?
                    <Loader
                        type="TailSpin"
                        color="#00AAEB"
                        height={100}
                        width={100}
                        style={{position: 'relative', top: '200px'}}
                    />
                    :
                    array.map(amiibo => (
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

export default EightBitMario;