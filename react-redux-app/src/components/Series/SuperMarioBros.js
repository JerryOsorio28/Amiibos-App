import React, { useState } from 'react';

const SuperMarioBros = props => {

    const [array, setArray] = useState([])

    // console.log('from SuperMarioBros', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Super Mario Bros."){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from SuperMarioBros', gameSeries)
    }

    return (
        <>
            <button onClick={dataSorter}>testing</button>
                {array.map(amiibo => (
                    <div className='amiiboCard'>
                        <h2>{amiibo.character}</h2>
                        <img src={amiibo.image} />
                        <h3>Amiibo Series: {amiibo.amiiboSeries}</h3>
                        <p>Game Series: {amiibo.gameSeries}</p>
                        <p>Type: {amiibo.type}</p>
                    </div>
        
                ))}
        </>
    )
}

export default SuperMarioBros;