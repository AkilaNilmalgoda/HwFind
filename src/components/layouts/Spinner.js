import React, { Fragment } from 'react'
import './Spinner.css'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <div>
            <Fragment>
                <div className="loading-body  d-flex mx-auto">
                <img src={spinner} className='d-flex mx-auto' alt="Loading..." style={{width: 'auto', margin:'auto', display:'block'}}/>
                </div>
                
                {/* <div>
                    <div className='feed'><h1>Feed</h1></div>
                    <div className='me'><h1>Me</h1></div>
                    <div className='english'><h1>English</h1></div>
                </div>
                <div className='site'>
                    <h3>feedmeenglish.com</h3>
                </div> */}
            </Fragment>
        </div>
    )
}

export default Spinner;