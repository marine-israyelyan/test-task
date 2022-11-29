import { useState } from 'react';
import { Slider } from 'antd';

import './styles.css';

const MySlider = ()=>{
    const [inputValue, setInputValue] = useState(6);

    const calculateValue = ()=>{
        const kbCount = Math.pow(2, inputValue);
        const mb = 1024;
        const gb = mb * mb;
        const tb = gb * mb;

        if( kbCount >= mb && kbCount < gb ){
            return `${Math.round(kbCount/mb)} MB`
        }

        if( kbCount >= gb && kbCount < tb ){
            return `${Math.round(kbCount/gb)} GB`
        }

        if( kbCount >= tb ){
            return `${Math.round(kbCount/tb)} TB`
        }

        return `${kbCount} KB`
    }

    return (
        <div className="slider-container">
            <p>Storage: {calculateValue()}</p>
            <Slider
                min={6}
                max={30}
                onChange={setInputValue}
                value={inputValue??6}
                tooltip={{
                    open: false
                }}
            />
        </div>
    )
}

export default MySlider;
