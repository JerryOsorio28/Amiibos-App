import React from'react';

//IMAGES
import MarioLife from './Series/images/Home/mario-life.png'
import Background from './Series/images/Home/amiibo.png'
import Mario from './Series/images/Home/amiibo-mario.png'

//STYLES
import './Home.scss'

const Home = (props) => {

    const clickHandler = e => {
        e.preventDefault();
        props.history.push('/amiibo-list')
    }

    return (
        <div className='homeContainer'>
            <img src={Background} id='background'/>
            <img 
                src={MarioLife} 
                alt=''
                id='life'
            />
            <img 
                src={MarioLife} 
                alt=''
                id='smallerLife'
            />
            <img 
                src={Mario} 
                alt=''
                id='mario'
            />
            {/* <button onClick={clickHandler}>Open Collection</button> */}
        </div>
    )
};

export default Home;