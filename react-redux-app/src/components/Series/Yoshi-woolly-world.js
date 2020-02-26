import React, { useState } from 'react';
import YoshiLogo from './images/Yoshi-wolly-world/yoshi-logo.png'

const YoshiWoollyWorld = props => {

    const [array, setArray] = useState([])

    // console.log('from YoshiWoollyWorld', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Yoshi's Woolly World"){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from YoshiWoollyWorld', gameSeries)

        let object = document.getElementById('pressMe')
        object.style.display = 'none';
    }

    return (
        <>
        <div className='categoryScene' onClick={dataSorter}>
            <div className='categoryHeader'>
                <img id='cardTitle'  src ={YoshiLogo}/>
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
        </div>
        </>
    )
}

export default YoshiWoollyWorld;