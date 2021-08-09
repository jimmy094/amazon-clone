import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

        <div className="home__row">
            <Product 
            title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}/>
            <Product 
            id='1'
            title="All-new Echo Show 8 (2nd Gen, 2021 release) | HD smart display with Alexa and 13 MP camera | Charcoal"
            price={129.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61g3WFAH0vS._AC_SX425_.jpg" />
        </div>
        <div className="home__row">
            <Product 
            id='2'
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Silver"
            price={1099.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71bwIJGoOhS._AC_SX342_.jpg"/>
            <Product 
            id='3'
            title="Crocs Men's and Women's Classic Clog"
            price={49.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/618UAoZPlNL._AC_UY395_.jpg" /> 
            <Product 
            id='4'
            title="Diaper Wipes, Unscented, Hypoallergenic, 10 Flip-Top Packs (560 Wipes Total)"
            price={65.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71wuFhO-1-L._AC_SX425_.jpg"  />
            
        </div>
        <div className="home__row">
            <Product 
            id='5'
            title="Amazon Basics Dog and Puppy Pads, Leak-proof 5-Layer Pee Pads with Quick-dry Surface for Potty Training, Regular or Heavy Duty Absorbency"
            price={22.32}
            rating={3}
            image="https://m.media-amazon.com/images/I/81vkislowDL._AC_SX425_.jpg" />
            <Product 
            id='6'
            title="14 Sizes Crochet Hooks Set,2mm(B)-10mm(N) Ergonomic Crochet Hooks with Case for Arthritic Hands,Extra Long Crochet Needles"
            price={15.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/613NGjZe59L._AC_SX679_.jpg"
            />
        </div>

        </div>

    </div>


 );
}


export default Home;