import React from 'react'
import IMG from './404Error.png' 

function Page404() {
    return (
        <div className='container-404'>
            <div className='header-404'> 
                <h1>OOPS! <span></span> 404 ERROR</h1>
                <img className='img-404' src={IMG} alt='404 Error' height='400' width='600' />
            </div>
            <div className='tag-404'>
                <h2>The page you requested was not found!</h2>
            </div>
        </div>
    )
}

export default Page404
