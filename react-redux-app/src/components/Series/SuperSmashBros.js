import React, { useState } from 'react';

const SuperSmashBros = props => {

    const [array, setArray] = useState([])

    console.log('from SuperSmashBros', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Super Smash Bros."){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from SuperSmashBros', gameSeries)

        let object = document.getElementById('pressMe')
        object.style.display = 'none';
    }

    return (
        <>
        <div className='categoryScene' onClick={dataSorter}>
            <div className='categoryHeader'>
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

export default SuperSmashBros;