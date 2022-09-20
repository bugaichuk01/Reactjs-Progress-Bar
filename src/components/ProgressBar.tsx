import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
    items: {
        color: string;
        value: number;
        name: string
    }[],
    height: number;
    width: number;
}

interface Item {
    color: string;
    value: number;
    name: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({items, height, width}) => {

    const sum = items.reduce((n, {value}) => n + value, 0);

    return (
        <div>
            <div style={{maxWidth: `${width}px`}} className='container'>
                <div className='progress-wrapper'>
                    {items.map((item: Item) => (
                        <div style={{width: `${Math.ceil((item.value * 100) / sum)}%`}}>
                            {item.value > 0 && (
                                <div>
                                    <div className='progress'>
                                        {[...Array(Math.ceil((width / 25) / sum * item.value))].map((index) => (
                                            <div className='progress-item' style={{backgroundColor: `${item.color}`, height: `${height}px`}}
                                                 key={index}/>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='info-wrapper'>
                    {items.map((item: Item) => (
                        item.value > 0 &&
                        <span className='info'>
                            <div style={{backgroundColor: `${item.color}`}} className='helper-color'/>
                            <div className='desc'>{item.name} {item.value} ({((item.value * 100) / sum).toFixed(2)}%)</div>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
