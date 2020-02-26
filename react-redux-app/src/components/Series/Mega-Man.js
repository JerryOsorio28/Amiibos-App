import React, { useState } from 'react';
import MegaManLogo from './images/Mega-man/mega-man-logo.png'

const MegaMan = props => {

    const [array, setArray] = useState([])

    // console.log('from MegaMan', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Mega Man"){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from MegaMan', gameSeries)

        let object = document.getElementById('pressMe')
        object.style.display = 'none';
    }

    return (
        <>
        <div className='categoryScene' onClick={dataSorter}>
            <div className='categoryHeader'>
                <img id='cardTitle'  src ={MegaManLogo}/>
                <div id='pressMe'>
                    
                    <h1 className='clickMe'>Click anywhere on the screen!</h1>
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

export default MegaMan;