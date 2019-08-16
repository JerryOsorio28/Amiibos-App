import React from 'react';

const Amiibo = (amiibo) => {


    console.log('from Amiibo', amiibo)

    return (
        <div style={{padding: '10px'}}>
            <img 
            src = {amiibo.amiibo.image} 
            style= {{ width: '200px', height: '300px'}}
            />
            <h3>{amiibo.amiibo.name}</h3>
        </div>
    )
};

export default Amiibo;