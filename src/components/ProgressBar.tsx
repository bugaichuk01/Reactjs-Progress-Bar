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
    const data = items.map((item) => ({
        data: (Math.ceil((item.value / sum) * width / 25)) ,
        ...item,
    }));

    const bars = data.map((item) =>
      [...Array(Math.ceil(item.data))]
          .map((index) => <div className='progress-item' style={{backgroundColor: `${item.color}`, height: `${height}px`}} key={index}/>))

    return (
        <div className='container' style={{maxWidth: `${width}px`}}>
            <div className='progress'>{bars}</div>
            <div className={width >= 500 ? 'info-wrapper' : 'info-wrapper__column'}>
                {items.map((item: Item) => (
                    item.value > 0 &&
                    <span className='info'>
                            <div style={{backgroundColor: `${item.color}`}} className='helper-color'/>
                            <div
                                className='desc'>{item.name} {item.value} ({((item.value * 100) / sum).toFixed(2)}%)</div>
                        </span>
                ))}
            </div>
        </div>
    );
}
