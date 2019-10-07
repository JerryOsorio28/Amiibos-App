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

        let object = document.getElementById('pressMe')
        object.style.display = 'none';
    }

    return (
        <>
            <div className='categoryHeader'>
                <img id='cardTitle' onClick={dataSorter} src ='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/1200px-Mario_Series_Logo.svg.png'/>
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

export default SuperMarioBros;