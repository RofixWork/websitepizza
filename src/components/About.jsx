import React from 'react'

const About = () => {
    return (
        <div className='about padding-t'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className='text-capitalize about__title'>about us</h3>
                        <h2 className='text-uppercase about__content'>welcome to maestro pizzini</h2>
                        <p className='about__desc'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, asperiores. Nostrum, ab debitis. Itaque facilis maiores aperiam ut sit aliquam nam consequatur vero exercitationem? In?
                        </p>
                        <button className='btnWebsiteOne'>Read More</button>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img src="/img/pizza.jpg" alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
