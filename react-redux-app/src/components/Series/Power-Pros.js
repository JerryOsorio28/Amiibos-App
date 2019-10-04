import React, { useState } from 'react';

const PowerPros = props => {

    const [array, setArray] = useState([])

    // console.log('from PowerPros', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Power Pros"){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from PowerPros', gameSeries)
    }

    return (
        <>
            <div className='categoryHeader'>
                <img id='cardTitle' onClick={dataSorter} src ='https://vignette.wikia.nocookie.net/logopedia/images/4/40/7817d7f7-0bce-4bdf-b914-4eb40dc19f36.png/revision/latest?cb=20181014024307'/>
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

export default PowerPros;