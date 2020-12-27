import React, {useState, useContext, useEffect} from 'react'
import { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import HwfindContext from '../../context/hwfindContext'

const Home = () => {
    const hwfindContext = useContext(HwfindContext);

    const {searchhw, filteredhw, defaulthws} = hwfindContext;

    const [input, setInput] = useState('');
    const [hws, setHws] = useState(defaulthws)
    
    
    const onChange =(e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    
    useEffect(()=>{
        setHws(filteredhw);
        console.log(hws);
        // eslint-disable-next-line
    },[input])

    useEffect(()=>{
        hwfindContext.handleChange(input);
        hwfindContext.handleUpadteHWlist(input);
        // eslint-disable-next-line
    },[input])

    return (
        <Fragment>
            <section className="container">
                {/* Search Section */}
                
                <form action="">
                    <div className="row col-12 justify-content-between mx-auto">
                        <input className='search-input  mt-2 mx-auto col-12 col-md-9 col-sm-12' value={input} type="text" placeholder='Search your homework, eg: To Be' onChange={onChange}/>
                        <button className='mx-auto mt-2 col-4 col-md-2 col-sm-4 search-button'>Search</button>
                    </div>
                </form>
                {/* Homework Grid */}

                {searchhw === '' ? 
                <div className="row col-12  mt-3 mx-auto  " > 
                        {defaulthws.map((item, id)=>{
                            return (
                                    <div key={id} className="col-12 col-md-3 col-sm-12 homework-result-unit mb-2" >
                                        <Link to={`/HW/${item.title}`} style={{ textDecoration: 'none' } }>
                                            <div className="homework-result-unit-main " >
                                                <h1 className='homework-result-title text-center '>{item.title}</h1>
                                            </div>
                                        </Link>
                                    </div>
                            )
                        })}
                </div> 
                : 
                <div className="row col-12  mt-3 mx-auto">
                        {filteredhw.map((item, id)=>{
                            return (
                                    <div key={id} className=" homework-result-unit col-12 col-md-3 col-sm-12 mb-2">
                                        <Link to={`/HW/${item.title}`} style={{ textDecoration: 'none' } }>
                                            <div className="homework-result-unit-main ">
                                                <h1 className='homework-result-title text-center '>{item.title}</h1>
                                            </div>
                                        </Link>
                                    </div>
                            )
                        })}
                        </div>
                        }

                    
                
                
            </section>
        </Fragment>
    )
}

export default Home


