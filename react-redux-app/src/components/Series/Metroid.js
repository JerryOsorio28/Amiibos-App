import React, { useState } from 'react';

const Metroid = props => {

    const [array, setArray] = useState([])

    // console.log('from Metroid', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Metroid"){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from Metroid', gameSeries)
    }

    return (
        <>
            <div className='categoryHeader'>
                <img id='cardTitle' onClick={dataSorter} src ='https://i.pinimg.com/originals/5d/8e/d7/5d8ed76a74d8df428bf2f152f223032d.png'/>
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

export default Metroid;