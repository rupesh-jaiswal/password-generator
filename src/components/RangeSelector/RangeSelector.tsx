import React, { useEffect, useState } from 'react';
import './RangeSelector.scss';

type RangeSelectorProps = {
    min?: number;
    max: number;
    callback: (value: number) => void;
    defaultValue?: number;
    unit?: string;
    inputProps?:string;
};

const RangeSelector: React.FC<RangeSelectorProps> = ({
    callback,
    min = 0,
    defaultValue = min,
    unit = 'value',
    max,
    ...inputProps
}) => {
    const [value, setValue] = useState(defaultValue); 
    useEffect(() => {
        const timer = setTimeout(() => callback(value), 500);
        
        return (() => {
            clearTimeout(timer);
        });
    }, [value]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rangeValue= +e.target.value;
        setValue(rangeValue)
    }

    return (
        <div className="range">
            <div className="range__value">
                <span>{unit}:</span> {' '}{value}
            </div>
            <div className="range__container">
                <div className="range__min-value">
                    {min}
                </div>
                <input
                    type="range"
                    className="range__input"
                    {...inputProps}
                    min={min}
                    max={max}
                    value={value}
                    onChange={handleOnChange}
                />
                <div className="range__max-value">
                    {max}
                </div>
            </div>
            
        </div>
    );
}

export default RangeSelector;
