import React, { useState } from 'react';

const LegendOfZelda = props => {

    const [array, setArray] = useState([])

    // console.log('from LegendOfZelda', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Legend Of Zelda"){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from LegendOfZelda', gameSeries)

        let object = document.getElementById('pressMe')
        object.style.display = 'none';
    }

    return (
        <>
            <div className='categoryHeader'>
                <img id='cardTitle' onClick={dataSorter} src ='https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/d/d2/ZELDA_logo_3D_gen.png/400px-ZELDA_logo_3D_gen.png?version=f47c1f4b6220c30d6d6603aceb58d152'/>
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

export default LegendOfZelda;