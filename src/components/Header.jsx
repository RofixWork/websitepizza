import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='banner'>
            <Navbar/>
            <div className='banner__content d-flex align-items-center h-100'>
                <div className="container">
                    <div className="banner__text">
                        <h3 className='text-capitalize'>pizaa delivery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequuntur natus atque assumenda tempore adipisci, autem corrupti magni perferendis sunt.</p>
                        <a href="#" className='btnWebsiteOne '>Delivery Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
