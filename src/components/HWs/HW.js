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
                    <div className="container main-hw-box py-3">
                        <div className="row col-12">
                            <div className="col-9">
                                <h3 className='pb-3'>Lesson</h3>
                                <div className='video' >
                                    <ReactPlayer controls  url={item.video} />
                                </div>
                            </div>
                            <div className="col-3">
                                <h3 className='pb-3'>Homework</h3>
                                <div>
                                    {item.worksheets.map((worksheet,id)=> {
                                        return(
                                            <div className='pb-1' key={id}>
                                                <a href={worksheet.link} target="_blank" rel="noreferrer noopener"> <button className='worksheet-download-btn'>Worksheet {worksheet.id}</button></a>
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
