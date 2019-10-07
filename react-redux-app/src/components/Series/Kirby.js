import React, { useState } from 'react';

const Kirby = props => {

    const [array, setArray] = useState([])

    // console.log('from Kirby', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Kirby"){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from Kirby', gameSeries)

        let object = document.getElementById('pressMe')
        object.style.display = 'none';
    }

    return (
        <>
            <div className='categoryHeader'>
                <img id='cardTitle' onClick={dataSorter} src ='https://cdn.freebiesupply.com/logos/thumbs/2x/kirby-4-logo.png'/>
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

export default Kirby;