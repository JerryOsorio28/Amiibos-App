import React from'react';

const Home = (props) => {

    const clickHandler = e => {
        e.preventDefault();
        props.history.push('/amiibo-list')
    }

    return (
        <div className='homeContainer'>
            <h1>
            Nintendo is Life
            <img 
                src='https://vignette.wikia.nocookie.net/fantendo/images/3/37/NSMBWii1upMushroom.png/revision/latest?cb=20120809232434' 
                style={{width: '3rem', height: '3rem'}}
                alt=''
                id='life'
            />
            </h1>
            <h4>A collection of amiibos</h4>
            <button onClick={clickHandler}>Open Collection</button>
        </div>
    )
};

export default Home;