import React, {useContext, useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import HwfindContext from '../../context/hwfindContext'
import './HW.css'

const HW = ({match}) => {
    const hwfindContext = useContext(HwfindContext);
    
    const {handleUpdateHW, HWK} = hwfindContext;

    useEffect(() => {
        handleUpdateHW(match.params.title);
        // eslint-disable-next-line
    }, [])

    const [newTitle, setNewTitle] = useState([])

    useEffect(() => {
        //console.log(HWK);
        setNewTitle(HWK)
        
    }, [HWK])

    console.log(newTitle);


    return (
        
        <div className='container'>
            {newTitle.map((item,id) => {
                return (
                    <div key={id}>
                    <h1 >
                        {item.title}
                    </h1>
                    <div className="container main-hw-box py-3 px-0">
                        <div className="row d-flex justify-content-center col-12 mx-auto p-0"> 
                            <div className="col-lg-9 col-sm-12 pb-2">
                                <h3 className='py-3'>Lesson</h3>
                                <div className='video col-12' >
                                    <ReactPlayer controls  url={item.video} />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 col-12 mx-auto ">
                                <h3 className='py-3'>Homework</h3>
                                <div className= 'mx-auto'>
                                    {item.worksheets.map((worksheet,id)=> {
                                        return(
                                            <div className='pb-1 col-12 mx-auto' key={id}>
                                                <a href={worksheet.link} target="_blank" rel="noreferrer noopener"> <button className='worksheet-download-btn col-12 mx-auto'>Worksheet {worksheet.id}</button></a>
                                            </div>
                                        )
                                    })}
                                
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                )
            })}
            
            
            
        </div>
        
    )
}

export default HW
