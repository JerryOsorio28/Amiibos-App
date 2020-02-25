import React from'react';

//IMAGES
import MarioLife from './Series/images/Home/mario-life.png'
import Background from './Series/images/Home/amiibo.png'
import Mario from './Series/images/Home/amiibo-mario.png'
import Pikmin from './Series/images/Home/amiibo-pikmin.png'
import Samus from './Series/images/Home/amiibo-samus.png'
import Sonic from './Series/images/Home/amiibo-sonic.png'
import Pokeball from './Series/images/Home/amiibo-pokeball.webp'
import Clouds from './Series/images/Home/clouds.png'
import Link from './Series/images/Home/amiibo-link.png'
import Zelda from './Series/images/Home/amiibo-zelda.png'
import Tails from './Series/images/Home/amiibo-tails.png'
import Ganon from './Series/images/Home/amiibo-ganon.png'

//STYLES
import './Home.scss'

const Home = (props) => {

    const clickHandler = e => {
        e.preventDefault();
        props.history.push('/amiibo-list')
    }

    return (
        <div className='homeContainer'>
            <p id='homeDescription'>A web app that renders beautifully a collection of Amiibos!</p>
            <img src={Background} id='background'/>
            <img src={MarioLife} alt='' id='life'/>
            <img src={MarioLife} alt='' id='smallerLife'/>
            {/* <img src={MarioLife} alt='' id='smallestLife'/> */}
            <img src={Clouds} alt='' id='clouds'/>
            <img src={Mario} alt='' id='mario'/>
            <img src={Pikmin} alt='' id='pikmin'/>
            <img src={Samus} alt='' id='samus'/>
            <img src={Sonic} alt='' id='sonic'/>
            <img src={Tails} alt='' id='tails'/>
            <img src={Pokeball} alt='' id='pokeball'/>
            <img src={Link} alt='' id='link'/>
            <img src={Zelda} alt='' id='zelda'/>
            <img src={Ganon} alt='' id='ganon'/>
            <button onClick={clickHandler}>Get started!</button>
        </div>
    )
};

export default Home;