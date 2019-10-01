import React, { useState } from 'react';

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
    }

    return (
        <>
            <div className='categoryHeader'>
                <img id='marioImg' src ='https://i.imgur.com/hxKTM4r.png'/>
                <img id='cardTitle' onClick={dataSorter} src ='https://static1.textcraft.net/data1/a/f/af8ee83e74bb3d6a993d4624aba1a49dc2665f2cda39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255bfef95601890afd8070901fafa4fb2f9ed6191a27467f9daf311.png'/>
                <div id='pressMe'>
                    <img src='https://pngriver.com/wp-content/uploads/2018/04/Download-Left-Arrow-PNG-HD.png' alt=''/>
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