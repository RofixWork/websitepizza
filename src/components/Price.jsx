import React from 'react'

const Price = () => {
    return (
        <>
        <div className='price padding-t text-center'>
            <div className="container">
                <div className="row gy-3">
                    <div className="col-md-4 ">
                        <div className='price__img'>
                            <img src="/img/pizza1.png"  className='img-fluid' alt=""/>
                        </div>
                        <div className='price__content'>
                            <h3 className='price__title'>Pizza Margeritta</h3>
                            <p className='price__desc'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit duin.</p>
                            <h4 className='price__pricepizza'>$39</h4>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="col-md-4 ">
                        <div className='price__img'>
                            <img src="/img/pizza2.png"  className='img-fluid' alt=""/>
                        </div>
                        <div className='price__content'>
                            <h3 className='price__title'>Beer Pizza Crust</h3>
                            <p className='price__desc'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit duin.</p>
                            <h4 className='price__pricepizza'>$58</h4>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="col-md-4 ">
                        <div className='price__img'>
                            <img src="/img/pizza3.png" className='img-fluid' alt="" />
                        </div>
                        <div className='price__content'>
                            <h3 className='price__title'>Pizza Biscuit Bake</h3>
                            <p className='price__desc'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit duin.</p>
                            <h4 className='price__pricepizza'>$49</h4>
                        </div>
                    </div>
                </div>
                {/* row 2  */}
                <div className="row gy-3">
                    <div className="col-md-4 ">
                        <div className='price__img'>
                            <img src="/img/pizza4.png" className='img-fluid' alt="" />
                        </div>
                        <div className='price__content'>
                            <h3 className='price__title'>Pizza Prosciutto</h3>
                            <p className='price__desc'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit duin.</p>
                            <h4 className='price__pricepizza'>$59</h4>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="col-md-4 ">
                        <div className='price__img'>
                            <img src="/img/pizza5.png" className='img-fluid' alt="" />
                        </div>
                        <div className='price__content'>
                            <h3 className='price__title'>Crazy Crust Pizza</h3>
                            <p className='price__desc'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit duin.</p>
                            <h4 className='price__pricepizza'>$60</h4>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="col-md-4 ">
                        <div className='price__img'>
                            <img src="/img/pizza6.png" className='img-fluid' alt="" />
                        </div>
                        <div className='price__content'>
                            <h3 className='price__title'>Low Carb Pizza</h3>
                            <p className='price__desc'>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit duin.</p>
                            <h4 className='price__pricepizza'>$35</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center p-2 text-white font-weight-bold" style={{backgroundColor:'#000'}}>
            © 2020 Copyright - Rofix Stret Workout
        </div>
        </>
    )
}

export default Price
