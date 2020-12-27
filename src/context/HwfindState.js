import React, {useReducer} from 'react';
import HwfindContext from './hwfindContext'
import HwfindReducer from './hwfindReducer'
import Data from '../data/data'
import {
    CHANGE_INPUT,
    UPDATE_HW,
    UPDATE_HWLIST,
    SET_LOADING,
} from './types'

const HwfindState = props => {

    const initialState = {
        defaulthws: Data.map(item =>{
                        return({title:item.title, id:item.id, video:item.video, worksheets:item.worksheets})
                        }),
        filteredhw: [] ,
        HWK: [],
        searchhw:'',
        currentlist: [],
        loading: false,
    };


    const [state, dispatch] = useReducer(HwfindReducer, initialState);
    
    //Change Input
    const handleChange = input => {
        setLoading();

        let newsearch = input
        dispatch({
            type: CHANGE_INPUT,
            payload: newsearch
            });
        
    }

    //Update HW list
    const handleUpadteHWlist = (input) => {
        if (input.length >0) {
            const filtered = initialState.defaulthws.filter((i)=>{
                return i.title.match(input)
                })

                dispatch({
                    type: UPDATE_HWLIST,
                    payload: filtered
                })
        }        
    }

    //Update HW state
    const handleUpdateHW = async (title) =>{
        const homework = initialState.defaulthws.filter((i) => {
            return i.title.match(title);
        })
        dispatch({
            type: UPDATE_HW,
            payload: homework
        })
    };

    const setLoading = () => dispatch({ type:SET_LOADING })


    return (
        <HwfindContext.Provider
            value={{
                defaulthws: state.defaulthws,
                filteredhw: state.filteredhw,
                searchhw: state.searchhw,
                HWK: state.HWK,
                handleChange,
                handleUpadteHWlist,
                handleUpdateHW
                
            }}
        >
            {props.children}
        </HwfindContext.Provider>
    )
}

export default HwfindState;
